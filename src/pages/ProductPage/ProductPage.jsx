import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router';
import s from './ProductPage.module.css';
import { PATH } from '../../routing/Routing';

export function ProductPage() {
    const [product, setProduct] = useState({});
    const [category, setCategory] = useState({});
    const [error, setError] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        (async function load() {
            try {
                const prodRes = await fetch("http://localhost:3000/products/" + id);
                if (!prodRes.ok) throw new Error(`Ошибка товара: ${prodRes.statusText}`);
                const productFromServer = await prodRes.json();
                setProduct(productFromServer);

                const catRes = await fetch("http://localhost:3000/categories/" + productFromServer.categoryId);
                if (!catRes.ok) throw new Error(`Ошибка категории: ${catRes.statusText}`);
                const categoryFromServer = await catRes.json();
                setCategory(categoryFromServer);
            } catch (error) {
                setError(error.message);
            }
        })();
    }, [id]);

    if (error) {
        return <p>Не удалось загрузить данные: {error}</p>;
    }

    return (
        <main className="container">
            <nav className={s.breadcrumbs} aria-label="Хлебные крошки">
                <Link to={PATH.Home} className={s.crumb}>Главная</Link>
                <span className={s.crumbSep}>/</span>
                <Link to={PATH.Catalog} className={s.crumb}>Каталог</Link>
                <span className={s.crumbSep}>/</span>
                <span className={s.crumbCurrent}>{product.title}</span>
            </nav>

            <div className={s.block1} id="tovar">
                <div className={s.imgs}>
                    <img src={product.image} alt={product.title} className={s.mainImg} />
                </div>

                <div className={s.description}>
                    <h1 className={s.title}>{product.title}</h1>
                    <h2 className={s.h2Price}>{product.price} ₽</h2>

                    <button type="button" className={s.tocart}>Добавить в корзину</button>

                    <h3 className={s.descTitle}>Описание</h3>
                    <p className={s.descP}>{product.description}</p>
                    <p className={s.descP2}>Категория: {category.title}</p>
                </div>
            </div>
        </main>
    );
}