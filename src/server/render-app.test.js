import renderApp from './render-app'

xit('should return title in html header', () => {
  expect(renderApp('Jest Title')).toContain('<title>Jest Title</title>')
})
