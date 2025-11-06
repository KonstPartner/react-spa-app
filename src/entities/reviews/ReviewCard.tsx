import { Avatar, Group, Rating, Stack, Text } from '@mantine/core';

import { Review } from '@/features/products/types';

const ReviewCard = ({ review }: { review: Review }) => {
  return (
    <Group align="start" gap="sm">
      <Avatar radius="xl" color="blue">
        {review.reviewerName.charAt(0).toUpperCase()}
      </Avatar>
      <Stack gap={2} flex={1}>
        <Group justify="space-between" align="center">
          <Text fw={600}>{review.reviewerName}</Text>
          <Text size="xs" c="dimmed">
            {new Date(review.date).toLocaleDateString()}
          </Text>
        </Group>
        <Rating value={review.rating} readOnly size="sm" />
        <Text size="sm" mt={2}>
          {review.comment}
        </Text>
      </Stack>
    </Group>
  );
};

export default ReviewCard;
