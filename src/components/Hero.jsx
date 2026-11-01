import { motion, useScroll, useTransform } from 'framer-motion'
const leaf = 'M0 40C0 10 20 0 40 0c0 25-15 40-40 40z'
export default function Hero({ c }) {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 800], [0, -160])
  const y2 = useTransform(scrollY, [0, 800], [0, 120])
  const sc = useTransform(scrollY, [0, 600], [1, 0.8])
  const op = useTransform(scrollY, [0, 600], [1, 0])
  return (
    <header className="hero">
      <div className="grid-bg" />
      {[[8,18,1.4,y1],[86,30,1,y2],[16,70,.8,y2],[78,76,1.6,y1],[50,8,.7,y2]].map(([l,t,s,y],i)=>(
        <motion.svg key={i} className="leaf" viewBox="0 0 40 40" style={{ left:l+'%', top:t+'%', y, width:50*s }}
          animate={{ rotate: [0, 18, -12, 0] }} transition={{ duration: 6+i, repeat: Infinity, ease:'easeInOut' }}>
          <path d={leaf} fill={i%2?'#0c3d2e':'#7ed321'} opacity=".55" />
        </motion.svg>
      ))}
      <motion.div className="hero-in" style={{ scale: sc, opacity: op }}>
        <div className="logo-wrap">
          <span className="ring r1" /><span className="ring r2" /><span className="spin" />
          <motion.img src="/logo.jpg" alt="Lamma7 logo"
            initial={{ scale: 0.3, opacity: 0, rotate: -25 }} animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 70, damping: 11, delay: 0.1 }} />
          <span className="scanline" />
        </div>
        <h1 className="brand" aria-label="Lamma7">
          {'Lamma7'.split('').map((ch, i) => (
            <motion.span key={i} initial={{ y: 120, opacity: 0, rotateX: -80 }} animate={{ y: 0, opacity: 1, rotateX: 0 }}
              transition={{ delay: 0.7 + i * 0.07, duration: 0.8, ease: [0.2, 0.7, 0.2, 1] }}>{ch}</motion.span>
          ))}
        </h1>
        <motion.p className="tag" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.6, duration: 1 }}>
          {c.tagline}
        </motion.p>
        <motion.div className="cue" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2 }}>
          <span>{c.scroll}</span><i />
        </motion.div>
      </motion.div>
    </header>
  )
}
