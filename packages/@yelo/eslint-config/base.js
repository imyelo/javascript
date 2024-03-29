module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    warnOnUnsupportedTypeScriptVersion: false,
  },
  extends: [
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'airbnb',
    'prettier',
  ],
  plugins: ['@typescript-eslint', 'import', 'react-hooks', 'hooks', 'simple-import-sort'],
  rules: {
    'no-void': 'off',
    'no-empty': 'off',
    'no-shadow': 'off',
    'no-undef': 'off',
    'arrow-body-style': 'off',
    'no-nested-ternary': 'off',
    'no-implicit-coercion': 'off',
    'no-restricted-syntax': 'off',
    'no-underscore-dangle': ['error', { allowAfterThis: true }],
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    // https://github.com/import-js/eslint-plugin-import/issues/2111
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-quotes': ['error', 'prefer-double'],
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/jsx-filename-extension': ['warn', { extensions: ['.jsx', '.tsx'] }],
    'react/jsx-no-useless-fragment': ['error', { allowExpressions: true }],
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-curly-newline': 'off',
    'react/require-default-props': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'hooks/sort': 'warn',
    'implicit-arrow-linebreak': 'off',
    // allow param reassign with immer
    'no-param-reassign': ['error', { props: true, ignorePropertyModificationsFor: ['draft'] }],
    // https://github.com/typescript-eslint/typescript-eslint/issues/2540
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': ['error'],
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          [
            // react
            '^react',
            // node builtin
            '^node:',
            // others
            '^@?\\w',
            '^@src',
            // side effects
            '^\\u0000',
            // parent
            '^\\.\\.(?!/?$)',
            '^\\.\\./?$',
            // same directory
            '^\\./(?=.*/)(?!/?$)',
            '^\\.(?!/?$)',
            '^\\./?$',
            // assets
            '^.+\\.?(css|jpg|png|svg)$',
          ],
        ],
      },
    ],
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      rules: {
        'no-unused-vars': ['off'],
      },
    },
  ],
  settings: {
    react: {
      version: 'detect',
    },
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
}
