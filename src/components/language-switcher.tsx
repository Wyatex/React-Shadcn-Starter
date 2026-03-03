import { useTranslation } from 'react-i18next'
import { Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useAppStore } from '@/stores/app-store'

export function LanguageSwitcher() {
  const { t } = useTranslation()
  const { language, setLanguage } = useAppStore()
  const { i18n } = useTranslation()

  const handleLanguageChange = (lang: 'en' | 'zh') => {
    setLanguage(lang)
    i18n.changeLanguage(lang)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Globe className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => handleLanguageChange('en')}
          className={language === 'en' ? 'bg-accent' : ''}
        >
          {t('common.english')}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleLanguageChange('zh')}
          className={language === 'zh' ? 'bg-accent' : ''}
        >
          {t('common.chinese')}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}