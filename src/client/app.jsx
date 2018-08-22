// @flow

import React from 'react'
import HelloButton from './container/hello-button'
import HelloAsyncButton from './container/hello-async-button'
import Message from './container/message'
import MessageAsyc from './container/message-async'
import { APP_NAME } from '../shared/config'

const App = () =>
// eslint-disable-next-line implicit-arrow-linebreak
  <div>
    <h1>{APP_NAME}</h1>
    <Message />
    <HelloButton />
    <MessageAsyc />
    <HelloAsyncButton />
  </div>

export default App
