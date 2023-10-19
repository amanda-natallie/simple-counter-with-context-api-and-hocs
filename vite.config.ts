import type { InlineConfig } from 'vitest'
import { defineConfig, type UserConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

type ViteConfig = UserConfig & { test: InlineConfig }
const config: ViteConfig = {
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true,
    environment: 'jsdom',
  },
  server: {
    host: true,
    port: 3000,
  },
  build: {
    outDir: 'build',
    assetsDir: 'assets',
    manifest: true,
    minify: true,
  },
  base: './',
  resolve: {
    alias: {
      app: './src/app.tsx',
      theme: './src/theme/index.ts',
      contexts: './src/contexts/index.tsx',
      'pages/home': './src/pages/home.tsx',
      'components/components': './src/components/components.tsx',
      'components/display-value': './src/components/display-value.tsx',
      'theme/colors': './src/theme/colors.ts',
    },
  },
}
export default defineConfig(config)
