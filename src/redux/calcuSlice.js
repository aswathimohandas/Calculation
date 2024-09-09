import { createSlice } from "@reduxjs/toolkit";


const calcSlice=createSlice({
    name:"calculator",
    initialState:{
        calculator:0
    },
    reducers:{
        reset(state){
            state.calculator=0
        },
        calculation(state,action){
            state.calculator= eval(action.payload)
        }
    }
})

export default calcSlice.reducer
export const{reset,calculation}=calcSlice.actions
