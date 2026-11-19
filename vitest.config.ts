import { defineConfig } from "vitest/config";
import { fileURLToPath } from "node:url";

export default defineConfig({
  resolve: {
    alias: {
      "@src": fileURLToPath(new URL("./src", import.meta.url)),
      "@reporters": fileURLToPath(new URL("./src/reporters", import.meta.url)),
    },
  },
});