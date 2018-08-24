// @flow

import React from 'react'

type Props = {
  label: string,
  handleClick: Function,
}

// eslint-disable-next-line react/button-has-type
const Button = ({ label, handleClick }: Props) =>
// eslint-disable-next-line max-len
// eslint-disable-next-line implicit-arrow-linebreak,react/button-has-type,jsx-a11y/no-redundant-roles
  <button
    onClick={handleClick}
    className="btn btn-primary"
    type="button"
    role="button"
    // eslint-disable-next-line react/jsx-one-expression-per-line,react/jsx-closing-tag-location
  >{label}</button>

export default Button
