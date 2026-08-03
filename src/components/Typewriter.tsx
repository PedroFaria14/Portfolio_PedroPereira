import { useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'

export function Typewriter({
  text,
  speed = 70,
  delay = 500,
  onDone,
}: {
  text: string
  speed?: number
  delay?: number
  onDone?: () => void
}) {
  const reduce = useReducedMotion()
  const initialDone = reduce || !text.length
  const [shown, setShown] = useState(initialDone ? text.length : 0)
  const [done, setDone] = useState(initialDone)

  useEffect(() => {
    if (reduce || !text.length) {
      onDone?.()
      return
    }

    const start = window.setTimeout(() => {
      let i = 0
      const interval = window.setInterval(() => {
        i += 1
        setShown(i)
        if (i >= text.length) {
          window.clearInterval(interval)
          setDone(true)
          onDone?.()
        }
      }, speed)
    }, delay)

    return () => window.clearTimeout(start)
  }, [text, reduce, speed, delay, onDone])

  return (
    <span className="whitespace-pre">
      {text.slice(0, shown)}
      {!done && <span className="typewriter-caret" aria-hidden="true" />}
    </span>
  )
}