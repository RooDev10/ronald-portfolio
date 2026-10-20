import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, fileURLToPath(new URL('.', import.meta.url)), '')

  const host = env.VITE_HOST?.toLowerCase()
  const serverHost = !env.VITE_HOST || host === 'true' ? true : host === 'false' ? false : env.VITE_HOST

  return {
    plugins: [react()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    base: env.VITE_BASE || '/',
    server: {
      host: serverHost,
      port: Number(env.VITE_PORT) || 5173,
    },
    test: {
      environment: 'jsdom',
      globals: false,
      setupFiles: ['./src/test/setup.js'],
      css: true,
    },
  }
})