import { all, call, put, takeEvery } from 'redux-saga/effects';
import { LOAD_PRODUCT_LIST, RENDER_PROUDCT_LIST } from '../actions';

export function* fetchProductLst() {
  const endpoint = 'http://localhost:3001/';
  const response = yield call(fetch, endpoint);
  const data = yield response.json();
  yield put({ type: RENDER_PROUDCT_LIST, productList: data });
}

export function* loadProductList() {
  yield takeEvery(LOAD_PRODUCT_LIST, fetchProductLst);
}

export default function* rootSaga() {
  yield all([loadProductList()]);
}
