import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@ui": path.resolve(__dirname, "../../packages/ui/src"),
      "@hooks": path.resolve(__dirname, "../../packages/hooks/src"),
      "@utils": path.resolve(__dirname, "../../packages/utils/src"),
    },
  },
  server: {
    fs: {
      allow: [".."],
    },
  },
});
