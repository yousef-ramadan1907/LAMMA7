import { Reveal, Title } from './Reveal'
export default function Institution({ c }) {
  return (
    <section className="sec inst">
      <div className="wrap">
        <Title text={c.instTitle} className="h2 big dark" />
        <div className="igrid">
          {c.inst.map(([k, v], i) => (
            <Reveal key={k} delay={i * 0.12} className="icard"><small>{k}</small><strong>{v}</strong></Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
