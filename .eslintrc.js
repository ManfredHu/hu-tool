module.exports = {
  extends: [
    "standard"
  ],
  rules: {
    "import/no-named-as-default": 0,
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 圆括号后不要有空格 如 import(/* webpackChunkName: "Detail" */ './views/Detail.vue')
    'space-in-parens': 'off',
    // import (/* webpackChunkName: 'Detail' */ './views/Detail.vue') 这种会报错，忽略
    // https: //eslint.org/docs/rules/func-call-spacing
    'func-call-spacing': 'off',
    // 函数小括号(前要有空格
    'space-before-function-paren': 'off',
    'newIsCap': 'off',
    "standard/computed-property-even-spacing": 'off'
  }
}
