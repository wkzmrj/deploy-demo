import { takeEvery, put } from 'redux-saga/effects'
import { loadProducts, saveProducts } from '../actions/product.actions'
import axios from 'axios'


// 加载商品列表数据
function* handleLoadProducts() {
    // 向服务器端发送请求 加载列表数据
    const { data } = yield axios.get('http://localhost:3005/goods')
    // 保存到本地store
    yield put(saveProducts(data))
}
// 接收action;
export default function* productSaga() {
    // 加载商品列表数据；
    yield takeEvery(loadProducts, handleLoadProducts)
}