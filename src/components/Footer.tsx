import { scrollToTop } from '../hooks'
import { useI18n } from '../i18n'

export function Footer() {
  const { t } = useI18n()
  return (
    <footer className="foot wrap">
      <p>© {new Date().getFullYear()} Gabriela Vicentini · {t.footer.madeWith}</p>
      <a href="#" onClick={scrollToTop}>{t.footer.backToTop}</a>
    </footer>
  )
}
