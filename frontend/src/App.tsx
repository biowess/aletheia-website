import { Suspense, lazy, useEffect } from 'react'
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import PageWrapper from './components/layout/PageWrapper'
import { track } from './lib/analytics'
import ScrollProgress from './components/ui/ScrollProgress'

// Lazy-loaded pages — content populated in subsequent prompts
const HomePage        = lazy(() => import('./pages/HomePage'))
const FeaturesPage    = lazy(() => import('./pages/FeaturesPage'))
const ScreenshotsPage = lazy(() => import('./pages/ScreenshotsPage'))
const InstallPage     = lazy(() => import('./pages/InstallPage'))
const DocsPage        = lazy(() => import('./pages/DocsPage'))
const DownloadPage    = lazy(() => import('./pages/DownloadPage'))
const FaqPage         = lazy(() => import('./pages/FaqPage'))

import PageSkeleton from './components/ui/PageSkeleton'

function AnalyticsTracker() {
  const location = useLocation()
  useEffect(() => {
    track('pageview', { path: location.pathname })
  }, [location])
  return null
}

function AnimatedRoutes() {
  const location = useLocation()
  const shouldReduceMotion = useReducedMotion()

  const variants = {
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 4 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: shouldReduceMotion ? 0 : -4 },
  }

  return (
    <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo({ top: 0, behavior: 'instant' })}>
      <Routes location={location} key={location.pathname}>
        <Route path="/"            element={<motion.div variants={variants} initial="initial" animate="animate" exit="exit" transition={{ type: 'spring', duration: 0.22, bounce: 0 }}><HomePage /></motion.div>} />
        <Route path="/features"    element={<motion.div variants={variants} initial="initial" animate="animate" exit="exit" transition={{ type: 'spring', duration: 0.22, bounce: 0 }}><FeaturesPage /></motion.div>} />
        <Route path="/screenshots" element={<motion.div variants={variants} initial="initial" animate="animate" exit="exit" transition={{ type: 'spring', duration: 0.22, bounce: 0 }}><ScreenshotsPage /></motion.div>} />
        <Route path="/install"     element={<motion.div variants={variants} initial="initial" animate="animate" exit="exit" transition={{ type: 'spring', duration: 0.22, bounce: 0 }}><InstallPage /></motion.div>} />
        <Route path="/docs"        element={<motion.div variants={variants} initial="initial" animate="animate" exit="exit" transition={{ type: 'spring', duration: 0.22, bounce: 0 }}><DocsPage /></motion.div>} />
        <Route path="/download"    element={<motion.div variants={variants} initial="initial" animate="animate" exit="exit" transition={{ type: 'spring', duration: 0.22, bounce: 0 }}><DownloadPage /></motion.div>} />
        <Route path="/faq"         element={<motion.div variants={variants} initial="initial" animate="animate" exit="exit" transition={{ type: 'spring', duration: 0.22, bounce: 0 }}><FaqPage /></motion.div>} />
      </Routes>
    </AnimatePresence>
  )
}

/**
 * App — root router shell.
 * Every route is wrapped in PageWrapper which renders NavBar + Footer
 * and provides the 1200px centered container.
 */
export default function App() {
  return (
    <HashRouter>
      <ScrollProgress />
      <AnalyticsTracker />
      <Suspense fallback={<PageSkeleton />}>
        <PageWrapper fullWidth>
          <AnimatedRoutes />
        </PageWrapper>
      </Suspense>
    </HashRouter>
  )
}
