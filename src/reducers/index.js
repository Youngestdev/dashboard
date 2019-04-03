import { ADD_PRODUCT } from '../actions';
import { RENDER_PROUDCT_LIST } from '../actions';
import { USER_PROFILE_LOADED } from '../actions';

const initialState = {
  productList: []
};

export default function productApp(state = initialState, action) {
  switch (action.type) {
    case RENDER_PROUDCT_LIST:
      return {
        ...state,
        productList: action.productList
      };
    case ADD_PRODUCT:
      let newProductList = [
        ...state.productList,
        {
          ...action.productItem
        }
      ];
      return {
        ...state,
        productList: newProductList
      };
    case USER_PROFILE_LOADED:
      return {
        ...state,
        user: action.user
      };
    default:
      return state;
  }
}
