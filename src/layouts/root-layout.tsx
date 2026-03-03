import { Link, Outlet } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import { ThemeToggle } from '@/components/theme-toggle'
import { LanguageSwitcher } from '@/components/language-switcher'
import { useAppStore } from '@/stores/app-store'
import { useEffect } from 'react'

export function RootLayout() {
  const { t } = useTranslation()
  const { theme, language } = useAppStore()
  const { i18n } = useTranslation()

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove('light', 'dark')
    root.classList.add(theme)
  }, [theme])

  useEffect(() => {
    if (i18n.language !== language) {
      i18n.changeLanguage(language)
    }
  }, [language, i18n])

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-14 items-center">
          <nav className="flex flex-1 items-center justify-between">
            <div className="flex items-center gap-6">
              <Link
                to="/"
                className="text-lg font-semibold hover:underline"
              >
                React Template
              </Link>
              <div className="flex items-center gap-4">
                <Link
                  to="/"
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  activeProps={{ className: 'text-foreground font-semibold' }}
                >
                  {t('common.home')}
                </Link>
                <Link
                  to="/about"
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  activeProps={{ className: 'text-foreground font-semibold' }}
                >
                  {t('common.about')}
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <LanguageSwitcher />
              <ThemeToggle />
            </div>
          </nav>
        </div>
      </header>
      <main className="container mx-auto py-6">
        <Outlet />
      </main>
    </div>
  )
}