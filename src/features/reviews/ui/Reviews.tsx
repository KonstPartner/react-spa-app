import { ReviewList } from '@entities/reviews';
import type { Review } from '@features/products/model/types';
import { Box, Paper, Text, Title } from '@mantine/core';

const Reviews = ({ reviews }: { reviews?: Review[] }) => {
  if (!reviews || reviews.length === 0) {
    return (
      <Paper withBorder p="md" radius="md" mt="xl">
        <Title order={4} mb="sm">
          Reviews
        </Title>
        <Text c="dimmed" size="sm">
          No reviews yet.
        </Text>
      </Paper>
    );
  }

  return (
    <Box w={{ base: '100%', lg: '70%' }}>
      <Paper withBorder p="md" radius="md" mt="xl">
        <Title order={4} mb="md">
          Reviews ({reviews.length})
        </Title>

        <ReviewList reviews={reviews} />
      </Paper>
    </Box>
  );
};

export default Reviews;
