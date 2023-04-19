import React from 'react'
import styles from './Loafers.module.css'
import NavBar from '../../../components/NavBar/NavBar';
import Products from '../../../components/Products/Products';
import { loafersCollection, loafersInfo, shoesWithUrlObj } from '../../../data/Data';
import Sort from '../../../components/Sort/Sort'

const Loafers = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.head}>
        <p className={styles.title}>Лоферы</p>
        <hr className={styles.hr} />
        <Sort />
        <hr className={styles.hr} />
      </div>
      <div className={styles.body}>
        <NavBar
          productsInfo={loafersInfo}
          currentSectionObjNames={shoesWithUrlObj.shoesName}
        />
        <Products
          productCollection={loafersCollection}
        />
      </div>
    </div >
  )
}

export default Loafers