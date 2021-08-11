import { useState } from "react";
import { useQuery } from '@apollo/client';
import { Product, ProductsResponse } from './../../types';
import Card from './../ProductCard';
import gql from 'graphql-tag';
import Pagination from "../Pagination";

export const ALL_PRODUCTS_QUERY = gql`
  query ALL_PRODUCTS_QUERY ($page: Int = 0){
    products: publish(page: $page) 
    @rest(type: "Products", path: "products?page={args.page}") {
      results {
        brandName
        name
        imageUrl
        categoryName
        recommendedRetailPrice
        recommendedRetailPriceCurrency
        gtin
      }
    }
  }
`;

const Products = () => {
  const [page, setPage] = useState(1);
  const { data, error, loading } = useQuery(ALL_PRODUCTS_QUERY, { 
    variables:{
      page: page
    }
  });

  console.log(data);

  const products = data?.products.results;
  // console.log("THIS IS THE DATA:", products);

  const handleClick = (page: number) => {
    setPage(page);
    window.scrollTo({top: 0});
  }

  if (loading) {
    return <div>loading...</div>
  }
  if(error) {
    return <div>error.message</div>;
  }
  return (
      <div>
        <Pagination handleClick={handleClick} page={page}>
          <div className="grid md:grid-cols-3 grid-cols-1 justify-evenly items-center">
            {
              products.map((product : Product) => {
              return <Card {...product} key={product.gtin} />
              })
            }
          </div>
        </Pagination>
      </div>
  )
}

export default Products;