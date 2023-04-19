import React from 'react';
import { NavLink } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcon from '@mui/icons-material/Telegram';
import styles from './Footer.module.css';

export function Footer() {
    return (
        <div>
            <hr className={styles.hr} />
            <footer className={styles.footerWrapper}>
                <div className={styles.left}>
                    <ul>
                        <h2>О КОМПАНИИ</h2>
                        <li><NavLink className={styles.navLink}>О нас</NavLink></li>
                        <li><NavLink className={styles.navLink}>Компания</NavLink></li>
                        <li><NavLink className={styles.navLink}>История</NavLink></li>
                    </ul>

                    <ul>
                        <h2>ОБСЛУЖИВАНИЕ КЛИЕНТОВ</h2>
                        <li><NavLink className={styles.navLink}>Условия оплаты</NavLink></li>
                        <li><NavLink className={styles.navLink}>Условия доставки</NavLink></li>
                        <li><NavLink className={styles.navLink}>Условия возврата</NavLink></li>
                        <li><NavLink className={styles.navLink}>Условия пользования</NavLink></li>
                        <li><NavLink className={styles.navLink}>Политика конфиденциальности</NavLink></li>
                    </ul>

                    <div>
                        <h2>МЫ В СОЦ СЕТИ</h2>
                        <div className={styles.icon}>
                            <span><NavLink className={styles.navLink}><InstagramIcon /></NavLink></span>
                            <span><NavLink className={styles.navLink}><FacebookIcon /></NavLink></span>
                            <span><NavLink className={styles.navLink}><TelegramIcon /></NavLink></span>
                        </div>
                    </div>
                </div>

                <div className={styles.right}>
                    <NavLink className={styles.googlePlay}>
                        <img
                            src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                            alt="Google Play"
                        />
                    </NavLink>

                    <NavLink className={styles.appStore}>
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png"
                            alt="App store"
                        />
                    </NavLink>
                </div>
            </footer>
        </div>
    );
}

export default Footer;