const base = require('./base')

module.exports = {
  ...base,
  rules: {
    ...base.rules,
    'import/extensions': [
      'error',
      'always',
      {
        ignorePackages: true,
        pattern: {
          ts: 'never',
          tsx: 'never',
        },
      },
    ],
  },
}
