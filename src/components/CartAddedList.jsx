import React from "react";

export default function CartAddedList() {
    return (
        <div className="cart-added-list">
            <button className="cart-added-list__btn btn btn-icon" id="js-cart-added-btn">
                <span className="cart-added-summ js-cart-added-summ">0</span>
                <svg className="icon icon-cart-bag">
                    <use href="#icon-cart-bag"></use>
                </svg>
            </button>
            <div className="cart-added-list__item-list" id="js-cart-added-list">
                <span className="no-result no-result--inline">
                    <img src="img/no-result/no-result-v2.png" alt="No results" className="no-result__img" />
                    <span className="no-result__title">Корзина пуста!</span>
                </span>

                {/* <div className="cart-added-list__item">
                    <button className="cart-added-list__item-btn-delete btn btn-light btn-xxs btn-icon">
                        <svg className="icon icon-close">
                            <use href="#icon-close"></use>
                        </svg>
                    </button>
                    <img src="img/catalog/1.png" alt="" className="cart-added-list__item-img" />
                    <p className="cart-added-list__item-text-hold">
                        <a href="#" className="cart-added-list__item-title-link">
                            Назва товару
                        </a>
                        <span className="cart-added-list__item-meta-list">
                            <span className="cart-added-list__item-meta">Ціна: 6 999 грн</span>
                        </span>
                    </p>
                    <input type="text" className="cart-added-list__item-count" placeholder="0" value="1" />
                    <button className="cart-added-list__item-btn-plus btn btn-light btn-xxs btn-icon"></button>
                    <button className="cart-added-list__item-btn-minus btn btn-light btn-xxs btn-icon"></button>
                </div> */}
            </div>
        </div>
    );
}
