import { categories } from "../../assets/data";
import s from './Categories.module.css';

export function Categories() {
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