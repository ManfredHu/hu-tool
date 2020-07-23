import {
  formatVersion
} from '@/util/widgets'

function client (userAgentInfo = '', platform = '') {
  let engine = { // 呈现引擎
    trident: 0,
    gecko: 0,
    webkit: 0,
    khtml: 0,
    presto: 0,
    ver: null // 具体的版本号
  }
  let browser = { // 浏览器
    ie: 0,
    firefox: 0,
    safari: 0,
    konq: 0,
    opera: 0,
    chrome: 0,
    ver: null // 具体的版本号
  }
  let system = { // 操作系统
    win: false,
    mac: false,
    x11: false
  }

  let ua = userAgentInfo
  if (!ua) {
    if (window && window.navigator && window.navigator.userAgent) {
      // 默认值
      ua = window.navigator.userAgent
    } else {
      throw new Error('not window global variable, please pass userAgentInfo param')
    }
  }

  if (/AppleWebKit\/([^(\s]+)/.test(ua)) { // 匹配Webkit内核浏览器（Chrome、Safari、新Opera）
    engine.ver = RegExp['$1']
    engine.webkit = parseFloat(engine.ver, 2)

    if (/OPR\/(\S+)/.test(ua)) { // 确定是不是引用了Webkit内核的Opera
      browser.ver = RegExp['$1']
      browser.opera = parseFloat(browser.ver, 2)
    } else if (/Chrome\/(\S+)/.test(ua)) { // 确定是不是Chrome
      browser.ver = RegExp['$1']
      browser.chrome = parseFloat(browser.ver, 2)
    } else if (/Version\/(\S+)/.test(ua)) { // 确定是不是高版本（3+）的Safari
      browser.ver = RegExp['$1']
      browser.safari = parseFloat(browser.ver, 2)
    } else { // 近似地确定低版本Safafi版本号
      let SafariVersion = 1
      if (engine.webkit < 100) {
        SafariVersion = 1
      } else if (engine.webkit < 312) {
        SafariVersion = 1.2
      } else if (engine.webkit < 412) {
        SafariVersion = 1.3
      } else {
        SafariVersion = 2
      }
      browser.safari = browser.ver = SafariVersion
    }
  } /* istanbul ignore next */ else if (window && window.opera) { // 只匹配拥有Presto内核的老版本Opera 5+(12.15-)
    engine.ver = browser.ver = window.opera.version()
    engine.presto = browser.opera = parseFloat(engine.ver, 2)
  } else if (/Opera[/\s](\S+)/.test(ua)) { // 匹配不支持window.opera的Opera 5-或伪装的Opera
    engine.ver = browser.ver = RegExp['$1']
    engine.presto = browser.opera = parseFloat(engine.ver, 2)
  } else if (/KHTML\/(\S+)/.test(ua) || /Konqueror\/([^;]+)/.test(ua)) {
    engine.ver = browser.ver = RegExp['$1']
    engine.khtml = browser.konq = parseFloat(engine.ver, 2)
  } else if (/rv:([^)]+)\) Gecko\/\d{8}/.test(ua)) { // 判断是不是基于Gecko内核
    engine.ver = RegExp['$1']
    engine.gecko = parseFloat(engine.ver, 2)
    if (/Firefox\/(\S+)/.test(ua)) { // 确定是不是Firefox
      browser.ver = RegExp['$1']
      browser.firefox = parseFloat(browser.ver, 2)
    }
  } else if (/Trident\/([\d.]+)/.test(ua)) { // 确定是否是Trident内核的浏览器（IE8+）
    engine.ver = RegExp['$1']
    engine.trident = parseFloat(engine.ver, 2)
    if (/rv:([\d.]+)/.test(ua) || /MSIE ([^;]+)/.test(ua)) { // 匹配IE8-11+
      browser.ver = RegExp['$1']
      browser.ie = parseFloat(browser.ver, 2)
    }
  } else if (/MSIE ([^;]+)/.test(ua)) { // 匹配IE6、IE7
    browser.ver = RegExp['$1']
    browser.ie = parseFloat(browser.ver, 2)
    engine.ver = browser.ie - 4.0 // 模拟IE6、IE7中的Trident值
    engine.trident = parseFloat(engine.ver, 2)
  }

  let p = platform || (window && window.navigator && navigator.platform) // 判断操作系统
  system.win = p.indexOf('Win') === 0 || Boolean(/win/ig.test(ua))
  system.mac = p.indexOf('Mac') === 0 || Boolean(/mac/ig.test(ua))
  system.linux = (p.indexOf('X11') === 0) || (p.indexOf('Linux') === 0) || Boolean(/linux|x11/ig.test(ua))
  if (system.win) {
    if (/Win(?:dows)?\s([^;:]{2})\s([^;]+)/g.test(ua)) {
      if (RegExp['$1'] === 'NT') {
        system.win = ({
          '5.0': '2000',
          '5.1': 'xp',
          '6.0': 'vista',
          '6.1': '7',
          '6.2': '8',
          '6.3': '8.1',
          '10': '10'
        })[RegExp['$2']] || 'NT'
      } else if (RegExp['$1'] === '9x') {
        system.win = 'me'
      } else {
        system.win = RegExp['$1']
      }
    }
  }

  // 特殊逻辑
  const isWeixin = /MicroMessenger/ig.test(ua)
  const isAndroid = /android|adr/ig.test(ua)
  const isIOS = /iphone|ipad|ipod|ios/ig.test(ua)
  // all iphone , android , winphone and nikia symbian
  const isPC = !(isIOS || isAndroid || /(?:Windows Phone)/.test(ua) || /(?:SymbianOS)/.test(ua))
  const isPhone = !isPC
  const isMiniProgram = /miniProgram/ig.test(ua)
  const isWechatDevtools = /wechatdevtools/ig.test(ua)

  // 与小程序字段做兼容
  // 平台
  const mpPlatform = isWechatDevtools ? 'devtools' : (isIOS ? 'ios': (isAndroid ? 'android' : ''))
  // 微信客户端版本
  const versionObj = /MicroMessenger\/([^(\s]+)/ig.exec(ua)
  const mpVersion = versionObj ? formatVersion(versionObj[1]) : ''

  // 小程序的system字段如 system: "Android 5.0" 或 system: "iOS 13.5.1"
  // iOS系统版本号从类似 Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) 取
  // 安卓系统从类似 Mozilla/5.0 (Linux; Android 7.1.1; vivo Y75 Build/N6F26Q; wv) 取
  let mpSystem = ''
  let mpSystemRst = isIOS ? /iPhone\s+OS\s+([^\s;]+)/ig.exec(ua) : /Android\s+([^\s;]+)/ig.exec(ua)
  if (mpSystemRst && typeof mpSystemRst[1] === 'string') {
    let versionTemp = formatVersion(mpSystemRst[1])
    mpSystem = `${isIOS ? 'iOS' : 'Android'} ${versionTemp}`
  }

  // 品牌型号引入会导致库体积增大过多，需要另外支持
  // brand model

  return {
    userAgent: ua, // 用户浏览器Ua原文
    engine, // 包含着用户浏览器引擎（内核）信息
    browser, // 包括用户浏览器品牌与版本信息
    system, // 用户所用操作系统及版本信息
    isWeixin, // 是否是微信
    isAndroid, // 是否是安卓
    isIOS, // 是否是IOS
    isPC, // 是否是PC
    isPhone,
    isMiniProgram, // 微信小程序
    mpPlatform,
    mpVersion,
    mpSystem
  }
};

export default client
