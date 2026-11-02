import { useState, useEffect } from 'react';
import s from './Categories.module.css';

export function Categories() {
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        (async function load() {
            try {
                const res = await fetch("http://localhost:3000/categories");
                if (!res.ok) {
                    throw new Error(`Ошибка ${res.status}: ${res.statusText}`);
                }
                const data = await res.json();
                setCategories(data);
            } catch (err) {
                setError(err.message);
            }
        })();
    }, []);

    if (error) {
        return <p>Не удалось загрузить категории: {error}</p>;
    }

    return (
        <div className={s.wrap}>
            <button className={`${s.tab} ${s.tabActive}`}>Все</button>
            {categories.map((category) => (
                <button key={category.id} className={s.tab}>
                    {category.title}
                </button>
            ))}
        </div>
    );
}