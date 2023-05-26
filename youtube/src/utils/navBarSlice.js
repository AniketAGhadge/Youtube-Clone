import { createSlice } from "@reduxjs/toolkit";


const navBarSlice = createSlice({
    name : 'app',
    initialState : {
        isMeanuOpen : true,
    },
    reducers : {
        toggleMenu : (state) => {
            state.isMeanuOpen = !state.isMeanuOpen;
        },
        closeMenu : (state) => {
            state.isMeanuOpen = false;
        }
    }
})

export const {toggleMenu , closeMenu} = navBarSlice.actions;
export default navBarSlice.reducer;