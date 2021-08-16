import Layout from '../components/Layout';
import Products from '../components/Products';
import gql from 'graphql-tag';
import client from "../lib/apollo";
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

const HomePage = ({data, loading, error}: any) => {
  
  const page = data.products.page;
  const router = useRouter();

  const handleClick = (page: number) => {
    router.push(`?page=${page}`);
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
  const { data, loading, error } = await client.query({
    query: ALL_PRODUCTS_QUERY,
    variables: { page }   
  });

  return {
    props: {
      data,
      loading,
      error: error || null,
    },
 };
}

export default HomePage;
