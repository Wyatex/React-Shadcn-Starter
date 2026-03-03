import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import autoImport from 'unplugin-auto-import/vite'
import iconsResolver from 'unplugin-icons/resolver'
import inspect from 'vite-plugin-inspect'
import { tanstackRouter } from '@tanstack/router-plugin/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tanstackRouter({
      target: 'react',
      autoCodeSplitting: true,
      routesDirectory: './src/router/routes',
      generatedRouteTree: './src/router/routeTree.gen.ts',
    }),
    react(),
    tailwindcss(),
    inspect(),
    autoImport({
      /**
       * 匹配 .ts, .tsx, .js, .jsx 以及它们带 query 参数的形式
       * 因为autoCodeSplitting会给文件添加query参数
       */
      include: [
        /\.[tj]sx?(?:\?.*)?$/,
      ],
      imports: ['react'],
      dts: 'src/types/auto-imports.d.ts',
      resolvers: [
        iconsResolver({
          prefix: 'Icon',
          extension: 'jsx',
        }),
      ],
      defaultExportByFilename: true,
      dirs: ['./src/components/ui/**', './src/components/**'],
    }),
  ],
  resolve: {
    tsconfigPaths: true,
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
})
