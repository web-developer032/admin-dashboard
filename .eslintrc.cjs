module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "prettier",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "react/prop-types": "off",
    "rule-name": "off",
    "no-undef": "error", // This line enforces the rule to catch undefined variables
    "no-unused-vars": "warn", // Optional: Warns about unused variables
    "no-unused-vars": [
      "warn",
      { vars: "all", args: "after-used", ignoreRestSiblings: true },
    ],
    "no-console": ["warn", { allow: ["warn", "error"] }],
    "no-debugger": "error",
    "no-undef": "error",
    eqeqeq: ["error", "always"],
    curly: ["error", "all"],
    // "consistent-return": "error",
    "no-implicit-coercion": "warn",

    // React-specific rules
    "react/jsx-no-target-blank": "warn",
    "react/jsx-boolean-value": ["error", "always"],
    "react/self-closing-comp": "error",
    "react/prop-types": "warn",
    "react/react-in-jsx-scope": "off", // In React 17+, JSX import is not required

    // React-Hooks specific rules
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    // Additional strict linting rules
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "no-use-before-define": "error",
    "no-duplicate-imports": "error",
    "no-var": "error",
    "prefer-const": "warn",
    "prefer-template": "warn",
    "arrow-body-style": ["warn", "as-needed"],
    "no-multi-spaces": "warn",
  },
};
