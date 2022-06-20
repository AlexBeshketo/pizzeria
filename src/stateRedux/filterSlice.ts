import {createSlice, PayloadAction} from "@reduxjs/toolkit";


type initialStateType= {
    categoryID: number,
    currentPage: number
    sortType: {
        name: string, sort: string, type: string
    }
}

const initialState:initialStateType = {
    categoryID: 0,
    currentPage: 1,
    sortType: {
        name: 'populiarumą', sort: 'rating', type: 'up'
    }
};

type SortType= {
    name: string, sort: string, type: string
}



export const filterSlice = createSlice({
    name: 'filters',
    initialState: initialState,
    reducers: {
        setCategoryId(state, action: PayloadAction<number>) {
            state.categoryID = action.payload
        },
        setSort (state, action:PayloadAction<SortType>) {
            state.sortType= action.payload
        },
        setCurrentPage (state, action:PayloadAction<number>) {
            state.currentPage= action.payload
        }
    }

})

export const   {setCategoryId , setSort , setCurrentPage}= filterSlice.actions