// @flow


export const HOME_PAGE = '/'
export const HELLO_PAGE = '/hello'
export const HELLO_ASYNC_PAGE = '/hello-async'
export const NOT_FOUND_DEMO_PAGE_ROUTE = '/404'

// eslint-disable-next-line import/prefer-default-export
export const helloEndpointRoute = (num: ?number) => `/ajax/hello/${num || ':num'}`
