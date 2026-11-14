import { useState, type CSSProperties, type MouseEvent } from 'react'
import { FiArrowUpRight, FiGithub, FiImage } from 'react-icons/fi'
import { type Project } from '../data/projects'
import { profile } from '../data/profile'
import { useI18n } from '../i18n'
import { Reveal } from './Reveal'
import { SectionHead } from './SectionHead'
import { ProjectModal } from './ProjectModal'

// Brilho que segue o mouse dentro do card
const spotlight = (e: MouseEvent<HTMLElement>) => {
  const r = e.currentTarget.getBoundingClientRect()
  e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
  e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
}

function ProjectCard({ p, i, onOpen }: { p: Project; i: number; onOpen: () => void }) {
  const { t } = useI18n()
  // clicar em qualquer ponto do card abre a galeria, exceto nos links
  const onClick = (e: MouseEvent<HTMLElement>) => { if (!(e.target as HTMLElement).closest('a')) onOpen() }
  return (
    <Reveal as="article" className={`project ${p.featured ? 'feature' : ''}`} delay={(i % 3) * 90} onMouseMove={spotlight} onClick={onClick}>
      <button type="button" className="thumb" onClick={onOpen} aria-label={t.projects.viewImagesAria(p.title)}>
        <img src={p.images[0].src} alt="" loading="lazy" />
        <span className="thumb-hint mono"><FiImage /> {t.projects.viewImagesHint(p.images.length)}</span>
      </button>
      <div className="p-top"><span className="num mono">{String(i + 1).padStart(2, '0')}</span><span className="badge mono">{p.badge}</span></div>
      <h3>{p.title}</h3>
      <p>{p.description}</p>
      <ul className="tags sm">{p.stack.map((s) => <li key={s}>{s}</li>)}</ul>
      <div className="p-links">
        {p.demo && <a className="btn primary sm" href={p.demo} target="_blank" rel="noopener noreferrer">{t.projects.viewDemo} <FiArrowUpRight /></a>}
        <a className={`btn sm ${p.demo ? 'ghost' : 'primary'}`} href={p.repo} target="_blank" rel="noopener noreferrer"><FiGithub /> {t.projects.code}</a>
      </div>
    </Reveal>
  )
}

export function Projects() {
  const { t } = useI18n()
  const [openIdx, setOpenIdx] = useState<number | null>(null)
  const open = openIdx !== null ? t.projects.items[openIdx] : null
  return (
    <section className="sec wrap" id="projetos">
      <SectionHead n="03" title={t.projects.title} />
      <Reveal as="p" className="sec-sub">{t.projects.subtitle}</Reveal>
      <div className="projects">
        {t.projects.items.map((p, i) => <ProjectCard key={p.title} p={p} i={i} onOpen={() => setOpenIdx(i)} />)}
        <Reveal as="article" className="project more" style={{ '--d': '0ms' } as CSSProperties}>
          <h3>{t.projects.moreTitle}</h3>
          <p>{t.projects.moreText}</p>
          <a className="btn ghost sm" href={`${profile.github}?tab=repositories`} target="_blank" rel="noopener noreferrer">github.com/devgabrielav <FiArrowUpRight /></a>
        </Reveal>
      </div>
      {open && <ProjectModal project={open} onClose={() => setOpenIdx(null)} />}
    </section>
  )
}
