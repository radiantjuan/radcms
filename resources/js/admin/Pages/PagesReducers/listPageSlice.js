import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

const initialState = {
    pages: [],
    loading: true,
    sortSettings: {
        column: 'id',
        direction: 'asc'
    }
}

export const fetchPages = createAsyncThunk('listPages/fetchpages', async ({column, direction}) => {
    try {
        return (await axios.get(`/api/pages?sorting=${column}&direction=${direction}`)).data
    } catch (error) {
        throw new Error('Something went wrong');
    }
})

export const listPageSlice = createSlice({
    name: 'listpages',
    initialState,
    reducers: {
    },
    extraReducers: builder => {
        builder
            .addCase(fetchPages.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchPages.fulfilled, (state, action) => {
                state.loading = false;
                state.pages = action.payload;
            })
            .addCase(fetchPages.rejected, (state, action) => {
                state.loading = false;
            });
    }
})

// Action creators are generated for each case reducer function
export const {} = listPageSlice.actions
export default listPageSlice.reducer
