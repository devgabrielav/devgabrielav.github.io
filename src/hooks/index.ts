import { useEffect, useRef, useState } from 'react'

export const reducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

/** Dispara uma vez quando o elemento entra na tela. */
export function useInView<T extends Element>() {
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!('IntersectionObserver' in window)) { setInView(true); return }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setInView(true); io.disconnect() }
    }, { threshold: 0.12 })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return [ref, inView] as const
}

/** Retorna o id da seção atualmente visível. */
export function useScrollSpy(ids: string[]) {
  const [active, setActive] = useState('')
  useEffect(() => {
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[]
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => e.isIntersecting && setActive(e.target.id))
    }, { rootMargin: '-45% 0px -50% 0px' })
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [ids.join()])
  return active
}

/** Progresso de rolagem da página (0 a 1) e se já rolou um pouco. */
export function useScroll() {
  const [state, setState] = useState({ progress: 0, scrolled: false })
  useEffect(() => {
    let raf = 0
    const update = () => {
      raf = 0
      const max = document.documentElement.scrollHeight - window.innerHeight
      setState({ progress: max > 0 ? window.scrollY / max : 0, scrolled: window.scrollY > 8 })
    }
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update) }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); cancelAnimationFrame(raf) }
  }, [])
  return state
}

export type Palette = 'teal' | 'purple'

export function usePalette() {
  const [palette, setPalette] = useState<Palette>(() => {
    try { return (localStorage.getItem('palette') as Palette) || 'teal' } catch { return 'teal' }
  })
  useEffect(() => {
    document.documentElement.dataset.palette = palette
    document.querySelector('meta[name=theme-color]')?.setAttribute('content', palette === 'purple' ? '#09070d' : '#070b0c')
    try { localStorage.setItem('palette', palette) } catch { /* ignore */ }
  }, [palette])
  return [palette, () => setPalette((p) => (p === 'teal' ? 'purple' : 'teal'))] as const
}

/** Rola suavemente até o topo (o antigo href="#top" não funcionava com o header fixo). */
export function scrollToTop(e?: { preventDefault: () => void }) {
  e?.preventDefault()
  window.scrollTo({ top: 0, behavior: reducedMotion() ? 'auto' : 'smooth' })
}
