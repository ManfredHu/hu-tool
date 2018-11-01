import url from '@/util/url'

const realUrl = 'https://m.999.mm.com/m_nn/active/gc.wtf.nocache.html?__channel=nkm&debug=1&timer=1&clearLocal=1&x_xxx_m=on&log=1#/';
const testUrl = 'http://user:pass@www.tmtpost.com:8080/p/a/t/h/2737087.html?mobile=1&mdebug=1&_test=1#haha=init&lh=1';

test('parse url', () => {
  expect(url(testUrl).port).toBe('8080');
  expect(url(testUrl).protocol).toBe('http');
  expect(url(testUrl).getQueryParam('mobile')).toBe('1');
  expect(url(testUrl).getQueryParam('mdebug')).toBe('1');
  expect(url(testUrl).getQueryParam('_test')).toBe('1');
  expect(url(testUrl).getUrlParam('_test')).not.toBe('2');
  expect(url(testUrl).getUrlParam('test')).toBeFalsy();
  expect(url(testUrl).getHashParam('haha')).toBe('init');
  expect(url(realUrl).format()).toBe(realUrl);
  expect(url(testUrl, {
    port: '443',
    protocol: 'https'
  }).port).toBe('443');
  expect(url(testUrl, {
    port: '443',
    protocol: 'https'
  }).protocol).toBe('https');
  expect(url(realUrl, {
    protocol: 'http'
  }).protocol).toBe('http');
  expect(url(realUrl).format({
    protocol: 'http'
  })).toBe(realUrl.replace(/https/, 'http'));
  expect(checkSetMethod()).toBe(realUrl.replace(/https/, 'http'));

  expect(url(testUrl, {
    port: '443',
    protocol: 'https',
    jj: 1
  }).port).toBe('443');
  expect(url(realUrl).format({
    protocol: 'http',
    jj: 1
  })).toBe(realUrl.replace(/https/, 'http'));
});

test('url pass null', () => {
  function execUrl() {
    url(null);
  }
  expect(execUrl).toThrow(/must be string/);
  expect(url().protocol).toBe('http');
  expect(url().host).toBe('localhost');
})

function checkSetMethod() {
  const parseObj = url(realUrl);
  parseObj.protocol = 'http';
  return parseObj.format();
}
