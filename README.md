# <a href='https://github.com/ManfredHu/ggtool'><img src='https://www.manfredhu.com/images/ggtool.png' height='60' alt='ggtool Logo' /></a>

ggtool is a public code tool library.
In dota, gg means the game is over.I hope this tool is the last open source tool I wrote.
It will contain some tool modules that are used daily.

## Installing

### Using NPM

```bash
$ npm install ggtool --save
```

## Example

### typeCheck
```js
import {typeCheck} from 'ggtool'

typeCheck.isUndef(null) //true
typeCheck.isUndef(undefined) //true
typeCheck.isDef(123) //true
typeCheck.isDef(null) //false
typeCheck.isObject(null) //false
typeCheck.isObject({}) //true
typeCheck.isTrue(1) //false
typeCheck.isTrue(true) //true
typeCheck.isFalse(false) //true
typeCheck.isFalse(0) //false
typeCheck.isPlainObject({a: 123}) //true
typeCheck.isPlainObject([123, 'ac']) //false
typeCheck.isRegExp(/abc/ig) //true
typeCheck.isFuncton(function(){}) //true
typeCheck.isArray([123, 'ac']) //true
typeCheck.isNumber(Math.pow(2, 64)) //true
typeCheck.isNumber(Math.pow(2, 726627262726272626)) //false, overflow
typeCheck.isPrimitive(123) //true
typeCheck.isPrimitive('Hello World') //true
typeCheck.isEmptyObj({}) //true
```

### phone
```js
import {phone} from 'ggtool'

phone.isMobile(13800138000) //true
phone.isMobile('13800138000') //true
phone.isMobile('075526069999') //flase
phone.getPurePhone('13800138000123') //13800138000
phone.getPurePhone('1380a0138000123c') //13800138000
phone.beautifyPhone('13800138000') //138 0013 8000
phone.beautifyPhone('ab1380abc1384') //138 0138 4
phone.mosaic('13800138000') //138****8000
phone.mosaic('ab1380abc1384') //138****4
phone.mosaic('13800138000', '-') //138----8000
phone.mosaic('13800138000', '-', 4, 7) //1380---8000
```

### url
```js
import {url} from 'ggtool'

const testUrl = 'http://user:pass@www.tmtpost.com:8080/p/a/t/h/2737087.html?mobile=1&mdebug=1&_test=1#haha=init&lh=1';
url(testUrl).port //'8080'
url(testUrl).protocol //'http'
url(testUrl).getQueryParam('mobile') //'1'
url(testUrl).getUrlParam('_test') //'1'
url(testUrl).getUrlParam('test') //undefined
url(testUrl).getHashParam('haha') //'init'
url(testUrl).format() //Same as testUrl
url(testUrl, {
  port: '443',
  protocol: 'https'
}).format() //https://user:pass@www.tmtpost.com:443/p/a/t/h/2737087.html?mobile=1&mdebug=1&_test=1#haha=init&lh=1

url(testUrl).format({
  port: '443',
  protocol: 'https'
}) //https://user:pass@www.tmtpost.com:443/p/a/t/h/2737087.html?mobile=1&mdebug=1&_test=1#haha=init&lh=1
```

### ua
```js
import {ua} from 'ggtool'

const androidUA = 'Mozilla/5.0 (Linux; Android 8.0.0; G8142 Build/47.1.A.12.270) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.87 Mobile Safari/537.36';
ua(androidUA).isAndroid //true
ua(androidUA).isIOS //false

const wechatUA = 'Mozilla/5.0 (Linux; Android 8.1.0; PAHM00 Build/OPM1.171019.026; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/62.0.3202.84 Mobile Safari/537.36 MicroMessenger/6.7.3.1360(0x26070336) NetType/WIFI Language/zh_CN Process/appbrand2';
ua(wechatUA).isWeixin //true
ua(wechatUA).isAndroid //true
ua(wechatUA).isIOS //false

const IE6UA = 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1)';
ua(IE6UA).browser.ie //6
ua(IE6UA).engine.trident //2
ua(IE6UA).system.win //xp

ua().userAgent //Show the userAgent&system of your browser now
```

## Testing&Coverage
```js
npm run test
```

## Ajax
Using Axios, click [here](https://github.com/axios/axios)

## Time&Date
Using Moment, click [here](http://momentjs.cn/)

## Cookie
Using js-cookie, click [here](https://www.npmjs.com/package/js-cookie)

## License
[MIT](http://opensource.org/licenses/MIT)
Copyright (c) 2018-present, ManfredHu
