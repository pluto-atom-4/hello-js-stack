// @flow

import React from 'react'
import Helmet from 'react-helmet'

import HelloAsyncButton from '../../container/hello-async-button'
import MessageAync from '../../container/message-async'

const title = 'Async Hello Page'

const HelloAsyncPage = () =>
// eslint-disable-next-line implicit-arrow-linebreak
  <div>
    <Helmet
      title={title}
      meta={[
        { name: 'description', content: 'A page to say hello asynchronously' },
        { property: 'og:title', content: title },
      ]}
    />
    <h1>{title}</h1>
    <MessageAync />
    <HelloAsyncButton />
  </div>

export default HelloAsyncPage
