import { useEffect } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
export default function Background() {
  const { scrollYProgress } = useScroll()
  const w = useSpring(scrollYProgress, { stiffness: 120, damping: 25 })
  useEffect(() => {
    const mv = (e) => {
      document.documentElement.style.setProperty('--mx', e.clientX + 'px')
      document.documentElement.style.setProperty('--my', e.clientY + 'px')
    }
    window.addEventListener('pointermove', mv)
    return () => window.removeEventListener('pointermove', mv)
  }, [])
  return (<>
    <motion.div className="progress" style={{ scaleX: w }} />
    <div className="glow" />
  </>)
}
