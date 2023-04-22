module.exports = {
  extends: "@rocketseat/eslint-config/react",
  plugins: ["@emotion"],
  rules: {
    "no-unused-vars": "off",
    "prettier/prettier": [
      "error",
      {
        singleQuote: false,
      },
    ],
  },
};
