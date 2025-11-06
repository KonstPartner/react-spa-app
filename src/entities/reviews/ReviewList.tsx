import { ReviewCard } from '@entities/reviews';
import { Review } from '@features/products/model/types';
import { Divider, Stack } from '@mantine/core';

const ReviewList = ({ reviews }: { reviews: Review[] }) => {
  return (
    <Stack gap="md">
      {reviews.map((review, index) => (
        <div key={index}>
          <ReviewCard review={review} />
          {index !== reviews.length - 1 && <Divider my="sm" />}
        </div>
      ))}
    </Stack>
  );
};

export default ReviewList;
