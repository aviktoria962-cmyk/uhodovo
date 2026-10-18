import s from './Banner.module.css'

export function Banner() {
  return (
    <div className={s.banZaliv}>
      <div className="container" id="banner">
        <div className={s.banText}>
          <h1 className={s.title}>Уход, которому<br /> можно доверять</h1>
          <a href="/catalog" className={s.but2}>Перейти к покупкам</a>
        </div>
      </div>
    </div>
  )
}