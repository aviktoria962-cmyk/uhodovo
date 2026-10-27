import { useParams, Link } from 'react-router';
import { products, categories } from '../../assets/data';
import { PATH } from '../../routing/Routing';
import s from './ProductPage.module.css';

export function ProductPage() {
    const { id } = useParams();
    const product = products.find((p) => p.id === id);

    if (!product) {
        return <h2 style={{ textAlign: 'center', margin: '100px 0' }}>Товар не найден</h2>;
    }

    const category = categories.find((c) => c.id === product.categoryId);

    return (
        <main className="container">
            <div className={s.block1} id="tovar">
                <div className={s.imgs}>
                    <img src={product.image} alt={product.title} className={s.mainImg} />
                </div>

                <div className={s.description}>
                    <h1 className={s.title}>{product.title}</h1>
                    <h2 className={s.h2Price}>{product.price.toLocaleString('ru-RU')} ₽</h2>

                    <button type="button" className={s.tocart}>Добавить в корзину</button>

                    <h3 className={s.descTitle}>Описание</h3>
                    <p className={s.descP}>{product.description}</p>
                    <p className={s.descP2}>Категория: {category?.title}</p>
                </div>
            </div>
        </main>
    );
}