import { Paper, Table, Title } from '@mantine/core';

import { Product } from '@features/products/model/types';

const ProductDetailsTable = ({ product }: { product: Product }) => {
  const { brand, category, weight, dimensions, meta } = product;

  return (
    <Paper withBorder p="md" radius="md">
      <Title order={4} mb="sm">
        Details
      </Title>
      <Table withTableBorder withColumnBorders highlightOnHover>
        <Table.Tbody>
          <Table.Tr>
            <Table.Th>Brand</Table.Th>
            <Table.Td>{brand || '-'}</Table.Td>
          </Table.Tr>

          <Table.Tr>
            <Table.Th>Category</Table.Th>
            <Table.Td tt="capitalize">{category}</Table.Td>
          </Table.Tr>

          <Table.Tr>
            <Table.Th>Weight</Table.Th>
            <Table.Td>{weight} g</Table.Td>
          </Table.Tr>

          <Table.Tr>
            <Table.Th>Dimensions</Table.Th>
            <Table.Td>
              {dimensions.width} × {dimensions.height} × {dimensions.depth} mm
            </Table.Td>
          </Table.Tr>

          <Table.Tr>
            <Table.Th>Barcode</Table.Th>
            <Table.Td>{meta.barcode}</Table.Td>
          </Table.Tr>
        </Table.Tbody>
      </Table>
    </Paper>
  );
};

export default ProductDetailsTable;
