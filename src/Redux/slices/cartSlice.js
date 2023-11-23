import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cartlist',
    initialState : [],
    reducers :{
        addToCart :(state,action)=>{
            state.push(action.payload)
        }, removeFromCart:(state,action)=>{
            state.pop(action.payload)
            //return state.filter(item=>item.id!=action.payload)
        }, emptyCart:(state)=>{
           return state = []
        
    } 
   }
   })
export const {addToCart,removeFromCart,emptyCart}= cartSlice.actions
export default cartSlice.reducer 