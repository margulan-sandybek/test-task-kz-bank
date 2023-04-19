import React from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import styles from './Sections.module.css'
import { sectionsWithUrlObj } from '../../data/Data'
import { useDispatch } from 'react-redux'
import { saveCurrentSection } from '../../redux/slice/tempDataSlice'

const Sections = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const currentPath = useLocation().pathname;

    // This part of code is for displaying Главная / Section
    const [currentUrl, setCurrentUrl] = React.useState('')
    const [currentSection, setCurrentSection] = React.useState('');
    React.useEffect(() => {
        if (currentPath.includes("/")) {
            const parts = currentPath.split('/');
            if (parts[1].length === 0) {
                setCurrentSection('')
            }
            setCurrentUrl(parts[1]);
            const indexOfSection = sectionsWithUrlObj.sectionUrl.indexOf(currentUrl);
            setCurrentSection(sectionsWithUrlObj.sectionName[indexOfSection]);
            dispatch(saveCurrentSection(sectionsWithUrlObj.sectionName[indexOfSection]));
        } else {
            setCurrentSection('');
        }
    }, [currentPath, currentUrl, dispatch])
    // This part of code is for displaying Главная / Section

    const handleClickBack = () => {
        const lastSlashIndex = currentPath.lastIndexOf('/');
        navigate(currentPath.substring(0, lastSlashIndex));
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.sectionsDiv}>
                {sectionsWithUrlObj.sectionName.map((sectionName, i) => {
                    return (
                        <NavLink
                            className={navData => navData.isActive ? styles.activeSection : styles.sectionName}
                            to={`/${sectionsWithUrlObj.sectionUrl[i]}`}
                            key={sectionName}
                        >
                            {sectionName}
                        </NavLink>
                    )
                })}
            </div>
            <hr className={styles.hr} />
            <div className={styles.backButton}>
                <button onClick={handleClickBack}>Назад</button>
            </div>
            <div className={styles.locationText}>
                <p>Главная / {currentSection}</p>
            </div>
        </div>
    )
}

export default Sections