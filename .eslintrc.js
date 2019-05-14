module.exports = {
  root: true,

  env: {
    node: true
  },

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/require-default-prop': 'error'
  },
  overrides: [
    {
      files: ['__tests__/*.js', '*.spec.js', '__mocks__/*.js'],
      rules: {
        'no-unused-expressions': 'off'
      },
      env: {
        jest: true,
        node: true
      }
    }
  ],

  parserOptions: {
    parser: 'babel-eslint'
  },

  extends: ['plugin:jest/recommended', 'plugin:vue/recommended', '@vue/prettier']
}
