import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  root: '.',
  publicDir: 'public',
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        eventos: resolve(__dirname, 'eventos.html'),
        galeria: resolve(__dirname, 'galeria.html'),
        orcamento: resolve(__dirname, 'orcamento.html')
      }
    }
  }
})
