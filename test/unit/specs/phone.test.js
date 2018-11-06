import Phone from '@/util/phone'

test('isMobile', () => {
  expect(Phone.isMobile(13800138000)).toBeTruthy()
  expect(Phone.isMobile('13800138000')).toBeTruthy()
})

test('getPurePhone and beautifyPhone', () => {
  expect(Phone.getPurePhone(13800138000123)).toBe('13800138000')
  expect(Phone.getPurePhone('1380a0138000123c')).toBe('13800138000')
  expect(checkPurePhoneError).toThrow()

  expect(Phone.beautifyPhone(13800138000)).toBe('138 0013 8000')
  expect(Phone.beautifyPhone('13800138000')).toBe('138 0013 8000')
  expect(Phone.beautifyPhone('1380')).toBe('138 0')
  expect(Phone.beautifyPhone('1380abc1384')).toBe('138 0138 4')
  expect(Phone.beautifyPhone('ab1380abc1384')).toBe('138 0138 4')
})

test('mosaic phone', () => {
  expect(Phone.mosaic('13800138000')).toBe('138****8000')
  expect(Phone.mosaic('ab1380abc1384')).toBe('138****4')
  expect(Phone.mosaic('13800138000', '-')).toBe('138----8000')
  expect(Phone.mosaic('13800138000', 123)).not.toBe('138----8000')
  expect(Phone.mosaic('13800138000', '-')).toBe('138----8000')
  expect(Phone.mosaic('13800138000', '-', 4, 7)).toBe('1380---8000')
  expect(Phone.mosaic('13800138000', '-', 4, 4)).not.toBe('1380***38000')
  expect(checkMosaicPhone).toThrow('mosaicEnd must bigger than mosaicStart')
  expect(checkMosaicPhoneError).toThrow()
})

function checkMosaicPhone () {
  return Phone.mosaic('13800138000', '-', 7, 4)
}

function checkPurePhoneError () {
  return Phone.getPurePhone({
    a: 13800138000
  })
}

function checkMosaicPhoneError () {
  return Phone.mosaic('13800138000', '-', '4', 4)
}
