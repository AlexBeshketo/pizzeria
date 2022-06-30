import { configureStore } from '@reduxjs/toolkit'
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {filterSlice} from "./filterSlice";
import {searchSlice} from "./searchSlice";
import {shoppingCartSlice} from "./сartSlice";
import {pizzasSlice} from "./pizzasSlice";


const store = configureStore({
    reducer: {
        filter: filterSlice.reducer,
        search: searchSlice.reducer,
        carts: shoppingCartSlice.reducer,
        pizza:pizzasSlice.reducer
    },
})


export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export type RootState = ReturnType<typeof store.getState>

export default store