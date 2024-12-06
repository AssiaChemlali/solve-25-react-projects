import {  createSlice } from "@reduxjs/toolkit";


const cartSlice=createSlice({
  name:'cart',
  initialState:[],
  reducers:{
    addProduct(state,action){
    
       state.push(action.payload)
      
    },
    removeProduct(state,action){
   
    //  state.push(action.payload)
   state.filter((item) => item.id !== action.payload);

    }

 
}})



export const {addProduct,removeProduct}=cartSlice.actions
export const cartReducer= cartSlice.reducer