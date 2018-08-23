// @flow

import React from 'react'

import HelloAsyncButton from '../../container/hello-async-button'
import MessageAync from '../../container/message-async'


const HelloAsyncPage = () =>
// eslint-disable-next-line implicit-arrow-linebreak
  <div>
    <MessageAync />
    <HelloAsyncButton />
  </div>

export default HelloAsyncPage
