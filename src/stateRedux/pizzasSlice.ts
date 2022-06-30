import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";
///types
export type Pizza = {
    id: number, imageUrl: string, title: string, types: number[],
    sizes: number[]; price: number; category: number; rating: number;
};

export enum Status {
    LOADING = 'loading',
    SUCCESS = 'completed',
    ERROR = 'error',
}

export type SearchPizzaParams = {
    sortBy: string;
    order: string;
    category: string;
    search: string;
    currentPage: string;
};

export interface PizzaSliceState {
    items: Pizza[];
    status: Status;
}

type ParamsType= {
    currentPage:number,
    category:string,
    sortBy:string,
    order:string
}

////---////

const initialState:PizzaSliceState = {
    items: [],
    status:Status.LOADING,
};



type initialItems = [  //get items
    {
        id: number, imageUrl: string, title: string, types: number[],
        sizes: number[]; price: number; category: number; rating: number;
    }
]



export const fetchPizzas = createAsyncThunk(
    'pizzas/fetchPizzasStatus',
    async (params:ParamsType) => {
        const {currentPage,category,sortBy,order } =params
        const url = `https://6i29138a9665ea71fe142c328.mockapi.io/items?page=${currentPage}&limit=8&${category}&sortBy=${sortBy}&order=${order}`
        const {data} = await axios.get<initialItems>(url)
        return data
    })




export const pizzasSlice = createSlice({
    name: 'pizzas',
    initialState,
    reducers: {
        setItems(state, action:PayloadAction<Pizza[]>) {
            state.items = action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPizzas.pending, (state, action) => {
            state.status = Status.LOADING;
            state.items = [];
        });

        builder.addCase(fetchPizzas.fulfilled, (state, action) => {
            state.items = action.payload;
            state.status = Status.SUCCESS;
        });

        builder.addCase(fetchPizzas.rejected, (state, action) => {
            state.status = Status.ERROR;
            state.items = [];
        });
    }})

    // extraReducers: (builder) => {
    //     // The `builder` callback form is used here because it provides correctly typed reducers from the action creators
    //     builder.addCase(updateUser.fulfilled, (state, { payload }) => {
    //
    //     })
    //     builder.addCase(updateUser.rejected, (state, action) => {
    //         if (action.payload) {
    //             // Being that we passed in ValidationErrors to rejectType in `createAsyncThunk`, the payload will be available here.
    //             state.error = action.payload.errorMessage
    //         } else {
    //             state.error = action.error.message
    //         }
    //     })
    // }


export const {setItems} = pizzasSlice.actions