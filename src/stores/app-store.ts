import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type Theme = 'light' | 'dark'
type Language = 'en' | 'zh'

interface AppState {
  theme: Theme
  language: Language
  setTheme: (theme: Theme) => void
  setLanguage: (language: Language) => void
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      theme: 'light',
      language: 'en',
      setTheme: (theme) => set({ theme }),
      setLanguage: (language) => set({ language }),
    }),
    {
      name: 'app-storage',
    }
  )
)