// @flow

import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux'
import thunkMiddleware from 'redux-thunk'
import { BrowserRouter } from 'react-router-dom'

import App from './app'
import helloReducer from './reducer/hello'
import { APP_CONTAINER_SELECTOR } from '../shared/config'
import { isProd } from '../shared/utils'

// eslint-disable-next-line no-underscore-dangle,max-len
const composeEnhancers = (isProd ? undefined : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

const store = createStore(combineReducers({ hello: helloReducer }),
  composeEnhancers(applyMiddleware(thunkMiddleware)))

const rootEl = document.querySelector(APP_CONTAINER_SELECTOR)

// eslint-disable-next-line no-console
console.log(rootEl)

const wrapApp = (AppComponent, reduxStore) =>
// eslint-disable-next-line implicit-arrow-linebreak
  <Provider store={reduxStore}>
    <BrowserRouter>
      <AppContainer>
        <AppComponent />
      </AppContainer>
    </BrowserRouter>
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
