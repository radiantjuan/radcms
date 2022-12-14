/**
 * Root Store for admin
 */
import {configureStore} from '@reduxjs/toolkit'
import successStatusReducer from "./successBannerSlice";
import isSavingStatusSlice from "./isSavingStatusSlice";
import listPageSlice from "../Pages/PagesReducers/listPageSlice";
import pageSlice from "../Pages/PagesReducers/pageSlice";
import contentModalSlice from "../Pages/PagesReducers/contentModalSlice";

export const store = configureStore({
    reducer: {
        successBanner: successStatusReducer,
        isSavingStatus: isSavingStatusSlice,
        listPageReducer: listPageSlice,
        pageReducer: pageSlice,
        contentModalReducer: contentModalSlice
    },
})
