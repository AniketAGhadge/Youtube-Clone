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
    }
})

export const {toggleMenu} = navBarSlice.actions;
export default navBarSlice.reducer;