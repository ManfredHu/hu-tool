import { default as index, is } from '@/index'

test('index', () => {
  expect(index.phone.isMobile(13800138000)).toBeTruthy()
  expect(is.number(123)).toBeTruthy()
})
