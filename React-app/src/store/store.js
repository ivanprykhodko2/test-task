import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { rootReducer } from './rootReducer'; 
import createSagaMiddleware from "@redux-saga/core";
import productSaga from "./product/product.saga";


let saga = createSagaMiddleware();
// const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

export const store = configureStore({
    reducer: rootReducer,
    middleware: [saga],
})

saga.run(productSaga);