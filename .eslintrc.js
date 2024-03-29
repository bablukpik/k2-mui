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
    'no-continue': 'off',
    'no-mixed-operators': 'off',
    'import/no-cycle': 'off',
    'no-param-reassign': 'off',
    'no-restricted-syntax': 'off',
    'class-methods-use-this': 'off',
    'import/prefer-default-export': 'off',
    'import/no-named-as-default': 0,
    'no-console': 'off',
    'no-underscore-dangle': 'off',
    'camelcase': 'off',
    'react/forbid-prop-types': 'off',
    'import/no-unresolved': 'off',
    'no-unused-vars': ['error', {
      args: 'none',
      ignoreRestSiblings: true,
      varsIgnorePattern: '^_$',
    }],
    'no-unused-expressions': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/no-did-update-set-state': 'warn',
    'import/extensions': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/no-namespace': 'off',
    'react/jsx-filename-extension': [1, { 'extensions': ['.jsx', '.tsx'] }],
    '@typescript-eslint/no-empty-function': 'off',
    'react/require-default-props': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'import/no-extraneous-dependencies': 'off',
    'sort-imports': [
      'error',
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'single', 'multiple'],
      },
    ],
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
    'max-len': ['error', {
      code: 120,
      ignoreComments: true,
      ignoreUrls: true,
    }],
    'jsx-quotes': ["error", "prefer-double"],
    "comma-dangle": "off",
    "@typescript-eslint/comma-dangle": "off"
  },
};
