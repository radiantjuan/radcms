import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    status: 0,
}

export const isSavingStatusSlice = createSlice({
    name: 'successBanner',
    initialState,
    reducers: {
        toggleSavingStatus: (state, {payload}) => {
            state.status = payload.status
        },
    },
})

// Action creators are generated for each case reducer function
export const {toggleSavingStatus} = isSavingStatusSlice.actions

export default isSavingStatusSlice.reducer
