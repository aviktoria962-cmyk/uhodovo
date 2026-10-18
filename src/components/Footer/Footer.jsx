import s from './Footer.module.css'

export function Footer() {
  return (
    <div className={s.zalFoot}>
      <footer className={s.footerContent}>
        <div className={s.logo}>
          <a href="/">
            <img src="/images/logoFoot.svg" alt="Уходово" />
          </a>
        </div>

        <div className={s.headAll}>
          <nav className={s.head}>
            <a href="/" className={s.link}>Главная</a>
            <a href="/catalog" className={s.link}>Каталог</a>
            <a href="/tovar" className={s.link}>Корзина</a>
          </nav>
        </div>
      </footer>
    </div>
  )
}