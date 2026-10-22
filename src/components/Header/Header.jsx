import { Link } from 'react-router'
import { PATH } from '../../routing/Routing'
import s from './Header.module.css'
import logoHead from '../../assets/images/logoHead.svg'

export function Header() {
    return (
        <header className={`${s.head1} container`}>
            <Link to={PATH.Home}>
                <img src={logoHead} alt="Уходово" className={s.logoHead} />
            </Link>

            <div className={s.headAll}>
                <nav className={s.head}>
                    <Link to={PATH.Home} className={s.link}>Главная</Link>
                    <Link to={PATH.Catalog} className={s.link}>Каталог</Link>
                    <Link to={PATH.Cart} className={s.link}>Корзина</Link> 
                </nav>
            </div>
        </header>
    )
}