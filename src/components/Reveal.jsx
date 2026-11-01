import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const ease = [0.2, 0.7, 0.2, 1]

export function Reveal({ children, delay = 0, y = 50, x = 0, scale = 1, className = '' }) {
  return (
    <motion.div className={className}
      initial={{ opacity: 0, y, x, scale }} whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
      viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.9, delay, ease }}>
      {children}
    </motion.div>
  )
}

// عنوان تظهر كلماته واحدة واحدة
export function Title({ text, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })
  return (
    <h2 ref={ref} className={className} aria-label={text}>
      {text.split(' ').map((w, i) => (
        <span key={i} className="w" aria-hidden="true">
          <motion.span style={{ display: 'inline-block' }}
            initial={{ y: '115%', rotate: 8 }}
            animate={inView ? { y: 0, rotate: 0 } : { y: '115%', rotate: 8 }}
            transition={{ duration: 0.8, delay: i * 0.09, ease }}>{w}</motion.span>
        </span>
      ))}
    </h2>
  )
}