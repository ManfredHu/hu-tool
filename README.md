<h1><a href='https://github.com/ManfredHu/hu-tool'><img src='https://manfredhu-1252588796.cos.ap-guangzhou.myqcloud.com/hu-tool.png' height='60' alt='hu-tool Logo' /></a></h1>

[![](https://img.shields.io/travis/ManfredHu/hu-tool.svg?style=flat-square)](https://travis-ci.org/ManfredHu/hu-tool.svg)
[![Codecov](https://img.shields.io/codecov/c/github/ManfredHu/hu-tool.svg?style=flat-square)](https://github.com/ManfredHu/hu-tool)
[![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/react.svg?style=flat-square)](https://www.npmjs.com/package/hu-tool)
[![GitHub](https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square)](https://github.com/ManfredHu/hu-tool)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square)](https://github.com/ManfredHu/hu-tool)

hu-tool is a public code tool library.
It will contain some tool modules that are used daily.

## Installing

### Using NPM

To install the stable version:

```bash
$ npm install hu-tool --save
```

### Using unpkg CDN

```html
<script src="https://unpkg.com/hu-tool@1.1.4/lib/hu-tool.js"></script>
```

## Example

### TypeCheck

```js
import { TypeCheck } from 'hu-tool'

TypeCheck.isUndef(null) //true
TypeCheck.isUndef(undefined) //true
TypeCheck.isDef(123) //true
TypeCheck.isDef(null) //false
TypeCheck.isObject(null) //false
TypeCheck.isObject({}) //true
TypeCheck.isTrue(1) //false
TypeCheck.isTrue(true) //true
TypeCheck.isFalse(false) //true
TypeCheck.isFalse(0) //false
TypeCheck.isPlainObject({ a: 123 }) //true
TypeCheck.isPlainObject([123, 'ac']) //false
TypeCheck.isRegExp(/abc/gi) //true
TypeCheck.isFuncton(function() {}) //true
TypeCheck.isArray([123, 'ac']) //true
TypeCheck.isNumber(Math.pow(2, 64)) //true
TypeCheck.isNumber(Math.pow(2, 726627262726272626)) //false, overflow
TypeCheck.isPrimitive(123) //true
TypeCheck.isPrimitive('Hello World') //true
TypeCheck.isEmptyObj({}) //true
```

from [is-type-of](https://www.npmjs.com/package/is-type-of)

API

```js
TypeCheck.array(arr)
TypeCheck.boolean(bool)
TypeCheck.null(null)
TypeCheck.nullOrUndefined(null)
TypeCheck.number(num)
TypeCheck.string(str)
TypeCheck.symbol(sym)
TypeCheck.undefined(undef)
TypeCheck.regExp(reg)
TypeCheck.object(obj)
TypeCheck.date(date)
TypeCheck.error(err)
TypeCheck.function(fn)
TypeCheck.primitive(prim)
TypeCheck.buffer(buf)
TypeCheck.stream(stream)
TypeCheck.readableStream(readable)
TypeCheck.writableStream(writable)
TypeCheck.duplexStream(duplex)
TypeCheck.class(obj)
TypeCheck.finite(num)
TypeCheck.NaN(NaN)
TypeCheck.generator(gen)
TypeCheck.generatorFunction(fn)
TypeCheck.promTypeChecke(fn)
TypeCheck.int(int)
TypeCheck.double(double)
TypeCheck.int32(int)
TypeCheck.long(long)
TypeCheck.Long(Long)
```

### Phone

```js
import { Phone } from 'hu-tool'

Phone.isMobile(13800138000) //true
Phone.isMobile('13800138000') //true
Phone.isMobile('075526069999') //flase
Phone.getPurePhone('13800138000123') //13800138000
Phone.getPurePhone('1380a0138000123c') //13800138000
Phone.beautifyPhone('13800138000') //138 0013 8000
Phone.beautifyPhone('ab1380abc1384') //138 0138 4
Phone.mosaic('13800138000') //138****8000
Phone.mosaic('ab1380abc1384') //138****4
Phone.mosaic('13800138000', '-') //138----8000
Phone.mosaic('13800138000', '-', 4, 7) //1380---8000
```

### URL

```js
import { URL } from 'hu-tool'

const testUrl =
  'http://user:pass@www.tmtpost.com:8080/p/a/t/h/2737087.html?mobile=1&mdebug=1&_test=1#haha=init&lh=1'
URL(testUrl).port //'8080'
URL(testUrl).protocol //'http'
URL(testUrl).getQueryParam('mobile') //'1'
URL(testUrl).getUrlParam('_test') //'1'
URL(testUrl).getUrlParam('test') //undefined
URL(testUrl).getHashParam('haha') //'init'
URL(testUrl).format() //Same as testUrl
URL(testUrl, {
  port: '443',
  protocol: 'https'
}).format() //https://user:pass@www.tmtpost.com:443/p/a/t/h/2737087.html?mobile=1&mdebug=1&_test=1#haha=init&lh=1

URL(testUrl).format({
  port: '443',
  protocol: 'https'
}) //https://user:pass@www.tmtpost.com:443/p/a/t/h/2737087.html?mobile=1&mdebug=1&_test=1#haha=init&lh=1
URL(testUrl).removeProtocal() // //user:pass@www.tmtpost.com:8080/p/a/t/h/2737087.html?mobile=1&mdebug=1&_test=1#haha=init&lh=1
```

### UA

```js
import { UA } from 'hu-tool'

const androidUA =
  'Mozilla/5.0 (Linux; Android 8.0.0; G8142 Build/47.1.A.12.270) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.87 Mobile Safari/537.36'
UA(androidUA).isAndroid //true
UA(androidUA).isIOS //false

const wechatUA =
  'Mozilla/5.0 (Linux; Android 8.1.0; PAHM00 Build/OPM1.171019.026; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/62.0.3202.84 Mobile Safari/537.36 MicroMessenger/6.7.3.1360(0x26070336) NetType/WIFI Language/zh_CN Process/appbrand2'
UA(wechatUA).isWeixin //true
UA(wechatUA).isAndroid //true
UA(wechatUA).isIOS //false

const IE6UA = 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1)'
UA(IE6UA).browser.ie //6
UA(IE6UA).engine.trident //2
UA(IE6UA).system.win //xp

UA().userAgent //Show the userAgent&system of your browser now

UA().isMiniProgram
```

## Testing&Coverage

```js
npm run test
```

## Development

```js
npm run start
```

Because it is a tool library, it is important to ensure the integrity of the test case.
You need to write your test cases while perfecting your code.

## Ajax

Using Axios, click [here](https://github.com/axios/axios)

## Time&Date

Using Moment, click [here](http://momentjs.cn/).It's about 200 K, about 50K after gzipped, and the node is used casually.
But if feels big in broswer, please use [dayjs](https://github.com/iamkun/dayjs).

## Cookie

Using js-cookie, click [here](https://www.npmjs.com/package/js-cookie).

## localStorage

Using localforage, click [here](https://github.com/localForage/localForage).
But the default use of Web SQL in PC, if you need localStorage, [modify the driver](https://localforage.github.io/localForage/#settings-api-config).

## Event

Using events, click [here](https://github.com/Gozala/events).

## License

[MIT](http://opensource.org/licenses/MIT)
Copyright (c) 2018-present, ManfredHu
