// 引入handleactions的方法

import { handleActions as createReducer } from "redux-actions";
import { addProductToLocalCart, changeLocalProductNumber, deleteProductFromLocalCart, saveCarts } from "../actions/cart.actions";

const initialState = [];
const handleAddProductToLocalCart = (state, action) => {
    // 要没没有商品，要么在购物车里，加一
    // 深拷贝，原的购物车数据；
    const newState = JSON.parse(JSON.stringify(state));
    const product = newState.find(product => product.id === action.payload.id);
    if (product) {
        // 已经存在购物车里
        product.count = product.count + 1;
    } else {
        newState.push(action.payload);
    }
    return newState

}

const handleSaveCarts = (state, action) => action.payload;
const handleDeleteProductFromLocalCart = (state, action) => {
    const newState = JSON.parse(JSON.stringify(state))
    newState.splice(action.payload, 1);
    return newState;
}
const handleChangeLocalProductNumber=(state, action) => {
    const newState = JSON.parse(JSON.stringify(state));
    const product = newState.find(product => product.id === action.payload.id);
    product.count = action.payload.count;
    return newState;
}
export default createReducer({
    // 接收addproducttolocalcart的action
    [addProductToLocalCart]: handleAddProductToLocalCart,
    [saveCarts]: handleSaveCarts,
    [deleteProductFromLocalCart]: handleDeleteProductFromLocalCart,
    [changeLocalProductNumber]: handleChangeLocalProductNumber
    
}, initialState)
