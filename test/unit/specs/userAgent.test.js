import ua from '@/util/userAgent'

test('check isAndroid', () => {
  const androidUA  = 'Mozilla/5.0 (Linux; Android 8.0.0; G8142 Build/47.1.A.12.270) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.87 Mobile Safari/537.36';
  expect(ua(androidUA).isAndroid).toBeTruthy();
  expect(ua(androidUA).isIOS).toBeFalsy();

  const wechatUA = 'Mozilla/5.0 (Linux; Android 8.1.0; PAHM00 Build/OPM1.171019.026; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/62.0.3202.84 Mobile Safari/537.36 MicroMessenger/6.7.3.1360(0x26070336) NetType/WIFI Language/zh_CN Process/appbrand2';
  expect(ua(wechatUA).isWeixin).toBeTruthy();
  expect(ua(wechatUA).isAndroid).toBeTruthy();

  const macUA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36';
  expect(ua(macUA).isWeixin).toBeFalsy();
  expect(ua(macUA).isAndroid).toBeFalsy();

  const QQBroswerUA = 'Mozilla/5.0 (Windows NT 6.3; WOW64; Trident/7.0; .NET4.0E; .NET4.0C; QQBrowser/8.0.2959.400; rv:11.0) like Gecko';
  expect(ua(QQBroswerUA).isWeixin).toBeFalsy();
  expect(ua(QQBroswerUA).system.win).toBe('8.1');

  // coverage test
  const EdgeUA = 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36(KHTML, like Gecko UBrowser/4.0.3214.0) Chrome/36.0.1985.143 Safari/537.36 Edge/12.0';
  expect(ua(EdgeUA).isWeixin).toBeFalsy();
  expect(ua(EdgeUA).system.win).toBe('8.1');

  const ChromeUA = 'Mozilla/5.0 (Windows: U; Windows NT 5.1; en-US) AppleWebKit/525.19 (KHTML, like Gecko) Chrome/1.0.154.48 Safari/525.19';
  expect(ua(ChromeUA).system.win).toBe('xp');
  expect(ua(ChromeUA).browser.chrome).toBeTruthy();
  expect(ua(ChromeUA).browser.opera).toBeFalsy();

  const SafariUA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_4) AppleWebKit/536.30.1 (KHTML, like Gecko) Version/6.0.5 Safari/536.30.1';
  expect(ua(SafariUA).engine.webkit).toBeTruthy();
  expect(ua(SafariUA).browser.safari).toBeTruthy();
  expect(ua(SafariUA).browser.chrome).toBeFalsy();
  expect(ua(SafariUA).system.mac).toBeTruthy();

  const lowSafariUA = 'Mozilla/5.0 (Macintosh; U; PPC Mac OS X;en) AppleWebKit/124 (KHTML, like Gecko) Safari/125.1';
  expect(ua(lowSafariUA).browser.safari).toBe(1.2);
  expect(ua(lowSafariUA).system.mac).toBeTruthy();
  expect(ua(lowSafariUA).browser.ver).toBe(1.2);

  const OperaUA = 'Opera/9.64 (Windows NT 6.0; U; Edition IBIS; zh-cn) Presto/2.1.1';
  expect(ua(OperaUA).browser.opera).toBeTruthy();
  expect(ua(OperaUA).engine.presto).toBeTruthy();
  expect(ua(OperaUA).system.win).toBe("vista");

  const newOperaUA = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36 OPR/43.0.2442.991';
  expect(ua(newOperaUA).browser.opera).toBe(43);
  expect(ua(newOperaUA).engine.webkit).toBeTruthy();

  const IEUA = 'Mozilla/5.0 (Windows NT 6.3; WOW64; Trident/7.0; .NET4.0E; .NET4.0C; rv:11.0) like Gecko';
  expect(ua(IEUA).browser.ie).toBeTruthy();
  expect(ua(IEUA).browser.chrome).toBeFalsy();
  expect(ua(IEUA).engine.trident).toBeTruthy();
  expect(ua(IEUA).engine.webkit).toBeFalsy();

  const IE6UA = 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1)';
  expect(ua(IE6UA).browser.ie).toBeTruthy();
  expect(ua(IE6UA).engine.trident).toBeTruthy();
  expect(ua(IE6UA).system.win).toBe('xp');

  const FirefoxUA = 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:8.0.1) Gecko/20100101 Firefox/8.0.1';
  expect(ua(FirefoxUA).browser.firefox).toBeTruthy();
  expect(ua(FirefoxUA).engine.trident).toBeFalsy();
  expect(ua(FirefoxUA).browser.chrome).toBeFalsy();
  expect(ua(FirefoxUA).engine.gecko).toBeTruthy();
  expect(ua(FirefoxUA).system.win).toBeTruthy();
  expect(ua(FirefoxUA).browser.ver).toBeTruthy();

  const KonquerorUA = "Mozilla/5.0 (compatible; Konqueror/4.1; OpenBSD) KHTML/4.1.4 (like Gecko)";
  expect(ua(KonquerorUA).browser.konq).toBeTruthy();
  expect(ua(KonquerorUA).engine.khtml).toBe(4.1);
  expect(ua(KonquerorUA).engine.ver).toBeTruthy();
  expect(ua(KonquerorUA).engine.ver).toBeTruthy();

  const LinuxUA = 'Mozilla/5.0 (Linux; U) AppleWebKit/537.4 (KHTML, like Gecko) Chrome/22.0.1229.79 Safari/537.4';
  expect(ua(LinuxUA).browser.chrome).toBeTruthy();
  expect(ua(LinuxUA).system.linux).toBeTruthy();

  //Netscape Navigator 9.1 on Windows 9x
  //https://developers.whatismybrowser.com/useragents/parse/30665-netscape-navigator-windows-gecko
  const WindowMEUA = 'Mozilla/5.0 (Windows; U; Win 9x 4.90; SG; rv:1.9.2.4) Gecko/20101104 Netscape/9.1.0285'
  console.log(ua(WindowMEUA));
  expect(ua(WindowMEUA).engine.gecko).toBeTruthy();
  expect(ua(WindowMEUA).system.win).toBe('me');

  const mockWindowMEUA = 'Mozilla/5.0 (Windows; U; Win 8x 4.90; SG; rv:1.9.2.4) Gecko/20101104 Netscape/9.1.0285'
  expect(ua(mockWindowMEUA).system.win).not.toBe('me');
});
