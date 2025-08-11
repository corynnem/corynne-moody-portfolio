module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "react", "import", "prettier"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-type-checked",
    'plugin:@next/next/recommended',
    'eslint:recommended',
    'prettier'
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json"],
  },
  env: {
    browser: true,
    node: true,
  },
  rules: {
    // common
    'no-undef': 'error',
    'no-param-reassign': 'warn',
    'no-irregular-whitespace': 'warn',
    'no-console': ['error', { allow: ['warn', 'info', 'error'] }],
    'max-len': [
    'warn',
    {
      ignoreUrls: true,
      ignoreComments: true,
      ignoreStrings: true,
    },
  ],

    // typescript
    "@typescript-eslint/no-unused-vars": "warn",

    // react
    'react/no-danger': 'off',
    'react/prop-types': 'warn',

    // imports
    "import/no-unresolved": "warn",
    "import/prefer-default-export": "off",
    "import/no-named-as-default": "off",
    indent: ["error", 4],
  },
};
