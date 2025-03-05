/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: ["**/*.js"],
    rules: {
      "no-unused-vars": "warn",      
      "semi": ["error", "always"],  
      "quotes": ["error", "double"], 
    },
  },
];
