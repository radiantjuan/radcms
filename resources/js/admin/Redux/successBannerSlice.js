import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    status: 0,
    alertType: '',
    alertMessage: ''
}

export const successBannerSlice = createSlice({
    name: 'successBanner',
    initialState,
    reducers: {
        toggleSuccessBanner: (state, {payload}) => {
            state.status = payload.status;
            state.alertType = payload.alertType;
            state.alertMessage = payload.alertMessage;
        },
    },
})

// Action creators are generated for each case reducer function
export const {toggleSuccessBanner} = successBannerSlice.actions

export default successBannerSlice.reducer
