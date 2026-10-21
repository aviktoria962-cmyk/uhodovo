import s from './ProductPage.module.css'
import tovar1 from '../../assets/images/tovar1.png'
import tovar2 from '../../assets/images/tovar2.png'
import tovar3 from '../../assets/images/tovar3.png'
import tovar4 from '../../assets/images/tovar4.png'

export function ProductPage() {
  return (
    <main className="container">
      <div className={s.block1} id="tovar">
        <div className={s.imgs}>
          <img src={tovar1} alt="" />
          <div className={s.imgsMini}>
            <img src={tovar2} alt="" />
            <img src={tovar3} alt="" />
            <img src={tovar4} alt="" />
          </div>
        </div>


        <div className={s.description}>
          <h1 className={s.title}>ROUND LAB 1025 dokdo, 200ml</h1>
          <h2 className={s.h2Price}>833 ₽</h2>

          <button type="button" className={s.tocart}>Добавить в корзину</button>

          <h3 className={s.descTitle}>Описание</h3>
          <p className={s.descP}>Тонер для лица отшелушивает и увлажняет кожу, делает её гладкой и здоровой на вид и
            дарит ощущение
            свежести. Глубоководная морская вода с острова Токто, обогащенная минералами, поддерживает
            оптимальный гидролипидный баланс.</p>
          <p className={s.descP2}>Компонент HATCHING EX-07 мягко удаляет ороговевшие частицы и себум, чтобы сохранить
            чистоту кожи.
            Пантенол, аллантоин и бетаин защищают, успокаивают и снижают чувствительность.</p>
        </div>
      </div>
    </main>
  )
}