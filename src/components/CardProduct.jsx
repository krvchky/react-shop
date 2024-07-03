// // Як мені в цьому компоненті отримати cart, setCart з App.jsx?

import { useCart } from "../CartContext";

// export default function CardProduct({ product }) {
//     const { id, name, price, img, oldprice, catid, hotoffer } = product;

     

//     return (
//         <div className="card-product">
//             <div className="card-product__img-hold">
//                 <img src={`/img/catalog/${img}`} alt={name} className="card-product__img" />
//             </div>
//             <div className="card-product__text-hold">
//                 <h3 className="card-product__title-link">{name}</h3>
//                 <span className="card-product__price">
//                     {price} грн <small>{oldprice} грн</small>
//                 </span>
//                 <button className="card-product__btn-add">
//                     <svg className="icon icon-cart">
//                         <use href="#icon-cart-add"></use>
//                     </svg>
//                 </button>
//             </div>
//         </div>
//     );
// }
// CardProduct.jsx

export default function CardProduct({ product }) {
    const { id, name, price, img, oldprice } = product;
    const { cart, setCart } = useCart();

    // Додавання товару до кошика
    const addToCart = () => {
        setCart([...cart, product]);
    };

    return (
        <div className="card-product">
            <div className="card-product__img-hold">
                <img src={`/img/catalog/${img}`} alt={name} className="card-product__img" />
            </div>
            <div className="card-product__text-hold">
                <h3 className="card-product__title-link">{name}</h3>
                <span className="card-product__price">
                    {price} грн <small>{oldprice} грн</small>
                </span>
                <button className="card-product__btn-add" onClick={addToCart}>
                    <svg className="icon icon-cart">
                        <use href="#icon-cart-add"></use>
                    </svg>
                </button>
            </div>
        </div>
    );
}
