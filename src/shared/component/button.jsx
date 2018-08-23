// @flow

import React from 'react'

type Props = {
  label: string,
  handleClick: Function,
}

// eslint-disable-next-line react/button-has-type
const Button = ({ label, handleClick }: Props) =>
// eslint-disable-next-line implicit-arrow-linebreak,react/button-has-type
  <button onClick={handleClick}>{label}</button>

export default Button
