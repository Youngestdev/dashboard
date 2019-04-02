export const ADD_PRODUCT = 'ADD_PRODUCT';

export const LOAD_PRODUCT_LIST = 'LOAD_PRODUCT_LIST';
export const RENDER_PROUDCT_LIST = 'RENDER_PRODUCT_LIST';

// For now, title alone.
export function addProduct(title) {
  return {
    type: ADD_PRODUCT,
    productItem: {
      title
    }
  };
}

export function loadProductList() {
  return {
    type: LOAD_PRODUCT_LIST
  };
}
