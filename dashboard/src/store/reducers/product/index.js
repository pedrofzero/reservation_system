import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from '@/helpers/api'
import { toast } from "react-toastify";
import { t } from 'i18next';

// Login
export const fetchUserProducts = createAsyncThunk('product/list', async (params) => {
    const response = await api.get('product/list', params)

    if (!response?.data?.Result) {
        return toast.error(t(`api.errors.${response?.data?.Code}`));
    }

    return response?.data
})

export const fetchProductDetails = createAsyncThunk('product/details', async (params) => {
    const response = await api.get(`product/details/${params}`)

    if (!response?.data?.Result) {
        return toast.error(t(`api.errors.${response?.data?.Code}`));
    }

    return response?.data
})

export const createProduct = createAsyncThunk('product/create', async (params, { dispatch }) => {
    const config = { headers: { "Content-Type": "multipart/form-data" } }
    const response = await api.post(`product/create`, params, config)

    if (!response?.data?.Result) {
        return toast.error(t(`api.errors.${response?.data?.Code}`));
    } else {
        dispatch(fetchUserProducts())
    }

    return response?.data
})

const initialState = {
    list: false,
    selected: false,
};

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchUserProducts.fulfilled, (state, action) => {
            state.list = action?.payload?.Data;
        })
        builder.addCase(fetchProductDetails.fulfilled, (state, action) => {
            state.selected = action?.payload?.Data;
        })
    }
});

export default productSlice.reducer;

