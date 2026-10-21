import { Link } from 'react-router'
import { PATH } from '../../../routing/Routing'
import s from './CatalogCard.module.css'
import cardImg from '../../../assets/images/i1.png' 

export function CatalogCard() {
    return (
        <div className={s.cat}>
            <img src={cardImg} alt="Товар" />
            <p>Отшелушивающий тонер для лица</p>
            <h3>ROUND LAB</h3>
            <h4>833 ₽</h4>
            <Link to={PATH.Product} className={s.catbut}>Подробнее</Link>
        </div>
    )
}