module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'plugin:i18next/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'i18next'],
  rules: {
    'react/jsx-indent': [2, 2],
    indent: [2, 2],
    'import/prefer-default-export': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
    'max-len': [
      'warn',
      {
        code: 120,
        tabWidth: 2,
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'no-unused-vars': 'off',
    'react/require-default-props': 'off',
    'jsx-quotes': ['error', 'prefer-single'],
    'react/function-component-definition': 'off',
    'react/jsx-props-no-spreading': 'warn',
    'object-curly-newline': 'off',
    'arrow-body-style': 'off',
    'no-shadow': 'off',
    // 'eslintreact/jsx-curly-brace-presence': [
    //   0,
    //   { props: 'always', children: 'always', propElementValues: 'always' },
    // ],
    'implicit-arrow-linebreak': 'warn',
    'no-underscore-dangle': 'off',
    'no-undef': 'off',
    'import/no-extraneous-dependencies': 'off',
    'i18next/no-literal-string': ['warn', { markupOnly: true, ignoreAttribute: ['data-testid'] }],
    'react/jsx-wrap-multilines': ['warn', { prop: 'ignore' }],
  },
  globals: {
    __IS_DEV__: true,
  },
  // Для определенного типа файлов помогает переопределить какие-то правила
  overrides: [
    {
      files: ['**/src/**/*.test.{ts,tsx}'],
      rules: {
        'i18next/no-literal-string': 'off',
      },
    },
  ],
};
