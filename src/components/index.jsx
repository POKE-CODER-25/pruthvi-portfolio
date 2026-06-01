import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import {
  ArrowUpRight,
  Award,
  BrainCircuit,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Code2,
  Download,
  Eye,
  FileBadge2,
  Globe2,
  GraduationCap,
  Layers3,
  Mail,
  MapPin,
  Menu,
  MessageSquare,
  Rocket,
  Send,
  Sparkles,
  Target,
  Trophy,
  User,
  WandSparkles,
  X,
  Zap,
} from 'lucide-react'
import { useCallback, useEffect, useRef, useState } from 'react'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
}

const sectionTransition = { duration: 0.65, ease: [0.22, 1, 0.36, 1] }

function Reveal({ children, className = '', delay = 0 }) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      transition={{ ...sectionTransition, delay }}
    >
      {children}
    </motion.div>
  )
}

function Section({ id, eyebrow, title, children, className = '', subtitle }) {
  return (
    <section id={id} className={`relative px-5 py-12 sm:px-6 lg:px-8 lg:py-16 ${className}`}>
      <div className="mx-auto max-w-6xl">
        {(eyebrow || title) && (
          <Reveal className="mb-7 max-w-3xl">
            <p className="section-kicker mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/85">
              <Sparkles className="h-4 w-4" />
              {eyebrow}
            </p>
            <h2 className="section-title text-2xl font-semibold tracking-normal text-white sm:text-3xl">{title}</h2>
            {subtitle && <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300">{subtitle}</p>}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  )
}

function GlassCard({ children, className = '' }) {
  return <div className={`neon-card rounded-lg border border-white/10 bg-white/[0.055] backdrop-blur-xl ${className}`}>{children}</div>
}

function ExternalLink({ href, children, className = '' }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`neon-link inline-flex items-center gap-2 transition hover:text-cyan-100 ${className}`}
    >
      {children}
      <ArrowUpRight className="h-4 w-4" />
    </a>
  )
}

function ComingSoonModal({ project, onClose }) {
  if (!project) return null

  return (
    <motion.div
      className="fixed inset-0 z-[80] grid place-items-center bg-[#020617]/80 px-5 backdrop-blur-xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="coming-soon-title"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={sectionTransition}
        className="coming-soon-card relative w-full max-w-2xl overflow-hidden rounded-lg border border-cyan-200/30 bg-[#071426]/95 p-6 shadow-2xl shadow-cyan-500/20 sm:p-8"
      >
        <button
          type="button"
          aria-label="Close coming soon modal"
          onClick={onClose}
          className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-md border border-white/10 bg-white/10 text-slate-100 transition hover:border-cyan-200/40 hover:bg-cyan-200/10"
        >
          <X className="h-5 w-5" />
        </button>
        <div className="relative">
          <span className="inline-flex items-center gap-2 rounded-md border border-cyan-200/25 bg-cyan-200/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-100">
            <Sparkles className="h-4 w-4" />
            {project.status}
          </span>
          <h3 id="coming-soon-title" className="mt-6 text-3xl font-semibold text-white sm:text-4xl">
            {project.title}
          </h3>
          <p className="mt-3 text-base text-cyan-100">{project.subtitle}</p>
          <p className="mt-6 text-lg leading-8 text-slate-200">This project is currently in development.</p>
          <p className="mt-3 text-sm leading-7 text-slate-300">{project.description}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <span key={item} className="rounded-md border border-white/10 bg-white/[0.07] px-3 py-2 text-xs text-slate-200">
                {item}
              </span>
            ))}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="neon-button mt-8 inline-flex min-h-12 items-center justify-center rounded-md bg-cyan-200 px-5 py-3 text-sm font-semibold text-slate-950 shadow-xl shadow-cyan-500/25 transition hover:-translate-y-1 hover:bg-white"
          >
            Back to Portfolio
          </button>
        </div>
      </motion.div>
    </motion.div>
  )
}

function ProjectScreenshotGallery({ screenshots = [] }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxClosing, setLightboxClosing] = useState(false)
  const [missingImages, setMissingImages] = useState({})
  const activeScreenshot = screenshots[activeIndex]
  const closeLightbox = useCallback(() => {
    setLightboxClosing(true)
    window.setTimeout(() => {
      setLightboxOpen(false)
      setLightboxClosing(false)
    }, 180)
  }, [])

  useEffect(() => {
    if (!lightboxOpen) return undefined

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeLightbox()
      }
      if (event.key === 'ArrowLeft') {
        setActiveIndex((current) => (current === 0 ? screenshots.length - 1 : current - 1))
      }
      if (event.key === 'ArrowRight') {
        setActiveIndex((current) => (current === screenshots.length - 1 ? 0 : current + 1))
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = originalOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [closeLightbox, lightboxOpen, screenshots.length])

  if (!screenshots.length) return null

  const showPrevious = () => setActiveIndex((current) => (current === 0 ? screenshots.length - 1 : current - 1))
  const showNext = () => setActiveIndex((current) => (current === screenshots.length - 1 ? 0 : current + 1))
  const canOpenLightbox = activeScreenshot && !missingImages[activeScreenshot.src]
  const openLightbox = () => {
    if (!canOpenLightbox) return
    setLightboxClosing(false)
    setLightboxOpen(true)
  }

  return (
    <div className="project-gallery mt-6 rounded-lg border border-cyan-200/20 bg-[#020617]/45 p-3">
      <button
        type="button"
        onClick={openLightbox}
        className="project-gallery-frame group/preview relative block w-full overflow-hidden rounded-md border border-cyan-200/20 bg-[#061225] text-left"
        aria-label={canOpenLightbox ? `Open ${activeScreenshot.label} screenshot fullscreen` : 'Screenshot preview unavailable'}
      >
        {activeScreenshot && !missingImages[activeScreenshot.src] ? (
          <img
            src={activeScreenshot.src}
            alt={`Volt Sensei ${activeScreenshot.label} screenshot`}
            loading="lazy"
            decoding="async"
            onError={() => setMissingImages((current) => ({ ...current, [activeScreenshot.src]: true }))}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.025] group-hover/preview:scale-[1.035]"
          />
        ) : (
          <div className="project-gallery-placeholder">
            <FileBadge2 className="h-8 w-8 text-cyan-100" />
            <span>Screenshot coming soon</span>
          </div>
        )}
        <span className="absolute left-3 top-3 rounded-md border border-cyan-200/25 bg-[#020617]/70 px-2 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-cyan-100 backdrop-blur-md">
          {activeScreenshot?.label ?? 'Preview'}
        </span>
        {canOpenLightbox && (
          <span className="absolute bottom-3 right-3 rounded-md border border-white/10 bg-[#020617]/75 px-2 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-slate-200 opacity-0 backdrop-blur-md transition group-hover/preview:opacity-100">
            Fullscreen
          </span>
        )}
      </button>
      <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
        {screenshots.map((screenshot, index) => (
          <button
            key={screenshot.src}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`project-thumb shrink-0 rounded-md border px-3 py-1.5 text-xs font-semibold transition ${
              activeIndex === index
                ? 'border-cyan-200/60 bg-cyan-200/15 text-cyan-50 shadow-[0_0_18px_rgba(34,211,238,0.16)]'
                : 'border-white/10 bg-white/[0.045] text-slate-300 hover:border-cyan-200/35 hover:text-cyan-50'
            }`}
          >
            {screenshot.label}
          </button>
        ))}
      </div>
      {lightboxOpen && activeScreenshot && (
        <div
          className={`screenshot-lightbox fixed inset-0 z-[90] grid place-items-center bg-[#020617]/84 px-4 py-12 backdrop-blur-xl ${
            lightboxClosing ? 'is-closing' : ''
          }`}
          role="dialog"
          aria-modal="true"
          aria-label="Volt Sensei screenshot preview"
          onMouseDown={closeLightbox}
        >
          <div
            className="screenshot-lightbox-panel relative w-full max-w-6xl"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close screenshot preview"
              onClick={closeLightbox}
              className="absolute -top-12 right-0 grid h-10 w-10 place-items-center rounded-md border border-cyan-200/25 bg-[#061225]/90 text-cyan-50 transition hover:border-cyan-200/60 hover:bg-cyan-200/10"
            >
              <X className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Previous screenshot"
              onClick={showPrevious}
              className="screenshot-nav screenshot-nav-left"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <div className="screenshot-lightbox-image overflow-hidden rounded-lg border border-cyan-200/35 bg-[#020617]">
              {!missingImages[activeScreenshot.src] ? (
                <img
                  src={activeScreenshot.src}
                  alt={`Volt Sensei ${activeScreenshot.label} fullscreen screenshot`}
                  className="mx-auto max-h-[84vh] w-full object-contain"
                  loading="eager"
                  decoding="async"
                  onError={() => setMissingImages((current) => ({ ...current, [activeScreenshot.src]: true }))}
                />
              ) : (
                <div className="project-gallery-placeholder min-h-[55vh]">
                  <FileBadge2 className="h-10 w-10 text-cyan-100" />
                  <span>Screenshot coming soon</span>
                </div>
              )}
            </div>
            <button
              type="button"
              aria-label="Next screenshot"
              onClick={showNext}
              className="screenshot-nav screenshot-nav-right"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
            <div className="mt-4 flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100/80">
              <span>{activeScreenshot.label}</span>
              <span className="rounded-md border border-cyan-200/20 bg-cyan-200/10 px-2 py-1 text-cyan-50">
                {activeIndex + 1}/{screenshots.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export function Navbar({ data }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-cyan-200/15 bg-[#061225]/78 backdrop-blur-2xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <a href="#home" className="group flex items-center gap-3">
          <span className="navbar-logo-mark grid h-9 w-9 place-items-center rounded-lg border border-cyan-200/30 bg-cyan-200/10 shadow-lg shadow-cyan-500/20 transition group-hover:border-cyan-200/50 group-hover:shadow-cyan-300/30">
            <img
              src="/favicon.png"
              alt="R. Pruthvi Adithya Raj logo"
              className="h-6 w-6 object-contain"
              decoding="async"
            />
          </span>
          <span className="hidden text-sm font-semibold text-white sm:block">{data.identity.name}</span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {data.navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-slate-300 transition hover:text-cyan-100">
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="neon-button hidden items-center gap-2 rounded-md border border-cyan-200/20 bg-cyan-200/10 px-4 py-2 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:border-cyan-200/50 hover:bg-cyan-200/15 md:inline-flex"
        >
          <Download className="h-4 w-4" />
          Resume
        </a>

        <button
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
          className="grid h-10 w-10 place-items-center rounded-md border border-cyan-200/20 bg-white/10 text-white md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-cyan-200/15 bg-[#061225]/95 px-5 py-4 md:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {data.navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm text-slate-200 hover:bg-cyan-200/10"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

export function Hero({ data }) {
  const { identity, hero } = data

  return (
    <section id="home" className="relative px-5 pt-24 pb-12 sm:px-6 lg:px-8 lg:pt-28 lg:pb-16">
      <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-[1.08fr_0.92fr]">
        <Reveal>
          <div className="mb-6 inline-flex items-center gap-2 rounded-md border border-cyan-200/25 bg-cyan-200/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-100 shadow-lg shadow-cyan-500/10">
            <Zap className="h-4 w-4" />
            {hero.kicker}
          </div>
          <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-normal text-white sm:text-5xl lg:text-6xl">
            {hero.title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">{hero.subtitle}</p>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-cyan-100/70">{identity.role}</p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {hero.actions.map((action) => (
              <a
                key={action.label}
                href={action.href}
                target={action.external ? '_blank' : undefined}
                rel={action.external ? 'noreferrer' : undefined}
                className={`neon-button inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition hover:-translate-y-1 ${
                  action.variant === 'primary'
                    ? 'bg-cyan-200 text-slate-950 shadow-xl shadow-cyan-500/25 hover:bg-white'
                    : action.variant === 'secondary'
                      ? 'border border-cyan-200/20 bg-white/10 text-white hover:border-cyan-200/50 hover:bg-cyan-200/10'
                      : 'border border-transparent text-slate-200 hover:border-white/10 hover:bg-white/10'
                }`}
              >
                {action.label === 'Download Resume' && <Download className="h-4 w-4" />}
                {action.label}
              </a>
            ))}
          </div>

          <div className="mt-8 grid max-w-xl grid-cols-3 gap-3">
            {hero.stats.map((stat) => (
              <GlassCard key={stat.label} className="p-4 transition duration-300 hover:-translate-y-1 hover:border-cyan-200/35">
                <p className="text-2xl font-semibold text-white">{stat.value}</p>
                <p className="mt-1 text-xs leading-5 text-slate-400">{stat.label}</p>
              </GlassCard>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="relative mx-auto aspect-[0.92] w-full max-w-[440px]">
            <div className="absolute inset-0 rounded-[2rem] border border-cyan-200/25 bg-[radial-gradient(circle_at_35%_25%,rgba(125,211,252,0.24),transparent_34%),linear-gradient(135deg,rgba(37,99,235,0.22),rgba(255,255,255,0.03))] shadow-2xl shadow-cyan-950/60 backdrop-blur-xl" />
            <motion.div
              className="absolute left-[13%] top-[11%] h-[68%] w-[74%] rounded-[1.5rem] border border-cyan-200/20 bg-[#071426]/90 p-5 shadow-2xl shadow-black/40"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-cyan-200/70">Product System</p>
                  <h2 className="mt-3 text-2xl font-semibold text-white">Volt Sensei</h2>
                </div>
                <BrainCircuit className="h-9 w-9 text-cyan-200" />
              </div>
              <div className="mt-8 grid gap-3">
                {['AI quizzes', 'XP gamification', '3D learning', 'Firebase auth'].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-md border border-cyan-200/15 bg-white/[0.06] px-3 py-3">
                    <CheckCircle2 className="h-4 w-4 text-cyan-200" />
                    <span className="text-sm text-slate-200">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              className="absolute bottom-[8%] right-[3%] rounded-lg border border-violet-200/25 bg-violet-200/10 px-4 py-3 text-sm text-violet-50 backdrop-blur-xl"
            >
              anime soul - product focus
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export function About({ data }) {
  const journey = [
    { number: '01', title: 'Exploring AI' },
    { number: '02', title: 'Building Volt Sensei' },
    { number: '03', title: 'Creating AI + Game Worlds' },
  ]
  const tags = ['GenAI', 'Product Builder', 'Anime Soul', 'Interactive Systems']
  const aboutText =
    'I started as a student exploring AI tools, but slowly moved from learning to building. Volt Sensei became my first major live project - an AI-powered JEE learning platform built with React, Firebase, quizzes, gamification, and 3D learning models. I enjoy creating products that combine AI, design, gamification, and interactive systems. My long-term goal is to become an AI product builder who creates useful, memorable, and emotionally engaging digital experiences.'

  return (
    <Section id="about" eyebrow="Origin story" title={data.about.title}>
      <Reveal>
        <div className="origin-system relative grid gap-6 overflow-hidden rounded-lg border border-cyan-200/20 bg-white/[0.045] p-5 backdrop-blur-xl sm:p-7 lg:grid-cols-[0.78fr_1.22fr] lg:p-9">
          <div className="diagonal-glow" aria-hidden="true" />
          <div className="relative min-h-[310px] rounded-lg border border-cyan-200/15 bg-[#061225]/72 p-5">
            <div
              className="origin-orb absolute right-6 top-6 grid h-16 w-16 place-items-center rounded-full border border-cyan-200/25 bg-cyan-200/10"
            >
              <WandSparkles className="h-7 w-7 text-cyan-100" />
            </div>
            <div className="absolute bottom-8 left-[2.05rem] top-24 w-px bg-gradient-to-b from-cyan-200 via-violet-300 to-transparent shadow-[0_0_22px_rgba(103,232,249,0.8)]" />
            <div className="grid gap-8 pt-20">
              {journey.map((item, index) => (
                <motion.div
                  key={item.number}
                  className="relative grid grid-cols-[3.5rem_1fr] items-center gap-4"
                  whileHover={{ x: 6 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                >
                  <span className="timeline-node grid h-11 w-11 place-items-center rounded-full border border-cyan-200/40 bg-[#071426] text-sm font-semibold text-cyan-100">
                    {item.number}
                  </span>
                  <div className="rounded-lg border border-white/10 bg-white/[0.055] p-4">
                    <p className="text-sm font-semibold text-white">{item.title}</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.18em] text-cyan-100/60">Origin phase {index + 1}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="relative min-h-[310px]">
            <div className="absolute -right-2 top-7 h-44 w-44 rounded-lg border border-violet-200/15 bg-violet-300/10 blur-[1px]" />
            <div className="absolute bottom-4 left-4 h-36 w-44 rounded-lg border border-cyan-200/15 bg-cyan-300/10 blur-[1px]" />
            <div className="story-panel relative h-full rounded-lg border border-cyan-200/20 bg-[#071426]/82 p-5 shadow-2xl shadow-cyan-500/10 sm:p-6">
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span key={tag} className="rounded-md border border-cyan-200/20 bg-cyan-200/10 px-3 py-2 text-xs font-semibold text-cyan-50">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="mt-6 max-w-xl text-xl font-semibold leading-snug text-white sm:text-2xl">
                From AI curiosity to live product systems.
              </h3>
              <p className="mt-5 text-sm leading-7 text-slate-300 sm:text-base">{aboutText}</p>
              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                {['React', 'Firebase', '3D Models'].map((item) => (
                  <div key={item} className="rounded-lg border border-white/10 bg-white/[0.055] px-4 py-3 text-sm text-slate-200">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}

export function Skills({ data }) {
  const icons = [BrainCircuit, Code2, Globe2, Layers3]

  return (
    <Section id="skills" eyebrow="Builder toolkit" title="Skills & Expertise">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {data.skills.map((group, index) => {
          const Icon = icons[index] ?? Sparkles
          return (
            <Reveal key={group.title} delay={index * 0.05}>
              <GlassCard className="h-full p-6 transition duration-300 hover:-translate-y-2 hover:border-cyan-200/35 hover:bg-white/[0.075] hover:shadow-cyan-500/15">
                <Icon className="h-8 w-8 text-cyan-100" />
                <h3 className="mt-5 text-xl font-semibold text-white">{group.title}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="rounded-md border border-white/10 bg-white/[0.06] px-3 py-2 text-sm text-slate-300">
                      {item}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}

export function AIWorkflow({ data }) {
  const icons = [Sparkles, Code2, WandSparkles, Rocket, GraduationCap]
  const workflow = data.aiWorkflow

  return (
    <Section
      id="ai-workflow"
      eyebrow="Command center"
      title={workflow.title}
      subtitle={workflow.subtitle}
      className="ai-workflow-section"
    >
      <Reveal>
        <div className="workflow-command-center relative overflow-hidden rounded-lg border border-cyan-200/20 bg-white/[0.04] p-4 backdrop-blur-xl sm:p-5 lg:p-6">
          <div className="workflow-radar" aria-hidden="true" />
          <svg className="workflow-lines" viewBox="0 0 1000 420" preserveAspectRatio="none" aria-hidden="true">
            <path className="workflow-line workflow-line-a" d="M500 210 C390 118 230 110 110 170" />
            <path className="workflow-line workflow-line-b" d="M500 210 C435 114 355 82 248 86" />
            <path className="workflow-line workflow-line-c" d="M500 210 C560 105 646 78 754 88" />
            <path className="workflow-line workflow-line-d" d="M500 210 C638 144 772 138 902 176" />
            <path className="workflow-line workflow-line-e" d="M500 210 C500 290 500 336 500 392" />
          </svg>

          <div className="relative grid gap-4 lg:grid-cols-[1fr_0.78fr_1fr] lg:items-center">
            <div className="grid gap-4">
              {workflow.cards.slice(0, 2).map((card, index) => {
                const Icon = icons[index]
                return (
                  <WorkflowCard key={card.title} card={card} Icon={Icon} number={index + 1} delay={index * 0.04} />
                )
              })}
            </div>

            <motion.div
              className="workflow-core relative mx-auto grid w-full max-w-[19rem] place-items-center rounded-lg border border-cyan-200/30 bg-[#061225]/86 p-5 text-center shadow-2xl shadow-cyan-500/20"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 250, damping: 20 }}
            >
              <span className="workflow-core-node" aria-hidden="true" />
              <BrainCircuit className="h-9 w-9 text-cyan-100 drop-shadow-[0_0_16px_rgba(103,232,249,0.65)]" />
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-100/70">AI Build System</p>
              <h3 className="mt-3 text-xl font-semibold leading-snug text-white">Plan. Generate. Test. Ship.</h3>
              <div className="mt-5 grid w-full grid-cols-3 gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-slate-300">
                {['Prompt', 'Code', 'Deploy'].map((item) => (
                  <span key={item} className="rounded-md border border-cyan-200/15 bg-cyan-200/10 px-2 py-2">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>

            <div className="grid gap-4">
              {workflow.cards.slice(2, 4).map((card, index) => {
                const cardIndex = index + 2
                const Icon = icons[cardIndex]
                return (
                  <WorkflowCard key={card.title} card={card} Icon={Icon} number={cardIndex + 1} delay={cardIndex * 0.04} />
                )
              })}
            </div>
          </div>

          <div className="relative mt-4 grid gap-4 lg:mx-auto lg:max-w-md">
            {workflow.cards.slice(4).map((card, index) => {
              const cardIndex = index + 4
              const Icon = icons[cardIndex]
              return (
                <WorkflowCard key={card.title} card={card} Icon={Icon} number={cardIndex + 1} delay={cardIndex * 0.04} featured />
              )
            })}
          </div>
        </div>
      </Reveal>
    </Section>
  )
}

function WorkflowCard({ card, Icon, number, delay = 0, featured = false }) {
  return (
    <motion.article
      className={`workflow-card group relative overflow-hidden rounded-lg border border-cyan-200/16 bg-[#061225]/82 p-4 shadow-xl shadow-black/20 ${
        featured ? 'workflow-card-featured' : ''
      }`}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ ...sectionTransition, delay }}
    >
      <span className="workflow-node" aria-hidden="true" />
      <div className="relative flex items-start gap-3">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-cyan-200/30 bg-cyan-200/10 text-cyan-100 shadow-lg shadow-cyan-500/15">
          <Icon className="h-5 w-5" />
        </span>
        <div>
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-cyan-100/62">
            Workflow {String(number).padStart(2, '0')}
          </p>
          <h3 className="mt-2 text-base font-semibold leading-snug text-white">{card.title}</h3>
        </div>
      </div>
      <p className="relative mt-3 text-sm leading-6 text-slate-300">{card.description}</p>
    </motion.article>
  )
}

function AnimatedCounter({ value, suffix = '' }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  const [count, setCount] = useState(0)

  useEffect(() => {
    const node = ref.current
    if (!node) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.35 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!visible) return undefined

    let frameId = 0
    const duration = 900
    const startedAt = performance.now()

    const tick = (time) => {
      const progress = Math.min((time - startedAt) / duration, 1)
      const eased = 1 - (1 - progress) ** 3
      setCount(Math.round(value * eased))

      if (progress < 1) {
        frameId = requestAnimationFrame(tick)
      }
    }

    frameId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frameId)
  }, [value, visible])

  return (
    <span ref={ref}>
      {String(count).padStart(2, '0')}
      {suffix}
    </span>
  )
}

export function GitHubActivity({ data }) {
  const icons = [Code2, Rocket, BrainCircuit, Globe2]

  return (
    <Section
      id="github-activity"
      eyebrow="Repository pulse"
      title={data.githubActivity.title}
      subtitle={data.githubActivity.subtitle}
      className="github-activity-section"
    >
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {data.githubActivity.stats.map((stat, index) => {
          const Icon = icons[index] ?? Sparkles
          return (
            <Reveal key={stat.label} delay={index * 0.04}>
              <motion.article
                className="github-stat-card group relative h-full overflow-hidden rounded-lg border border-cyan-200/16 bg-white/[0.05] p-4 backdrop-blur-xl"
                whileHover={{ y: -5, scale: 1.015 }}
                transition={{ type: 'spring', stiffness: 260, damping: 22 }}
              >
                <span className="github-stat-node" aria-hidden="true" />
                <div className="relative flex items-start justify-between gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-cyan-200/25 bg-cyan-200/10 text-cyan-100 shadow-lg shadow-cyan-500/15">
                    <Icon className="h-5 w-5" />
                  </span>
                  <p className="github-stat-number text-3xl font-semibold leading-none text-white">
                    <AnimatedCounter value={stat.value} />
                  </p>
                </div>
                <p className="relative mt-4 text-sm font-semibold leading-6 text-slate-200">{stat.label}</p>
              </motion.article>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}

export function PortfolioStats({ data }) {
  const icons = [Rocket, Award, BrainCircuit, Zap]

  return (
    <Section
      id="portfolio-stats"
      eyebrow="Build metrics"
      title={data.portfolioStats.title}
      subtitle={data.portfolioStats.subtitle}
      className="portfolio-stats-section"
    >
      <Reveal>
        <div className="portfolio-stats-panel relative overflow-hidden rounded-lg border border-cyan-200/18 bg-white/[0.04] p-4 backdrop-blur-xl sm:p-5">
          <div className="relative grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {data.portfolioStats.stats.map((stat, index) => {
              const Icon = icons[index] ?? Sparkles
              return (
                <motion.article
                  key={stat.label}
                  className="portfolio-stat-card group relative overflow-hidden rounded-lg border border-white/10 bg-[#061225]/72 p-4"
                  whileHover={{ y: -5, scale: 1.015 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                >
                  <div className="relative flex items-center justify-between gap-3">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-cyan-200/25 bg-cyan-200/10 text-cyan-100 shadow-lg shadow-cyan-500/15">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="portfolio-stat-signal" aria-hidden="true" />
                  </div>
                  <p className="portfolio-stat-value relative mt-5 text-3xl font-semibold leading-none text-white sm:text-4xl">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="relative mt-2 text-sm font-medium leading-6 text-slate-300">{stat.label}</p>
                </motion.article>
              )
            })}
          </div>
        </div>
      </Reveal>
    </Section>
  )
}

export function Projects({ data }) {
  const [comingSoonProject, setComingSoonProject] = useState(null)

  return (
    <>
      <Section id="projects" eyebrow="Featured work" title="Featured Projects">
        <div className="grid gap-5 lg:grid-cols-3">
          {data.projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.06}>
              <motion.article
                whileHover={{ y: -8, rotateX: 1, rotateY: -1 }}
                transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                className={`group relative h-full overflow-hidden rounded-lg border ${
                  project.featured ? 'border-cyan-200/35 shadow-2xl shadow-cyan-500/15' : 'border-white/10'
                } bg-white/[0.055] p-6 backdrop-blur-xl`}
              >
                <div className={`absolute inset-x-0 top-0 h-28 bg-gradient-to-r ${project.accent} opacity-90 blur-2xl`} />
                <div className="relative">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-100/75">{project.status}</p>
                        <span className="ai-build-badge inline-flex items-center rounded-md border border-cyan-200/25 bg-cyan-200/10 px-2.5 py-1 text-[0.68rem] font-semibold text-cyan-50">
                          ⚡ AI Accelerated Build
                        </span>
                      </div>
                      <h3 className="mt-3 text-2xl font-semibold text-white">{project.title}</h3>
                      <p className="mt-1 text-sm text-slate-400">{project.subtitle}</p>
                    </div>
                    <Rocket className="h-7 w-7 shrink-0 text-cyan-100 transition group-hover:rotate-12 group-hover:drop-shadow-[0_0_14px_rgba(103,232,249,0.7)]" />
                  </div>
                  <p className="mt-6 text-sm leading-7 text-slate-300">{project.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span key={item} className="rounded-md border border-white/10 bg-black/20 px-3 py-2 text-xs text-slate-300">
                        {item}
                      </span>
                    ))}
                  </div>
                  <ProjectScreenshotGallery screenshots={project.screenshots} />
                  <div className="mt-7 flex flex-wrap gap-3 text-sm font-semibold text-cyan-100">
                    {project.links.map((link) =>
                      link.comingSoon ? (
                        <button
                          key={link.label}
                          type="button"
                          onClick={() => setComingSoonProject(project)}
                          className="neon-button inline-flex items-center gap-2 rounded-md border border-cyan-200/25 bg-cyan-200/10 px-4 py-2 transition hover:-translate-y-1 hover:border-cyan-200/50 hover:bg-cyan-200/15"
                        >
                          {link.label}
                          <Sparkles className="h-4 w-4" />
                        </button>
                      ) : (
                        <ExternalLink
                          key={link.href}
                          href={link.href}
                          className="rounded-md border border-cyan-200/25 bg-cyan-200/10 px-4 py-2 hover:border-cyan-200/50 hover:bg-cyan-200/15"
                        >
                          {link.label}
                        </ExternalLink>
                      ),
                    )}
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </Section>
      <ComingSoonModal project={comingSoonProject} onClose={() => setComingSoonProject(null)} />
    </>
  )
}

export function Certifications({ data }) {
  return (
    <Section id="certifications" eyebrow="Signals" title="Certifications" subtitle="Verified Learning Signals">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {data.certifications.map((certification, index) => (
          <Reveal key={certification.title} delay={index * 0.035}>
            <GlassCard className="certificate-badge certificate-card group relative flex h-full flex-col overflow-hidden p-5 transition duration-300 hover:-translate-y-1.5 hover:border-cyan-200/45">
              <div className="relative flex flex-1 flex-col">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-cyan-200/25 bg-cyan-200/10 shadow-lg shadow-cyan-500/15">
                      <GraduationCap className="h-5 w-5 text-cyan-100" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold leading-6 text-white">{certification.title}</p>
                      <p className="mt-1 text-xs text-slate-400">{certification.issuer}</p>
                    </div>
                  </div>
                  <span className="shrink-0 rounded-md border border-violet-200/20 bg-violet-200/10 px-2 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-violet-100">
                    {certification.category}
                  </span>
                </div>
                {certification.file ? (
                  <a
                    href={certification.file}
                    target="_blank"
                    rel="noreferrer"
                    className="neon-button mt-5 inline-flex min-h-10 items-center justify-center gap-2 rounded-md border border-cyan-200/25 bg-cyan-200/10 px-4 py-2.5 text-sm font-semibold text-cyan-50 transition hover:-translate-y-0.5 hover:border-cyan-200/55 hover:bg-cyan-200/15"
                  >
                    <Eye className="h-4 w-4" />
                    View Certificate
                  </a>
                ) : (
                  <div className="mt-5 flex min-h-10 items-center justify-center gap-2 rounded-md border border-cyan-200/15 bg-white/[0.045] px-4 py-2.5 text-center text-sm text-slate-300">
                    <FileBadge2 className="h-4 w-4 text-cyan-100" />
                    Certificate file coming soon.
                  </div>
                )}
              </div>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

export function Achievements({ data }) {
  return (
    <Section id="achievements" eyebrow="Milestones" title="Achievements">
      <div className="relative mx-auto max-w-4xl">
        <div className="absolute bottom-0 left-4 top-0 w-px bg-gradient-to-b from-cyan-200 via-violet-200/70 to-transparent sm:left-1/2" />
        <div className="grid gap-5">
          {data.achievements.map((achievement, index) => (
            <Reveal key={achievement} delay={index * 0.045}>
              <div className={`relative grid gap-4 sm:grid-cols-2 ${index % 2 ? '' : 'sm:text-right'}`}>
                <div className={`${index % 2 ? 'sm:col-start-2' : ''} pl-12 sm:pl-0`}>
                  <GlassCard className="p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-200/35">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-100/70">
                      Milestone {String(index + 1).padStart(2, '0')}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-slate-200">{achievement}</p>
                  </GlassCard>
                </div>
                <span className="absolute left-4 top-5 grid h-8 w-8 -translate-x-1/2 place-items-center rounded-full border border-cyan-200/35 bg-[#071426] text-cyan-100 shadow-lg shadow-cyan-500/25 sm:left-1/2">
                  <Trophy className="h-4 w-4" />
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}

export function CareerGoals({ data }) {
  const missions = [
    { number: '01', title: 'GenAI Product Builder', description: 'Build useful AI products with practical workflows and polished interfaces.' },
    { number: '02', title: 'AI-powered EdTech Systems', description: 'Create adaptive learning systems that make difficult topics feel clearer.' },
    { number: '03', title: 'Creative AI Tools', description: 'Design tools that combine generation, interaction, and expressive product thinking.' },
    { number: '04', title: 'Multiplayer Game Experiences', description: 'Ship real-time social systems with strategy, roles, and replayable loops.' },
    { number: '05', title: 'Product Engineering Internships', description: 'Join teams building reliable user-facing software and AI features.' },
  ]

  return (
    <Section id="goals" eyebrow="Next chapter" title={data.goals.title}>
      <Reveal>
        <div className="mission-map relative overflow-hidden rounded-lg border border-cyan-200/20 bg-white/[0.04] p-5 backdrop-blur-xl sm:p-7 lg:p-10">
          <div className="mission-lines" aria-hidden="true" />
          <div className="relative mx-auto grid min-h-[590px] max-w-6xl place-items-center lg:min-h-[520px]">
            <motion.div
              className="mission-core z-10 grid max-w-md place-items-center rounded-full border border-cyan-200/35 bg-[#071426]/90 p-6 text-center shadow-2xl shadow-cyan-500/20"
            >
              <Target className="h-8 w-8 text-cyan-100" />
              <h3 className="mt-4 text-xl font-semibold leading-snug text-white">
                Next Chapter: Build products that people remember.
              </h3>
              <p className="mt-3 text-xs leading-6 text-slate-300">{data.goals.body}</p>
            </motion.div>
            <div className="mission-orbit absolute inset-0">
              {missions.map((mission, index) => (
                <motion.div
                  key={mission.number}
                  className={`mission-card mission-card-${index + 1} absolute w-full max-w-[18rem] rounded-lg border border-cyan-200/18 bg-[#061225]/88 p-4 shadow-xl shadow-black/20`}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 21 }}
                >
                  <span className="mission-pulse absolute -left-2 -top-2 h-4 w-4 rounded-full bg-cyan-200" />
                  <div className="flex items-center gap-3">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-cyan-200/30 bg-cyan-200/10 text-sm font-semibold text-cyan-100">
                      {mission.number}
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <Award className="h-4 w-4 text-violet-100" />
                        <p className="text-sm font-semibold text-white">{mission.title}</p>
                      </div>
                    </div>
                  </div>
                  <p className="mt-3 text-xs leading-6 text-slate-300">{mission.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}

export function FutureVision({ data }) {
  return (
    <Section
      id="future-vision"
      eyebrow="Roadmap"
      title={data.futureVision.title}
      subtitle={data.futureVision.subtitle}
      className="future-vision-section"
    >
      <Reveal>
        <div className="future-roadmap relative overflow-hidden rounded-lg border border-cyan-200/18 bg-white/[0.04] p-4 backdrop-blur-xl sm:p-5 lg:p-6">
          <div className="future-roadmap-line" aria-hidden="true" />
          <div className="relative grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {data.futureVision.stages.map((stage, index) => (
              <motion.article
                key={`${stage.label}-${stage.title}`}
                className={`future-stage-card group relative overflow-hidden rounded-lg border p-4 ${
                  index === 0
                    ? 'border-cyan-200/35 bg-cyan-200/10'
                    : index === data.futureVision.stages.length - 1
                      ? 'border-violet-200/35 bg-violet-200/10'
                      : 'border-white/10 bg-[#061225]/72'
                }`}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-70px' }}
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ ...sectionTransition, delay: index * 0.045 }}
              >
                <span className="future-stage-node" aria-hidden="true" />
                <div className="relative flex items-start gap-3">
                  <span className="future-stage-number grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-cyan-200/25 bg-cyan-200/10 text-sm font-semibold text-cyan-100">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-cyan-100/65">{stage.label}</p>
                    <h3 className="mt-2 text-base font-semibold leading-snug text-white">{stage.title}</h3>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  )
}

export function Contact({ data }) {
  // Replace these placeholder values with your real EmailJS Service ID, Template ID, and Public Key.
  // Until these values are connected, the form will show a warning and will not open mail apps or browsers.
  const SERVICE_ID = 'service_vi3oh07'
  const TEMPLATE_ID = 'template_2x9h6oj'
  const PUBLIC_KEY = 'iXpZooLIYKSFso92g'

  const { identity } = data
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [sending, setSending] = useState(false)
  const links = [
    { label: identity.email, title: 'Email', href: `mailto:${identity.email}`, icon: Mail },
    { label: identity.linkedinLabel, title: 'LinkedIn', href: identity.linkedin, icon: Globe2, external: true },
    { label: identity.githubLabel, title: 'GitHub', href: identity.github, icon: Code2, external: true },
    { label: identity.liveProjectLabel, title: 'Volt Sensei', href: identity.liveProject, icon: Rocket, external: true },
  ]

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const values = {
      name: form.name.trim(),
      email: form.email.trim(),
      subject: form.subject.trim(),
      message: form.message.trim(),
    }

    if (!values.name || !values.email || !values.subject || !values.message) {
      setStatus({ type: 'error', message: 'Please fill in every field before sending.' })
      return
    }

    const isPlaceholder =
      SERVICE_ID === 'YOUR_SERVICE_ID' || TEMPLATE_ID === 'YOUR_TEMPLATE_ID' || PUBLIC_KEY === 'YOUR_PUBLIC_KEY'

    if (isPlaceholder) {
      setStatus({
        type: 'warning',
        message: 'Email service is not connected yet. Add EmailJS keys to enable direct sending.',
      })
      return
    }

    setSending(true)
    setStatus({ type: '', message: '' })

    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: values.name,
          from_email: values.email,
          subject: values.subject,
          message: values.message,
          to_email: identity.email,
        },
        { publicKey: PUBLIC_KEY },
      )
      .then(() => {
        setStatus({ type: 'success', message: "Message sent successfully. I'll get back to you soon." })
        setForm({ name: '', email: '', subject: '', message: '' })
      })
      .catch(() => {
        setStatus({ type: 'error', message: 'Message could not be sent. Please check the EmailJS setup and try again.' })
      })
      .finally(() => {
        setSending(false)
      })
  }

  return (
    <Section id="contact" eyebrow="Connect" title="Contact">
      <Reveal>
        <GlassCard className="contact-panel overflow-hidden">
          <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative border-b border-cyan-200/15 bg-cyan-200/10 p-6 sm:p-8 lg:border-b-0 lg:border-r lg:border-cyan-200/15">
              <Mail className="h-9 w-9 text-cyan-100" />
              <span className="mt-5 inline-flex rounded-md border border-violet-200/20 bg-violet-200/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-violet-50">
                Open to AI product, GenAI, internships, and creative builds
              </span>
              <h3 className="mt-5 text-2xl font-semibold text-white">Open to AI product and GenAI roles.</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Recruiters, founders, and collaborators can reach out for internships, product engineering work, and creative AI builds.
              </p>
              <div className="mt-5 flex items-center gap-2 text-sm text-slate-300">
                <MapPin className="h-4 w-4 text-cyan-100" />
                {identity.location}
              </div>
              <div className="mt-7 grid gap-3">
                {links.map((link) => {
                  const Icon = link.icon
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noreferrer' : undefined}
                      className="flex items-center gap-3 rounded-md border border-cyan-200/15 bg-[#061225]/55 px-4 py-4 transition hover:-translate-y-1 hover:border-cyan-200/40 hover:bg-cyan-200/10"
                    >
                      <Icon className="h-5 w-5 shrink-0 text-cyan-100" />
                      <span className="min-w-0 flex-1">
                        <span className="block text-xs uppercase tracking-[0.18em] text-slate-500">{link.title}</span>
                        <span className="block break-words text-sm text-slate-200">{link.label}</span>
                      </span>
                      {link.external && <ArrowUpRight className="h-4 w-4 shrink-0 text-slate-400" />}
                    </a>
                  )
                })}
              </div>
            </div>
            <form onSubmit={handleSubmit} className="contact-terminal grid gap-4 p-6 sm:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-sm text-slate-300">
                  Name
                  <span className="relative">
                    <User className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-cyan-100/70" />
                    <input
                      required
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      className="w-full rounded-md border border-white/10 bg-[#020617]/55 py-3 pr-3 pl-10 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-200/50 focus:shadow-[0_0_0_3px_rgba(103,232,249,0.12)]"
                      placeholder="Your name"
                    />
                  </span>
                </label>
                <label className="grid gap-2 text-sm text-slate-300">
                  Email
                  <span className="relative">
                    <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-cyan-100/70" />
                    <input
                      required
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      className="w-full rounded-md border border-white/10 bg-[#020617]/55 py-3 pr-3 pl-10 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-200/50 focus:shadow-[0_0_0_3px_rgba(103,232,249,0.12)]"
                      placeholder="you@example.com"
                    />
                  </span>
                </label>
              </div>
              <label className="grid gap-2 text-sm text-slate-300">
                Subject
                <input
                  required
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  className="w-full rounded-md border border-white/10 bg-[#020617]/55 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-200/50 focus:shadow-[0_0_0_3px_rgba(103,232,249,0.12)]"
                  placeholder="Internship, project, collaboration..."
                />
              </label>
              <label className="grid gap-2 text-sm text-slate-300">
                Message
                <span className="relative">
                  <MessageSquare className="pointer-events-none absolute left-3 top-4 h-4 w-4 text-cyan-100/70" />
                  <textarea
                    required
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows="6"
                    className="w-full resize-none rounded-md border border-white/10 bg-[#020617]/55 py-3 pr-3 pl-10 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-200/50 focus:shadow-[0_0_0_3px_rgba(103,232,249,0.12)]"
                    placeholder="Write your message..."
                  />
                </span>
              </label>
              <button
                type="submit"
                disabled={sending}
                className="neon-button inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-cyan-200 px-5 py-3 text-sm font-semibold text-slate-950 shadow-xl shadow-cyan-500/25 transition hover:-translate-y-1 hover:bg-white"
              >
                <Send className="h-4 w-4" />
                {sending ? 'Sending...' : 'Send Message'}
              </button>
              {status.message && (
                <div className={`form-status form-status-${status.type} rounded-md border px-4 py-3 text-sm`}>
                  {status.message}
                </div>
              )}
            </form>
          </div>
        </GlassCard>
      </Reveal>
    </Section>
  )
}

export function Footer({ data }) {
  return (
    <footer className="relative border-t border-cyan-200/15 px-5 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>Copyright 2026 {data.identity.name}. Building AI-powered worlds and experiences.</p>
        <div className="flex items-center gap-4">
          <ExternalLink href={data.identity.github}>GitHub</ExternalLink>
          <ExternalLink href={data.identity.linkedin}>LinkedIn</ExternalLink>
        </div>
      </div>
    </footer>
  )
}
