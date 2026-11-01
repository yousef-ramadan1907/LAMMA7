import { useEffect, useState } from 'react'
import { content } from './data/content'
import Background from './components/Background'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import RobotDemo from './components/RobotDemo'
import Features from './components/Features'
import Institution from './components/Institution'
import Team from './components/Team'
import Contact from './components/Contact'
export default function App() {
  const [lang, setLang] = useState('ar')
  const c = content[lang]
  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
  }, [lang])
  return (
    <>
      <Background />
      <button className="lang" onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}>{c.toggle}</button>
      <Hero c={c} />
      <Marquee items={c.marquee} />
      <About c={c} />
      <RobotDemo c={c} />
      <Features c={c} />
      <Institution c={c} />
      <Team c={c} lang={lang} />
      <Contact c={c} />
    </>
  )
}
