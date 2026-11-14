import { useEffect, useRef, type CSSProperties, type PointerEvent } from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6'
import { FiMail, FiArrowDown } from 'react-icons/fi'
import { profile } from '../data/profile'
import { reducedMotion } from '../hooks'
import { useI18n } from '../i18n'
import { Typewriter } from './Typewriter'

export function Hero() {
  const photo = useRef<HTMLDivElement>(null)
  const target = useRef({ x: 0, y: 0 })
  const current = useRef({ x: 0, y: 0 })
  const raf = useRef(0)
  const { lang, t } = useI18n()

  // Inclinação 3D suave: interpola a cada quadro em vez de usar transição de CSS
  // (a transição reiniciava a cada movimento do mouse e causava o "tranco").
  const tick = () => {
    const el = photo.current
    if (!el) { raf.current = 0; return }
    const c = current.current, tg = target.current
    c.x += (tg.x - c.x) * 0.14
    c.y += (tg.y - c.y) * 0.14
    el.style.setProperty('--rx', `${(-c.y * 10).toFixed(3)}deg`)
    el.style.setProperty('--ry', `${(c.x * 10).toFixed(3)}deg`)
    const settled = Math.abs(tg.x - c.x) < 0.0005 && Math.abs(tg.y - c.y) < 0.0005
    raf.current = settled ? 0 : requestAnimationFrame(tick)
  }
  const kick = () => { if (!raf.current) raf.current = requestAnimationFrame(tick) }

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    const el = photo.current
    if (!el || e.pointerType !== 'mouse' || reducedMotion()) return
    const r = el.getBoundingClientRect()
    const clamp = (v: number) => Math.max(-0.5, Math.min(0.5, v))
    target.current = { x: clamp((e.clientX - r.left) / r.width - 0.5), y: clamp((e.clientY - r.top) / r.height - 0.5) }
    kick()
  }
  const onLeave = () => { target.current = { x: 0, y: 0 }; kick() }
  useEffect(() => () => cancelAnimationFrame(raf.current), [])

  return (
    <section className="hero wrap">
      <div className="hero-text">
        <p className="eyebrow mono rise" style={{ '--d': '100ms' } as CSSProperties}>{t.hero.eyebrow}</p>
        <h1 className="rise" style={{ '--d': '200ms' } as CSSProperties}>Gabriela<br />Vicentini</h1>
        <p className="role rise" style={{ '--d': '320ms' } as CSSProperties}>
          {t.hero.rolePrefix}<strong>{t.hero.roleHighlight}</strong>{t.hero.roleSuffix}
        </p>
        <p className="lead rise" style={{ '--d': '420ms' } as CSSProperties}>
          {t.hero.leadPrefix}<Typewriter key={lang} words={t.hero.rotating} />
        </p>
        <div className="cta rise" style={{ '--d': '520ms' } as CSSProperties}>
          <a className="btn primary" href="#projetos">{t.hero.viewProjects} <FiArrowDown /></a>
          <a className="btn ghost" href="#contato">{t.hero.contactMe}</a>
        </div>
        <ul className="social rise" style={{ '--d': '620ms' } as CSSProperties} aria-label={t.hero.socialAria}>
          <li><a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a></li>
          <li><a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a></li>
          <li><a href={`mailto:${profile.email}`} aria-label={t.hero.emailAria}><FiMail /></a></li>
        </ul>
      </div>

      <div className="hero-photo" ref={photo} onPointerMove={onMove} onPointerLeave={onLeave}>
        <div className="aura" aria-hidden="true" />
        <div className="tilt">
          <div className="ring">
            <img src="/gabriela.jpg" alt={t.hero.photoAlt} width={720} height={720} fetchPriority="high" />
          </div>
        </div>
        <div className="chip c1 mono">React</div>
        <div className="chip c2 mono">TypeScript</div>
        <div className="chip c3 mono">Node.js</div>
        <div className="chip c4 mono">VTEX</div>
      </div>
    </section>
  )
}
