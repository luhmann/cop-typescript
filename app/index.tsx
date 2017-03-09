/// <reference path="customTypings.d.ts"/>

import * as React from 'react'
import { render } from 'react-dom'
import Router5 from 'router5'

import Button from './Button'

render(
  <Button>Hello World!</Button> ,
  document.querySelector('#app')
)

