module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: [
    "standard-with-typescript",
    "eslint:recommended", 
    "plugin:react/recommended", 
    "plugin:prettier/recommended"
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    "project": ["path/to/your/tsconfig/file"]
  },
  plugins: [
    'react'
  ],
  rules: {
    "react/react-in-jsx-scope": "off"
  },
  "settings": {
      "react": {
        "version": "detect"
      }
    },
}
