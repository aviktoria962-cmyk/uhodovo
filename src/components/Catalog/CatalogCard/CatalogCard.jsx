import { Link } from 'react-router';
import s from './CatalogCard.module.css';

export function CatalogCard({ product }) {
    return (
        <div className={s.cat}>
            <img src={product.image} alt={product.title} className={s.image} />
            
            <p className={s.title}>{product.title}</p>
            <h3 className={s.desc}>{product.description}</h3>
            
            <div className={s.footer}>
                <h4 className={s.price}>{product.price} ₽</h4>
                <Link to={`/product/${product.id}`} className={s.catbut}>
                    Подробнее
                </Link>
            </div>
        </div>
    );
}