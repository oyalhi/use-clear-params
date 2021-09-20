module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:eslint-comments/recommended',
    'plugin:import/recommended',
    'prettier',
  ],
  ignorePatterns: ['src/generated/**/*', 'jest.setup.ts'],
  overrides: [
    {
      files: '**/*.{ts,tsx}',
      rules: {
        'no-undef': 'off',
      },
    },
    {
      files: '**/*{.,_}{test,spec,stories}.{js,jsx,ts,tsx}',
      rules: {
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-hooks',
    'eslint-comments',
    'sort-destructure-keys',
    'sort-keys-fix',
    '@typescript-eslint',
    'unused-imports',
    'import',
  ],
  rules: {
    '@typescript-eslint/no-redeclare': ['error'],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/no-use-before-define': ['error'],
    camelcase: 'off',
    'import/extensions': 'off',
    'import/order': [
      'error',
      {
        alphabetize: {
          caseInsensitive: true,
          order: 'asc',
        },
        groups: ['builtin', 'external', 'internal', 'sibling', 'parent'],
        'newlines-between': 'always',
        pathGroups: [
          {
            group: 'external',
            pattern: 'react',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
      },
    ],
    'import/prefer-default-export': 'warn',
    'max-len': [
      'error',
      {
        code: 120,
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        tabWidth: 2,
      },
    ],
    'no-nested-ternary': 'off',
    'no-param-reassign': [
      'error',
      {
        // for redux, setting the state
        ignorePropertyModificationsFor: ['state'],
        props: true,
      },
    ],
    'no-redeclare': 'off',
    'no-shadow': 'off',
    'no-underscore-dangle': 'off',
    'no-unused-vars': 'off',
    'no-use-before-define': 'off',
    quotes: ['error', 'single', { avoidEscape: true }],
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react/destructuring-assignment': 'warn',
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.tsx', '.jsx', '.js'],
      },
    ],
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-sort-props': [
      'error',
      {
        callbacksLast: true,
        ignoreCase: false,
        noSortAlphabetically: false,
        reservedFirst: true,
        shorthandFirst: true,
        shorthandLast: false,
      },
    ],
    'react/no-array-index-key': 'warn',
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'react/sort-comp': 'warn',
    'react/state-in-constructor': 'off',
    'react/static-property-placement': 'off',
    'sort-destructure-keys/sort-destructure-keys': [2, { caseSensitive: false }],
    'sort-keys-fix/sort-keys-fix': 'warn',
    'unused-imports/no-unused-imports': 'error',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
