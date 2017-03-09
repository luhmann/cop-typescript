import * as React from 'react'
import { render } from 'react-dom'

import Button from './Button'

render(
  <div className="container">
    <Button>Hello World!</Button>
  </div>,
  document.querySelector('#app')
)

