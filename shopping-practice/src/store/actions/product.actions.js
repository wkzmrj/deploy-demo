/* eslint-disable no-unused-vars */
import { createAction } from "redux-actions";

// server请求获取商品列表数据；
export const loadProducts = createAction('load products');
// 保存到本地store的商品列表数据；
export const saveProducts = createAction('save products')