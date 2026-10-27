import { products } from '../../assets/data';
import s from './Catalog.module.css';
import { CatalogCard } from './CatalogCard/CatalogCard';

export function Catalog() {
    return (
        <div className={s.catalog}>
            {products.map((product) => (
                <CatalogCard key={product.id} product={product} />
            ))}
        </div>
    );
}