import { Catalog } from "../../components/Catalog/Catalog";
import { CatalogFilters } from "../../components/Catalog/CatalogFilters/CatalogFilters";
import s from './CatalogPage.module.css';

export function CatalogPage() {
    return (
        <main className="container">
            <div className={s.catalogAll} id="catalog">
                <h2 className={s.title}>Наши продукты</h2>
                <CatalogFilters />
                <Catalog />
            </div>
        </main>
    );
}