import {
  createRouter,
  createBrowserHistory,
  createHashHistory,
  createMemoryHistory,
  type RouterHistory,
} from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'

let history: RouterHistory

// 使用if判断env可以进行打包摇树优化，避免引入不必要的history实现
if (import.meta.env.VITE_ROUTING_TYPE === 'hash') {
  history = createHashHistory()
} else if (import.meta.env.VITE_ROUTING_TYPE === 'memory') {
  history = createMemoryHistory()
} else {
  history = createBrowserHistory()
}

export const router = createRouter({
  routeTree,
  history,
})
