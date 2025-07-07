import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Permette l'accesso da altre macchine nella stessa rete
    port: 3000, // O qualsiasi altra porta tu preferisca
    strictPort: true, // Forza l'uso della porta specificata
  },
})