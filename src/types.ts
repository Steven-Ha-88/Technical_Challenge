export type Product = {
  name: string;
  gtin: string;
  recommendedRetailPrice: number;
  recommendedRetailPriceCurrency: string;
  imageUrl: string;
  brandName: string;
  categoryName: string;
  quantity?: number;
  total?: number;
};

/**
 * The response type of errors from /api/*.
 */
export type ErrorResponse = string;

/**
 * The response type of /api/products
 */
export type ProductsResponse = {
  products: {
    results: Product[];
  }
};

/**
 * The response type of /api/products/[gtin].
 */
export type ProductResponse = Product;
