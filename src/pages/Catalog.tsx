import { Group, Stack } from '@mantine/core';

import { Products } from '@features/products/ui';

const Catalog = () => {
  return (
    <Stack py="lg">
      <h1>Catalog</h1>
      <Group justify="center">
        <Products />
      </Group>
    </Stack>
  );
};

export default Catalog;
