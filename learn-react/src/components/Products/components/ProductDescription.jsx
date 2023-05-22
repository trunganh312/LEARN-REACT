import { Paper } from '@mui/material';
import DOMPurify from 'dompurify';
import { useParams } from 'react-router-dom';
import useProductDetail from '../hooks/useProductDetail';

function ProductDescription() {
  const { productId } = useParams();
  const { product } = useProductDetail(productId);
  const safeDescription = DOMPurify.sanitize(product.description);
  return (
    <Paper elevation={0} style={{ padding: '15px' }}>
      <div dangerouslySetInnerHTML={{ __html: safeDescription }} />;
    </Paper>
  );
}

export default ProductDescription;
