module.exports = {
  extends: [
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'plugin:storybook/recommended'
  ],
  parserOptions: {
    project: './tsconfig.eslint.json',
  },
  rules: {
    'jsx-quotes': ['error', 'prefer-single'],
    'import/no-extraneous-dependencies': [
        'error',
        {
          "devDependencies": ["**/*.stories.*"],
          "peerDependencies": true
        }
     ],
     'react/function-component-definition': [
        2,
        { namedComponents: "arrow-function" }
      ]
  }
};