class Dog {
  constructor(name) {
    this.name = name
  }
}

const dugFunctionality = {
  bark: () => console.log('Woof!'),
  wagTail: () => console.log('Wagging my tail!'),
  play: () => console.log('Playing!'),
}

Object.assign(Dog.prototype, dugFunctionality)

const dog = new Dog('Buddy')

dog.bark() // Woof!
