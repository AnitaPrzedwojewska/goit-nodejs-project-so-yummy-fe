import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/goit-nodejs-project-so-yummy-fe",
  plugins: [react()],
});
