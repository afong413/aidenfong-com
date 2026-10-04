import { defineConfig, globalIgnores } from "eslint/config"
import nextVitals from "eslint-config-next/core-web-vitals"
import nextTs from "eslint-config-next/typescript"
import * as mdx from "eslint-plugin-mdx"
import prettier from "eslint-plugin-prettier/recommended"
import simpleImportSort from "eslint-plugin-simple-import-sort"

const eslintConfig = defineConfig([
  ...nextVitals.map((config) =>
    config.name === "next" ?
      { ...config, files: [...config.files, "**/*.mdx"] }
    : config,
  ),
  ...nextTs,
  {
    ...mdx.flat,
    processor: mdx.createRemarkProcessor({ lintCodeBlocks: true }),
  },
  {
    files: ["**/*.mdx"],
    rules: { "mdx/remark": "error", "import/no-unresolved": "error" },
  },
  {
    files: ["**/*.{js,jsx,mdx,ts,tsx}"],
    rules: { "@typescript-eslint/no-unused-vars": "error" },
  },
  {
    files: ["**/*.{ts,tsx}"],
    rules: {
      "import/consistent-type-specifier-style": ["error", "prefer-top-level"],
      "@typescript-eslint/explicit-function-return-type": [
        "error",
        {
          allowConciseArrowFunctionExpressionsStartingWithVoid: true,
          allowExpressions: true,
          allowIIFEs: true,
        },
      ],
      "@typescript-eslint/consistent-type-imports": [
        "error",
        { prefer: "type-imports", fixStyle: "separate-type-imports" },
      ],
    },
  },
  {
    ...mdx.flatCodeBlocks,
    rules: { ...mdx.flatCodeBlocks.rules, "no-unused-vars": "off" },
  },
  {
    plugins: { "simple-import-sort": simpleImportSort },
    rules: {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
    },
  },
  prettier,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
])

export default eslintConfig
