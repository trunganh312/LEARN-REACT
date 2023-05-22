import { Box, Container, Grid, LinearProgress, Paper } from '@mui/material';
import { addToCart } from 'features/Cart/cartSlice';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { makeStyles } from 'tss-react/mui';
import AddToCartForm from '../components/AddToCartForm';
import ProductInfo from '../components/ProductInfo';
import ProductMenu from '../components/ProductMenu';
import ProductThumnail from '../components/ProductThumnail';
import useProductDetail from '../hooks/useProductDetail';

const useStyles = makeStyles()((theme) => {
  return {
    root: {
      marginTop: theme.spacing(5),
    },
    left: {
      width: '400px',
      padding: theme.spacing(1.5),
      borderRight: `1px solid ${theme.palette.grey[300]}`,
    },
    right: {
      padding: theme.spacing(1.5),
      flex: '1 1 0',
    },
    loading: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
    },
  };
});

function DetailPage() {
  const { classes } = useStyles();
  const { productId } = useParams();
  const { product, loading } = useProductDetail(productId);
  const dispatch = useDispatch();
  const handleAddToCartSubmit = (formValues) => {
    const action = addToCart({
      id: product.id,
      product,
      quantity: formValues.quantity,
    });

    dispatch(action);
  };
  return loading ? (
    <Box className={classes.loading}>
      <LinearProgress />
    </Box>
  ) : (
    <Box className={classes.root}>
      <Container>
        <Paper elevation={0}>
          <Grid container>
            <Grid item className={classes.left}>
              <ProductThumnail product={product} />
            </Grid>
            <Grid item className={classes.right}>
              <ProductInfo product={product} />
              <AddToCartForm onSubmit={handleAddToCartSubmit} />
            </Grid>
          </Grid>
        </Paper>
        <ProductMenu />
      </Container>
    </Box>
  );
}

export default DetailPage;
