import React, {useState} from 'react';
import './scss/app.scss'
import {Header} from "./components/Header/Header";
import {Categories} from "./components/Categories/Categories";
import {PizzaBlock} from "./components/PizzaBlock/PizzaBlock";
import {Sort} from "./components/Sort/Sort";
import pizzas from './assets/pizzas.json'

export type PizzasElementsType = {id:number, imageUrl: string, title: string, types : number[],
    sizes: number[]; price: number; category: number; rating: number; }

type PizzasType=  {
    pizzas : Array<PizzasElementsType>
}



function App() {
    return (

        <div className="wrapper">
            <Header/>

            <div className="content">
                <div className="container">
                    <div className="content__top">
                        <Categories/>
                        <Sort/>
                    </div>
                    <h2 className="content__title">Visos picos </h2>
                    <div className="content__items">
                        {pizzas.pizzas.map((el:PizzasElementsType)=> (
                            <PizzaBlock key={el.id} {...el}/>
                        ))

                        }
                    </div>
                </div>
            </div>
        </div>

    );
}
export default App;




