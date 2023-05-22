import React from 'react';
import PropTypes from 'prop-types';
import { Box, Container, Grid, Skeleton } from '@mui/material';

ProductSkeletonList.propTypes = {
  length: PropTypes.number,
};

ProductSkeletonList.defaultProps = {
  length: 12,
};

function ProductSkeletonList({ length }) {
  return (
    <Box>
      <Container>
        <Grid container spacing={2}>
          {Array.from(new Array(length)).map((x, i) => {
            return (
              <Grid item key={i} xs={12} sm={6} md={4} lg={3}>
                <Box>
                  <Skeleton variant="rectangular" width="100%" height={118} />
                  <Skeleton />
                  <Skeleton width="60%" />
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}

export default ProductSkeletonList;
