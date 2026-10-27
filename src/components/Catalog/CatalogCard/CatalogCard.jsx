import { Link } from 'react-router';
import s from './CatalogCard.module.css';

export function CatalogCard({ product }) {
    return (
        <div className={s.cat}>
            <img src={product.image} alt={product.title} />
            <p>{product.title}</p>
            <h3>{product.description}</h3>
            <h4>{product.price.toLocaleString('ru-RU')} ₽</h4>
            <Link to={`/product/${product.id}`} className={s.catbut}>
                Подробнее
            </Link>
        </div>
    );
}