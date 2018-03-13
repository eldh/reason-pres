
module.exports = {
    extends: '@dooer/eslint-config-dooer',
    rules: {
      'react/jsx-no-literals': 0,
      'no-shadow': 2, // disallow shadowing of names such as arguments
      'import/no-unresolved': 2,
    },
  }