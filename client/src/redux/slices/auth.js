import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

// для логина мы используем метод пост, потому что нам надо передать туда данные по апи и в 
// соответствии с логином и паролем получить нужного пользователя
// в парамс мы получаем эти логин и пароль пользователя и передаем их в аксиос
export const fetchAuth = createAsyncThunk(
    'auth/fetchAuth', 
    async (params) => {
        const { data } = await axios.post('/auth/login', params)
        return data
    }
)

export const fetchAuthMe = createAsyncThunk(
    'auth/fetchAuthMe', 
    async () => {
        const { data } = await axios.get('/auth/me')
        return data
    }
)

export const fetchRegister = createAsyncThunk(
    'auth/fetchRegister', 
    async (params) => {
        const { data } = await axios.post('/auth/register', params)
        return data
    }
)

const initialState = {
    data: null,
    status: 'loading'
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.data = null
        }
    },
    extraReducers: {
        [fetchAuth.pending]: (state, action) => {
            state.data = null
            state.status = 'loading'
        },
        [fetchAuth.fulfilled]: (state, action) => {
            state.data = action.payload
            state.status = 'loaded'
        },
        [fetchAuth.rejected]: (state, action) => {
            state.data = null
            state.status = 'error'
        },

        [fetchAuthMe.pending]: (state, action) => {
            state.data = null
            state.status = 'loading'
        },
        [fetchAuthMe.fulfilled]: (state, action) => {
            state.data = action.payload
            state.status = 'loaded'
        },
        [fetchAuthMe.rejected]: (state, action) => {
            state.data = null
            state.status = 'error'
        },

        [fetchRegister.pending]: (state, action) => {
            state.data = null
            state.status = 'loading'
        },
        [fetchRegister.fulfilled]: (state, action) => {
            state.data = action.payload
            state.status = 'loaded'
        },
        [fetchRegister.rejected]: (state, action) => {
            state.data = null
            state.status = 'error'
        }
    }
})

export const selectIsAuth = (state) => Boolean(state.auth.data)

export const { logout } = authSlice.actions

export const authReducer = authSlice.reducer