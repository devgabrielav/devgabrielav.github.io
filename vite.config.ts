import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Site de usuário (devgabrielav.github.io) é servido na raiz, então base = '/'
export default defineConfig({ plugins: [react()], base: '/' })
