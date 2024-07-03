export default function ProfilePassword() {
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
                        <a href="profile-auth.html" className="link-hover">
                            Повернутися до авторизації
                        </a>
                    </span>
                    <span className="title-square__main">
                        <span className="link-item link-item-password-forgot active">Відновити пароль</span>
                    </span>
                </h2>

                <form className="form-style form-auth" id="form-auth" action="admin/">
                    <div className="form-group">
                        <label className="form-label" for="email">
                            Email:
                        </label>
                        <input type="email" id="email" name="email" className="form-control" placeholder="Введіть ваш email" />
                    </div>

                    <div className="form-group form-action">
                        <button type="submit" className="btn w-fill">
                            Відновити пароль
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
