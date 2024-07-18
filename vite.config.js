import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://bhavikbhagwani.github.io/reservation_form_react",
  plugins: [react()],
})
