import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import checker from "vite-plugin-checker";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    checker({
      typescript: false,
      eslint: {
        lintCommand: 'eslint --ext .tsx,.ts,.jsx,.js .',
      },
    }),
  ],
})
