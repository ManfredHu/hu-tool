import check from './typeCheck';
/**
 * check the phone number
 * must start with the number 1 (in China mainland)
 * The second number must be one of the numbers 34578
 * @param {any} v
 */
function isMobile(v) {
  return (/^1[3|4|5|7|8][0-9]\d{8}$/.test(v));
}

/**
 * get pure number from phone
 * For example: '138a0c013s8000' format to '13800138000'
 * @param {string} v
 */
function getPurePhone(v) {
  let temp;
  if (typeof v !== 'string') {
    temp = String(v);
  } else {
    temp = v;
  }
  if (/^\[object\s\S+]$/.test(temp) || !temp.replace) {
    throw new Error('value must be string');
  }
  return temp.replace(/\D/g, '').substr(0, 11);
}

/**
 * format the phone number
 * For example: '13800138000' format to '138 0013 8000'
 * @param {string} v
 */
function beautifyPhone(v) {
  let rst = [];
  let resultStr = getPurePhone(v);
  rst.push(resultStr.substring(0, 3));
  rst.push(resultStr.substring(3, 7));
  rst.push(resultStr.substring(7, 11));

  while (rst[rst.length - 1] === '')
    rst.pop();

  return rst.join(' ');
}

/**
 * mosaic the phone by mosaic character
 * For example: '13800138000' format to '138 **** 8000'
 * @param {string} phone
 * @param {string} mosaicChar
 * @param {string} mosaicStart
 * @param {string} mosaicEnd
 */
function mosaic(phone, mosaicChar = '*', mosaicStart = 3, mosaicEnd = 7) {
  if (typeof mosaicChar !== 'string') {
    mosaicChar = String(mosaicChar);
  }
  if (!check.isNumber(mosaicStart) || !check.isNumber(mosaicEnd)) {
    throw new Error('mosaicStart or mosaicEnd must be number');
  }
  if (mosaicStart > mosaicEnd) {
    throw new Error('mosaicEnd must bigger than mosaicStart');
  }
  let temp = getPurePhone(phone);
  return temp.substr(0, mosaicStart) + mosaicChar.repeat(mosaicEnd - mosaicStart) + temp.substr(mosaicEnd, temp.length - mosaicEnd);
}

export default {
  isMobile,
  getPurePhone,
  beautifyPhone,
  mosaic
}
