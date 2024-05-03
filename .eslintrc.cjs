module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb', 'airbnb-typescript', 'airbnb/hooks', 'plugin:@typescript-eslint/recommended', 'next/core-web-vitals'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint', 'react', 'formatjs'],
  rules: {
    'import/extensions': [2, {
      ts: 'never', tsx: 'never', json: 'always', png: 'always', jpg: 'always',
    }],
    'react/function-component-definition': 'off',
    'import/prefer-default-export': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',
    'react/display-name': 'off',
    'arrow-body-style': 'off',
    'react/require-default-props': 'off',
    'formatjs/no-offset': 'error',
    'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 0 }],
    'no-restricted-imports': ['error', {
      patterns: ['@mui/*', 'react-intl*'],
    }],
  },
  overrides: [
    {
      files: ['**/*-ui-kit/**', '**/language/**'],
      rules: {
        'no-restricted-imports': 'off',
      },
    },
    {
      files: ['**/api/**'],
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
      },
    },
  ],
};
