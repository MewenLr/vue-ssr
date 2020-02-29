module.exports = {
  'env': {
    'browser': true,
    'es6': true,
    'mocha': true,
    'node': true,
  },
  'settings': {
    'import/resolver': 'webpack',
  },
  'extends': [
    'airbnb-base',
    'plugin:vue/essential',
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly',
    'expect': true,
  },
  // 'parser': 'vue-eslint-parser',
  'parserOptions': {
    'ecmaVersion': 2018,
    'sourceType': 'module',
    // 'parser': 'babel-eslint',
    'allowImportExportEverywhere': true,
  },
  'plugins': [
    'vue',
  ],
  'rules': {
    'linebreak-style': 'off',
    'semi': ['error', 'never'],
    'quotes': ['error', 'single'],
    'import/no-extraneous-dependencies': ['error', { 'devDependencies': true }]
  }
};
