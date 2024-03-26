const person = {
  name: 'John',
  age: 30,
  nationality: 'American',
}

const personProxy = new Proxy(person, {
  get(obj, prop) {
    console.log(`get property obj: ${Reflect.get(obj, prop)}, prop: ${prop}`)
  },
  set(obj, prop, value) {
    console.log(`set property obj: ${obj[prop]}, prop: ${prop}, value: ${value}`)
    Reflect.set(obj, prop, value)
  },
})

personProxy.name

personProxy.age
personProxy.age = 20
personProxy.age
