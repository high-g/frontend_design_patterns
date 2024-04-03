import { ToastContainer, toast } from 'react-toastify'
import { Button, Switch, FormControlLabel } from '@mui/material'

class Observable {
  constructor() {
    this.observers = []
  }

  subscribe(func) {
    this.observers.push(func)
  }

  unsubscribe(func) {
    this.observers = this.observers.filter((observer) => observer !== func)
  }

  notify(data) {
    this.observers.forEach((observer) => observer(data))
  }
}

const observable = new Observable()

const logger = (data) => {
  console.log(`${Date.now()} ${data}`)
}

const toastify = (data) => {
  toast(data, {
    position: toast.POSITION.BOTTOM_RIGHT,
    closeButton: false,
    autoclose: 2000,
  })
}

observable.subscribe(logger)
observable.subscribe(toastify)

const handleClick = () => {
  observable.notify('User clicked button!')
}

const handleToggle = () => {
  observable.notify('User toggled switch!')
}

export default function App() {
  return (
    <div className="App">
      <Button onClick={handleClick}>Click</Button>
      <FormControlLabel control={<Switch name="" onChange={handleToggle} />} label="Toggle me!" />
      <ToastContainer />
    </div>
  )
}
