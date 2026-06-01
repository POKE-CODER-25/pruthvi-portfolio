import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import {
  Achievements,
  About,
  CareerGoals,
  Certifications,
  Contact,
  Footer,
  Hero,
  Navbar,
  Projects,
  Skills,
} from './components'
import { portfolioData } from './data/portfolioData'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1200)
    return () => window.clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen overflow-hidden bg-[#030b1d] text-slate-100">
      <AnimatePresence>
        {loading && (
          <motion.div
            className="loading-screen"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <div className="loading-card">
              <div className="loading-logo-wrap">
                <img src="/favicon.png" alt="R. Pruthvi Adithya Raj logo" className="loading-logo" />
              </div>
              <p className="loading-text">Building AI-powered worlds...</p>
              <div className="loading-progress" aria-hidden="true">
                <span />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="site-aurora" aria-hidden="true" />
      <div className="scanline-layer" aria-hidden="true" />
      <div className="orb orb-one" aria-hidden="true" />
      <div className="orb orb-two" aria-hidden="true" />
      <div className="particle-field" aria-hidden="true">
        {Array.from({ length: 14 }).map((_, index) => (
          <span key={index} style={{ '--i': index }} />
        ))}
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: loading ? 0.25 : 1 }} transition={{ duration: 0.35, ease: 'easeOut' }}>
        <Navbar data={portfolioData} />
      </motion.div>
      <motion.main initial={{ opacity: 0 }} animate={{ opacity: loading ? 0.25 : 1 }} transition={{ duration: 0.35, ease: 'easeOut' }}>
        <Hero data={portfolioData} />
        <About data={portfolioData} />
        <Skills data={portfolioData} />
        <Projects data={portfolioData} />
        <Certifications data={portfolioData} />
        <Achievements data={portfolioData} />
        <CareerGoals data={portfolioData} />
        <Contact data={portfolioData} />
      </motion.main>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: loading ? 0.25 : 1 }} transition={{ duration: 0.35, ease: 'easeOut' }}>
        <Footer data={portfolioData} />
      </motion.div>
    </div>
  )
}

export default App
