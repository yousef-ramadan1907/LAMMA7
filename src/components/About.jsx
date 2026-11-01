import { motion } from 'framer-motion'
import { Reveal, Title } from './Reveal'
export default function About({ c }) {
  return (
    <section className="sec about">
      <div className="wrap">
        <Title text={c.aboutTitle} className="h2 big" />
        <div className="two">
          <div>{c.about.map((p, i) => <Reveal key={i} delay={i * 0.15}><p className="lead">{p}</p></Reveal>)}</div>
          <div className="chips">
            {c.chips.map((t, i) => (
              <motion.div key={t} className="chip" initial={{ opacity: 0, scale: 0.6, rotate: i % 2 ? 6 : -6 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }} viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 120, delay: i * 0.12 }} whileHover={{ y: -6, scale: 1.05 }}>{t}</motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
