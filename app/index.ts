import { log } from './lib/log'

class Animal {
  name: string

  constructor(name = 'Greedo') {
    this.name = name;
  }

  move() {
    log('I am roaming the earth on my little feet...')
  }

  greet() {
    log(`Hello my name is ${this.name}`)
  }
}

class Pony extends Animal {
  move() {
    log('I am roaming the earth on my little hooves')
  }
}

class Dog extends Animal {
  move() {
    log('I am roaming the earth on my little paws')
  }
}

const rootElement = document.querySelector('#app')

if (rootElement) {
  rootElement.insertAdjacentHTML('beforeend', '<div class="container log"></div>')
}

const hank = new Pony('Hank')
const eddy = new Dog('Eddy')

hank.greet()
eddy.greet()

hank.move()
eddy.move()
