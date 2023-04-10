import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "src/index.tsx",
      name: "HeadlessContextMenu",
      fileName: (format) => `headless-context-menu.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
    },
  },
  server: {
    open: "/example",
  },
});