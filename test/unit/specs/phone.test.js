import phone from '@/util/phone'

test('isMobile', () => {
  expect(phone.isMobile(13800138000)).toBeTruthy();
  expect(phone.isMobile('13800138000')).toBeTruthy();
});

test('getPurePhone and beautifyPhone', () => {
  expect(phone.getPurePhone(13800138000123)).toBe('13800138000');
  expect(phone.getPurePhone('1380a0138000123c')).toBe('13800138000');
  expect(checkPurePhoneError).toThrow();

  expect(phone.beautifyPhone(13800138000)).toBe('138 0013 8000');
  expect(phone.beautifyPhone('13800138000')).toBe('138 0013 8000');
  expect(phone.beautifyPhone('1380')).toBe('138 0');
  expect(phone.beautifyPhone('1380abc1384')).toBe('138 0138 4');
  expect(phone.beautifyPhone('ab1380abc1384')).toBe('138 0138 4');
});

test('mosaic phone',()=>{
  expect(phone.mosaic('13800138000')).toBe('138****8000');
  expect(phone.mosaic('ab1380abc1384')).toBe('138****4');
  expect(phone.mosaic('13800138000','-')).toBe('138----8000');
  expect(phone.mosaic('13800138000',123)).not.toBe('138----8000');
  expect(phone.mosaic('13800138000','-')).toBe('138----8000');
  expect(phone.mosaic('13800138000','-', 4, 7)).toBe('1380---8000');
  expect(phone.mosaic('13800138000','-', 4, 4)).not.toBe('1380***38000');
  expect(checkMosaicPhone).toThrow('mosaicEnd must bigger than mosaicStart');
  expect(checkMosaicPhoneError).toThrow();
})

function checkMosaicPhone(){
  return phone.mosaic('13800138000','-', 7, 4);
}

function checkPurePhoneError(){
  return phone.getPurePhone({
    a: 13800138000
  });
}

function checkMosaicPhoneError() {
  return phone.mosaic('13800138000','-', '4', 4);
}
