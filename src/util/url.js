import parse from 'url-parse'

class URL {
  constructor(link, option) {
    if (typeof link === 'undefined') {
      link = window && window.location && window.location.href;
    }

    if (!link) {
      throw new Error('link must be string');
    }

    this._parsedObj = new parse(link, true);

    this._attrArr = ['protocol', 'hash', 'query', 'pathname', 'auth', 'host', 'port', 'hostname', 'password', 'username', 'origin', 'href'];
    this._attrArr.forEach(item => {
      Object.defineProperty(this, item, {
        enumerable: true,
        configurable: true,
        get: () => {
          if (item === 'protocol') {
            return this._parsedObj[item].replace(/:$/, '');
          } else {
            return this._parsedObj[item]
          }
        },
        set: (newValue) => {
          this._parsedObj.set(item, newValue);
        }
      })
    });


    for (const i in option) {
      if (this._attrArr.indexOf(i) > -1) {
        this._parsedObj.set(i, option[i]);
      }
    }
  }

  getQueryParam(key) {
    return this._parsedObj.query[key];
  }

  getUrlParam(key) {
    return this.getQueryParam(key);
  }

  getHashParam(key) {
    const hash = this._parsedObj.hash;
    const reg = new RegExp('[^|#|&]?' + key + '=([^&]*(?=&|$))');
    return hash.match(reg)[1];
  }

  format(option) {
    for (const i in option) {
      if (this._attrArr.indexOf(i) > -1) {
        this._parsedObj.set(i, option[i]);
      }
    }
    return this._parsedObj.toString();
  }
}

function getUrl(link, option) {
  return new URL(link, option);
}

export default getUrl;
