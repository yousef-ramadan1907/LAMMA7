import { Reveal, Title } from './Reveal'
const Plant = ({ x, sick, c }) => (
  <g transform={`translate(${x},290)`}>
    <path d="M0 0V-80" stroke="#4da31a" strokeWidth="5" strokeLinecap="round" />
    {[[-22, -60, -30], [22, -48, 30], [-18, -30, -25], [16, -84, 0]].map(([a, b, r], i) => (
      <ellipse key={i} cx={a} cy={b} rx="22" ry="10" transform={`rotate(${r} ${a} ${b})`} fill="#7ed321">
        {sick && <animate attributeName="fill" values="#7ed321;#7ed321;#d9503f;#d9503f;#7ed321" keyTimes="0;.53;.57;.98;1" dur="12s" repeatCount="indefinite" />}
      </ellipse>
    ))}
    {sick && (<g opacity="0">
      <animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;.57;.6;.98;1" dur="12s" repeatCount="indefinite" />
      <circle cy="-55" r="62" fill="none" stroke="#ff6b4a" strokeWidth="3" strokeDasharray="8 8">
        <animateTransform attributeName="transform" type="rotate" values="0 0 -55;360 0 -55" dur="6s" repeatCount="indefinite" />
      </circle>
      <path d="M0 -118V-168" stroke="#fff" strokeWidth="3" /><path d="M0 -168h46l-12 14 12 14h-46z" fill="#ff6b4a" />
      <text x="0" y="-182" fill="#ff6b4a" fontSize="18" fontWeight="700" textAnchor="middle">{c.detected}</text>
    </g>)}
  </g>
)
export default function RobotDemo({ c }) {
  return (
    <section className="sec demo">
      <div className="wrap">
        <Title text={c.demoTitle} className="h2 big" />
        <Reveal><p className="lead mut">{c.demoSub}</p></Reveal>
        <Reveal scale={0.9} className="stage">
          <svg viewBox="0 0 900 340" role="img" aria-label="Lamma7 robot animation">
            <defs><linearGradient id="beam" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#7ed321" stopOpacity=".7" /><stop offset="1" stopColor="#7ed321" stopOpacity="0" /></linearGradient></defs>
            <rect y="290" width="900" height="50" fill="#06241b" /><rect y="288" width="900" height="3" fill="#7ed321" />
            {[120, 300, 660, 840].map(x => <Plant key={x} x={x} c={c} />)}
            <Plant x={480} sick c={c} />
            <g>
              <animateTransform attributeName="transform" type="translate" values="60 290;840 290" dur="12s" repeatCount="indefinite" />
              <circle cx="-30" cy="-16" r="15" fill="#0c3d2e" stroke="#7ed321" strokeWidth="4" />
              <circle cx="30" cy="-16" r="15" fill="#0c3d2e" stroke="#7ed321" strokeWidth="4" />
              <rect x="-48" y="-62" width="96" height="36" rx="9" fill="#fff" />
              <rect x="-34" y="-52" width="30" height="8" rx="4" fill="#7ed321" />
              <rect x="-4" y="-132" width="8" height="72" fill="#fff" />
              <g>
                <animateTransform attributeName="transform" type="rotate" values="-12 0 -130;14 0 -130;-12 0 -130" dur="3s" repeatCount="indefinite" />
                <rect x="0" y="-136" width="42" height="8" rx="4" fill="#fff" />
                <polygon points="42,-124 110,-8 -22,-8" fill="url(#beam)" />
                <circle cx="44" cy="-132" r="12" fill="#7ed321" /><circle cx="44" cy="-132" r="6" fill="#072a20" />
              </g>
            </g>
          </svg>
        </Reveal>
        <div className="steps">
          {c.steps.map(([h, p], i) => (
            <Reveal key={h} delay={i * 0.12} className="step"><span className="n">{i + 1}</span><h3>{h}</h3><p>{p}</p></Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
