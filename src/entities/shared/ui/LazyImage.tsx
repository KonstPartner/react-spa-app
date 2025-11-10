import { Image, ImageProps, Skeleton } from '@mantine/core';
import { useInView } from 'react-intersection-observer';

const LazyImage = ({
  src,
  alt,
  width,
  height,
  radius = 'sm',
  fit = 'cover',
  eager = false,
}: {
  src: string;
  alt: string;
  width: number | string;
  height: number | string;
  radius?: number | string;
  fit?: ImageProps['fit'];
  eager?: boolean;
}) => {
  const { ref, inView } = useInView({
    rootMargin: '200px',
    threshold: 0.1,
    triggerOnce: true,
  });

  const shouldLoad = eager || inView;

  return (
    <div ref={ref} style={{ width, height }}>
      {shouldLoad ? (
        <Image
          component="img"
          src={src}
          alt={alt}
          width={width}
          height={height}
          radius={radius}
          fit={fit}
          decoding="async"
          loading={eager ? 'eager' : 'lazy'}
        />
      ) : (
        <Skeleton width={width} height={height} radius={radius} />
      )}
    </div>
  );
};

export default LazyImage;
