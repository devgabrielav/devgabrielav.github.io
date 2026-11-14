import { useCallback, useEffect, useRef, useState, type KeyboardEvent, type TouchEvent } from 'react'
import { createPortal } from 'react-dom'
import { FiArrowUpRight, FiChevronLeft, FiChevronRight, FiGithub, FiX } from 'react-icons/fi'
import type { Project } from '../data/projects'
import { useI18n } from '../i18n'

interface Props { project: Project; onClose: () => void }

/** Galeria em pop-up: setas, miniaturas, teclado (← → Esc) e deslize no celular. */
export function ProjectModal({ project, onClose }: Props) {
  const { t } = useI18n()
  const { images } = project
  const [i, setI] = useState(0)
  const box = useRef<HTMLDivElement>(null)
  const closeBtn = useRef<HTMLButtonElement>(null)
  const touchX = useRef<number | null>(null)
  const go = useCallback((d: number) => setI((n) => (n + d + images.length) % images.length), [images.length])

  // trava a rolagem da página e devolve o foco ao fechar
  useEffect(() => {
    const prevFocus = document.activeElement as HTMLElement | null
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeBtn.current?.focus()
    return () => { document.body.style.overflow = prevOverflow; prevFocus?.focus() }
  }, [])

  // pré-carrega a próxima e a anterior
  useEffect(() => {
    ;[1, -1].forEach((d) => { new Image().src = images[(i + d + images.length) % images.length].src })
  }, [i, images])

  // mantém a miniatura ativa visível
  useEffect(() => {
    box.current?.querySelector('.m-thumbs .on')?.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' })
  }, [i])

  const onKey = (e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose()
    else if (e.key === 'ArrowRight') go(1)
    else if (e.key === 'ArrowLeft') go(-1)
    else if (e.key === 'Tab' && box.current) {
      const f = Array.from(box.current.querySelectorAll<HTMLElement>('button, a[href]'))
      const first = f[0], last = f[f.length - 1]
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus() }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus() }
    }
  }
  const onTouchEnd = (e: TouchEvent) => {
    if (touchX.current === null) return
    const dx = e.changedTouches[0].clientX - touchX.current
    if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1)
    touchX.current = null
  }

  const img = images[i]
  return createPortal(
    <div className="modal" onMouseDown={(e) => e.target === e.currentTarget && onClose()} onKeyDown={onKey}>
      <div className="m-box" ref={box} role="dialog" aria-modal="true" aria-label={t.projects.modalAria(project.title)}>
        <header className="m-head">
          <div>
            <span className="badge mono">{project.badge}</span>
            <h3>{project.title}</h3>
          </div>
          <button ref={closeBtn} className="m-close" type="button" onClick={onClose} aria-label={t.projects.closeAria}><FiX /></button>
        </header>

        <div className="m-stage" onTouchStart={(e) => (touchX.current = e.touches[0].clientX)} onTouchEnd={onTouchEnd}>
          <img key={img.src} src={img.src} alt={img.alt} className="m-img" draggable={false} />
          {images.length > 1 && (
            <>
              <button className="m-nav prev" type="button" onClick={() => go(-1)} aria-label={t.projects.prevAria}><FiChevronLeft /></button>
              <button className="m-nav next" type="button" onClick={() => go(1)} aria-label={t.projects.nextAria}><FiChevronRight /></button>
            </>
          )}
          <span className="m-count mono" aria-live="polite">{i + 1} / {images.length}</span>
        </div>

        {images.length > 1 && (
          <div className="m-thumbs" role="tablist" aria-label={t.projects.thumbsAria}>
            {images.map((im, n) => (
              <button key={im.src} type="button" role="tab" aria-selected={n === i} aria-label={t.projects.viewImageAria(n + 1)} className={n === i ? 'on' : ''} onClick={() => setI(n)}>
                <img src={im.src} alt="" loading="lazy" />
              </button>
            ))}
          </div>
        )}

        <footer className="m-foot">
          <p>{img.alt}</p>
          <div className="p-links">
            {project.demo && <a className="btn primary sm" href={project.demo} target="_blank" rel="noopener noreferrer">{t.projects.viewDemo} <FiArrowUpRight /></a>}
            <a className="btn ghost sm" href={project.repo} target="_blank" rel="noopener noreferrer"><FiGithub /> {t.projects.code}</a>
          </div>
        </footer>
      </div>
    </div>,
    document.body,
  )
}
