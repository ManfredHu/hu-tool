import UA from '@/util/userAgent'

test('check isAndroid', () => {
  const androidUA = 'Mozilla/5.0 (Linux; Android 8.0.0; G8142 Build/47.1.A.12.270) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.87 Mobile Safari/537.36'
  expect(UA(androidUA).isAndroid).toBeTruthy()
  expect(UA(androidUA).isIOS).toBeFalsy()

  const wechatUA = 'Mozilla/5.0 (Linux; Android 8.1.0; PAHM00 Build/OPM1.171019.026; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/62.0.3202.84 Mobile Safari/537.36 MicroMessenger/6.7.3.1360(0x26070336) NetType/WIFI Language/zh_CN Process/appbrand2'
  expect(UA(wechatUA).isWeixin).toBeTruthy()
  expect(UA(wechatUA).isAndroid).toBeTruthy()

  const macUA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36'
  expect(UA(macUA).isWeixin).toBeFalsy()
  expect(UA(macUA).isAndroid).toBeFalsy()

  const QQBroswerUA = 'Mozilla/5.0 (Windows NT 6.3; WOW64; Trident/7.0; .NET4.0E; .NET4.0C; QQBrowser/8.0.2959.400; rv:11.0) like Gecko'
  expect(UA(QQBroswerUA).isWeixin).toBeFalsy()
  expect(UA(QQBroswerUA).system.win).toBe('8.1')

  // coverage test
  const EdgeUA = 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36(KHTML, like Gecko UBrowser/4.0.3214.0) Chrome/36.0.1985.143 Safari/537.36 Edge/12.0'
  expect(UA(EdgeUA).isWeixin).toBeFalsy()
  expect(UA(EdgeUA).system.win).toBe('8.1')

  const ChromeUA = 'Mozilla/5.0 (Windows: U; Windows NT 5.1; en-US) AppleWebKit/525.19 (KHTML, like Gecko) Chrome/1.0.154.48 Safari/525.19'
  expect(UA(ChromeUA).system.win).toBe('xp')
  expect(UA(ChromeUA).browser.chrome).toBeTruthy()
  expect(UA(ChromeUA).browser.opera).toBeFalsy()

  const SafariUA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_4) AppleWebKit/536.30.1 (KHTML, like Gecko) Version/6.0.5 Safari/536.30.1'
  expect(UA(SafariUA).engine.webkit).toBeTruthy()
  expect(UA(SafariUA).browser.safari).toBeTruthy()
  expect(UA(SafariUA).browser.chrome).toBeFalsy()
  expect(UA(SafariUA).system.mac).toBeTruthy()

  const lowSafariUA = 'Mozilla/5.0 (Macintosh; U; PPC Mac OS X;en) AppleWebKit/124 (KHTML, like Gecko) Safari/125.1'
  expect(UA(lowSafariUA).browser.safari).toBe(1.2)
  expect(UA(lowSafariUA).system.mac).toBeTruthy()
  expect(UA(lowSafariUA).browser.ver).toBe(1.2)

  const lowSafariUA2 = 'Mozilla/5.0 (iPhone; CPU iPhone OS 9.0 like Mac OS X; en_US) AppleWebKit/1 (KHTML, like Gecko) Mobile/1 Safari/1 iPhone/1 EtsyInc/4.21 rv:42100.74.0'
  expect(UA(lowSafariUA2).browser.safari).toBe(1)

  const lowSafariUA3 = 'Mozilla/5.0 (Macintosh; U; PPC Mac OS X;en) AppleWebKit/312 (KHTML, like Gecko) Safari/312.1'
  expect(UA(lowSafariUA3).browser.safari).toBe(1.3)

  const lowSafariUA4 = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_4) AppleWebKit/536.30.1 (KHTML, like Gecko) Safari/536.30.1'
  expect(UA(lowSafariUA4).browser.safari).toBe(2)

  const OperaUA = 'Opera/9.64 (Windows NT 6.0; U; Edition IBIS; zh-cn) Presto/2.1.1'
  expect(UA(OperaUA).browser.opera).toBeTruthy()
  expect(UA(OperaUA).engine.presto).toBeTruthy()
  expect(UA(OperaUA).system.win).toBe('vista')

  const newOperaUA = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36 OPR/43.0.2442.991'
  expect(UA(newOperaUA).browser.opera).toBe(43)
  expect(UA(newOperaUA).engine.webkit).toBeTruthy()

  const IEUA = 'Mozilla/5.0 (Windows NT 6.3; WOW64; Trident/7.0; .NET4.0E; .NET4.0C; rv:11.0) like Gecko'
  expect(UA(IEUA).browser.ie).toBeTruthy()
  expect(UA(IEUA).browser.chrome).toBeFalsy()
  expect(UA(IEUA).engine.trident).toBeTruthy()
  expect(UA(IEUA).engine.webkit).toBeFalsy()

  const IE6UA = 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1)'
  expect(UA(IE6UA).browser.ie).toBeTruthy()
  expect(UA(IE6UA).engine.trident).toBeTruthy()
  expect(UA(IE6UA).system.win).toBe('xp')

  const FirefoxUA = 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:8.0.1) Gecko/20100101 Firefox/8.0.1'
  expect(UA(FirefoxUA).browser.firefox).toBeTruthy()
  expect(UA(FirefoxUA).engine.trident).toBeFalsy()
  expect(UA(FirefoxUA).browser.chrome).toBeFalsy()
  expect(UA(FirefoxUA).engine.gecko).toBeTruthy()
  expect(UA(FirefoxUA).system.win).toBeTruthy()
  expect(UA(FirefoxUA).browser.ver).toBeTruthy()

  const KonquerorUA = 'Mozilla/5.0 (compatible; Konqueror/4.1; OpenBSD) KHTML/4.1.4 (like Gecko)'
  expect(UA(KonquerorUA).browser.konq).toBeTruthy()
  expect(UA(KonquerorUA).engine.khtml).toBe(4.1)
  expect(UA(KonquerorUA).engine.ver).toBeTruthy()
  expect(UA(KonquerorUA).engine.ver).toBeTruthy()

  const LinuxUA = 'Mozilla/5.0 (Linux; U) AppleWebKit/537.4 (KHTML, like Gecko) Chrome/22.0.1229.79 Safari/537.4'
  expect(UA(LinuxUA).browser.chrome).toBeTruthy()
  expect(UA(LinuxUA).system.linux).toBeTruthy()

  // Netscape Navigator 9.1 on Windows 9x
  // https://developers.whatismybrowser.com/useragents/parse/30665-netscape-navigator-windows-gecko
  const WindowMEUA = 'Mozilla/5.0 (Windows; U; Win 9x 4.90; SG; rv:1.9.2.4) Gecko/20101104 Netscape/9.1.0285'
  expect(UA(WindowMEUA).engine.gecko).toBeTruthy()
  expect(UA(WindowMEUA).system.win).toBe('me')

  const mockWindowMEUA = 'Mozilla/5.0 (Windows; U; Win 8x 4.90; SG; rv:1.9.2.4) Gecko/20101104 Netscape/9.1.0285'
  expect(UA(mockWindowMEUA).system.win).not.toBe('me')

  const symbinaUA = 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 Nokia5800d-1/60.0.003; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/533.4 (KHTML, like Gecko) NokiaBrowser/7.3.1.33 Mobile Safari/533.4'
  expect(UA(symbinaUA).isPC).toBeFalsy()
  expect(UA(symbinaUA).isPhone).toBeTruthy()
  expect(UA().isPC).toBeTruthy()
})
