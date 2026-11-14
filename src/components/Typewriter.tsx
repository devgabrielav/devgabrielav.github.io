import { useEffect, useState } from 'react'
import { reducedMotion } from '../hooks'

export function Typewriter({ words }: { words: string[] }) {
  const [i, setI] = useState(0)
  const [text, setText] = useState(reducedMotion() ? words[0] : '')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (reducedMotion()) return
    const word = words[i % words.length]
    let t: number
    if (!deleting && text === word) t = window.setTimeout(() => setDeleting(true), 1700)
    else if (deleting && text === '') { setDeleting(false); setI((n) => n + 1) }
    else t = window.setTimeout(() => setText(word.slice(0, text.length + (deleting ? -1 : 1))), deleting ? 28 : 65)
    return () => clearTimeout(t)
  }, [text, deleting, i, words])

  return <span className="typed" aria-live="off">{text}<span className="caret" aria-hidden="true" /></span>
}
