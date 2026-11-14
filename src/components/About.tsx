import { Fragment, type CSSProperties } from 'react'
import { useI18n } from '../i18n'
import { Reveal } from './Reveal'
import { SectionHead } from './SectionHead'

export function About() {
  const { t } = useI18n()
  return (
    <section className="sec wrap" id="sobre">
      <SectionHead n="01" title={t.about.title} />
      <div className="about">
        <Reveal className="about-text">
          <p>{t.about.p1}</p>
          <p>{t.about.p2Before}<strong>VTEX</strong>{t.about.p2After}</p>
          <p>{t.about.p3}</p>
          <p>{t.about.p4}</p>
        </Reveal>
        <aside className="facts">
          <Reveal className="card" delay={100}>
            <h3 className="mono">{t.about.summaryTitle}</h3>
            <dl>
              {t.about.facts.map((f) => (
                <Fragment key={f.dt}>
                  <dt>{f.dt}</dt><dd>{f.dd}</dd>
                </Fragment>
              ))}
            </dl>
          </Reveal>
          <Reveal className="card" delay={200}>
            <h3 className="mono">{t.about.languagesTitle}</h3>
            <ul className="langs">
              {t.about.languages.map((l) => (
                <li key={l.name}>
                  <span>{l.name}</span><em>{l.level}</em>
                  <b style={{ '--w': `${l.pct}%` } as CSSProperties} />
                </li>
              ))}
            </ul>
          </Reveal>
        </aside>
      </div>
    </section>
  )
}
