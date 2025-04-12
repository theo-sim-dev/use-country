// @ts-check
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import reactHooks from "eslint-plugin-react-hooks"; // Import the react-hooks plugin

export default tseslint.config(
  {
    ignores: ["dist/**", "node_modules/**"],
    plugins: {"react-hooks": reactHooks},
    rules: {
      "arrow-body-style": ["error", "always"],
      curly: ["error", "all"],
      "react-hooks/exhaustive-deps": "warn",
    },
  },
  eslint.configs.recommended,
  tseslint.configs.recommended,
);
