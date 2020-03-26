import omit from '@/util/omit'

test('omit arr test', () => {
  const arr = [1, 2, 3, {
    name: 'kawayi'
  }, [100, 99, 87] ]
  const arrRst = omit.shallowOmit(arr, [1, 3])
  expect(JSON.stringify(arrRst) === `[1,3,[100,99,87]]`).toBeTruthy()
})

test('omit obj test', () => {
  const obj = {
    'a': 1,
    'b': '2',
    'c': 3
  }
  const objRst = omit.shallowOmit(obj, ['a', 'c'])
  expect(obj.b === objRst.b).toBeTruthy()
  expect(objRst.c).toBeFalsy()
})

test('omit deepobj test', () => {
  const obj = {
    'a': 1,
    'b': '2',
    'c': 3,
    'd': {
      'e': {
        'f': {
          'h': 123
        }
      }
    }
  }
  const objRst = omit.deepOmit(obj, ['d.e.f.h', 'b'])
  expect(obj.b !== objRst.b).toBeTruthy()
  expect(objRst.d.e.f.h).toBeFalsy()
})
