module.exports = {
  "accessor-pairs": "error",
  "array-callback-return": "error",
  "arrow-body-style": "error",
  "block-scoped-var": "error",
  "callback-return": "off",
  camelcase: "error",
  "capitalized-comments": [
    "error",
    "always",
    { ignoreConsecutiveComments: true },
  ],
  "class-methods-use-this": "error",
  complexity: "error",
  "consistent-return": "error",
  "consistent-this": ["error", "that"],
  "constructor-super": "error",
  "default-case": "error",
  "default-param-last": "error",
  "dot-notation": "error",
  eqeqeq: "error",
  "for-direction": "error",
  // Unnecessary
  "func-name-matching": "off",
  "func-names": "error",
  "func-style": "error",
  "getter-return": "error",
  "global-require": "error",
  "guard-for-in": "error",
  "handle-callback-err": "error",
  // Unnecessary
  "id-blacklist": "off",
  // Unnecessary
  "id-length": "off",
  // Unnecessary
  "id-match": "off",
  // Unnecessary
  "init-declarations": "off",
  "lines-between-class-members": "error",
  "max-classes-per-file": "error",
  "max-depth": "error",
  "max-lines": "error",
  // Unnecessary
  "max-lines-per-function": "off",
  "max-nested-callbacks": "error",
  "max-params": ["error", 1],
  "max-statements": "error",
  "max-statements-per-line": "error",
  "multiline-comment-style": "error",
  "new-cap": "error",
  "no-alert": "warn",
  "no-array-constructor": "error",
  "no-async-promise-executor": "error",
  "no-await-in-loop": "error",
  "no-bitwise": "error",
  "no-buffer-constructor": "error",
  "no-caller": "error",
  "no-case-declarations": "error",
  "no-class-assign": "error",
  "no-compare-neg-zero": "error",
  "no-cond-assign": "error",
  "no-console": "error",
  "no-const-assign": "error",
  "no-constant-condition": "error",
  "no-continue": "error",
  "no-control-regex": "error",
  "no-debugger": "error",
  "no-delete-var": "error",
  // Unnecessary
  "no-div-regex": "off",
  "no-dupe-args": "error",
  "no-dupe-class-members": "error",
  "no-dupe-keys": "error",
  "no-duplicate-case": "error",
  "no-duplicate-imports": "error",
  "no-else-return": "error",
  "no-empty": "error",
  "no-empty-character-class": "error",
  "no-empty-function": "error",
  "no-empty-pattern": "error",
  "no-eq-null": "error",
  "no-eval": "error",
  "no-ex-assign": "error",
  "no-extend-native": "error",
  "no-extra-bind": "error",
  "no-extra-boolean-cast": "error",
  "no-extra-label": "error",
  "no-fallthrough": "error",
  "no-func-assign": "error",
  "no-global-assign": "error",
  // Unnecessary
  "no-implicit-coercion": "off",
  "no-implicit-globals": "error",
  "no-implied-eval": "error",
  "no-import-assign": "error",
  "no-inner-declarations": "error",
  "no-invalid-regexp": "error",
  "no-invalid-this": "error",
  "no-irregular-whitespace": "error",
  "no-iterator": "error",
  "no-label-var": "error",
  "no-labels": "error",
  "no-lone-blocks": "error",
  "no-lonely-if": "error",
  "no-loop-func": "error",
  // Unnecessary
  "no-magic-numbers": "off",
  "no-misleading-character-class": "error",
  "no-mixed-requires": "error",
  "no-multi-assign": "error",
  "no-multi-str": "error",
  // Unnecessary
  "no-negated-condition": "off",
  "no-nested-ternary": "error",
  "no-new": "error",
  "no-new-func": "error",
  "no-new-object": "error",
  "no-new-require": "error",
  "no-new-symbol": "error",
  "no-new-wrappers": "error",
  "no-obj-calls": "error",
  "no-octal": "error",
  "no-octal-escape": "error",
  "no-param-reassign": "error",
  "no-path-concat": "error",
  "no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
  "no-process-env": "error",
  "no-process-exit": "error",
  "no-proto": "error",
  "no-prototype-builtins": "error",
  "no-redeclare": "error",
  "no-regex-spaces": "error",
  // Unnecessary
  "no-restricted-globals": "off",
  // Unnecessary
  "no-restricted-imports": "off",
  // Unnecessary
  "no-restricted-modules": "off",
  // Unnecessary
  "no-restricted-properties": "off",
  // Unnecessary
  "no-restricted-syntax": "off",
  "no-return-assign": "error",
  "no-return-await": "error",
  "no-script-url": "error",
  "no-self-assign": "error",
  "no-self-compare": "error",
  "no-sequences": "error",
  "no-shadow": "error",
  "no-shadow-restricted-names": "error",
  "no-sparse-arrays": "error",
  "no-sync": "error",
  "no-template-curly-in-string": "error",
  // Unnecessary
  "no-ternary": "off",
  "no-this-before-super": "error",
  "no-throw-literal": "error",
  "no-undef": "error",
  "no-undef-init": "error",
  "no-undefined": "error",
  // Unnecessary
  "no-underscore-dangle": "off",
  "no-unmodified-loop-condition": "error",
  "no-unneeded-ternary": "error",
  "no-unreachable": "error",
  "no-unsafe-finally": "error",
  "no-unsafe-negation": "error",
  "no-unused-expressions": "error",
  "no-unused-labels": "error",
  "no-unused-vars": [
    "error",
    {
      argsIgnorePattern: "^_",
      caughtErrorsIgnorePattern: "^_",
      varsIgnorePattern: "^_",
    },
  ],
  "no-use-before-define": "error",
  "no-useless-call": "error",
  "no-useless-catch": "error",
  "no-useless-computed-key": "error",
  "no-useless-concat": "error",
  "no-useless-constructor": "error",
  "no-useless-escape": "error",
  "no-useless-rename": "error",
  "no-useless-return": "error",
  "no-var": "error",
  "no-void": "error",
  "no-warning-comments": "error",
  "no-with": "error",
  "object-shorthand": "error",
  "one-var": ["error", "never"],
  "operator-assignment": "error",
  "prefer-arrow-callback": "error",
  "prefer-const": "error",
  "prefer-destructuring": "error",
  // Unnecessary
  "prefer-named-capture-group": "off",
  "prefer-numeric-literals": "error",
  "prefer-object-spread": "error",
  "prefer-promise-reject-errors": "error",
  "prefer-regex-literals": "error",
  "prefer-rest-params": "error",
  "prefer-spread": "error",
  "prefer-template": "error",
  radix: "error",
  "require-atomic-updates": "error",
  // Unnecessary
  "require-await": "off",
  "require-unicode-regexp": "error",
  "require-yield": "error",
  "rest-spread-spacing": "error",
  // Would prefer to sort by declaration first then by type (when this is supported)
  "sort-imports": ["error", { ignoreDeclarationSort: true }],
  "sort-keys": "error",
  // Unnecessary
  "sort-vars": "off",
  strict: "error",
  "symbol-description": "error",
  "use-isnan": "error",
  "valid-typeof": "error",
  // Unnecessary
  "vars-on-top": "off",
  yoda: "error",
};
