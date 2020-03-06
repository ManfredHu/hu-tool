declare namespace "hu-tool" {
  interface Phone {
    isMobile(type: string | number): boolean;
    getPurePhone(type: string | number): string;
    beautifyPhone(type: string | number): string;
    mosaic(
      phone: string,
      mosaicChar?: string,
      mosaicStart?: number,
      mosaicEnd?: number
    ): string;
  }

  const Phone: Phone;
  const phone: Phone;

  interface is {
    isUndef(type: any): boolean;
    isDef(type: any): boolean;
    isTrue(type: any): boolean;
    isFalse(type: any): boolean;
    isPrimitive(type: any): boolean;
    isObject(type: any): boolean;
    isPlainObject(type: any): boolean;
    isRegExp(type: any): boolean;
    isFuncton(type: any): boolean;
    isArray(type: any): boolean;
    isNumber(type: any): boolean;
    isEmptyObj(type: any): boolean;

    // https://www.npmjs.com/package/is-type-of
    array(type: any): boolean;
    boolean(type: any): boolean;
    null(type: any): boolean;
    nullOrUndefined(type: any): boolean;
    number(type: any): boolean;
    string(type: any): boolean;
    symbol(type: any): boolean;
    undefined(type: any): boolean;
    regExp(type: any): boolean;
    object(type: any): boolean;
    date(type: any): boolean;
    error(type: any): boolean;
    function(type: any): boolean;
    primitive(type: any): boolean;
    buffer(type: any): boolean;
    stream(type: any): boolean;
    readableStream(type: any): boolean;
    writableStream(type: any): boolean;
    duplexStream(type: any): boolean;
    class(type: any): boolean;
    finite(type: any): boolean;
    NaN(type: any): boolean;
    generator(type: any): boolean;
    generatorFunction(type: any): boolean;
    promise(type: any): boolean;
    int(type: any): boolean;
    double(type: any): boolean;
    int32(type: any): boolean;
    long(type: any): boolean;
    Long(type: any): boolean;
  }

  const is: is;
  const TypeCheck: is;

  interface Parse {
    protocol: string;
    hash: string;
    query: Object;
    pathname: string;
    auth: string;
    host: string;
    port: string;
    hostname: string;
    password: string;
    username: string;
    origin: string;
    href: string;
  }

  // can URL(url) or new URL()
  interface URL_Static {
    new (link?: string, option?: Object): URL;
    new (link?: string): URL;

    /** 作为函数使用 */
    (link?: string): URL;
    (option?: object): URL;

    _parsedObj: Parse;
    getQueryParam(key: string): string;
    getUrlParam(key: string): string;
    getHashParam(key: string): string;
    format(option: Object): string;
    getAllQueryParams(): object;
    getAllHashParams(): object;
    validUrl(): boolean;
    addQueryParam(params: string | string[] | object): string;
    removeQueryParam(params: string | string[] | object): string;
    addHashParam(params: string | string[] | object): string;
    removeHashParam(params: string | string[] | object): string;
    hashFormat(allHashParams: object): string;
    removeProtocal(): string;
  }

  interface URL {
    _parsedObj: Parse;
    getQueryParam(key: string): string;
    getUrlParam(key: string): string;
    getHashParam(key: string): string;
    format(option: Object): string;
    getAllQueryParams(): object;
    getAllHashParams(): object;
    validUrl(): boolean;
    addQueryParam(params: string | string[] | object): string;
    removeQueryParam(params: string | string[] | object): string;
    addHashParam(params: string | string[] | object): string;
    removeHashParam(params: string | string[] | object): string;
    hashFormat(allHashParams: object): string;
    removeProtocal(): string;
  }
  const URL: URL_Static;
  const url: URL_Static;

  interface engine {
    trident: number;
    gecko: number;
    webkit: number;
    khtml: number;
    presto: number;
    ver: string | null;
  }

  interface browser {
    ie: number;
    firefox: number;
    safari: number;
    konq: number;
    opera: number;
    chrome: number;
    ver: string | null;
  }

  interface system {
    win: boolean;
    mac: boolean;
    x11: boolean;
  }

  interface UAReturn {
    ua: String;
    engine?: Object;
    browser: {
      ie: Number;
      firefox: Number;
      safari: Number;
      konq: Number;
      opera: Number;
      chrome: Number;
      ver: String; // 具体的版本号
    };
    system: {
      win: Boolean;
      mac: Boolean;
      x11: Boolean;
    };
    isWeixin: Boolean;
    isAndroid: Boolean;
    isIOS: Boolean;
    isPC: Boolean;
    isPhone: Boolean;
    isMiniProgram: Boolean;
  }
  function UA(userAgentInfo?: String, platform?: String): UAReturn;
  function ua(userAgentInfo?: String, platform?: String): UAReturn;
}
