import React, {useEffect} from 'react';
import {Categories} from "../Categories/Categories";
import {Sort} from "../Sort/Sort";
import PizzaSkeleton from "../PizzaBlock/pizzaBlockSkeleton";
import {PizzaBlock} from "../PizzaBlock/PizzaBlock";
import {PizzasElementsType} from "../../App";
import Pagination from "../Pagination/Pagination";
import {useAppDispatch, useAppSelector} from "../../stateRedux/store";
import {setCategoryId, setCurrentPage} from "../../stateRedux/filterSlice";
import {fetchPizzas, Status} from "../../stateRedux/pizzasSlice";


const HomePage = () => {

    const dispatch = useAppDispatch()

    const searchInputValue = useAppSelector((state) => state.search.searchInputValue)
    const {sortType, categoryID, currentPage} = useAppSelector((state) => state.filter)
    const {items, status} = useAppSelector((state) => state.pizza)


    const getPizzas = () => {
        const order = sortType.sort.includes('-') ? 'asc' : 'desc'
        const sortBy = sortType.sort.replace('-', '')
        const category = categoryID > 0 ? `category=${categoryID}` : ''

        dispatch(fetchPizzas({order, sortBy, category, currentPage}))

    }

    useEffect(() => {
        getPizzas()
    }, [categoryID, sortType.sort, currentPage])


    const pizzasMap = items.filter((el: PizzasElementsType) => {
        if (searchInputValue !== null) {
            return el.title.toLowerCase().includes(searchInputValue.toLowerCase());
        }
    })
        .map((el: PizzasElementsType) => (<PizzaBlock key={el.id} {...el}/>))

    const onChangePage = (number: number) => {
        dispatch(setCurrentPage(number))
    }


    return (
        <>
            <div className="container">
                <div className="content__top">
                    <Categories categoryID={categoryID} setCategoryID={(i) => dispatch(setCategoryId(i))}/>
                    <Sort/>
                </div>

                {
                    status === Status.ERROR ? (<div className="content_error_info">
                            <h2>Picos dar nėra... Pabandykitė veliau
                                <span>😕</span>
                            </h2>
                        </div>)
                        :

                        (<>
                            <h2 className="content__title">Visos picos </h2>
                            <div className="content__items">
                                {status === Status.LOADING ? [...(new Array(6))].map((_, index) => <PizzaSkeleton
                                        key={index}/>)
                                    : pizzasMap}
                            </div>
                            <Pagination value={currentPage} onChangePage={onChangePage}/>
                        </>)}


            </div>

        </>
    );
};

export default HomePage;