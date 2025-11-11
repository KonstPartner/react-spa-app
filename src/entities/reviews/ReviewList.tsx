import { Stack } from '@mantine/core';

import { Review } from '@features/reviews/modal';
import { ReviewCard } from '@entities/reviews';

const ReviewList = ({ reviews }: { reviews: Review[] }) => {
  return (
    <Stack gap="lg">
      {reviews.map((review, index) => (
        <ReviewCard key={index} review={review} />
      ))}
    </Stack>
  );
};

export default ReviewList;
