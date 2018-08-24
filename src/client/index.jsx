/* eslint-disable indent */
// @flow

import 'babel-polyfill'
import Immutable from 'immutable'
import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux'
import thunkMiddleware from 'redux-thunk'
import { BrowserRouter } from 'react-router-dom'
import $ from 'jquery'
import Tether from 'tether'

import App from '../shared/app'
import helloReducer from '../shared/reducer/hello'
import { APP_CONTAINER_SELECTOR } from '../shared/config'
import { isProd } from '../shared/utils'
import setUpSocket from './socket'

window.jQuery = $
window.Tether = Tether
require('bootstrap')

/* eslint-disable-next-line no-underscore-dangle,max-len */
const composeEnhancers = (isProd ? undefined : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose
// eslint-disable-next-line no-underscore-dangle
const preloadedState = window.__PRELOADED_STATE__


const store = createStore(combineReducers(
  /* eslint-disable-next-line function-paren-newline */
  { hello: helloReducer }),
  { hello: Immutable.fromJS(preloadedState.hello) },
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
  module.hot.accept('../shared/app', () => {
    // eslint-disable-next-line global-require
    const NextApp = require('../shared/app').default
    if (rootEl !== null) {
      ReactDOM.render(wrapApp(NextApp, store), rootEl)
    }
  })
}

setUpSocket(store)
