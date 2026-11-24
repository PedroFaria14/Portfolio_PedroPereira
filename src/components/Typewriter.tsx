import { useReducedMotion } from 'framer-motion'
import { useEffect, useEffectEvent, useState } from 'react'

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
  const notifyDone = useEffectEvent(() => onDone?.())

  useEffect(() => {
    if (reduce || !text.length) {
      notifyDone()
      return
    }

    let interval: number | undefined
    const start = window.setTimeout(() => {
      setShown(0)
      setDone(false)
      let i = 0
      interval = window.setInterval(() => {
        i += 1
        setShown(i)
        if (i >= text.length) {
          window.clearInterval(interval)
          setDone(true)
          notifyDone()
        }
      }, speed)
    }, delay)

    return () => {
      window.clearTimeout(start)
      window.clearInterval(interval)
    }
  }, [text, reduce, speed, delay])

  return (
    <span className="whitespace-pre">
      {reduce ? text : text.slice(0, shown)}
      {!reduce && !done && <span className="typewriter-caret" aria-hidden="true" />}
    </span>
  )
}
