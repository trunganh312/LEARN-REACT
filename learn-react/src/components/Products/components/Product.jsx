import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import formatPrice from 'utils/common';
import { STATIC_HOST, THUMNAIL_URL } from '../../../constants';

Product.propTypes = {
  product: PropTypes.object,
};

Product.defaultProps = {
  product: {},
};

function Product({ product }) {
  const thumbnailUrl = product.thumbnail
    ? `${STATIC_HOST}${product?.thumbnail.url}`
    : THUMNAIL_URL;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/products/${product.id}`);
  };
  return (
    <Box onClick={handleClick}>
      <Box>
        <img src={thumbnailUrl} alt="" width="100%" />
      </Box>
      <Typography variant="body2">{product.name}</Typography>
      <Typography variant="body2">
        <Box component="span" fontSize="16px" fontWeight="bold" mr={1}>
          {formatPrice(product.salePrice)}
        </Box>

        {product.promotionPercent > 0 ? `-${product.promotionPercent} %` : ''}
      </Typography>
    </Box>
  );
}

export default Product;
