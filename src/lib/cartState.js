import { createContext, useContext, useReducer } from "react";
import shopReducer, { ADD_PRODUCT, DECREASE_QUANTITY, INCREASE_QUANTITY, REMOVE_PRODUCT } from './reducer';

const LocalStateContext = createContext();
const LocalStateProvider = LocalStateContext.Provider;

function CartStateProvider({ children }) {
  // This is our own custom provider! We will store data (state) and functionality (updaters) in here and anyone can access it via the consumer!

  const [cartState, dispatch] = useReducer(shopReducer, { cart: [] });

  const addProductToCart = product => {
      dispatch({ type: ADD_PRODUCT, payload: product });
  };

  const removeProductFromCart = productId => {
      dispatch({ type: REMOVE_PRODUCT, payload: productId });
  };

  const increaseQuantity = product => {
    dispatch({ type: INCREASE_QUANTITY, payload: product });
};

const decreaseQuantity = product => {
  dispatch({ type: DECREASE_QUANTITY, payload: product });
};

return (
    <LocalStateProvider
      value={{
        increaseQuantity,
        decreaseQuantity,
        addProductToCart,
        removeProductFromCart,
        cartState
      }}>
      {children}
    </LocalStateProvider>
  );
}

// make a custom hook for accessing the cart local state
function useCart() {
  // We use a consumer here to access the local state
  const all = useContext(LocalStateContext);
  return all;
}
export { CartStateProvider, useCart };
