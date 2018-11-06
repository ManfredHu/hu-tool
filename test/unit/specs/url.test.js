import URL from '@/util/url'

const realUrl = 'https://m.999.mm.com/m_nn/active/gc.wtf.nocache.html?__channel=nkm&debug=1&timer=1&clearLocal=1&x_xxx_m=on&log=1#/'
const testUrl = 'http://user:pass@www.tmtpost.com:8080/p/a/t/h/2737087.html?mobile=1&mdebug=1&_test=1#haha=init&lh=1'

test('parse url', () => {
  expect(URL(testUrl).port).toBe('8080')
  expect(URL(testUrl).protocol).toBe('http')
  expect(URL(testUrl).getQueryParam('mobile')).toBe('1')
  expect(URL(testUrl).getQueryParam('mdebug')).toBe('1')
  expect(URL(testUrl).getQueryParam('_test')).toBe('1')
  expect(URL(testUrl).getUrlParam('_test')).not.toBe('2')
  expect(URL(testUrl).getUrlParam('test')).toBeFalsy()
  expect(URL(testUrl).getHashParam('haha')).toBe('init')
  expect(URL(realUrl).format()).toBe(realUrl)
  expect(URL(testUrl, {
    port: '443',
    protocol: 'https'
  }).port).toBe('443')
  expect(URL(testUrl, {
    port: '443',
    protocol: 'https'
  }).protocol).toBe('https')
  expect(URL(realUrl, {
    protocol: 'http'
  }).protocol).toBe('http')
  expect(URL(realUrl).format({
    protocol: 'http'
  })).toBe(realUrl.replace(/https/, 'http'))
  expect(checkSetMethod()).toBe(realUrl.replace(/https/, 'http'))

  expect(URL(testUrl, {
    port: '443',
    protocol: 'https',
    jj: 1
  }).port).toBe('443')
  expect(URL(realUrl).format({
    protocol: 'http',
    jj: 1
  })).toBe(realUrl.replace(/https/, 'http'))
})

test('url pass null', () => {
  function execUrl () {
    URL(null)
  }
  expect(execUrl).toThrow(/must be string/)
  expect(URL().protocol).toBe('http')
  expect(URL().host).toBe('localhost')
})

function checkSetMethod () {
  const parseObj = URL(realUrl)
  parseObj.protocol = 'http'
  return parseObj.format()
}
