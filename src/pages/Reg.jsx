import React from "react";

export default function Reg() {
    return (
        <div className="page-content page-content-auth">
            <div className="container">
                <h2 className="title-square title-square--icon">
                    <a href="index.html" className="title-square__icon">
                        <svg className="icon icon-users">
                            <use href="#icon-users"></use>
                        </svg>
                    </a>
                    <span className="title-square__small">
                        <a href="index.html" className="link-hover">
                            Повернутися до каталогу
                        </a>
                    </span>
                    <span className="title-square__main">
                        <span className="link-item link-item-auth">
                            <a href="profile-auth.html" className="link-hover">
                                Авторизація
                            </a>
                        </span>
                        <span className="link-item link-item-reg active">Реєструватися</span>
                    </span>
                </h2>

                <form className="form-style form-auth" id="form-reg" action="admin/">
                    <div className="form-group">
                        <label className="form-label" for="name">
                            Як до вас звертатися?
                        </label>
                        <input type="text" id="name" name="name" className="form-control" required placeholder="ПІБ" />
                    </div>

                    <div className="form-group">
                        <label className="form-label" for="email">
                            Email:
                        </label>
                        <input type="email" id="email" name="email" className="form-control" required placeholder="Введіть ваш email" />
                    </div>

                    <div className="form-group">
                        <label className="form-label" for="pass">
                            Пароль
                        </label>
                        <input type="password" id="pass" name="pass" className="form-control" required placeholder="Введіть ваш пароль" />
                    </div>

                    <div className="form-group form-action">
                        <button type="submit" className="btn w-fill">
                            Реєструватися
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
