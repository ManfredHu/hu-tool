import * as _clone from './clone'
const {
  deepClone
} = _clone.default

function shallowOmit(obj, path) {
  if (typeof obj !== 'object' || obj === null) {
    // symbol undefined boolean number string null function
    throw new Error(`pramas obj must be object or array`)
  }
  const _path = Array.isArray(path) ? path.map(i => `${i}`) : [`${path}`]
  const _rst = Array.isArray(obj) ? [] : {}
  for (const i in obj) {
    if (obj.hasOwnProperty(i) && !_path.includes(i)) {
      if (Array.isArray(_rst)) {
        _rst.push(obj[i])
      } else {
        _rst[i] = obj[i]
      }
    }
  }
  return _rst
}

function deepOmit(obj, path, needClone = true) {
  if (typeof obj !== 'object' || obj === null) {
    // symbol undefined boolean number string null function
    throw new Error(`pramas obj must be object or array`)
  }
  // copy one
  const newRst = needClone ? deepClone(obj) : obj
  path.forEach(item => {
    if (typeof item === 'string' && item.indexOf('.') > -1) {
      // like 'd.e.f.h'
      const argsArr = item.split('.')
      newRst[argsArr[0]] = deepOmit(obj[argsArr[0]], [argsArr.slice(1).join('.')], false)
    } else {
      delete newRst[item]
    }
  })
  return newRst
}

export default {
  shallowOmit,
  deepOmit
}
