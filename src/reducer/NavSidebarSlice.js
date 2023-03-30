import { createSlice } from "@reduxjs/toolkit";

export const NavSidebarSlice = createSlice({
    name: "NavSidebar",
    initialState: { open: true, dropOpen: false },
    reducers: {
        handleDrawerOpen: (state) => {
            state.open = true;
        },
        handleDrawerClose: (state) => {
            state.open = false;
        },
        handleDrawer: (state) => {
            state.open = !state.open;
        },
        handleDropdown: (state) => {
            state.dropOpen = !state.dropOpen;
        },
    },
});

export const { handleDrawerOpen, handleDrawerClose, handleDropdown, handleDrawer } = NavSidebarSlice.actions

export default NavSidebarSlice.reducer