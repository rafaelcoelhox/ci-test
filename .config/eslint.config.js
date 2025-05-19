module.exports = {
  extends: ["eslint:recommended", "plugin:security/recommended"],
  plugins: ["security"],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
  },
};
