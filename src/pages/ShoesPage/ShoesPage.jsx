import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { shoesWithUrlObj } from '../../data/Data'
import styles from './ShoesPage.module.css'

const ShoesPage = () => {
    const navigate = useNavigate();
    const currentUrl = useLocation().pathname;

    const handleClick = (shoesUrl) => {
        navigate(currentUrl + '/' + shoesUrl);
    };

    return (
        <div className={styles.wrapper}>
            {shoesWithUrlObj.shoesName.map((shoesType, i) => {
                return (
                    <button key={i} onClick={() => handleClick(shoesWithUrlObj.shoesUrl[i])}>
                        {shoesType}
                    </button>
                )
            })}
        </div>
    )
}

export default ShoesPage