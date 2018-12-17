import TypeCheck from '@/util/typeCheck'

test('check isUndef', () => {
  const a = 'check isUndef'
  expect(TypeCheck.isUndef(null)).toBeTruthy()
  expect(TypeCheck.isUndef(undefined)).toBeTruthy()
  expect(TypeCheck.isUndef(a)).toBeFalsy()
})

test('check isDef', () => {
  const a = 'check isDef'
  expect(TypeCheck.isDef(a)).toBeTruthy()
})

test('check true', () => {
  expect(TypeCheck.isTrue(true)).toBeTruthy()
  expect(TypeCheck.isTrue(123)).toBeFalsy()
})

test('check false', () => {
  expect(TypeCheck.isFalse(false)).toBeTruthy()
  expect(TypeCheck.isFalse(123)).toBeFalsy()
})

test('check object not null', () => {
  expect(TypeCheck.isObject(false)).toBeFalsy()
  expect(TypeCheck.isObject(null)).toBeFalsy()
  expect(TypeCheck.isObject({
    a: 123
  })).toBeTruthy()
})

test('check isPlainObject', () => {
  expect(TypeCheck.isPlainObject({
    a: 123
  })).toBeTruthy()
  expect(TypeCheck.isPlainObject([123, 'ac'])).toBeFalsy()
})

test('check isRegExp', () => {
  expect(TypeCheck.isRegExp(/abc/ig)).toBeTruthy()
  expect(TypeCheck.isRegExp([123, 'ac'])).toBeFalsy()
})

test('check isFuncton', () => {
  function testFunc () {}
  expect(TypeCheck.isFuncton(testFunc)).toBeTruthy()
  expect(TypeCheck.isFuncton([123, 'ac'])).toBeFalsy()
})

test('check isArray', () => {
  function testFunc () {}
  expect(TypeCheck.isArray(testFunc)).toBeFalsy()
  expect(TypeCheck.isArray([123, 'ac'])).toBeTruthy()
  expect(TypeCheck.isArray({
    a: 123
  })).toBeFalsy()
})

test('test isNumber', () => {
  function testFunc () {}
  expect(TypeCheck.isNumber(testFunc)).toBeFalsy()
  expect(TypeCheck.isNumber([123, 'ac'])).toBeFalsy()
  expect(TypeCheck.isNumber({
    a: 123
  })).toBeFalsy()
  expect(TypeCheck.isNumber(123)).toBeTruthy()
  // number overflow
  expect(TypeCheck.isNumber(Math.pow(2, 726627262726272626))).toBeFalsy()
  expect(TypeCheck.isNumber(Math.pow(2, 64))).toBeTruthy()
})

test('test isPrimitive', () => {
  expect(TypeCheck.isPrimitive(123)).toBeTruthy()
  expect(TypeCheck.isPrimitive('Hello World')).toBeTruthy()
  expect(TypeCheck.isPrimitive(true)).toBeTruthy()
  let firstName = Symbol('first name')
  expect(TypeCheck.isPrimitive(firstName)).toBeTruthy()
})

test('test isEmptyObj', () => {
  expect(TypeCheck.isEmptyObj({})).toBeTruthy()
  expect(TypeCheck.isEmptyObj({
    a: 1
  })).toBeFalsy()
  expect(TypeCheck.isEmptyObj(getSaySomething(false))).toBeTruthy()
  expect(TypeCheck.isEmptyObj(getSaySomething(true))).toBeFalsy()
})

function getSaySomething (tag) {
  return new SaySomething(tag)
}

function SaySomething (tag) {
  if (tag) {
    this.xixi = 1
  }
}
SaySomething.prototype.xixi = 2
