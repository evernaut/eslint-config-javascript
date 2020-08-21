module.exports = {
  curly: ["error", "all"],
  "lines-around-comment": [
    "error",
    {
      afterBlockComment: false,
      afterLineComment: false,
      allowArrayEnd: true,
      allowArrayStart: true,
      allowBlockEnd: true,
      allowBlockStart: true,
      allowObjectEnd: true,
      allowObjectStart: true,
      beforeBlockComment: true,
    },
  ],
  "max-len": "off",
  "no-confusing-arrow": "off",
  "no-mixed-operators": [
    "error",
    {
      groups: [["&&", "||"]],
    },
  ],
  "no-tabs": "error",
  "no-unexpected-multiline": "error",
  quotes: "off",
};
