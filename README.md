# ggtool
a public code tool library

## What does ggtool mean?
In dota, gg means the game is over.I hope this tool is the last open source tool I wrote.
It will contain some tool modules that are used daily.

## How to use?


### url
```js
const testUrl = 'http://user:pass@www.tmtpost.com:8080/p/a/t/h/2737087.html?mobile=1&mdebug=1&_test=1#haha=init&lh=1';
url(testUrl).port //'8080'
url(testUrl).protocol //'http'
url(testUrl).getQueryParam('mobile') //'1'
url(testUrl).getUrlParam('_test') //'2'
url(testUrl).getUrlParam('test') //undefined
url(testUrl).getHashParam('haha') //'init'
```

## Using NPM
还没发布

## Using NOde

## Testing

## Ajax
Using Axios, click [here](https://github.com/axios/axios)

## Time&Date
Using Moment, click [here](http://momentjs.cn/)

## Cookie
Using js-cookie, click [here](https://www.npmjs.com/package/js-cookie)

## License
[MIT](http://opensource.org/licenses/MIT)
Copyright (c) 2018-present, ManfredHu
