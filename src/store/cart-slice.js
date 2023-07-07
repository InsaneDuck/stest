import {createSlice} from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState: {},
    reducers: {
        addItemToCart(state,action){

        },
        deleteItemFromCart(state,action){

        }
    }
})

export const cartActions = cartSlice.actions

export default cartSlice