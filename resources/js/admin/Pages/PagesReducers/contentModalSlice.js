import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    show: false,
}

export const contentModalSlice = createSlice({
    name: 'contentModal',
    initialState,
    reducers: {
        toggleContentModal: (state, {payload}) => {
            state.show = payload.show
        },
    },
})

// Action creators are generated for each case reducer function
export const {toggleContentModal} = contentModalSlice.actions

export default contentModalSlice.reducer
