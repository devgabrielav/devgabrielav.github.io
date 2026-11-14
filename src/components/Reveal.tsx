import type { CSSProperties, ElementType, HTMLAttributes, ReactNode } from 'react'
import { useInView } from '../hooks'

interface Props extends HTMLAttributes<HTMLElement> {
  as?: ElementType
  delay?: number
  children?: ReactNode
}

/** Anima a entrada do conteúdo quando ele aparece na tela. */
export function Reveal({ as: Tag = 'div', delay = 0, className = '', style, children, ...rest }: Props) {
  const [ref, inView] = useInView<HTMLElement>()
  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? 'in' : ''} ${className}`}
      style={{ '--d': `${delay}ms`, ...style } as CSSProperties}
      {...rest}
    >
      {children}
    </Tag>
  )
}
