import { useTranslation } from 'react-i18next'

export function AboutPage() {
  const { t } = useTranslation()

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">
          {t('about.title')}
        </h1>
        <p className="text-lg text-muted-foreground">
          {t('about.description')}
        </p>
      </div>
      <div className="rounded-lg border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Features</h2>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>React 19 with TypeScript</li>
          <li>Vite for fast development and building</li>
          <li>Tailwind CSS for styling</li>
          <li>Dark/Light theme with persistence</li>
          <li>Internationalization (i18n) support</li>
          <li>Type-safe routing with TanStack Router</li>
          <li>State management with Zustand</li>
          <li>Beautiful UI components from shadcn/ui</li>
        </ul>
      </div>
    </div>
  )
}