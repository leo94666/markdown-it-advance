module.exports = {
  root: false,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'max-len': ['error', { code: 300 }],
    'quotes': [1, 'double'], //引号类型 `` "" ''
    'semi': [2, 'never'], // 语句强制分号结尾
    'space-before-function-paren': [0, 'always'] //函数定义时括号前面要不要有空格
  },
};
