import { all, call, put, takeEvery } from 'redux-saga/effects';
import { LOAD_PRODUCT_LIST, RENDER_PROUDCT_LIST } from '../actions';
import { takeLatest } from 'redux-saga/effects';
import {
  HANDLE_AUTHENTICATION_CALLBACK,
  USER_PROFILE_LOADED
} from '../actions';
import { handleAuthentication } from '../Auth';

export function* fetchProductLst() {
  const endpoint = 'http://localhost:3001/';
  const response = yield call(fetch, endpoint);
  const data = yield response.json();
  yield put({ type: RENDER_PROUDCT_LIST, productList: data });
}

export function* loadProductList() {
  yield takeEvery(LOAD_PRODUCT_LIST, fetchProductLst);
}

export function* parseHash() {
  const user = yield call(handleAuthentication);
  yield put({ type: USER_PROFILE_LOADED, user });
}

export function* handleAuthenticationCallback() {
  yield takeLatest(HANDLE_AUTHENTICATION_CALLBACK, parseHash);
}

export default function* rootSaga() {
  yield all([loadProductList(), handleAuthenticationCallback()]);
}
