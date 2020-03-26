import clone from '@/util/clone'

test('shallowClone array', () => {
  const temp = 123
  const arrRst = clone.shallowClone(temp)
  expect(arrRst === temp).toBeTruthy()
})

test('shallowClone array', () => {
  const arr = [1, 2, 3, {
    name: 'kawayi'
  }, [100, 99, 87]]
  const arrRst = clone.shallowClone(arr)
  expect(JSON.stringify(arrRst)).toBe(`[1,2,3,{"name":"kawayi"},[100,99,87]]`)
  for (let i in arr) {
    expect(arrRst[i] === arr[i]).toBeTruthy()
  }
})

test('shallowClone object', () => {
  const obj = {
    name: 'kawayi',
    data: [1, 2, 3, {
      xx: 'this is xx'
    }],
    isCheck: false
  }
  const objRst = clone.shallowClone(obj)
  expect(JSON.stringify(objRst)).toBe(`{"name":"kawayi","data":[1,2,3,{"xx":"this is xx"}],"isCheck":false}`)
  expect(objRst.data[objRst.data.length - 1] === obj.data[obj.data.length - 1]).toBeTruthy()
  for (let i in obj) {
    expect(objRst[i] === obj[i]).toBeTruthy()
  }
})

test('deepClone', () => {
  const obj = {
    name: 'kawayi',
    data: [1, 2, 3, {
      xx: 'this is xx'
    }],
    isCheck: false,
    data2: [1, 2, 3, {
      xx: 'this is xx',
      yy: {
        zz: {
          jj: {
            l: 123,
            func: () => {}
          }
        }
      }
    }]
  }
  const objRst = clone.deepClone(obj)
  expect(objRst.data[objRst.data.length - 1] === obj.data[obj.data.length - 1]).toBeFalsy()
  expect(obj.data2[obj.data2.length - 1].yy.zz.jj !== objRst.data2[objRst.data2.length - 1].yy.zz.jj).toBeTruthy()
  expect(obj.data2[obj.data2.length - 1].yy.zz.jj.func !== objRst.data2[objRst.data2.length - 1].yy.zz.jj.func).toBeTruthy()
})

test('deepClone function', () => {
  const obj = {
    func: () => {},
    data: [1, 2, 3, {
      xx: 'this is xx'
    }],
    isCheck: false,
    data2: [1, 2, 3, {
      xx: 'this is xx',
      yy: {
        zz: {
          jj: {
            l: 123,
            func: () => {}
          }
        }
      }
    }]
  }
  const objRst = clone.deepClone(obj)
  expect(objRst.func === obj.func).toBeFalsy()
  expect(objRst.data[objRst.data.length - 1] === obj.data[obj.data.length - 1]).toBeFalsy()
  expect(obj.data2[obj.data2.length - 1].yy.zz.jj !== objRst.data2[objRst.data2.length - 1].yy.zz.jj).toBeTruthy()
  expect(obj.data2[obj.data2.length - 1].yy.zz.jj.func !== objRst.data2[objRst.data2.length - 1].yy.zz.jj.func).toBeTruthy()
})
