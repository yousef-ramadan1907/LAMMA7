import { Mail, Instagram, Facebook } from 'lucide-react'
import { Reveal, Title } from './Reveal'
import { social } from '../data/content'
const Tik = (p) => (<svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" {...p}>
  <path d="M19.6 6.7a4.8 4.8 0 0 1-3.8-4.2V2h-3.4v13.4a2.9 2.9 0 1 1-2.1-2.8V9.2a6.3 6.3 0 1 0 5.5 6.2V9a8.2 8.2 0 0 0 4.8 1.5V7.1a4.8 4.8 0 0 1-1-.4z" /></svg>)
export default function Contact({ c }) {
  const items = [['gmail', Mail], ['instagram', Instagram], ['facebook', Facebook], ['tiktok', Tik]]
  return (
    <footer className="sec contact">
      <div className="wrap">
        <Title text={c.contactTitle} className="h2 big" />
        <Reveal><p className="lead mut">{c.contactSub}</p></Reveal>
        <div className="soc">
          {items.map(([k, Icon], i) => (
            <Reveal key={k} delay={i * 0.1} scale={0.5}>
              <a href={social[k]} target="_blank" rel="noreferrer" className="sbtn"><Icon size={28} /><span>{c.labels[k]}</span></a>
            </Reveal>
          ))}
        </div>
        <div className="fl"><img src="/logo.jpg" alt="" /><p>{c.foot}</p></div>
      </div>
    </footer>
  )
}
