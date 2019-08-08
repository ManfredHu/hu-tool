import Parse from 'url-parse'
import _typeCheck from './typeCheck'

class URL {
  constructor(link, option) {
    if (typeof link === 'undefined' && window) {
      link = window && window.location && window.location.href
    }

    if (!link) {
      throw new Error('link must be string')
    }

    this._parsedObj = new Parse(link, true)

    this._attrArr = ['protocol', 'hash', 'query', 'pathname', 'auth', 'host', 'port', 'hostname', 'password', 'username', 'origin', 'href']
    this._attrArr.forEach(item => {
      Object.defineProperty(this, item, {
        enumerable: true,
        configurable: true,
        get: () => {
          if (item === 'protocol') {
            return this._parsedObj[item].replace(/:$/, '')
          } else {
            return this._parsedObj[item]
          }
        },
        set: (newValue) => {
          this._parsedObj.set(item, newValue)
        }
      })
    })

    for (const i in option) {
      if (this._attrArr.indexOf(i) > -1) {
        this._parsedObj.set(i, option[i])
      }
    }
    return this
  }

  getQueryParam(key) {
    return this._parsedObj.query[key] || ''
  }

  getAllQueryParams() {
    return this._parsedObj.query
  }

  getUrlParam(key) {
    return this.getQueryParam(key)
  }

  getHashParam(key) {
    const hash = this._parsedObj.hash
    const reg = new RegExp('[^|#|&]?' + key + '=([^&]*(?=&|$))')
    const matchResult = hash.match(reg)
    if (matchResult && matchResult[1]) {
      return matchResult[1]
    }
    return ''
  }

  format(option) {
    for (const i in option) {
      if (this._attrArr.indexOf(i) > -1) {
        this._parsedObj.set(i, option[i])
      }
    }
    return this._parsedObj.toString()
  }

  getAllHashParams() {
    const matchArr = this._parsedObj.hash.match(/(\w+=\w+)/g)
    const obj = {}
    if (matchArr) {
      matchArr.forEach(i => {
        const [key, value] = i.split('=')
        obj[key] = value
      })
    }
    return obj
  }

  validUrl(str) {
    if (!str) str = this.format()
    // 这里增加了(//)?以满足//开头的链接
    const pattern = new RegExp('^(https?:\\/\\/)?(//)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#/?[-a-z\\d_]*)?(\\?[;&a-z\\d%_.~+=-]*)?$', 'i') // fragment locator
    return !!pattern.test(str)
  }

  addQueryParam(obj) {
    if (!obj) throw new Error('not params in addQueryParam')
    if (typeof obj === 'string') {
      const rst = obj.match(/\w+=\w+/g)
      if (_typeCheck.isArray(rst)) {
        rst.forEach(item => {
          const [key, value] = item.split('=')
          this._parsedObj.query[key] = value
        })
      }
    } else if (typeof obj === 'object' && !_typeCheck.isEmptyObj(obj)) {
      for (const i in obj) {
        this._parsedObj.query[i] = obj[i]
      }
    } else {
      throw new Error('params error, please pass string|Object type')
    }
    return this._parsedObj.toString()
  }

  removeQueryParam(obj) {
    const that = this
    if (typeof obj === 'string') {
      this._parsedObj.query[obj] = null // set null will return ''
    } else if (_typeCheck.isArray(obj)) {
      obj.forEach(item => {
        that._parsedObj.query[item] = null // set null will return ''
      })
    } else if (typeof obj === 'object' && !_typeCheck.isEmptyObj(obj)) {
      for (const i in obj) {
        this._parsedObj.query[i] = null
      }
    } else {
      throw new Error('params error, please pass string|Array|Object type')
    }
    return this._parsedObj.toString()
  }

  addHashParam(obj) {
    if (!obj) throw new Error('not params in addHashParam')

    const allHashParams = this.getAllHashParams()
    if (typeof obj === 'string') {
      const rst = obj.match(/\w+=\w+/g)
      if (_typeCheck.isArray(rst)) {
        rst.forEach(item => {
          const [key, value] = item.split('=')
          allHashParams[key] = value
        })
      }
    } else if (typeof obj === 'object' && !_typeCheck.isEmptyObj(obj)) {
      for (const i in obj) {
        allHashParams[i] = obj[i]
      }
    } else {
      throw new Error('params error, please pass string|Object type')
    }
    return this.hashFormat(allHashParams)
  }

  removeHashParam(obj) {
    const allHashParams = this.getAllHashParams()
    if (typeof obj === 'string') {
      allHashParams[obj] = null // set null will return ''
    } else if (_typeCheck.isArray(obj)) {
      obj.forEach(item => {
        allHashParams[item] = null // set null will return ''
      })
    } else if (typeof obj === 'object' && !_typeCheck.isEmptyObj(obj)) {
      for (const i in obj) {
        allHashParams[i] = null
      }
    } else {
      throw new Error('params error, please pass string|Array|Object type')
    }
    return this.hashFormat(allHashParams)
  }

  hashFormat(allHashParams) {
    // maybe null or array
    const hash = this._parsedObj.hash.match(/\?([^#]+)/)
    const tempArr = []
    for (const i in allHashParams) {
      if (allHashParams[i]) {
        tempArr.push(`${i}=${allHashParams[i]}`)
      }
    }

    if (_typeCheck.isArray(hash) && hash[1]) {
      // 这种是hash有参数的，直接replace掉
      this._parsedObj.hash = this._parsedObj.hash.replace(hash[1], tempArr.join('&'))
    } else {
      // 没有hash参数的，如下面几种
      // ''.match(/\?([^#]+)/)
      // '#/abc'.match(/\?([^#]+)/)
      // '#/abc?'.match(/\?([^#]+)/)
      let hashTemp = this._parsedObj.hash
      if (hashTemp.indexOf('#') === -1) {
        hashTemp += '#'
      }
      if (hashTemp.indexOf('?') === -1) {
        hashTemp += '?'
      }
      this._parsedObj.hash += hashTemp + tempArr.join('&')
    }
    return this._parsedObj.toString()
  }
}

function getUrl(link, option) {
  return new URL(link, option)
}

export default getUrl
