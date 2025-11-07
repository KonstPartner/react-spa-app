import { Products } from '@features/products/ui';
import { Group, Stack } from '@mantine/core';

const Catalog = () => {
  return (
    <Stack>
      <h1>Catalog</h1>
      <Group justify="center">
        <Products />
      </Group>
    </Stack>
  );
};

export default Catalog;
