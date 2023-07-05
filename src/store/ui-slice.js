import {createSlice} from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name:'ui',
    initialState:{showCartModal: false},
    reducers:{
        toggleCart(state) {
            state.showCartModal = !state.showCartModal;
        }
    }
})

export const uiActions = uiSlice.actions;
export default uiSlice;