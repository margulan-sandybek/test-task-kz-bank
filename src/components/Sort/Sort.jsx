import React, { useState, useRef } from 'react';
import styles from './Sort.module.css';
import ArrowUpwardSharpIcon from '@mui/icons-material/ArrowUpwardSharp';
import ArrowDownwardSharpIcon from '@mui/icons-material/ArrowDownwardSharp';
import { Menu, MenuItem } from '@mui/material';

const Sort = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedOption, setSelectedOption] = useState('');
  const rootRef = useRef(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    handleMenuClose();
  };

  const handleBlur = (event) => {
    if (rootRef.current && !rootRef.current.contains(event.target)) {
      handleMenuClose();
    }
  };

  return (
    <div className={styles.sort}  >
      <div onClick={handleMenuOpen} onBlur={handleBlur} ref={rootRef}>
        <ArrowUpwardSharpIcon />
        <ArrowDownwardSharpIcon />
        <span >Сортировать</span>
      </div>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        getContentAnchorEl={null}
      >
        <MenuItem onClick={() => handleOptionSelect('option1')}>По возрастанию цены</MenuItem>
        <MenuItem onClick={() => handleOptionSelect('option2')}>По убыванию цены</MenuItem>
        <MenuItem onClick={() => handleOptionSelect('option3')}>По алфавиту A-Z</MenuItem>
        <MenuItem onClick={() => handleOptionSelect('option4')}>По алфавиту Z-A</MenuItem>
      </Menu>
    </div>
  );
};

export default Sort;
