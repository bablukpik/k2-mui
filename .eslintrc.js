module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'airbnb-typescript',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  ignorePatterns: ['.eslintrc.js'],
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.tsx'] }],
    'react/react-in-jsx-scope': 'off',
    "object-curly-newline": ["error", {
      "ObjectExpression": { "multiline": true, "minProperties": 3 }, // object
      "ObjectPattern": { "multiline": true, "minProperties": 2 }, // object destructuring
      "ImportDeclaration": { "multiline": true, "minProperties": 2 },
      "ExportDeclaration": { "multiline": true, "minProperties": 3 }
    }],
    "array-element-newline": ["error", {
      "ArrayExpression": { "multiline": true, "minItems": 3 }, // array
      "ArrayPattern": { "multiline": true, "minItems": 3 }, // array destructuring
    }],
    'react/jsx-props-no-spreading': 'off',
    'max-len': ['error', {
      code: 120,
      ignoreComments: true,
      ignoreUrls: true,
    }],
  },
};
