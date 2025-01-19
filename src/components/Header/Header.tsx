import classes from './Header.module.css'

const Header = () => {
    return (
        <div className={classes.header}>
            <div className={classes.header_left_part}>
                <div className={classes.avatar}>
                    <img src="../../../Pictures/Icons/Avatar.png" />
                </div>
                <div className={classes.header_email}>
                    <div className={classes.header_upper_text}>Ваш E-mail</div>
                    <div className={classes.header_lower_text}>
                        Admin@gmail.com
                    </div>
                </div>
                <div className={classes.line}>
                    <img src="../../../Pictures/Icons/Line%20154.png" />
                </div>
                <div>
                    <div className={classes.header_upper_text}>
                        Группа аккаунта
                    </div>
                    <div className={classes.header_lower_text}>Менеджеры</div>
                </div>
            </div>
            <div>
                <button type="button" className={classes.button}>
                    <span></span>
                    <div className={classes.inner_button}>
                        <div>
                            <img src="../../../Pictures/Icons/Logout.png" />
                        </div>
                        <div className={classes.button_text}>Выйти</div>
                    </div>
                </button>
            </div>
        </div>
    )
}
export default Header
