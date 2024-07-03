import { useEffect, useState } from "react";
import getData, { apiUrl } from "../utils/getData";
import CardProduct from "./CardProduct";

export default function HotOffers() {
    // useState - створюємо стан для реакту 
    const [offer, setOffer] = useState([])

    // Виділяюмо ф-цію для звернення до арі
    async function getHotOffers() {
        
        // Звертаємся до сервера щоб отримати гарячі пропозиції
        const offers = await getData(apiUrl.hotoffer)
        
        // Записуємо в реакт стан масив який прийшов з арі
        setOffer(offers)
    }

    // useEffect - Викликаємо функцію один раз при завантаженні сторінки
    useEffect(() => {
        getHotOffers();
    }, [])
    
    return (
        <div className="hot-offers" id="hot-offers">
            <div className="container">
                <h2 className="hot-offers__title title-square">
                    <span className="title-square__icon">
                        <svg className="icon icon-fire">
                            <use href="#icon-fire"></use>
                        </svg>
                    </span>
                    <span className="title-square__small">Акційні пропозиції!</span>
                    <span className="title-square__main">Гарячі пропозиції</span>
                </h2>

                <div className="hot-offers__cards" id="hot-offer-products">
                    {
                       offer.length === 0
                       ? <p>Товарів не знайдено</p>
                       : offer.map((product, index)=> <CardProduct key={index} product={product}/> )
                    }
                </div>
            </div>
        </div>
    );
}
