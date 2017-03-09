import * as React from 'react'
import styled from 'styled-components'


interface SendButtonInterface {
  className?: string
  primary?: any
  text: string
}

const Button: React.StatelessComponent<SendButtonInterface> = (props) => (
  <button className={props.className}>
    {props.text}
  </button>
)

const SendButton = styled(Button)`
  border: none;
  border-radius: 4px;
  box-shadow: none;
  color: #fff;
  font-size: 48px;
  padding: 4px 16px;

  background-color: ${(props) => (props.primary && 'palevioletred')}
`


export default SendButton
