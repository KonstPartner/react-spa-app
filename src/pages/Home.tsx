import { Container, Group, Title } from '@mantine/core';

import Products from '@/features/products/containers/Products';

const Home = () => {
  return (
    <Container size="lg" py="lg">
      <Title order={2} mb="md">
        Catalog
      </Title>
      <Group justify="center">
        <Products />
      </Group>
    </Container>
  );
};

export default Home;
