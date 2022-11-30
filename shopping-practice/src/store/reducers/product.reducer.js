// 商品相关数据
import { handleActions as createReducer } from 'redux-actions'
import { saveProducts } from '../actions/product.actions';

// 商品列表数据
const initialState = [
];
// 保存到本地store
const handleSaveProducts = (state, action) => action.payload;

export default createReducer({
    // 保存到本地store
    [saveProducts]: handleSaveProducts
}, initialState);
