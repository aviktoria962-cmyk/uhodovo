import { Link } from 'react-router'
import { PATH } from '../../routing/Routing'
import s from './Banner.module.css'
import bannerBg from '../../assets/images/banner.png'

export function Banner() {
  return (
    <div className={s.banZaliv} style={{ backgroundImage: `url(${bannerBg})` }}>
      <div className={s.banText} id="banner">
        <h1 className={s.title}>Уход, которому<br /> можно доверять</h1>
        <Link to={PATH.Catalog} className={s.but2}>Перейти к покупкам</Link>
      </div>
    </div>
  )
}