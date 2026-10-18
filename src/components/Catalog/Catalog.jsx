import s from './Catalog.module.css'
import { CatalogCard } from './CatalogCard/CatalogCard'

export function Catalog() {
  return (
    <section className={s.catalog}>
      <header className={s.head}>
        <h2 className={s.title}>Наши продукты</h2>
      </header>

      <div className={s.grid}>
        <CatalogCard />
        <CatalogCard />
        <CatalogCard />
        <CatalogCard />
        <CatalogCard />
        <CatalogCard />
      </div>
    </section>
  )
}