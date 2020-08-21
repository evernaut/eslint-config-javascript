const evernautEslintConfigBase = require("./src/index");

module.exports = {
  ...evernautEslintConfigBase,
  env: {
    es6: true,
    node: true,
  },
  root: true,
};
