import { marquee } from '../data/profile'

export function Marquee() {
  const row = [...marquee, ...marquee]
  return (
    <div className="marquee" aria-hidden="true">
      <div className="track">
        {row.map((t, i) => <span key={i} className="mono">{t}<i /></span>)}
      </div>
    </div>
  )
}
