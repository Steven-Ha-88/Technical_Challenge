import Link from 'next/link';
import { FC } from 'react';
import { useCart } from './../../lib/cartState';
import { Product } from './../../types';

const Layout: FC = ({ children }) => {
  const { cartState } = useCart();
  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-between">
        <strong>Qogita</strong>
        <nav>
          <ul className="flex gap-4">
            <li>
              <Link href="/">
                <a className="underline">Products</a>
              </Link>
            </li>
            <li>
              <Link href="/cart">
                <a className="underline">Your Cart</a>
              </Link>
                <span className="mx-1 inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                  {cartState.cart.reduce((acc:number, item: Product) => acc + (item.quantity || 0), 0)}
                </span>
            </li>
          </ul>
        </nav>
      </div>
      {children}
    </div>
  );
};

export default Layout;
