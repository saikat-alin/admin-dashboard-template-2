import { configureStore } from "@reduxjs/toolkit";
import navSidebarReducer from "../reducer/NavSidebarSlice";

const Store = configureStore({
    reducer: {
        NavSidebar: navSidebarReducer,
    }
})

export default Store;