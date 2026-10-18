import s from './Banner.module.css'
import bannerBg from '../../assets/images/banner.png'

export function Banner() {
  return (
    <div className={s.banZaliv} style={{ backgroundImage: `url(${bannerBg})` }}>
      <div className={s.banText} id="banner">
        <h1 className={s.title}>Уход, которому<br /> можно доверять</h1>
        <a href="#catalog" className={s.but2}>Перейти к покупкам</a>
      </div>
    </div>
  )
}