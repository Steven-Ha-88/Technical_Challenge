import { Product } from './../../types';
import Card from './../ProductCard';

const Products = ({data, loading, error} : any) => {

  const products = data.products.results;

  if (loading) {
    return <div>loading...</div>
  }
  if(error) {
    return <div>error.message</div>
  }
  return (
      <div>
          <div className="grid md:grid-cols-3 grid-cols-1 justify-evenly items-center">
            {
              products.map((product : Product) => {
              return <Card {...product} key={product.gtin} />
              })
            }
          </div>
      </div>
  )
}

export default Products;