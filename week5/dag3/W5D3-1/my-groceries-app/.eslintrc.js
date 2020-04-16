module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "plugin:react/recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        "react/jsx-filename-extension": [
            2,
            {
              "extensions": [".js", ".jsx"]
            }
          ],
          "react/forbid-prop-types": [0],
          "react/require-default-props": [0],
          "global-require": [0],
          "no-underscore-dangle": [0]
    }
};