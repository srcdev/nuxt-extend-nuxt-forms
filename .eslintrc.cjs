module.exports = {
  "root": true,
  "extends": [
    "@nuxtjs/eslint-config-typescript",
    "plugin:prettier/recommended",
    "plugin:storybook/recommended"
  ],
  "rules": {
    "vue/multi-word-component-names": "off",
    "vue/no-multiple-template-root": "off",
    "@typescript-eslint/no-unused-vars": "off"
  }
};
