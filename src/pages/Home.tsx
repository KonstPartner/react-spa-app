import { Group, Stack } from '@mantine/core';

import Products from '@/features/products/containers/Products';

const Home = () => {
  return (
    <Stack>
      <h1>Catalog</h1>
      <Group justify="center">
        <Products />
      </Group>
    </Stack>
  );
};

export default Home;
