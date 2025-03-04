
/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.js"],
    rules: {
      "no-unused-vars": "warn",
      "semi": ["error", "always"],
      "quotes": ["error","double"],
    },
  },
];

