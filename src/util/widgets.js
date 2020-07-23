/**
 * 可以把形如7.0.16.1700 的版本号格式化为7.0.16
 * @param {string} version 版本号
 * @param {number} limitLen 限制长度，默认为3
 */
export function formatVersion(version, limitLen = 3) {
  if (!version) return ''
  const temp = version.split(/_|-|\./)
  let rst = temp
  if (Array.isArray(temp) && temp.length > limitLen) {
    rst = temp.slice(0, limitLen)
  }
  return rst.join('.')
}
