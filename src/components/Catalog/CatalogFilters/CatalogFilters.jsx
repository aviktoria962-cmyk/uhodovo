import s from './CatalogFilters.module.css'
import search2 from '../../../assets/images/search2.svg'

export function CatalogFilters() {
    return (
        <div className={s.filtAll}>
            <div className={s.filter}>
                <div className={`${s.filt} ${s.active}`}>
                    <a href="#">Все</a>
                </div>
                <div className={s.filt}>
                    <a href="#">Лицо</a>
                </div>
                <div className={s.filt}>
                    <a href="#">Тело</a>
                </div>
                <div className={s.filt}>
                    <a href="#">Волосы</a>
                </div>
            </div>

            <div className={s.searchPrice}>
                <div className={s.searchBox}>
                    <input type="text" placeholder="Введите название" />
                    <button className={s.searchBtn}>
                        <img src={search2} alt="" />
                    </button>
                </div>

                <div className={s.price}>
                    <select className={s.priceSelect} defaultValue="">
                        <option value="" disabled>Цена от...</option>
                        <option value="0">0 ₽</option>
                        <option value="500">500 ₽</option>
                        <option value="1000">1 000 ₽</option>
                        <option value="2000">2 000 ₽</option>
                        <option value="3000">3 000 ₽</option>
                        <option value="5000">5 000 ₽</option>
                    </select>

                    <div className={s.tire}>—</div>

                    <select className={s.priceSelect} defaultValue="">
                        <option value="" disabled>Цена до...</option>
                        <option value="500">500 ₽</option>
                        <option value="1000">1 000 ₽</option>
                        <option value="2000">2 000 ₽</option>
                        <option value="3000">3 000 ₽</option>
                        <option value="5000">5 000 ₽</option>
                        <option value="10000">10 000 ₽</option>
                    </select>
                </div>
            </div>
        </div>
    )
}