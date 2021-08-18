import Layout from '../components/Layout';
import Products from '../components/Products';
import gql from 'graphql-tag';
import client from "../lib/apollo";
import {useState} from 'react';
import Pagination from '../components/Pagination';
import { useRouter } from "next/router";
import { useQuery } from '@apollo/client';

export const ALL_PRODUCTS_QUERY = gql`
query  ALL_PRODUCTS_QUERY($page: Int = 0) {
  products: publish(page: $page) 
  @rest(type: "Products", path: "products?page={args.page}") {
    page
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
`

const HomePage = () => {
  const [page, setPage] = useState(1);
  
  //fetch data
  const {data, loading, error} = useQuery(ALL_PRODUCTS_QUERY, {
    variables: { page }
  })

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
    <Layout>
      <Pagination handleClick={handleClick} page={page}>
        <Products data={data}/>
      </Pagination>
    </Layout>
  );
}


export async function getServerSideProps({query : {page = 1}}) {
  //cache data first
  await client.query({
    query: ALL_PRODUCTS_QUERY,
    variables: { page }, 
    fetchPolicy: 'cache-first'   
  });  

  return {
    props: {},
 };
}

export default HomePage;
