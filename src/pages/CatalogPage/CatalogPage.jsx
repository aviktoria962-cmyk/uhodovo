import { useState, useEffect } from 'react';
import { Catalog } from "../../components/Catalog/Catalog";
import { Categories } from "../../components/Categories/Categories";
import { Search } from "../../components/Search/Search";
import { Sort } from "../../components/Sort/Sort";
import s from './CatalogPage.module.css';

export function CatalogPage() {
    const [selectedCategoryId, setSelectedCategoryId] = useState(null);
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState("");
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        (async function load() {
            const res = await fetch("http://localhost:3000/categories");
            const data = await res.json();
            setCategories(data);
        })();
    }, []);

    return (
        <main className="container">
            <div className={s.catalogAll} id="catalog">
                <h2 className={s.title}>Наши продукты</h2>
                
                <div className={s.filtersRow}>
                    <Categories 
                        categories={categories}
                        selectedId={selectedCategoryId} 
                        onSelect={setSelectedCategoryId} 
                    />
                    
                    <div className={s.searchSortRow}>
                        <Search value={search} onChange={setSearch} />
                        <Sort value={sort} onChange={setSort} />
                    </div>
                </div>

                <Catalog 
                    search={search} 
                    categoryId={selectedCategoryId} 
                    sort={sort} 
                />
            </div>
        </main>
    );
}