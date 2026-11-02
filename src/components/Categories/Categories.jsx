import s from './Categories.module.css';

export function Categories({ categories, selectedId, onSelect }) {
    return (
        <div className={s.wrap}>
            <button
                type="button"
                className={selectedId === null ? `${s.tab} ${s.tabActive}` : s.tab}
                onClick={() => onSelect(null)}
            >
                Все
            </button>
            {categories.map((category) => (
                <button
                    key={category.id}
                    type="button"
                    className={
                        selectedId === category.id ? `${s.tab} ${s.tabActive}` : s.tab
                    }
                    onClick={() => onSelect(category.id)}
                >
                    {category.title}
                </button>
            ))}
        </div>
    );
}