import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,
    loading: false,
    error: null,
  };

   export const userslice = createSlice({

    name:"user",
    initialState,
    reducers:{
        loginstart:(state)=>{
         state.loading=true
        },
        loginsuccess:(state=initialState,action)=>{
            state.loading=false;
            state.currentUser=action.payload;
           },
           loginfail:(state,action)=>{
            state.currentUser=null
            state.loading=false;
            state.error=action.payload;
           },
           logout:(state)=>{
           state.currentUser=null;
            state.loading= false;
            state.error=false;
           },
         

    }
  })

  export const {loginstart,loginsuccess,loginfail,logout}=userslice.actions;
  export default userslice.reducer;