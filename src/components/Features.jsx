import * as I from 'lucide-react'
import { Reveal, Title } from './Reveal'
export default function Features({ c }) {
  return (
    <section className="sec feats">
      <div className="wrap">
        <Title text={c.featTitle} className="h2 big" />
        <div className="fgrid">
          {c.feats.map(([ic, h, p], i) => {
            const Icon = I[ic]
            return (
              <Reveal key={h} delay={(i % 3) * 0.12} x={i % 2 ? 60 : -60} className="fcard">
                <div className="ico"><Icon size={30} /></div><h3>{h}</h3><p>{p}</p>
              </Reveal>
            )
          })}
        </div>
        <Reveal className="goal" y={80}><h3>{c.goalTitle}</h3><p>{c.goal}</p></Reveal>
      </div>
    </section>
  )
}
