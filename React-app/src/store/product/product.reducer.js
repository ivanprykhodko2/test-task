import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    products: [],
    isLoading: false,
}

export const productSlice = createSlice({
    name: 'products',
    initialState: INITIAL_STATE,
    reducers: {
        getProductsFetch(state){
            state.isLoading = true;
        },
        setProducts(state, action) {
            state.products = action.payload;
            state.isLoading = false;
        },
        getProductsFailure(state){
            state.isLoading = false;
        }
    }
})

export const { setProducts, getProductsFailure, getProductsFetch } = productSlice.actions;

export const productReducer = productSlice.reducer;

