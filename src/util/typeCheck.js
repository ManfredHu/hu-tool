/**
 * check undefined
 * @param {any} v check target
 */
function isUndef (v) {
  return v === undefined || v === null
}

/**
 * Detection has been defined
 * @param {any} v check target
 */
function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return Object.prototype.toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return Object.prototype.toString.call(v) === '[object RegExp]'
}

/**
 * check string and number types
 * @param {any} v check target
 */
function isPrimitive (v) {
  return typeof v === 'string' || typeof v === 'number'
}

function isFuncton (v) {
  return typeof v === 'function'
}

function isArray (v) {
  return Array.isArray(v)
}

function isEmptyObj (obj) {
  for (const i in obj) {
    if (obj.hasOwnProperty(i)) {
      return false
    }
  }
  return true
}
/**
 * typeof can not check NaN and Infinity
 * isFinite can not detect string "0"
 * The combination of the two methods can detect the correct number type
 * @param {any} v check target
 */
function isNumber (v) {
  return typeof v === 'number' && isFinite(v)
}

export default {
  isUndef,
  isDef,
  isTrue,
  isFalse,
  isPrimitive,
  isObject,
  isPlainObject,
  isRegExp,
  isFuncton,
  isArray,
  isNumber,
  isEmptyObj
}
