import vue from "@vitejs/plugin-vue";
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";
// import eslintPlugin from "vite-plugin-eslint";
import Components from "unplugin-vue-components/vite";
import { defineConfig } from "vite";
import * as path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), Components({ resolvers: [AntDesignVueResolver()] })],
  base: "/vite/dist/",
  server: {
    host: "0.0.0.0",
    open: true,
    proxy: {
      "/api": {
        target: "https://fm2i.jxjttz.com/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
});
