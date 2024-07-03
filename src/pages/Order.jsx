export default function Order() {
    return (
        <div className="page-content page-content-order">
            <div className="container">
                <h2 className="title-square title-square--icon">
                    <a href="index.html" className="title-square__icon">
                        <svg className="icon icon-cart-bag">
                            <use href="#icon-cart-bag"></use>
                        </svg>
                    </a>
                    <span className="title-square__small">
                        <a href="index.html" className="link-hover">
                            Повернутися до каталогу
                        </a>
                    </span>
                    <span className="title-square__main">Форма замовлення</span>
                </h2>

                <div className="content-grid content-hold">
                    <div className="content-form">
                        <form className="form-style form-order" id="form-order">
                            <div className="form-group">
                                <h2 className="mt-none">Контакти:</h2>
                            </div>

                            <div className="form-group">
                                <label className="form-label" for="name">
                                    <span className="required-label">Кому відправляти?</span>
                                </label>
                                <input type="text" id="name" name="name" className="form-control" required placeholder="ПІБ" />
                            </div>

                            <div className="form-group">
                                <label className="form-label" for="email">
                                    Email:
                                </label>
                                <input type="email" id="email" name="email" className="form-control" placeholder="Для відправки даних про замовлення" />
                            </div>

                            <div className="form-group">
                                <label className="form-label" for="phone">
                                    <span className="required-label">Телефон:</span>
                                </label>
                                <input type="tel" id="phone" name="phone" className="form-control" required placeholder="+38 (___) __ - __ - ___" />
                            </div>

                            <div className="form-group form-group--divider">
                                <h2>Доставка:</h2>
                            </div>

                            <div className="form-group">
                                <label className="form-label" for="town">
                                    <span className="required-label">Населений пункт:</span>
                                </label>
                                <input type="text" id="town" name="town" className="form-control" required placeholder="В яке місто відправляємо замовлення?" />
                            </div>

                            <div className="form-group">
                                <label className="form-label" for="post-office">
                                    <span className="required-label">Відділеня нової пошти:</span>
                                </label>
                                <input type="number" id="post-office" name="post-office" className="form-control" required placeholder="№" />
                            </div>

                            <div className="form-group form-group--divider">
                                <h2>Оплата:</h2>
                            </div>

                            <div className="form-group">
                                <label className="form-label" for="input-payment">
                                    <span className="required-label">Спосіб оплати:</span>
                                </label>
                                <select name="payment" className="form-control form-select" id="input-payment" required>
                                    <option value="">Вибрати спосіб оплати</option>
                                    <option value="1">Оплайн оплата</option>
                                    <option value="2">Наложений платіж</option>
                                    <option value="3">Юридичним особам</option>
                                </select>
                            </div>

                            <div className="form-group form-action">
                                <button type="submit" className="btn w-fill" disabled>
                                    Оформити замовлення
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className="content-cart">
                        <div className="cart-added-list">
                            <h2 className="cart-added-list__title">Корзина:</h2>

                            <div className="cart-added-list__hold" id="js-cart-added-items">
                                <div className="cart-added-list__item">
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
                                </div>
                                <div className="cart-added-list__item">
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
                                </div>
                                <div className="cart-added-list__item">
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
                                </div>
                            </div>

                            <p className="cart-added-list__summ">
                                <span className="summ-label">Сума до оплати:</span>
                                <span className="summ-number">(3) 50 800 грн</span>
                            </p>
                        </div>
                    </div>
                </div>

                <h2 className="title-square title-square--icon title-cart-success no-before">
                    <a href="#" className="title-square__icon">
                        <svg className="icon icon-check-circle">
                            <use href="#icon-check-circle"></use>
                        </svg>
                    </a>
                    <span className="title-square__main">Замовлення відправлено!</span>
                    <span className="title-square__small">
                        <a href="index.html" className="link-hover">
                            Повернутися до каталогу
                        </a>
                    </span>
                </h2>

                <h2 className="title-square title-square--icon title-cart-empty">
                    <a href="index.html" className="title-square__icon">
                        <svg className="icon icon-shopping-bag">
                            <use href="#icon-shopping-bag"></use>
                        </svg>
                    </a>
                    <span className="title-square__main">Корзина пуста!</span>
                    <span className="title-square__small">
                        <a href="index.html" className="link-hover">
                            Повернутися до каталогу
                        </a>
                    </span>
                </h2>
            </div>
        </div>
    );
}
