import React, {useState} from 'react';
import './scss/app.scss'
import {Header} from "./components/Header/Header";

import HomePage from "./components/pages/HomePage";

import {Route, Routes} from "react-router-dom";
import NotFound from "./components/pages/NotFound";
import {ShoppingCart} from "./components/pages/ShoppingCart";
import {Provider} from "react-redux";
import store, {useAppSelector} from "./stateRedux/store";

export type PizzasElementsType = {
    id: number, imageUrl: string, title: string, types: number[],
    sizes: number[]; price: number; category: number; rating: number;
}
export type ContextType = {
    searchInputValue: string
    setSearchInput: (searchInput: string) => void
}

export const SearchContext = React.createContext<Partial<ContextType>>({})

function App() {


    return (

        <div className="wrapper">
            <Provider store={store}>
                <Header />
                <div className="content">
                    <div className="container">
                        <Routes>
                            <Route path="/cart" element={<ShoppingCart/>}/>
                            <Route path="/"
                                   element={<HomePage />}/>
                            <Route path="*" element={<NotFound/>}/>
                        </Routes>

                    </div>
                </div>
            </Provider>
        </div>

    );
}

export default App;




