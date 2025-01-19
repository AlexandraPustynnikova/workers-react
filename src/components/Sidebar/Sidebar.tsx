/*import react from React;*/
import classes from './Sidebar.module.css'
const Sidebar = () => {
    return (
        <div className={classes.sidebar}>
            <div className={classes.logo}>
                <div>
                    <img src="../../../Pictures/Logo.png" />
                </div>

                <div>
                    <img src="../../../Pictures/Icons/Menu.png" />
                </div>
            </div>
            <nav>
                <aside>
                    <ul>
                        <li id="Users Distanti">
                            <a
                                className={classes.sidebar_link}
                                href="#Users Distanti"
                            >
                                <div>
                                    <img
                                        src="../../../Pictures/Icons/Bookmark.png"
                                        alt=""
                                    />
                                    <span>Users Distanti</span>
                                </div>
                                <img
                                    src="../../../Pictures/Icons/Arrow%20-%20Down%202.png"
                                    alt=""
                                />
                            </a>

                            <ul>
                                <li id="My profile">
                                    <a href="#My profile">
                                        <div>
                                            <img
                                                src="../../../Pictures/Icons/Profile.png"
                                                alt=""
                                            />
                                            <span>Мой профиль</span>
                                        </div>
                                    </a>
                                </li>
                                <li id="All">
                                    <a href="#All">
                                        <div>
                                            <img
                                                src="../../../Pictures/Icons/3%20User.png"
                                                alt=""
                                            />
                                            <span>Все сотрудники</span>
                                        </div>
                                    </a>
                                </li>

                                <li id="Groups">
                                    <a href="#Groups">
                                        <div>
                                            <img
                                                src="../../../Pictures/Icons/Swap.png"
                                                alt=""
                                            />
                                            <span>Группы прав</span>
                                        </div>
                                    </a>
                                </li>
                                <li id="check">
                                    <a href="#check">
                                        <div className={classes.inner_link}>
                                            <img
                                                src="../../../Pictures/Icons/3%20User.png"
                                                alt=""
                                            />
                                            <div>Проверяющие сотрудники</div>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <ul>
                        <li id="SDO">
                            <a className={classes.sidebar_link} href="#SDO">
                                <div>
                                    {' '}
                                    <img
                                        src="../../../Pictures/Icons/Work.png"
                                        alt=""
                                    />
                                    <span>СДО</span>
                                </div>
                                <img
                                    src="../../../Pictures/Icons/Arrow%20-%20Down%202.png"
                                    alt=""
                                />
                            </a>
                        </li>
                    </ul>
                    <ul>
                        <li id="User">
                            <a className={classes.sidebar_link} href="#User">
                                <div>
                                    <img
                                        src="../../../Pictures/Icons/2%20User.png"
                                        alt=""
                                    />
                                    <span>Пользователь</span>
                                </div>
                                <img
                                    src="../../../Pictures/Icons/Arrow%20-%20Down%202.png"
                                    alt=""
                                />
                            </a>
                        </li>
                    </ul>
                    <ul>
                        <li id="Orders">
                            <a className={classes.sidebar_link} href="#Orders">
                                <div>
                                    <img
                                        src="../../../Pictures/Icons/Paper.png"
                                        alt=""
                                    />
                                    <span>Заказы</span>
                                </div>
                                <img
                                    src="../../../Pictures/Icons/Arrow%20-%20Down%202.png"
                                    alt=""
                                />
                            </a>
                        </li>
                    </ul>
                    <ul>
                        <li id="filiation">
                            <a
                                className={classes.sidebar_link}
                                href="#filiation"
                            >
                                <div>
                                    <img
                                        src="../../../Pictures/Icons/Net.png"
                                        alt=""
                                    />
                                    <span>Филиалы</span>
                                </div>
                            </a>
                        </li>
                    </ul>
                    <ul>
                        <li id="templates">
                            <a
                                className={classes.sidebar_link}
                                href="#templates"
                            >
                                <div>
                                    <img
                                        src="../../../Pictures/Icons/Scan.png"
                                        alt=""
                                    />
                                    <span>Шаблоны</span>
                                </div>
                                <img
                                    src="../../../Pictures/Icons/Arrow%20-%20Down%202.png"
                                    alt=""
                                />
                            </a>
                        </li>
                    </ul>
                </aside>
            </nav>
        </div>
    )
}

export default Sidebar
