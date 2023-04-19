import React from 'react'
import styles from './Products.module.css'
import { useSelector } from 'react-redux'
import Pagination from '../Pagination/Pagination'

const Products = (props) => {
  const appliedFilters = useSelector(state => state.filter.appliedFilters);
  const [currentPage, setCurrentPage] = React.useState(1);
  const productsPerPage = 9;

  let totalProductsNumber = (props.productCollection.filter(productsCollectionUnit => appliedFilters.includes(productsCollectionUnit.brand))).length;
  if(!totalProductsNumber) {
    totalProductsNumber = props.productCollection.length;
  }
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = (currentPage - 1) * productsPerPage;
  const currentProducts = props.productCollection.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(totalProductsNumber / productsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderProducts = currentProducts.map((product, index) => {
    if (appliedFilters.length === 0 || appliedFilters.includes(product.brand)) {
      return (
        <div className={styles.product} key={index}>
          <div className={styles.imageContainer}>
            <img src={product.imgUrl} alt={product.brand} />
          </div>
          <div className={styles.productInfo}>
            <p className={styles.brand}>{product.brand}</p>
            <p className={styles.color}>{product.color}</p>
            <p className={styles.price}>{product.price}</p>
          </div>
        </div>
      );
    } else {
      return null;
    }
  });

  return (
    <div className={styles.wrapper}>
      <div className={styles.productContainer}>{renderProducts}</div>
      <Pagination currentPage={currentPage} totalPages={totalPages} paginate={paginate} />
    </div>
  )
}

export default Products