import ProductListContainer from '@/components/ProductList.container';
import { Container, Group, Title } from '@mantine/core';

const Home = () => {
  return (
    <Container size="lg" py="lg">
      <Title order={2} mb="md">
        Catalog
      </Title>
      <Group justify='center'>
        <ProductListContainer />
      </Group>
    </Container>
  );
};

export default Home;
