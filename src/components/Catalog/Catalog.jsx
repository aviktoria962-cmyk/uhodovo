import { CatalogFilters } from './CatalogFilters/CatalogFilters'
import { CatalogCard } from './CatalogCard/CatalogCard'
import s from './Catalog.module.css'

export function Catalog() {
    return (
        <>
            <CatalogFilters />

            <div className={s.catalog}>
                <CatalogCard />
                <CatalogCard />
                <CatalogCard />
                <CatalogCard />
                <CatalogCard />
                <CatalogCard />
                <CatalogCard />
                <CatalogCard />
                <CatalogCard />
                <CatalogCard />
                <CatalogCard />
                <CatalogCard />
            </div>
        </>
    )
}