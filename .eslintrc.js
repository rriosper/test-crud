module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: ["plugin:react/recommended", "plugin:prettier/recommended"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
    allowImportExportEverywhere: true,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  plugins: ["react", "jest", "prettier"],
  rules: {
    "prettier/prettier": "error",
    "import/extensions": "off",
    "react/jsx-props-no-spreading": "off",
    "import/no-extraneous-dependencies": "off",
    "import/prefer-default-export": "off",
    "react/display-name": "off",
    "import/no-unresolved": [
      "error",
      {
        ignore: [
          "^#components$",
          "^#constants$",
          "^#utils$",
          "^#scenes$",
          "^#services$",
          "^#store$",
          "^#theme$",
        ],
      },
    ],
  },
};
