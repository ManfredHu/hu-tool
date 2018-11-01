import check from '@/util/typeCheck'

test('check isUndef', () => {
  const a = 'check isUndef';
  expect(check.isUndef(null)).toBeTruthy();
  expect(check.isUndef(undefined)).toBeTruthy();
  expect(check.isUndef(a)).toBeFalsy();
});

test('check isDef', () => {
  const a = "check isDef";
  expect(check.isDef(a)).toBeTruthy();
});

test('check true', () => {
  expect(check.isTrue(true)).toBeTruthy();
  expect(check.isTrue(123)).toBeFalsy();
})

test('check false', () => {
  expect(check.isFalse(false)).toBeTruthy();
  expect(check.isFalse(123)).toBeFalsy();
})

test('check object not null', () => {
  expect(check.isObject(false)).toBeFalsy();
  expect(check.isObject(null)).toBeFalsy();
  expect(check.isObject({
    a: 123
  })).toBeTruthy();
})

test('check isPlainObject', () => {
  expect(check.isPlainObject({
    a: 123
  })).toBeTruthy();
  expect(check.isPlainObject([123, 'ac'])).toBeFalsy();
})

test('check isRegExp', () => {
  expect(check.isRegExp(/abc/ig)).toBeTruthy();
  expect(check.isRegExp([123, 'ac'])).toBeFalsy();
})

test('check isFuncton', () => {
  function testFunc() {}
  expect(check.isFuncton(testFunc)).toBeTruthy();
  expect(check.isFuncton([123, 'ac'])).toBeFalsy();
})

test('check isArray', () => {
  function testFunc() {}
  expect(check.isArray(testFunc)).toBeFalsy();
  expect(check.isArray([123, 'ac'])).toBeTruthy();
  expect(check.isArray({
    a: 123
  })).toBeFalsy();
})

test('test isNumber', () => {
  function testFunc() {}
  expect(check.isNumber(testFunc)).toBeFalsy();
  expect(check.isNumber([123, 'ac'])).toBeFalsy();
  expect(check.isNumber({
    a: 123
  })).toBeFalsy();
  expect(check.isNumber(123)).toBeTruthy();
  // number overflow
  expect(check.isNumber(Math.pow(2, 726627262726272626))).toBeFalsy();
  expect(check.isNumber(Math.pow(2, 64))).toBeTruthy();
})

test('test isPrimitive', () => {
  expect(check.isPrimitive(123)).toBeTruthy();
  expect(check.isPrimitive('Hello World')).toBeTruthy();
})

test('test isEmptyObj', () => {
  expect(check.isEmptyObj({})).toBeTruthy();
  expect(check.isEmptyObj({
    a: 1
  })).toBeFalsy();
  expect(check.isEmptyObj(getSaySomething(false))).toBeTruthy();
  expect(check.isEmptyObj(getSaySomething(true))).toBeFalsy();
})

function getSaySomething(tag) {
  return new saySomething(tag);
}

function saySomething(tag) {
  if (tag) {
    this.xixi = 1;
  }
}
saySomething.prototype.xixi = 2;
