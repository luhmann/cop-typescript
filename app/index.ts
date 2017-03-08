import { log } from './lib/log'

const appContainer = document.querySelector('#app')
appContainer && appContainer.insertAdjacentHTML('beforeend', '<div class="container log"></div>')

interface Named {
  name: string
}

interface CanMove {
  move(): void
}

interface Body {
  legs: number
  head: number
  hasHair: boolean
}

abstract class Animal {
  readonly name: string
  private secret = 'I love cookies'

  constructor(name: string = 'Greedo') {
    this.name = name;
  }

  move() {
    log('PROTOTYPE: I am roaming the earth on my little feet...')
  }

  greet() {
    log(`PROTOTYPE: Hello my name is ${this.name}`)
  }

  tell() {
    log(this.secret)
  }

  static id() {
    log('STATIC: I am a static wild and dangerous animal', 'error')
  }
}

// two syntaxes
class Pony extends Animal {
  move() {
    log(`${this.name.toUpperCase()}: I am roaming the earth on my little hooves`, 'success')
  }
}

class Dog extends Animal {
  move() {
    log(`${this.name.toUpperCase()}: I am roaming the earth on my little paws`, 'success')
  }

  static id() {
    log('STATIC: I am a domesticated animal', 'error')
  }
}

class Person implements Named, CanMove {
  name: string
  vices: string[] = []
  body: Body

  move() {
    log(`I can walk`)
  }
}

new Pony('hank')
new Dog('Eddy')

let carrie: Named
carrie = new Pony('carrie')

let harry = new Person()
harry.vices.push('gluttony')
//harry.vices.push(1)
harry.body = {
  legs: 2,
  head: 1,
  hasHair: false
}

let insect: Named & CanMove
insect = {
  name: 'maya',
  move: () => {
    log('Maya is flying')
  }
}

let mammal: Named | CanMove
mammal = {
  name: 'Benjamin'
}


const getAnimal: Promise<Named & CanMove> = new Promise((resolve) => {
  setTimeout(() => {
    return insect
  }, 500)
})

getAnimal.then((maya) => {
  console.log(maya.name);
})
