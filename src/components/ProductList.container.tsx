import { useNavigate } from 'react-router-dom';
import ProductList from './ProductList.view';
import MOCK_PRODUCTS from '@/data/products.json';
import { Box } from '@mantine/core';

const ProductListContainer = () => {
  const navigate = useNavigate();

  const products = MOCK_PRODUCTS.products;

  const onItemClick = (id: number) => navigate(`/products/${id}`);

  return (
    <Box miw={250} w={{base:'40%', xs:'80%', sm:'60%', md: '80%', lg: '100%' }}>
      <ProductList products={products} onItemClick={onItemClick} />
    </Box>
  );
};

export default ProductListContainer;
