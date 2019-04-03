// I don't know if this is the right approach. But:
import axios from 'axios';

export const ADD_PRODUCT = 'ADD_PRODUCT';

export const LOAD_PRODUCT_LIST = 'LOAD_PRODUCT_LIST';
export const RENDER_PROUDCT_LIST = 'RENDER_PRODUCT_LIST';

export const USER_PROFILE_LOADED = 'USER_PROFILE_LOADED';
export const HANDLE_AUTHENTICATION_CALLBACK = 'HANDLE_AUTHENTICATION_CALLBACK';

// For now, title alone.
export function addProduct(title) {
  axios
    .post('http://localhost:3001/', { title })
    .then(response => console.log(response))
    .catch(error => console.error(error));
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

export function handleAuthenticationCallback() {
  return {
    type: HANDLE_AUTHENTICATION_CALLBACK
  };
}
