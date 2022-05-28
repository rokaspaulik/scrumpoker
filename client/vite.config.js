import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import socket from './src/socket'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()]
})
