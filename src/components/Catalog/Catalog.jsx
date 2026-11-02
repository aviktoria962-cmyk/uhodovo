import { useState, useEffect } from 'react';
import s from './Catalog.module.css';
import { CatalogCard } from './CatalogCard/CatalogCard';

export function Catalog({ search, categoryId, sort }) {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        (async function load() {
            try {
                const res = await fetch("http://localhost:3000/products");
                if (!res.ok) throw new Error(`Ошибка ${res.status}: ${res.statusText}`);
                const data = await res.json();
                setProducts(data);
            } catch (error) {
                setError(error.message);
            }
        })();
    }, []);

    const filteredProduct = products
        .filter((p) => p.title.toLowerCase().trim().includes(search.toLowerCase().trim()))
        .filter((p) => p.categoryId === categoryId || categoryId === null);

    const sorting = (items) => {
        if (!sort) return items;
        return [...items].sort((a, b) =>
            sort === 'asc' ? a.price - b.price : b.price - a.price
        );
    };

    if (error) {
        return <p className={s.stateError}>Не удалось загрузить товары: {error}</p>;
    }

    if (filteredProduct.length === 0) {
        return <p className={s.state}>Товары не найдены</p>;
    }

    return (
        <div className={s.catalog}>
            {sorting(filteredProduct).map((product) => (
                <CatalogCard key={product.id} product={product} />
            ))}
        </div>
    );
}