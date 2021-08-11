import Layout from '../../components/Layout';
import { useCart } from '../../lib/cartState';
import {Product} from './../../types';

const CartPage = () => {
  const { cartState, removeProductFromCart, increaseQuantity, decreaseQuantity} = useCart();
  
  const grandTotal = () => {
    if(!cartState.cart.length) return 0;
    return cartState.cart.reduce((acc: number, item: any) =>  acc + item.total, 0).toFixed(2);
  }

  // console.log("CART:", cartState);

  const renderCart = () => {
    return cartState.cart.map((item : Product) => {
      return (
        <tr key={item.gtin}>
            <td key={item.gtin} className=" pb-4 md:table-cell">
              <a href="#">
                <img src={item.imageUrl} className="w-20 rounded" alt="Thumbnail"/>
              </a>
            </td>
            <td>
              <a href="#">
                <p className="mb-2 md:ml-4">{item.brandName}</p>
                <form action="" method="POST">
                  <button onClick={() => removeProductFromCart(item.gtin)} type="submit" className="text-gray-700 md:ml-4">
                    <small>(Remove item)</small>
                  </button>
                </form>
              </a>
            </td>
            <td className="justify-center md:justify-end md:flex mt-6">
              <div className="w-20 h-10">
                <div className="relative flex flex-row w-full h-8">
                  <button onClick={() => decreaseQuantity(item)} className="text-2xl mx-2">-</button>
                    <p className="w-full leading-8 font-semibold text-center text-gray-700 bg-gray-200 outline-none focus:outline-none hover:text-black focus:text-black" >
                      {item.quantity === 0 ? removeProductFromCart(item.gtin) : item.quantity}
                    </p>
                  <button onClick={() => increaseQuantity(item)} className="text-2xl mx-2">+</button>
                </div>
              </div>
            </td>
            <td className="hidden text-right md:table-cell">
              <span className="text-sm lg:text-base font-medium">
                {item.recommendedRetailPrice}
              </span>
            </td>
            <td className="text-right">
              <span className="text-sm lg:text-base font-medium">
                {item.total?.toFixed(2)}
              </span>
            </td>
          </tr> 
      )
    })
  }

  return(
    <Layout>
      <h1 className="text-3xl">Your Cart</h1>
      {!cartState.cart.length ? <p>There are currently no items in your Cart :(</p> : 
        <table className="w-full text-sm lg:text-base" cellSpacing="0">
              <thead>
                <tr className="h-12 uppercase">
                  <th className=" md:table-cell"></th>
                  <th className="text-left">Product</th>
                  <th className="lg:text-right text-left pl-5 lg:pl-0">
                    <span className="lg:hidden" title="Quantity">Qtd</span>
                    <span className="hidden lg:inline">Quantity</span>
                  </th>
                  <th className="hidden text-right md:table-cell">Unit price</th>
                  <th className="text-right">Total</th>
                </tr>
              </thead>
              <tbody>
                {renderCart()}
              </tbody>
        </table>
      }
      <h1 className="text-2xl text-right">Total Cost: €{grandTotal()} </h1>
    </Layout>
  )
};

export default CartPage;
