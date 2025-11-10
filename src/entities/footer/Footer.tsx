import { Container, Group, Text } from '@mantine/core';

const Footer = () => {
  return (
    <Container fluid py="md">
      <Group justify="space-between" align="center">
        <Text size="sm">
          © {new Date().getFullYear()} Goods Shop. All rights reserved.
        </Text>
      </Group>
    </Container>
  );
};

export default Footer;
