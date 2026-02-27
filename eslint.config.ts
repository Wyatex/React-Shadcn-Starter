import antfu from '@antfu/eslint-config'
import { importX } from 'eslint-plugin-import-x'

export default antfu({
  type: 'app',
  typescript: true,
  react: true,
  unocss: true,
  plugins: {
    'import-x': importX,
  },
   rules: {
    'ts/ban-ts-comment': 'off',
    // 禁用 perfectionist/sort-imports 规则
    'perfectionist/sort-imports': 'off',
    // 配置 import-x/order 规则
    'import-x/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
        pathGroups: [
          {
            pattern: '@/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '~/**',
            group: 'internal',
            position: 'after',
          },
        ],
      },
    ],
  },
})