import React from 'react'
import styles from './NavBar.module.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { clearFilters, saveBrandFilter } from '../../redux/slice/filterSlice';
import { useDispatch, useSelector } from 'react-redux';

const NavBar = (props) => {
    const dispatch = useDispatch();
    const currentSection = useSelector(state => state.tempData.currentSection);
    const appliedFilters = useSelector(state => state.filter.appliedFilters);
    const [isTypeNameOpen, setIsTypeNameOpen] = React.useState(false);
    const [isBrandsOpen, setIsBrandsOpen] = React.useState(false);
    const [isColorOpen, setIsColorOpen] = React.useState(false);
    const [isPriceOpen, setIsPriceOpen] = React.useState(false);

    const toggleTypeName = () => setIsTypeNameOpen(!isTypeNameOpen);
    const toggleBrands = () => setIsBrandsOpen(!isBrandsOpen);
    const toggleColor = () => setIsColorOpen(!isColorOpen);
    const togglePrice = () => setIsPriceOpen(!isPriceOpen);

    const brandClick = (brandName) => {
        dispatch(saveBrandFilter(brandName));
    }

    const filtersClear = () => {
        dispatch(clearFilters());
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.filters}>
                <div className={styles.filtersHeader}>
                    <div className={styles.filtersTitle}>Выбранные фильтра:</div>
                    <button onClick={() => filtersClear()} className={styles.filtersReset}>Сбросить</button>
                </div>
                <div className={styles.appliedFilters}>
                    {appliedFilters.map((appliedFilter, i) => {
                        return (
                            <p
                                className={styles.appliedFilterUnit}
                                key={i}
                            >
                                {appliedFilter}
                            </p>
                        )
                    })}
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.collapsableRow} onClick={toggleTypeName}>
                    {currentSection}
                    {isTypeNameOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                </div>
                {isTypeNameOpen && (
                    <div className={styles.rowContent}>
                        {props.currentSectionObjNames.map((typeName, i) => {
                            return (<button className={styles.rowContentUnit} key={i}>{typeName}</button>)
                        })}
                    </div>
                )}
            </div>
            <div className={styles.row}>
                <div className={styles.collapsableRow} onClick={toggleBrands}>
                    <p>Бренды</p>
                    {isBrandsOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                </div>
                {isBrandsOpen && (
                    <div className={styles.rowContent}>
                        {props.productsInfo.brand.map((brandType, i) => {
                            return (
                                <button
                                    className={styles.rowContentUnit}
                                    key={i}
                                    onClick={() => brandClick(brandType)}
                                >
                                    {brandType}
                                </button>
                            )
                        })}
                    </div>
                )}
            </div>
            <div className={styles.row}>
                <div className={styles.collapsableRow} onClick={toggleColor}>
                    <p>Цвет</p>
                    {isColorOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                </div>
                {isColorOpen && (
                    <div className={styles.rowContent}>
                        {props.productsInfo.color.map((colorType, i) => {
                            return (<button className={styles.rowContentUnit} key={i}>{colorType}</button>)
                        })}
                    </div>
                )}
            </div>
            <div className={styles.row}>
                <div className={styles.collapsableRow} onClick={togglePrice}>
                    <p>Цена</p>
                    {isPriceOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                </div>
                {isPriceOpen && (
                    <div className={styles.rowContent}>
                        Render prices here
                    </div>
                )}
            </div>
        </div>
    );
}

export default NavBar