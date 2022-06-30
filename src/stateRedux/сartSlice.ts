import {createSlice, PayloadAction} from "@reduxjs/toolkit";


export type ItemsType = { id: number, title: string, price: number, imageUrl: string, type: string, size: number, count: number };

const initialState = {
    items: [],
    totalPrice: 0,


};

type initialStateType = {
    items: Array<ItemsType>,
    totalPrice: number,

}


export const shoppingCartSlice = createSlice({
    name: 'shopping cart',
    initialState: initialState as initialStateType,
    reducers:

        {
            addItem(state, action: PayloadAction<ItemsType | any>) {
                const findItem = state.items.find(obj => obj.id === action.payload.id)
                if (findItem) {
                    findItem.count++
                } else {
                    state.items.push({
                        ...action.payload,
                        count: 1
                    })
                }
                state.totalPrice = state.items.reduce((sum: number, obj: ItemsType) => {
                    return (obj.price * obj.count) + sum;
                }, 0)
            },

            minusItem(state, action: PayloadAction<number>) {
                const findItem = state.items.find(obj => obj.id === action.payload)
                if (findItem) {
                    // if (findItem.count>0){
                    findItem.count--
                    // }
                }
            },

            removeItem(state, action: PayloadAction<number>) {
                state.items = state.items.filter(obj => obj.id !== action.payload)
            },
            clearItems(state) {
                state.items = []
                state.totalPrice = 0
            }

        }
})

export const {addItem, removeItem, clearItems, minusItem} = shoppingCartSlice.actions