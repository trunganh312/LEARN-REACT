import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import formatPrice from 'utils/common';

ProductInfo.propTypes = {
  product: PropTypes.object,
};

const useStyles = makeStyles()((theme) => {
  return {
    root: {
      paddingBottom: theme.spacing(2),
      borderBottom: `1px solid ${theme.palette.grey[100]}`,
    },
    description: {
      margin: theme.spacing(2, 0),
    },
    priceBox: {
      padding: theme.spacing(2),
      backgroundColor: theme.palette.grey[100],
    },
    salePrice: {
      marginRight: theme.spacing(3),
      fontSize: theme.typography.h4.fontSize,
      fontWeight: 'bold',
    },
    originalPrice: {
      marginRight: theme.spacing(2),
      textDecoration: 'line-through',
    },
    promotionPercent: {},
  };
});

function ProductInfo({ product = {} }) {
  const { classes } = useStyles();
  return (
    <Box className={classes.root}>
      <Typography component="h1" variant="h4">
        {product.name}
      </Typography>
      <Typography variant="body2" className={classes.description}>
        {product.shortDescription}
      </Typography>
      <Box className={classes.priceBox}>
        <Box component="span" className={classes.salePrice}>
          {formatPrice(product.salePrice)}
        </Box>
        {product.promotionPercent > 0 && (
          <>
            <Box component="span" className={classes.originalPrice}>
              {formatPrice(product.originalPrice)}
            </Box>
            <Box component="span" className={classes.promotionPercent}>
              {`-${product.promotionPercent} %`}
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
}

export default ProductInfo;
