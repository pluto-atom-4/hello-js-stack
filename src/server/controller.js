// @flow

export const homePage = () => null

export const helloPage = () => ({
  hello: { message: 'Server-side preload message' },
})

export const helloAsyncPage = () => ({
  hello: { messageAsync: 'Server-side preload message fro async page' },
})

export const helloEndpoint = (num: number) => ({
  serverMessage: `Hello from the server! (received ${num})`,
})
