/// <reference path="customTypings.d.ts"/>

import * as React from 'react'
import { render } from 'react-dom'
// import Router5 from 'router5'

import SendButton from './Button'

render(
  <div className="container">
    <SendButton primary text="Hello World" />
  </div>,
  document.querySelector('#app')
)

