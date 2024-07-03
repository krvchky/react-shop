export default function ProfileAuth() {
    return (
        <div className="page-content page-content-auth">
            <div className="container">
                <h2 className="title-square title-square--icon">
                    <a href="index.html" className="title-square__icon">
                        <svg className="icon icon-log-in">
                            <use href="#icon-log-in"></use>
                        </svg>
                    </a>
                    <span className="title-square__small">
                        <a href="index.html" className="link-hover">
                            Повернутися до каталогу
                        </a>
                    </span>
                    <span className="title-square__main">
                        <span className="link-item link-item-auth active">Авторизація</span>
                        <span className="link-item link-item-reg">
                            <a href="profile-reg.html" className="link-hover">
                                Реєструватися
                            </a>
                        </span>
                    </span>
                </h2>

                <form className="form-style form-auth" id="form-auth" action="admin/">
                    <div className="form-group">
                        <label className="form-label" for="email">
                            Email:
                        </label>
                        <input type="email" id="email" name="email" className="form-control" placeholder="Введіть ваш email" />
                    </div>

                    <div className="form-group">
                        <label className="form-label" for="pass">
                            Пароль
                        </label>
                        <input type="password" id="pass" name="pass" className="form-control" placeholder="Введіть ваш пароль" />
                    </div>

                    <div className="form-group form-action">
                        <button type="submit" className="btn w-fill">
                            Авторизуватися
                        </button>
                        <a href="profile-password-forgot.html" className="btn btn-link btn-sm btn-forgot-password">
                            Забули пароль?
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
}
