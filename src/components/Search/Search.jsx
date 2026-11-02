import s from './Search.module.css';
import search2 from '../../assets/images/search2.svg';

export function Search({ value, onChange }) {
    return (
        <div className={s.wrap}>
            <input
                type="search"
                className={s.input}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Введите название"
            />
            <button className={s.searchBtn} type="button">
                <img src={search2} alt="Поиск" />
            </button>
        </div>
    );
}