import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Button, TextField } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

FilterPrice.propTypes = {
  onChange: PropTypes.func,
};
const useStyle = makeStyles()((theme) => {
  return {
    text: {
      color: '#888',
    },
    span: {
      padding: '0 13px',
    },
    flex: {
      display: 'flex',
      marginBottom: '15px',
    },
  };
});
function FilterPrice({ onChange }) {
  const { classes } = useStyle();

  const [value, setValue] = useState({
    salePrice_gte: '0',
    salePrice_lte: '0',
  });

  const handlePriceInput = (e) => {
    setValue((prevValue) => {
      return {
        ...prevValue,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleClickPrice = () => {
    onChange(value);
    setValue({
      salePrice_gte: '0',
      salePrice_lte: '0',
    });
  };
  return (
    <Box>
      <h3>Giá</h3>
      <p className={classes.text}>Chọn khoảng giá</p>
      <Box className={classes.flex}>
        <TextField
          id="standard-basic"
          variant="standard"
          name="salePrice_gte"
          value={value.salePrice_gte}
          onChange={handlePriceInput}
        />
        <span className={classes.span}>-</span>
        <TextField
          id="standard-basic"
          variant="standard"
          name="salePrice_lte"
          value={value.salePrice_lte}
          onChange={handlePriceInput}
        />
      </Box>
      <Button
        variant="outlined"
        onClick={handleClickPrice}
        disabled={Number(value.salePrice_gte) >= Number(value.salePrice_lte)}
      >
        Áp dụng
      </Button>
    </Box>
  );
}

export default FilterPrice;
