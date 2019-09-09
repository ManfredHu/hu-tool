import _phone from './util/phone'
import _typeCheck from './util/typeCheck'
import _userAgent from './util/userAgent'
import _url from './util/url'
import Cookies from 'js-cookie'

export const Phone = _phone
export const TypeCheck = _typeCheck
export const UA = _userAgent
export const URL = _url

// rename
export const is = _typeCheck
export const phone = Phone
export const ua = UA
export const url = URL
export const cookie = Cookies
export const Cookie = Cookies

export default {
  Phone,
  TypeCheck,
  UA,
  URL,
  is,
  phone,
  ua,
  url,
  Cookie: Cookies,
  cookie
}
