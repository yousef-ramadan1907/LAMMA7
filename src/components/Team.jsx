import { motion } from 'framer-motion'
import { Reveal, Title } from './Reveal'
import { teams } from '../data/content'
export default function Team({ c, lang }) {
  return (
    <section className="sec team">
      <div className="wrap">
        <Title text={c.teamTitle} className="h2 big" />
        <Reveal><p className="lead mut">{c.teamSub}</p></Reveal>
        {teams.map((t) => (
          <div key={t.id} className="dept">
            <Reveal x={-40}><h3 className="dh">{t[lang]} <em>{t.members.length}</em></h3></Reveal>
            <div className="mgrid">
              {t.members.map((m, i) => (
                <motion.div key={i} className="mem" initial={{ opacity: 0, y: 60, scale: 0.85 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.7, delay: (i % 4) * 0.1, ease: [0.2, 0.7, 0.2, 1] }}
                  whileHover={{ y: -10 }}>
                  <div className="hex"><div className="hex-in">
                    {m.photo ? <img src={m.photo} alt={m.name[lang]} /> : <span>{m.name.en[0]}</span>}
                  </div></div>
                  <p>{m.name[lang]}</p>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
