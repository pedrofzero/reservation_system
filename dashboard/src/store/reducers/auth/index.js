import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from '@/helpers/api'
import { toast } from "react-toastify";
import { t } from 'i18next';

// Login
export const handleLogin = createAsyncThunk('auth/handleLogin', async (params) => {
    const config = { headers: { "Content-Type": "multipart/form-data" } };

    const response = await api.post('auth/login', params, config)

    if (!response?.data?.Result) {
        return toast.error(t(`api.errors.${response?.data?.Code}`));
    } else {
        window.localStorage.setItem('token', response.data.Data.token)
    }

    return response?.data
})

export const handleRegister = createAsyncThunk('auth/handleRegister', async (params) => {
    const config = { headers: { "Content-Type": "multipart/form-data" } };

    const response = await api.post('auth/client/regist', params, config)

    if (!response?.data?.Result) {
        toast.error(t(`api.errors.${response?.data?.Code}`));
    } else {
        window.localStorage.setItem('token', response.data.Data.token)
    }

    return response?.data
})

export const handleLogout = createAsyncThunk('auth/handleLogout', async () => {
    return true;
})

const initialState = {
    token: false,
    isLogged: false,
    loggedUser: false
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(handleLogin.fulfilled, (state, action) => {
            state.token = action?.payload?.Data?.token;
            state.isLogged = true;
            state.loggedUser = action?.payload?.Data?.user;
        })
        builder.addCase(handleLogout.fulfilled, (state) => {
            state.token = false;
            state.isLogged = false;
            state.loggedUser = false;
        })
    }
});

export default authSlice.reducer;

