import { Reveal } from './Reveal'

export function SectionHead({ n, title }: { n: string; title: string }) {
  return (
    <Reveal as="header" className="sec-head">
      <span className="mono">{n}</span>
      <h2>{title}</h2>
    </Reveal>
  )
}
