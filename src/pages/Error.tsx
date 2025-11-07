import { Button, Center, Container, Stack, Text, Title } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

import { useSchemeTokens } from '@/shared/hooks';

const Error = () => {
  const navigate = useNavigate();
  const { headerBg, text } = useSchemeTokens();

  return (
    <Center mih="calc(100dvh - 120px)">
      <Container size="sm">
        <Stack align="center" ta="center" gap="md">
          <h1>Error</h1>
          <Title order={2}>Oops! Something went wrong.</Title>
          <Text>Page not found or an unexpected error occurred.</Text>
          <Button
            bg={headerBg}
            c={text}
            onClick={() => navigate('/')}
            size="md"
          >
            Go back home
          </Button>
        </Stack>
      </Container>
    </Center>
  );
};

export default Error;
