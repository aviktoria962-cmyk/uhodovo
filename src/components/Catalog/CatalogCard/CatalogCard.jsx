import s from './CatalogCard.module.css'

export function CatalogCard() {
  return (
    <div className={s.cat}>
      <img src="/images/i1.png" alt="Товар" />
      <p>Название товара</p>
      <h3>БРЕНД</h3>
      <h4>833 ₽</h4>
      <a href="/tovar" className={s.catbut}>Подробнее</a>
    </div>
  )
}