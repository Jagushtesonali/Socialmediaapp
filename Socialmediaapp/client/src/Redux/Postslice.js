import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userspost: null,
    loading: false,
    error: null,
  };

   export const postslice = createSlice({

    name:"post",
    initialState,
    reducers:{
        fetchpost:(state)=>{
         state.loading=true
        },
        postfetchsuccess:(state=initialState,action)=>{
            state.loading=false;
            state.userspost=action.payload;
           },
           postfetchfail:(state,action)=>{
            state.userspost=null
            state.loading=false;
            state.error=action.payload;
           },
           postlike:(state,action)=>{
            if (!state.userspost.likes.includes(action.payload)) {
              state.userspost.likes.push(action.payload)
                          }else{
                            state.userspost.likes.splice(state.userspost.likes.findIndex((userid)=>userid===action.payload),1)
            }
            }
            
         
         

    }
  })

  export const {fetchpost,postfetchsuccess,postfetchfail,postlike}=postslice.actions;
  export default postslice.reducer;