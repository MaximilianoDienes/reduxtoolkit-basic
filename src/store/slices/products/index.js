import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

export const productSlice = createSlice({
    name: 'products',
    initialState: {
        list: []
    },
    reducers: {
        setProductList: (state, action) => {
            state.list = action.payload;
        }
    }
})

export const { setProductList } = productSlice.actions;

export default productSlice.reducer;

export const fetchAllProducts = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get('https://fakestoreapi.com/products/');
            dispatch(setProductList(response.data));
        } catch (error) {
            console.error(error);
        }
    }
}