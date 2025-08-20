import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "./news/reducer";
import loadingReducer from "./loading/reducer";

const store = configureStore({
    reducer: {
        news: newsReducer,
        loading: loadingReducer
    }
})

export default store