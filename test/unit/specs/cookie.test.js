import { default as index, cookie, Cookie } from '@/index'

test('cookie', () => {
  expect(index.Cookie.set).toBeTruthy()
  expect(index.Cookie.get).toBeTruthy()
  expect(cookie.set).toBeTruthy()
  expect(cookie.get).toBeTruthy()
  expect(Cookie.set).toBeTruthy()
  expect(Cookie.get).toBeTruthy()
})
