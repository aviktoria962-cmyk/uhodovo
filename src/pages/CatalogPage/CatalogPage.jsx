import { Catalog } from "../../components/Catalog/Catalog";
import s from './CatalogPage.module.css'

export function CatalogPage() {
    return (
        <main className="container">
            <div className={s.catalogAll} id="catalog">
                <h2 className={s.title}>Наши продукты</h2>

                <Catalog />
            </div>
        </main>
    )
}