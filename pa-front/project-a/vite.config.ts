import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import checker from "vite-plugin-checker";

// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
import vuetify from 'vite-plugin-vuetify'

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
    vuetify,
  ],
  resolve: {
    alias: {
      '@': '/src', // ここでエイリアスを設定
    },
  },
})
