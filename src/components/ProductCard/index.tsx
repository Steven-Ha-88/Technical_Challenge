import { Product } from "../../types";
import { useCart } from '../../lib/cartState';

const Card = (product : Product) => {
  const { addProductToCart } = useCart();

    return (
        <div className="max-w-xs p-4 justify-self-center">
          <div className="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg ">
            <img className="rounded-t-lg p-10" src={product.imageUrl} alt="" />
            <div className="py-6 px-8 rounded-lg bg-white">
              <h1 className="text-gray-700 font-bold text-2xl mb-3 hover:text-gray-900 hover:cursor-pointer">{product.brandName}</h1>
              <h2 className="text-gray-700 font-bold text-base mb-3 hover:text-gray-900 hover:cursor-pointer">{product.categoryName}</h2>
              <p className="text-gray-700 tracking-wide">{product.name}</p>
              <button onClick={() => addProductToCart(product)} className="mt-6 py-2 px-4 bg-yellow-400 text-gray-800 font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300">Add to Cart</button>
            </div>
            <div className="absolute top-2 right-2 py-2 px-4 bg-blue-300 rounded-lg">
              <span className="text-md ">{`${product.recommendedRetailPriceCurrency} ${product.recommendedRetailPrice}`}</span>
            </div>
          </div>
        </div>
    )
  }

export default Card;
