const eslintNativeRules = require("./eslint-native-rules");
const eslintNativeRulesDisabledByPrettier = require("./eslint-native-rules-disabled-by-prettier");
const eslintNativeRulesDisabledForSpecFiles = require("./eslint-native-rules-disabled-for-spec-files");
const eslintNativeRulesRestrictedByPrettier = require("./eslint-native-rules-restricted-by-prettier");
const eslintPluginPrettierRules = require("./eslint-plugin-prettier-rules");

module.exports = {
  extends: ["prettier"],
  overrides: [
    {
      files: ["*.spec.js", "*.spec.ts"],
      rules: {
        ...eslintNativeRulesDisabledForSpecFiles,
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["json", "prettier"],
  rules: {
    ...eslintNativeRules,
    ...eslintNativeRulesDisabledByPrettier,
    ...eslintNativeRulesRestrictedByPrettier,
    ...eslintPluginPrettierRules,
    "json/*": ["error"],
  },
};
