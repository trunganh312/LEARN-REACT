import { Box, Container, Grid, Pagination, Paper } from '@mui/material';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { makeStyles } from 'tss-react/mui';
import productApi from '../../../api/productApi';
import ProductFilters from '../components/ProductFilters';
import ProductList from '../components/ProductList';
import ProductSkeletonList from '../components/ProductSkeletonList';
import ProductSort from '../components/ProductSort';
import queryString from 'query-string';

const useStyles = makeStyles()((theme) => {
  return {
    root: {},
    left: {
      width: '250px',
    },
    right: {
      flex: '1 1 0',
    },
    pagination: {
      display: 'flex',
      flex: 'row nowrap',
      justifyContent: 'center',
      marginTop: '20px',
      paddingBottom: '10px',
    },
  };
});

function ListPage() {
  const { classes } = useStyles();
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = queryString.parse(location.search);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState(() => ({
    ...queryParams,
    _sort: queryParams._sort || 'salePrice:ASC',
    _limit: Number.parseInt(queryParams._limit) || 12,
    _page: Number.parseInt(queryParams._page) || 1,
  }));
  const [pagination, setPagination] = useState({
    limit: 12,
    page: 1,
    total: 12,
  });
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    navigate({
      pathname: location.pathname,
      search: queryString.stringify(filters),
    });
  }, [filters]);

  useEffect(() => {
    (async () => {
      try {
        const { data, pagination } = await productApi.getAll(filters);
        setProductList(data);
        setPagination(pagination);
        setLoading(false);
      } catch (error) {
        console.log('Lỗi', error);
      }
    })();
  }, [filters]);

  const handleChangePagination = (e, page) => {
    setFilters((prevFilters) => {
      return {
        ...prevFilters,
        _page: page,
      };
    });
  };

  const handleSortChange = (value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      _sort: value,
    }));
  };

  const handleFiltersChange = (newFilters) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      ...newFilters,
    }));
  };

  return (
    <Box>
      <Container>
        <Grid container spacing={2}>
          <Grid item className={classes.left}>
            <Paper elevation={0}>
              <ProductFilters
                filters={filters}
                onChange={handleFiltersChange}
              />
            </Paper>
          </Grid>
          <Grid item className={classes.right}>
            <Paper elevation={0}>
              <ProductSort
                currentSort={filters._sort}
                onChange={handleSortChange}
              />
              {loading ? (
                <ProductSkeletonList />
              ) : (
                <ProductList productList={productList} />
              )}
              <Box className={classes.pagination}>
                <Pagination
                  page={pagination.page}
                  count={Math.ceil(pagination.total / pagination.limit)}
                  color="primary"
                  onChange={handleChangePagination}
                />
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ListPage;
