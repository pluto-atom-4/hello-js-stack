// @flow

import React from 'react'
import Helmet from 'react-helmet'
import { APP_NAME } from '../../config'

const HomePage = () =>
  // eslint-disable-next-line implicit-arrow-linebreak
  <div>
    <Helmet
      meta={[
        { name: 'description', content: 'Hello App is an app to say hello' },
        { property: 'og:title', content: APP_NAME },
      ]}
    />
    <h1>{APP_NAME}</h1>
  </div>

export default HomePage
