import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts', 
    async function () {
        const { data } = await axios.get('/post')
        return data
    }
)

const initialState = {
    posts: {
        items: [],
        status: 'loading'
    }
}

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchPosts.pending]: (state, action) => {
            state.posts.items = []
            state.posts.status = 'loading'
        },
        [fetchPosts.fulfilled]: (state, action) => {
            state.posts.items = action.payload
            state.posts.status = 'loaded'
        },
        [fetchPosts.rejected]: (state, action) => {
            state.posts.items = []
            state.posts.status = 'error'
        }
    }
})

export const postsReducer = postsSlice.reducer