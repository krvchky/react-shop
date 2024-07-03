import { useEffect, useState } from "react";
import CatalogList from "./CatalogList";
import getData, { apiUrl } from "../utils/getData";
import CategoryList from "./CategoryList";
import { useParams } from "react-router-dom";

export default function Catalog() {
    const [dropdownCategory, setDropdownCategory] = useState(true);
    const [catalog, setCatalog] = useState([]);
    const [category, setCategory] = useState([]);

    // Отримуємо параметр id категорії
    const { catid } = useParams();

    // Отримуємо товари з api
    async function getCatalog() {

        // Робимо посилання в залежності чи є категорія
        const url = (catid) ? apiUrl.catalogByCategory + catid : apiUrl.catalog; 

        // звертаємся до сервера щоб отримати дані товарів 
        const products = await getData(url);

        // Записуємо в реакт стан масив який прийшов з арі
        setCatalog(products)
    }

    // Отримуємо категорії з арі
    async function getCategory() {
        const categories = await getData(apiUrl.category);

        // Записуємо в реакт стан масив який прийшов з арі
        setCategory(categories);
    }

    // Викликаємо функцію один раз при завантаженні сторінки
    useEffect(() => {

        // Запускажмо ф-цію отримання товарів
        getCatalog();

        // Запускажмо ф-цію отримання категорій
        getCategory();
    }, [catid]);


    return (
        <div className="catalog" id="catalog">
            <div className="container">
                <div className="catalog__header">
                    <div className={`catalog__select-category dropdown ${dropdownCategory ? "show" : ""}`}>
                        <h3 className="dropdown-btn" onClick={() => setDropdownCategory(!dropdownCategory)}>
                            Вибрати категорію
                        </h3>
                        <CategoryList category={category} catid={catid} />
                    </div>
                    <h3 className="catalog__products-summ">
                        Знайдено товарів: <span id="view-count-products">{catalog.length}</span>
                    </h3>
                </div>

                <CatalogList catalog={catalog} />
            </div>
        </div>
    );
}
