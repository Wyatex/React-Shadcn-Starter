import { defineConfig } from 'vite'
import { fileURLToPath } from 'node:url'
import react from '@vitejs/plugin-react'
import icons from 'unplugin-icons/vite'
import inspect from 'vite-plugin-inspect'
import autoImport from 'unplugin-auto-import/vite'
import iconsResolver from 'unplugin-icons/resolver'
import unocss from 'unocss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['module:@preact/signals-react-transform']],
      },
    }),
    icons({
      compiler: 'jsx',
      jsx: 'react',
    }),
    inspect(),
    autoImport({
      dts: 'src/types/auto-imports.d.ts',
      resolvers: [
        iconsResolver({
          prefix: 'Icon',
          extension: 'jsx',
        })
      ]
    }),
    unocss()
  ],
  resolve: {
    alias: {
      '~': fileURLToPath(new URL('./', import.meta.url)),
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
})
