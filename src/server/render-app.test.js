import renderApp from './render-app'

it('should return title in html header', () => {
  expect(renderApp('Jest Title')).toContain('<title>Jest Title</title>')
})
