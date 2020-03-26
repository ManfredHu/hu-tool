function shallowClone(obj) {
  // plain type
  if (['symbol', 'string', 'number', 'boolean', 'null', 'undefined'].includes(typeof obj)) {
    return obj
  } else if (typeof obj === 'function') {
    return obj
  } else {
    // array or object
    const rst = Array.isArray(obj) ? [] : {}
    for (const i in obj) {
      if (obj.hasOwnProperty(i)) {
        rst[i] = obj[i]
      }
    }
    return rst
  }
}

function deepClone(obj) {
  // plain type
  if (['symbol', 'string', 'number', 'boolean', 'null', 'undefined'].includes(typeof obj)) {
    return obj
  } else if (typeof obj === 'function') {
    return obj.bind({})
  } else {
    // array or object
    const rst = Array.isArray(obj) ? [] : {}
    for (const i in obj) {
      if (obj.hasOwnProperty(i)) {
        if (typeof obj[i] === 'object' && obj[i] !== null) { // object array
          rst[i] = deepClone(obj[i])
        } else if (typeof obj[i] === 'function') { // function
          rst[i] = obj[i].bind({})
        } else {
          rst[i] = obj[i] // symbol string number boolean undefined null
        }
      }
    }
    return rst
  }
}

export default {
  shallowClone,
  deepClone
}
