import { Divider, Stack, Text } from '@mantine/core';

const About = () => {
  return (
    <Stack py="lg" gap="lg">
      <Stack gap={4}>
        <h1>About Shop</h1>
        <Text size="lg">Quality products. Fair prices. Fast delivery.</Text>
      </Stack>

      <Divider />
      <Stack>
        <Text>
          Shop is a modern online store where we bring together the best
          products at fair prices. We believe shopping should be simple,
          enjoyable, and fast. Every item is carefully selected to ensure you
          get only what’s truly worth your attention.
        </Text>

        <Text>
          We work with trusted suppliers, update our catalog daily, and ensure
          quick delivery across the country. Our customer support is available
          24/7 — you can always reach out for help or advice.
        </Text>
      </Stack>
    </Stack>
  );
};

export default About;
