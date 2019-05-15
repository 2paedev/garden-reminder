module.exports = {
  moduleFileExtensions: ['js', 'jsx', 'json', 'vue'],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    '^.+\\.jsx?$': 'babel-jest'
  },
  transformIgnorePatterns: ['/node_modules/'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  snapshotSerializers: ['jest-serializer-vue'],
  testMatch: ['**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)'],
  testURL: 'http://localhost/',
  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname']
}

//module.exports = {
//  moduleFileExtensions: ['js', 'jsx', 'json', 'vue'],
//  transform: {
//    '^.+\\.vue$': 'vue-jest',
//    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
//    '^.+\\.jsx?$': 'babel-jest'
//  },
//  moduleNameMapper: {
//    '^@/(.*)$': '<rootDir>/src/$1',
//    '@app/constants(.*)$': '<rootDir>/src/shared/constants/$1',
//    'vuejs-datepicker/dist/locale': '<rootDir>/__mocks__/datepicker-es-locale.js'
//  },
//  snapshotSerializers: ['jest-serializer-vue'],
//  clearMocks: true,
//  testMatch: ['**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)'],
//  setupFiles: ['./tests/unit/setup.js'],
//  testURL: 'http://localhost/',
//  collectCoverage: true,
//  collectCoverageFrom: ['src/**/*.{js,vue}'],
//  coveragePathIgnorePatterns: [
//    'src/main.js',
//    'src/shared/constants',
//    'src/shared/langs/',
//   'src/assets/'
//  ]
//}
