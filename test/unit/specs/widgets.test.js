import {
  formatVersion
} from '@/util/widgets'

test('widgets tests', () => {
  expect(formatVersion('1.0.0.12')).toBe('1.0.0')
  expect(formatVersion('1.0.0.12', 2)).toBe('1.0')
  expect(formatVersion('')).toBe('')
})
