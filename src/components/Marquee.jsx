export default function Marquee({ items }) {
  const row = [...items, ...items, ...items, ...items]
  return (
    <div className="marquee-box">
      <div className="marquee" dir="ltr" aria-hidden="true">
        <div className="track">{row.map((t, i) => <span key={i}>{t}<b>✦</b></span>)}</div>
      </div>
    </div>
  )
}
