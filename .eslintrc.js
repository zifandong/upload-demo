module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:vue/vue3-essential', 'airbnb-base', 'prettier'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['vue', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'no-useless-return': 0, // 禁止多余的 return 语句 0：关闭规则
    'no-plusplus': 0, // 禁止使用单目运算符
    'import/prefer-default-export': 0,
  },
  settings: {
    'import/resolver': {
      alias: [['@', './src']],
    },
  },
}
