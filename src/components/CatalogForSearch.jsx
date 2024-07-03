import { useEffect, useState } from "react";
import CatalogList from "./CatalogList";
import getData, { apiUrl } from "../utils/getData";

export default function CatalogForSearch() {
    const [catalog, setCatalog] = useState([]);
    const [searchVal, setSearchVal] = useState('');

    // Отримуємо товари з api
    async function getCatalog() {

        // Робимо посилання для отримання всіх товарів
        const url = apiUrl.catalog; 

        // звертаємся до сервера щоб отримати дані товарів 
        const products = await getData(url);

        // Записуємо в реакт стан масив який прийшов з арі
        setCatalog(products)
    }

    // Подія пошуку
    async function handleSeacrh(event) {
       event.preventDefault();

        // Робимо посилання для отримання всіх товарів
        const url = apiUrl.search+ searchVal; 

        // звертаємся до сервера щоб отримати дані товарів 
        const products = await getData(url);

        // Записуємо в реакт стан масив який прийшов з арі
        setCatalog(products)
    }


    // Викликаємо функцію один раз при завантаженні сторінки
    useEffect(() => {

        // Запускажмо ф-цію отримання товарів
        getCatalog();
        
    }, []);

  
  return (
    <div className="catalog" id="catalog">
            <div className="container">
                <div className="catalog__header">
                    <div className="catalog__form form-style">
                        <input
                            type="text"
                            className="form-control catalog__form-search"
                            id="input-search"
                            placeholder="Що будемо шукати?"
                            value={searchVal}
                            onChange={(event)=>setSearchVal(event.target.value)}
                            />
                        <button className="catalog__form-btn" id="btn-search" onClick={handleSeacrh}>
                            <svg className="icon icon-search"><use href="#icon-search"></use></svg>
                        </button>
                    </div>
                    <h3 className="catalog__products-summ">Знайдено товарів: <span id="view-count-products">{catalog.length}</span></h3>
                </div>

                <CatalogList catalog={catalog} />
            </div>
        </div>
  )
}
