module.exports = {
  extends: [
    './legacy',
    './rules/es6'
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'script',
  }
};
