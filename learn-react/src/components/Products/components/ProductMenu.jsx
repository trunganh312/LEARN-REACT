import { Box, Link } from '@mui/material';
import {
  NavLink,
  Outlet,
  Route,
  Routes,
  useLocation,
  useParams,
} from 'react-router-dom';
import { makeStyles } from 'tss-react/mui';

ProductMenu.propTypes = {};
const useStyles = makeStyles()((theme) => {
  return {
    root: {
      display: 'flex',
      flexGrow: 'row nowrap',
      justifyContent: 'center',
      alignItems: 'center',

      padding: 0,
      listStyleType: 'none',

      '& > li': {
        padding: theme.spacing(2, 4),
      },

      '& > li > a': {
        color: theme.palette.grey[700],
      },

      '& > li > a.active': {
        color: theme.palette.primary.main,
      },
    },
  };
});
function ProductMenu() {
  const { productId } = useParams();
  const { classes } = useStyles();
  return (
    <>
      <Box component="ul" className={classes.root}>
        <li>
          <Link component={NavLink} to={`/products/${productId}/`}>
            Description
          </Link>
        </li>
        <li>
          <Link component={NavLink} to={`/products/${productId}/additional`}>
            Additional Info
          </Link>
        </li>
        <li>
          <Link component={NavLink} to={`/products/${productId}/reviews`}>
            Reviews
          </Link>
        </li>
      </Box>
      <Outlet />
    </>
  );
}

export default ProductMenu;
