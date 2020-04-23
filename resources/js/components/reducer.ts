export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const ADD_PRODUCTS = "ADD_PRODUCTS";
export const SET_LOADING = "SET_LOADING";

const addProductToCart = (product, state) => {
  const updatedCart = [...state.cart];
  const updatedItemIndex = updatedCart.findIndex(
    item => item.id === product.id
  );
  const total = (Number(state.total) + Number(product.price)).toFixed(2);

  if (updatedItemIndex < 0) {
    updatedCart.push({ ...product, quantity: 1 });
  } else {
    const updatedItem = {
      ...updatedCart[updatedItemIndex]
    };
    updatedItem.quantity++;
    updatedCart[updatedItemIndex] = updatedItem;
  }

  return { ...state, cart: updatedCart, total };
};

const removeProductFromCart = (productId, state) => {
  const updatedCart = [...state.cart];
  const updatedItemIndex = updatedCart.findIndex(item => item.id === productId);
  const updatedItem = {
    ...updatedCart[updatedItemIndex]
  };
  const total = (Number(state.total) - Number(updatedItem.price)).toFixed(2);

  updatedItem.quantity--;
  if (updatedItem.quantity <= 0) {
    updatedCart.splice(updatedItemIndex, 1);
  } else {
    updatedCart[updatedItemIndex] = updatedItem;
  }

  return { ...state, cart: updatedCart, total };
};

const addProducts = (products, state) => {
  return { ...state, products };
};
const setLoading = (loading, state) => {
  return { ...state, isLoading: loading };
};
const sortByMoreRecents = state => {
  const sortedProducts = state.products;
  return { ...state, products: sortedProducts };
};

const sortByOrderAsc = state => {
  const sortedProducts = state.products.sort();
  return { ...state, products: sortedProducts };
};

const sortByOrderDesc = state => {
  const sortedProducts = state.products.sort();
  return { ...state, products: sortedProducts };
};

export const CartReducer = (state, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return addProductToCart(action.product, state);

    case REMOVE_PRODUCT:
      return removeProductFromCart(action.productId, state);

    case ADD_PRODUCTS:
      return addProducts(action.products, state);
    case SET_LOADING:
      return setLoading(action.loading, state);

    default:
      return state;
  }
};
