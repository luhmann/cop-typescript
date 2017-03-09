import { log } from './lib/log'

document.querySelector('#app').insertAdjacentHTML('beforeend', '<div class="container log"></div>')

class Animal {
  // constructor
  constructor(name = 'Greedo') {
    this.name = name;
  }

  move() {
    log('PROTOTYPE: I am roaming the earth on my little feet...')
  }

  greet() {
    log(`PROTOTYPE: Hello my name is ${this.name.toUpperCase()}`)
  }

  static id() {
    log('STATIC: I am a static wild and dangerous animal', 'error')
  }

}

// two syntaxes
const Pony = class extends Animal {
  move() {
    log('I am roaming the earth on my little hooves', 'success')
  }
}

class Dog extends Animal {
  move() {
    log('I am roaming the earth on my little paws', 'success')
  }

  static id() {
    log('STATIC: I am a domesticated animal', 'error')
  }
}

const hank = new Pony('Hank')
const eddy = new Dog('Eddy')

// prototype methods
hank.greet()
eddy.greet()

// overwritten methods
hank.move()
eddy.move()

// static functions
Animal.id()
Dog.id()
