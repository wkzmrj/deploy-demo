import { createAction } from 'redux-actions';
// server request，哪个商品添加到购物车
export const addProductToCart = createAction('addProductToCart');
// 添加到本地购物车数据
export const addProductToLocalCart = createAction('addProductToLocalCart')

//获取购物车列表数据
export const loadCarts = createAction('loadCarts')

// 同步本地
export const saveCarts = createAction('saveCarts')

// 发送请求，delete哪个数据
export const deleteProductFromCart = createAction('deleteProductFromCart')

// 同步本地
export const deleteProductFromLocalCart = createAction('deleteProductFromLocalCart')

// 发送请求，购物车数量改变
export const changeServiceProductNumber = createAction('changeServiceProductNumber')

//同步本地
export const changeLocalProductNumber = createAction('changeLocalProductNumber')