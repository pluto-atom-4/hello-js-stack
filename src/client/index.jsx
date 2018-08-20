// @flow

import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'

import App from './app'
import helloReducer from './reducer/hello'
import { APP_CONTAINER_SELECTOR } from '../shared/config'
import { isProd } from '../shared/utils'

const store = createStore(combineReducers({ hello: helloReducer }),
  // eslint-disable-next-line no-underscore-dangle,max-len
  isProd ? undefined : window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const rootEl = document.querySelector(APP_CONTAINER_SELECTOR)

// eslint-disable-next-line no-console
console.log(rootEl)

const wrapApp = (AppComponent, reduxStore) =>
// eslint-disable-next-line implicit-arrow-linebreak
  <Provider store={reduxStore}>
    <AppContainer>
      <AppComponent />
    </AppContainer>
  </Provider>

if (rootEl !== null) {
  ReactDOM.render(wrapApp(App, store), rootEl)
}

// flow-disable-next-line
if (module.hot) {
  module.hot.accept('./app', () => {
    // eslint-disable-next-line global-require
    const NextApp = require('./app').default
    if (rootEl !== null) {
      ReactDOM.render(wrapApp(NextApp, store), rootEl)
    }
  })
}
