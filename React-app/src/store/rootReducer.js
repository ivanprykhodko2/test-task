import { combineReducers } from '@reduxjs/toolkit';

import { productReducer } from './product/product.reducer';
import { cartItemsReducer } from './cartItems/cartItems.reducer';

export const rootReducer = combineReducers({
    products: productReducer,
    cartItems: cartItemsReducer
})