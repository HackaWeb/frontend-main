import { configureStore } from "@reduxjs/toolkit";
import modals from "./slices/modals";
import aside from "./slices/aside";

export const store = configureStore({
    reducer: { modals, aside },
});
