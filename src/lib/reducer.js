export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const INCREASE_QUANTITY = "INCREASE_QUANTITY";
export const DECREASE_QUANTITY = "DECREASE_QUANTITY";
export const FETCH_TOTAL = "FETCH_TOTAL";

const addProduct = (state, action) => {
  const doesItemExist = state.cart.find((item) => item.gtin === action.payload.gtin);
  const subTotal = action.payload.recommendedRetailPrice;  

  if(doesItemExist) {
    doesItemExist.quantity++;
    doesItemExist.total = doesItemExist.quantity * doesItemExist.recommendedRetailPrice;
  }
  else return { cart: [...state.cart, { ...action.payload, quantity: 1, total: subTotal  }]}
  return {cart: [...state.cart]}
}

const removeProduct = (state, action) => {
  const filteredCart = state.cart.filter(item => item.gtin !== action.payload);
  return { cart: filteredCart };
}

const increaseQuantity = (state, action) => {
  const increasedCartQuantity = state.cart.map((item) => {
    if (item.gtin !== action.payload.gtin) return item;
    const increasedQuantity = item.quantity + 1;
    return {
      ...item,
      quantity: increasedQuantity,
      total: increasedQuantity * item.recommendedRetailPrice
    }
  })
  return {cart: increasedCartQuantity}
}

const decreaseQuantity = (state, action) => {
  const decreaseCartQuantity = state.cart.map((item) => {
    if (item.gtin !== action.payload.gtin) return item;
    const decreaseQuantity = item.quantity - 1;
    return {
      ...item,
      quantity: decreaseQuantity,
      total: decreaseQuantity * item.recommendedRetailPrice
    }
  })
  return {cart: decreaseCartQuantity}
}

export default function shopReducer(state, action) {
  switch (action.type) {
    case ADD_PRODUCT:
      return addProduct(state, action);
    case REMOVE_PRODUCT:
      return removeProduct(state, action);
    case INCREASE_QUANTITY:
      return increaseQuantity(state, action);
    case DECREASE_QUANTITY:
      return decreaseQuantity(state, action);
      throw new Error();
  }
}

