import React from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs } from '@mui/material';

ProductSort.propTypes = {
  currentSort: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

function ProductSort({ currentSort, onChange }) {
  const handleSortChange = (e, value) => {
    onChange(value);
  };
  return (
    <Tabs
      value={currentSort}
      onChange={handleSortChange}
      aria-label="nav tabs example"
    >
      <Tab label="Giá từ thấp đến cao" value="salePrice:ASC"></Tab>
      <Tab label="Giá từ cao xuống thấp" value="salePrice:DESC"></Tab>
    </Tabs>
  );
}

export default ProductSort;
