import { Button, Center, Group, Stack, Text } from '@mantine/core';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import { useSchemeTokens } from '@hooks';

const Home = () => {
  const navigate = useNavigate();
  const { primary, text } = useSchemeTokens();

  return (
    <Center mih="calc(100dvh - var(--app-shell-header-offset) - var(--app-shell-footer-offset))">
      <Stack align="center" gap="md" ta="center">
        <h1>Welcome to Goods Shop</h1>
        <Text size="lg">Your favorite products, delivered fast and easy.</Text>
        <Button
          bg={primary}
          c={text}
          size="md"
          onClick={() => navigate('/products')}
        >
          <Group>
            <Text fw={600}>Go to Catalog</Text>
            <ArrowRight />
          </Group>
        </Button>
      </Stack>
    </Center>
  );
};

export default Home;
