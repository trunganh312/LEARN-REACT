import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import FilterCategory from '../Filters/FilterCategory';
import FilterPrice from '../Filters/FilterPrice';
import { makeStyles } from 'tss-react/mui';
import FilterService from '../Filters/FilterService';

ProductFilters.propTypes = {
  filters: PropTypes.object.isRequired,
  onChange: PropTypes.func,
};

const useStyle = makeStyles()((theme) => {
  return {
    root: {
      padding: '3px 10px',
    },
  };
});

function ProductFilters({ onChange, filters }) {
  const { classes } = useStyle();
  const handleCategoryChange = (id) => {
    const newFilter = {
      ...filters,
      'category.id': id,
    };

    onChange(newFilter);
  };

  const handlePriceChange = (values) => {
    const newFilter = {
      ...filters,
      ...values,
    };

    onChange(newFilter);
  };

  const handleServiceChange = (values) => {
    const newFilter = {
      ...filters,
      ...values,
    };

    onChange(newFilter);
  };
  return (
    <Box className={classes.root}>
      <FilterCategory onChange={handleCategoryChange} />
      <FilterPrice onChange={handlePriceChange} />
      <FilterService onChange={handleServiceChange} filters={filters} />
    </Box>
  );
}

export default ProductFilters;
