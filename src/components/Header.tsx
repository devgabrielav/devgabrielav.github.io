import { useState } from 'react'
import { useScroll, useScrollSpy, usePalette, scrollToTop } from '../hooks'
import { FlagIcon, LANG_OPTIONS, useI18n } from '../i18n'

const ids = ['sobre', 'stack', 'projetos', 'contato']

export function Header() {
  const { progress, scrolled } = useScroll()
  const spy = useScrollSpy(ids)
  const active = progress > 0.03 ? spy : ''
  const [open, setOpen] = useState(false)
  const [, togglePalette] = usePalette()
  const { lang, setLang, t } = useI18n()

  return (
    <header className={`nav ${scrolled ? 'scrolled' : ''}`} id="top">
      <div className="progress" style={{ transform: `scaleX(${progress})` }} />
      <div className="wrap nav-in">
        <a href="#" className="logo" aria-label={t.nav.homeAria} onClick={scrollToTop}>gv<span>.</span></a>
        <nav aria-label={t.nav.mainAria}>
          <ul className={`links ${open ? 'open' : ''}`} id="links">
            {t.nav.links.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`} className={active === l.id ? 'on' : ''} onClick={() => setOpen(false)}>{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="nav-actions">
          <div className="lang-switch" role="group" aria-label={t.nav.langAria}>
            {LANG_OPTIONS.map((opt) => (
              <button
                key={opt.code}
                type="button"
                className={`lang-btn ${lang === opt.code ? 'on' : ''}`}
                onClick={() => setLang(opt.code)}
                aria-label={opt.label}
                aria-pressed={lang === opt.code}
                title={opt.label}
              >
                <FlagIcon code={opt.code} />
              </button>
            ))}
          </div>
          <button className="theme" type="button" onClick={togglePalette} aria-label={t.nav.themeAria} title={t.nav.themeTitle}>
            <span /><span />
          </button>
          <button className="burger" type="button" aria-label={t.nav.burgerAria} aria-expanded={open} aria-controls="links" onClick={() => setOpen((o) => !o)}>
            <i /><i />
          </button>
        </div>
      </div>
    </header>
  )
}
