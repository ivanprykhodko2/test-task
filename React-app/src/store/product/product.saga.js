import { call, put, takeEvery } from 'redux-saga/effects';
import { setProducts } from './product.reducer';

function* fetchProductAsync(){
    const products = yield call(() => fetch('http://localhost:3000/posts'));
    const formattedProducts = yield products.json();

    yield put(setProducts(formattedProducts));
}

function* productSaga() {
    yield takeEvery('products/getProductsFetch', fetchProductAsync);
}

export default productSaga;