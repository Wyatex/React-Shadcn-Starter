import { useTranslation } from 'react-i18next'

export function HomePage() {
  const { t } = useTranslation()

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">
          {t('home.title')}
        </h1>
        <p className="text-lg text-muted-foreground">
          {t('home.description')}
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <h3 className="text-lg font-semibold"><span className="mr-2 text-[22px] icon-[devicon--vitejs]"></span>Vite</h3>
          <p className="text-sm text-muted-foreground">
            Lightning-fast build tool with HMR
          </p>
        </div>
        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <h3 className="text-lg font-semibold"><span className="mr-2 text-[22px] icon-[devicon--typescript]"></span>TypeScript</h3>
          <p className="text-sm text-muted-foreground">
            Type-safe JavaScript development
          </p>
        </div>
        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <h3 className="text-lg font-semibold"><span className="mr-2 text-[22px] icon-[devicon--zustand]"></span>Zustand</h3>
          <p className="text-sm text-muted-foreground">
            Lightweight state management with persistence
          </p>
        </div>
        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <h3 className="text-lg font-semibold"><span className="mr-2 text-[22px] icon-[material-icon-theme--i18n]"></span>i18next</h3>
          <p className="text-sm text-muted-foreground">
            Internationalization framework
          </p>
        </div>
        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <h3 className="text-lg font-semibold"><span className="mr-2 text-[22px] icon-[simple-icons--tanstack]"></span>TanStack Router</h3>
          <p className="text-sm text-muted-foreground">
            Fully typed routing solution
          </p>
        </div>
        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <h3 className="text-lg font-semibold"><span className="mr-2 text-[22px] icon-[simple-icons--shadcnui]"></span>shadcn/ui</h3>
          <p className="text-sm text-muted-foreground">
            Beautiful, accessible UI components
          </p>
        </div>
        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <h3 className="text-lg font-semibold"><span className="mr-2 text-[22px] icon-[devicon--tailwindcss]"></span>tailwind iconify</h3>
          <p className="text-sm text-muted-foreground">
            usage: <pre><code>
              &lt;span class="icon-[mdi-light--home]"&gt;&lt;/span&gt;
              </code></pre>
          </p>
        </div>
      </div>
    </div>
  )
}
