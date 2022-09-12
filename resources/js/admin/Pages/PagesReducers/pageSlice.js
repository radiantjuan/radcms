import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const initialState = {
    loading: true,
    content_modal_show: false,
    content_types: [],
    contents: []
}

export const fetchPage = createAsyncThunk('page/fetchpage', async (id) => {
    try {
        return (await axios.get(`/api/pages/${id}`)).data.data
    } catch (error) {
        throw new Error('Something went wrong');
    }
});

export const updatePage = createAsyncThunk('page/updatepage', async ({id, title, published}, {rejectWithValue}) => {
    try {
        await axios.put('/api/pages/' + id, {
            title: title,
            published: published
        });

        return {
            success: true,
        }
    } catch (error) {
        return rejectWithValue({
            success: false,
            error: {
                status: error.response.status,
                data: error.response.data
            },
        });
    }
});

export const savePage = createAsyncThunk('page/savePage', async({title, published}, {rejectWithValue}) => {
    try {
        const pageId =  (await axios.post('/api/pages', {
            title: title,
            published: published
        })).data;

        return {
            success: true,
            data: pageId
        }
    } catch (error) {
        return rejectWithValue({
            success: false,
            error: {
                status: error.response.status,
                data: error.response.data
            },
        });
    }
});

export const fetchContentTypes = createAsyncThunk('page/contentFetchContentTypes', async () => {
    try {
        return (await axios.get('/api/get_content_types')).data;
    } catch (error) {
        throw new Error('Something went wrong');
    }
});

export const pageSlice = createSlice({
    name: "page",
    initialState,
    reducers: {
        toggleLoading(state, action) {
            return {
                ...state,
                loading: action.payload
            }
        },
        toggleContentModal(state, action) {
            return {
                ...state,
                content_modal_show: action.payload
            }
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchPage.pending, (state) => {
            state.loading = true;
        }).addCase(fetchPage.fulfilled, (state, action) => {
            state.loading = false;
            state.contents = action.payload.contents;
        }).addCase(fetchPage.rejected, (state) => {
            state.loading = false;
        }).addCase(updatePage.pending, (state) => {
            state.loading = true;
        }).addCase(updatePage.fulfilled, (state, action) => {
            state.loading = false;
        }).addCase(updatePage.rejected, (state, action) => {
            state.loading = false;
        }).addCase(savePage.pending, (state) => {
            state.loading = true;
        }).addCase(savePage.fulfilled, (state, action) => {
            state.loading = false;
        }).addCase(savePage.rejected, (state, action) => {
            state.loading = false;
        }).addCase(fetchContentTypes.fulfilled, (state, action) => {
            state.content_types = action.payload.data;
        })
    }
});

export const {toggleLoading, toggleContentModal} = pageSlice.actions
export default pageSlice.reducer;
