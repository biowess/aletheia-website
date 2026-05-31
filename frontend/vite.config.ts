import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/aletheia-website/',
  plugins: [react()],

  // Static site output configuration
  build: {
    outDir: 'dist',
    // Performance: ≥90, Accessibility: ≥95, Best Practices: ≥95, SEO: ≥95
    minify: 'terser',
    cssMinify: true,
    sourcemap: false,
    // Produce clean output without vendor prefix leaking
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        // Chunk splitting for optimal caching
        manualChunks: (id: string) => {
          if (id.includes('react') || id.includes('react-dom') || id.includes('react-router-dom')) return 'vendor-react'
          if (id.includes('framer-motion')) return 'vendor-motion'
          if (id.includes('react-helmet-async')) return 'vendor-helmet'
        },
      },
    },
  },

  // Path aliases
  resolve: {
    alias: {
      '@':           path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@pages':      path.resolve(__dirname, './src/pages'),
      '@tokens':     path.resolve(__dirname, './src/tokens.css'),
    },
  },

  // Dev server
  server: {
    port: 5173,
    open: false,
  },

  // Preview server (for `npm run preview`)
  preview: {
    port: 4173,
  },
})
