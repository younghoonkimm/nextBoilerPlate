module.exports = {
  env: {
    es2021: true,
    jest: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      ecmaVersion: 2020,
      modules: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  rules: {
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/no-explicit-any": ["off"],
    quotes: [2, "double", { avoidEscape: false }],
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "import/prefer-default-export": "off",
    "react/jsx-filename-extension": [0],
    "import/extensions": ["off"],
  },
};
