module.exports = {
  extends: [
    './legacy',
    './rules/es6',
    './rules/imports',
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'script',
  }
};
