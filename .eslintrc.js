/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');

const path = require('path');

const prettierOptions = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'),
);

module.exports = {
  extends: [
    'next/core-web-vitals',
    'prettier',
    'prettier/react',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['prettier', '@typescript-eslint'],
  rules: {
    'prettier/prettier': ['error', prettierOptions],
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      rules: {
        'prettier/prettier': ['warn', prettierOptions],
        'react-hooks/exhaustive-deps': 1,
        'react/display-name': 'off',
        '@typescript-eslint/no-unused-vars': ['error'],
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        'react/self-closing-comp': ['error'],
        'react/jsx-curly-brace-presence': [
          'error',
          { props: 'never', children: 'never', propElementValues: 'always' },
        ],
      },
    },
  ],
};
