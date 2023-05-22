import React from 'react';
import PropTypes from 'prop-types';
import { Box, Container, Grid, Skeleton } from '@mui/material';
import Product from './Product';

ProductList.propTypes = {
  productList: PropTypes.array,
};

ProductList.defaultProps = {
  productList: [],
};

function ProductList({ productList }) {
  return (
    <Box>
      <Container>
        <Grid container spacing={2}>
          {productList.map((product, i) => {
            return (
              <Grid item key={i} xs={12} sm={6} md={4} lg={3}>
                <Product product={product} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}

export default ProductList;
