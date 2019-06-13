declare module "hu-tool" {
  interface Phone {
    isMobile(type: string | number): boolean
    getPurePhone(type: string | number): string
    beautifyPhone(type: string | number): string
    mosaic(phone: string, mosaicChar?: string, mosaicStart?: number, mosaicEnd?: number): string
  }

  const Phone: Phone
  const phone: Phone

  interface is {
    isUndef(type: any): boolean
    isDef(type: any): boolean
    isTrue(type: any): boolean
    isFalse(type: any): boolean
    isPrimitive(type: any): boolean
    isObject(type: any): boolean
    isPlainObject(type: any): boolean
    isRegExp(type: any): boolean
    isFuncton(type: any): boolean
    isArray(type: any): boolean
    isNumber(type: any): boolean
    isEmptyObj(type: any): boolean

    // https://www.npmjs.com/package/is-type-of
    array(type: any): boolean
    boolean(type: any): boolean
    null(type: any): boolean
    nullOrUndefined(type: any): boolean
    number(type: any): boolean
    string(type: any): boolean
    symbol(type: any): boolean
    undefined(type: any): boolean
    regExp(type: any): boolean
    object(type: any): boolean
    date(type: any): boolean
    error(type: any): boolean
    function(type: any): boolean
    primitive(type: any): boolean
    buffer(type: any): boolean
    stream(type: any): boolean
    readableStream(type: any): boolean
    writableStream(type: any): boolean
    duplexStream(type: any): boolean
    class(type: any): boolean
    finite(type: any): boolean
    NaN(type: any): boolean
    generator(type: any): boolean
    generatorFunction(type: any): boolean
    promise(type: any): boolean
    int(type: any): boolean
    double(type: any): boolean
    int32(type: any): boolean
    long(type: any): boolean
    Long(type: any): boolean
  }

  const is: is
  const TypeCheck: is

  interface Parse {
    protocol: string
    hash: string
    query: Object
    pathname: string
    auth: string
    host: string
    port: string
    hostname: string
    password: string
    username: string
    origin: string
    href: string
  }

  // can URL(url) or new URL()
  interface URL_Static {
    new (link: string, option: Object): URL
  }

  interface URL {
    _parsedObj: Parse
    getQueryParam(key:string):string
    getUrlParam(key:string):string
    getHashParam(key:string):string
    format(option:Object):string
  }
  const URL: URL
  const url: URL

  interface engine {
    trident: number
    gecko: number
    webkit: number
    khtml: number
    presto: number
    ver: string | null
  }

  interface browser {
    ie: number
    firefox: number
    safari: number
    konq: number
    opera: number
    chrome: number
    ver: string | null
  }

  interface system {
    win: boolean
    mac: boolean
    x11: boolean
  }

  interface UA {
    engine: engine
    browser: browser
    userAgent: string
    system: system
    isWeixin: boolean
    isAndroid: boolean
    isIOS: boolean
    isPC: boolean
    isPhone: boolean
  }
  const UA: UA
  const ua: UA
}
