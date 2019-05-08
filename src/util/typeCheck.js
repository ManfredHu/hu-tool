const is = require('is-type-of');

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
  return objectToString(obj) === '[object Object]'
}

function isRegExp (v) {
  return objectToString(v) === '[object RegExp]'
}

/**
 * check boolean , string , number and symbol types
 * @param {any} v check target
 */
function isPrimitive (v) {
  return is.primitive(v)
}

function isFuncton (v) {
  return typeof v === 'function'
}

function isArray (v) {
  return is.array(v)
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

function objectToString(o) {
  return Object.prototype.toString.call(o);
}

// /Volumes/guo/vue/src/shared/util.js
export default {
  ...is,
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
