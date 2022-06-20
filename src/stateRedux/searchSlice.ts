import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: initialStateType = {
    searchInputValue: '',
};

type initialStateType = {
    searchInputValue: any,
}

export const searchSlice = createSlice({
    name: 'filters',
    initialState: initialState,
    reducers: {
        setSearchInputValue(state, action: PayloadAction<null | string>) {
            state.searchInputValue=action.payload
        },

    }

})

export const {setSearchInputValue} = searchSlice.actions