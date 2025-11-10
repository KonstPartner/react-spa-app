import { Review } from '@features/reviews/modal';

export type Dimensions = {
  width: number;
  height: number;
  depth: number;
};

export type Meta = {
  createdAt: string;
  updatedAt: string;
  barcode: string;
  qrCode: string;
};

export type Product = {
  title: string;
  description: string;
  category: string;
  tags: string[];
  brand: string;
  sku: string;
  availabilityStatus: string;
  stock: number;
  minimumOrderQuantity: number;
  discountPercentage?: number;
  rating: number;
  price: number;
  id: number;
  weight: number;
  dimensions: Dimensions;
  warrantyInformation: string;
  shippingInformation: string;
  reviews: Review[];
  returnPolicy: string;
  meta: Meta;
  images: string[];
  thumbnail: string;
};

export type ProductsResponse = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
};
