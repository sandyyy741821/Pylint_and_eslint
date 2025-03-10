export default [
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        window: "readonly",
        document: "readonly",
        process: "readonly"
      }
    },
    rules: {
      "semi": ["error", "always"], 
      "quotes": ["error", "double"], 
      "no-unused-vars": "warn", 
      "no-console": "warn", 
      "eqeqeq": "error", 
      "curly": "error"
    }
  }
];
