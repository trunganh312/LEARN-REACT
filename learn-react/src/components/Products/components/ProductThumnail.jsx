import React from 'react';
import PropTypes from 'prop-types';
import { THUMNAIL_URL } from 'constants';
import { STATIC_HOST } from 'constants';
import { Box } from '@mui/system';

ProductThumnail.propTypes = {
  product: PropTypes.object,
};

function ProductThumnail({ product }) {
  const thumbnailUrl = product.thumbnail
    ? `${STATIC_HOST}${product?.thumbnail.url}`
    : THUMNAIL_URL;
  return (
    <Box>
      <img src={thumbnailUrl} alt={product.name} width="100%" />
    </Box>
  );
}

export default ProductThumnail;
