import React from 'react';
import { NavLink } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import styles from './Header.module.css';

function Header() {
    return (
        <header className={styles.headerWrapper}>
            <div className={styles.headerLeft}>
                <span className={styles.currency}>
                    <img
                        className={styles.flag}
                        src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/1280px-Flag_of_Russia.svg.png"
                        alt="flag"
                    />
                    <NavLink className={styles.button} to={'/'}>Россия, ₽</NavLink>
                </span>
                <span className={styles.firstChoice}>
                    <NavLink className={styles.navLink}>Женщины</NavLink>
                    <NavLink className={styles.navLink}>Мужчины</NavLink>
                    <NavLink className={styles.navLink}>Дети</NavLink>
                </span>
            </div>
            <div className={styles.headerRight}>
                <SearchIcon className={styles.headerIcon} />
                <PermIdentityIcon className={styles.headerIcon} />
                <FavoriteBorderIcon className={styles.headerIcon} />
                <ShoppingBagOutlinedIcon className={styles.headerIcon} />
            </div>
        </header>
    );
}

export default Header;
