import s from './Sort.module.css';

export function Sort({ value, onChange }) {
    return (
        <label className={s.wrap}>
            <span className={s.label}>Сортировка:</span>
            <select
                className={s.select}
                value={value}
                onChange={(e) => onChange(e.target.value)}
            >
                <option value="">По умолчанию</option>
                <option value="asc">Сначала дешёвые</option>
                <option value="desc">Сначала дорогие</option>
            </select>
        </label>
    );
}