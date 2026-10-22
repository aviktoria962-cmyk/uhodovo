import { Link } from 'react-router'
import { PATH } from '../../routing/Routing'
import s from './Footer.module.css'
import logoFoot from '../../assets/images/logoFoot.svg'

export function Footer() {
  return (
    <div className={s.zalFoot}>
      <footer className={`${s.head1} container`}>
        <div className={s.logo}>
          <Link to={PATH.Home}>
            <img src={logoFoot} alt="Уходово" />
          </Link>
        </div>

        <div className={s.headAll}>
          <nav className={s.head}>
            <Link to={PATH.Home} className={s.link}>Главная</Link>
            <Link to={PATH.Catalog} className={s.link}>Каталог</Link>
            <Link to="/cart" className={s.link}>Корзина</Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}