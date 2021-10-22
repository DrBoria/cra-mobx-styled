module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react-hooks', 'prettier'],
  extends: ['airbnb-typescript', 'prettier', 'prettier/@typescript-eslint', 'prettier/react'],
  parserOptions: {
    project: './tsconfig.json',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', 'd.ts', 'spec.ts', 'spec.tsx'],
      },
      'babel-module': {},
      typescript: {},
    },
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx', 'spec.ts', 'spec.tsx', 'd.ts'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', 'spec.ts', 'spec.tsx', 'd.ts'],
    },
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/jsx-props-no-spreading': 0,
    'react/prop-types': 0,
    'react/no-danger': 0,
    'no-debugger': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'react/no-array-index-key': 0,
    'no-param-reassign': ['error', { props: false }],
    'no-underscore-dangle': 0,
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    'import/prefer-default-export': 0,
    'spaced-comment': 0,
    'import/order': [
      'error',
      {
        'newlines-between': 'always-and-inside-groups',
        groups: [['builtin', 'external', 'internal'], 'parent', 'index', 'sibling'],
        pathGroups: [
          {
            pattern: './*.module.scss',
            group: 'sibling',
            position: 'after',
          },
        ],
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/stories.*', '**/.storybook/**/*.*'],
        peerDependencies: true,
      },
    ],
  },
};
