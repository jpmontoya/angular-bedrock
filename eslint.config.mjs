import globals from "globals";
import tseslint from "typescript-eslint";


/** @type {import('eslint').Linter.Config[]} */

export default [
  {
    ignores: [
      ".angular",
      "node_modules",
      ".vscode"
    ]
  },
  {
    files: ['src/*.js'],
  },
  {
    languageOptions: {
      globals: globals.browser,
      parser: tseslint.parser,
    },
    plugins: {
      "@typescript-eslint": tseslint.plugin,
    },
  },
  ...tseslint.configs.recommended
];
