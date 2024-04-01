class Dog {
  constructor(name) {
    this.name = name
  }

  bark() {
    console.log('woof woof')
  }
}

const dog1 = new Dog('Rex1')
const dog2 = new Dog('Rex2')
const dog3 = new Dog('Rex3')

Dog.prototype.play = () => console.log('playyyyy')

class SuperDog extends Dog {
  constructor(name) {
    super(name)
  }

  fly() {
    console.log('flyyyyy')
  }
}

const superdog1 = new SuperDog('SuperRex1')
//superdog1.bark()

const dog = {
  bark() {
    return 'woof woof'
  },
}

const pet1 = Object.create(dog)
const pet2 = dog
dog.petName = 'Rex'
pet1.petName = 'aaaa'

dog.swim = () => 'swimmm'

console.log('name', dog.petName, pet1.petName, pet2.petName)

console.log(pet1.bark())
console.log(pet1.swim())
