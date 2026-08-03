import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
}

const ACCENT = '201, 164, 74' // #C9A44A
const LINK_DISTANCE = 130
const LINK_MAX_ALPHA = 0.22
const LINK_STYLE = `rgba(${ACCENT}, ${LINK_MAX_ALPHA})`
const FILL_STYLE = `rgba(${ACCENT}, 0.6)`
const MOUSE_RADIUS = 140
const MOUSE_FORCE = 0.9

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function isTouchDevice() {
  return window.matchMedia('(hover: none)').matches || 'ontouchstart' in window
}

export function BackgroundCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const rawCtx = canvas.getContext('2d')
    if (!rawCtx) return
    const ctx: CanvasRenderingContext2D = rawCtx

    const reduced = prefersReducedMotion()
    const touch = isTouchDevice()
    let particles: Particle[] = []
    let raf = 0
    let width = 0
    let height = 0
    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    const mouse = { x: -9999, y: -9999, active: false }
    const glow = { x: -9999, y: -9999, targetX: -9999, targetY: -9999 }

    function resize() {
      const parent = canvas?.parentElement
      if (!parent) return
      width = parent.clientWidth
      height = parent.clientHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      seed()
    }

    function seed() {
      const count = Math.min(Math.floor((width * height) / 18000), 90)
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.4 + 0.6,
      }))
    }

    function onPointerMove(e: PointerEvent) {
      const rect = canvas?.getBoundingClientRect()
      if (!rect) return
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
      mouse.active = true
      glow.targetX = mouse.x
      glow.targetY = mouse.y
    }

    function onPointerLeave() {
      mouse.active = false
      mouse.x = -9999
      mouse.y = -9999
    }

    function draw() {
      ctx.clearRect(0, 0, width, height)

      // Glow que segue o mouse (lerp suave)
      if (!reduced && glow.targetX > -9000) {
        glow.x += (glow.targetX - glow.x) * 0.08
        glow.y += (glow.targetY - glow.y) * 0.08
        const g = ctx.createRadialGradient(glow.x, glow.y, 0, glow.x, glow.y, 220)
        g.addColorStop(0, `rgba(${ACCENT}, 0.16)`)
        g.addColorStop(1, `rgba(${ACCENT}, 0)`)
        ctx.fillStyle = g
        ctx.fillRect(0, 0, width, height)
      }

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j]
          const dx = p.x - q.x
          const dy = p.y - q.y
          const dist = Math.hypot(dx, dy)
          if (dist < LINK_DISTANCE) {
            const alpha = (1 - dist / LINK_DISTANCE) * LINK_MAX_ALPHA
            ctx.globalAlpha = alpha
            ctx.strokeStyle = LINK_STYLE
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(q.x, q.y)
            ctx.stroke()
          }
        }
      }

      ctx.globalAlpha = 1
      for (const p of particles) {
        ctx.fillStyle = FILL_STYLE
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    function step() {
      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy

        // Repulsão suave do mouse
        if (mouse.active && !touch) {
          const dx = p.x - mouse.x
          const dy = p.y - mouse.y
          const dist = Math.hypot(dx, dy)
          if (dist < MOUSE_RADIUS && dist > 0) {
            const force = ((MOUSE_RADIUS - dist) / MOUSE_RADIUS) * MOUSE_FORCE
            p.x += (dx / dist) * force
            p.y += (dy / dist) * force
          }
        }

        if (p.x < 0) p.x = width
        if (p.x > width) p.x = 0
        if (p.y < 0) p.y = height
        if (p.y > height) p.y = 0
      }
      draw()
      if (!reduced) raf = requestAnimationFrame(step)
    }

    resize()
    window.addEventListener('resize', resize)
    if (!touch) {
      window.addEventListener('pointermove', onPointerMove, { passive: true })
      window.addEventListener('pointerleave', onPointerLeave)
    }
    draw()
    if (!reduced) raf = requestAnimationFrame(step)

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('pointerleave', onPointerLeave)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* Grid técnico sutil */}
      <div
        className="absolute inset-0 opacity-[0.13]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(201,164,74,0.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(201,164,74,0.35) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage:
            'radial-gradient(ellipse 80% 70% at 50% 35%, black 20%, transparent 100%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 80% 70% at 50% 35%, black 20%, transparent 100%)',
        }}
      />
      {/* Glow sutil no centro */}
      <div
        className="absolute left-1/2 top-[30%] h-[480px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[140px]"
        style={{ background: 'rgba(201,164,74,0.06)' }}
      />
      {/* Glow que acompanha o mouse */}
      {/* Partículas */}
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
    </div>
  )
}
