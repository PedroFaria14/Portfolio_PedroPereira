import { motion, useScroll, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { About } from './components/About'
import { BackgroundCanvas } from './components/BackgroundCanvas'
import { Contact } from './components/Contact'
import { Courses } from './components/Courses'
import { Education } from './components/Education'
import { Experience } from './components/Experience'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Projects } from './components/Projects'
import { Stack } from './components/Stack'
import { profile } from './data/portfolio'

function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const reduce = useReducedMotion()
  if (reduce) return null
  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-30 h-0.5 origin-left bg-accent"
      style={{ scaleX: scrollYProgress }}
    />
  )
}

function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="relative min-h-screen overflow-x-clip bg-base text-ink">
      <BackgroundCanvas />
      <ScrollProgress />
      <Navbar scrolled={scrolled} />
      <main className="relative z-10">
        <Hero />
        <About />
        <Stack />
        <Projects />
        <Experience />
        <Education />
        <Courses />
        <Contact />
      </main>
      <footer className="relative z-10 border-t border-border px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 text-sm text-subtle sm:flex-row sm:px-10 lg:px-16">
          <p>© {new Date().getFullYear()} {profile.name}</p>
          <p className="font-mono text-xs">
            Full Stack <span className="text-accent">&</span> Blockchain
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App