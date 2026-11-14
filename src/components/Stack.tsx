import { useI18n } from '../i18n'
import { Reveal } from './Reveal'
import { SectionHead } from './SectionHead'

export function Stack() {
  const { t } = useI18n()
  return (
    <section className="sec wrap" id="stack">
      <SectionHead n="02" title={t.stack.title} />
      <div className="stack">
        {t.stack.groups.map((g, i) => (
          <Reveal as="article" className="card" key={i} delay={i * 100}>
            <h3>{g.title} {g.badge && <small className="mono">{g.badge}</small>}</h3>
            <ul className={`tags ${g.big ? 'big' : ''}`}>
              {g.items.map((s) => <li key={s}>{s}</li>)}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
