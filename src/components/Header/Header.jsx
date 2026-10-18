import s from './Header.module.css'
import logoHead from '../../assets/images/logoHead.svg' 

export function Header() {
  return (
    <header className={s.head1}>
      <a href="#">
        <img src={logoHead} alt="Уходово" />
      </a>
      <div className={s.headAll}>
        <nav className={s.head}>
          <a href="#" className={s.link}>Главная</a>
          <a href="#catalog" className={s.link}>Каталог</a>
          <a href="#tovar" className={s.link}>Корзина</a>
        </nav>
      </div>
    </header>
  )
}