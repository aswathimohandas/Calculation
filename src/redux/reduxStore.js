import { configureStore } from "@reduxjs/toolkit";
import calcuSlice from "./calcuSlice";
const store=configureStore({
    reducer:{
        calcReducer:calcuSlice
    }
})
export default store