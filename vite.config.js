import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/Portfolio2025/',
  plugins: [react()],
  server: {
    open: false, // ✅ Prevents browser from opening
    port: 3000   // ✅ (Optional) You can set a custom port if you want
  }
})