const path = require('path')

module.exports = {
  rootDir: path.resolve(__dirname, '../../'),
  moduleFileExtensions: [
    'js',
    'json'
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest'
  },
  coverageDirectory: '<rootDir>/test/unit/coverage',
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js}',
    '!src/main.js',
    '!src/index.js',
    '!**/node_modules/**'
  ]
}
