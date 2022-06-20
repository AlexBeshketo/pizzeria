import React, {useEffect, useState} from 'react';
import {Categories} from "../Categories/Categories";
import {Sort} from "../Sort/Sort";
import PizzaSkeleton from "../PizzaBlock/pizzaBlockSkeleton";
import {PizzaBlock} from "../PizzaBlock/PizzaBlock";
import {PizzasElementsType} from "../../App";
import Pagination from "../Pagination/Pagination";
import {useAppDispatch, useAppSelector} from "../../stateRedux/store";
import {setCategoryId, setCurrentPage} from "../../stateRedux/filterSlice";


const HomePage = () => {

    const dispatch = useAppDispatch()

    const searchInputValue = useAppSelector((state) => state.search.searchInputValue)
    const {sortType, categoryID, currentPage} = useAppSelector((state) => state.filter)


    const [items, setItems] = useState([])
    const [flagSkeleton, setFlagSkeleton] = useState(false)
    // const [currentPage, setCurrentPage] = useState(1)  //pagination


    type initialItems = [
        {
            id: number, imageUrl: string, title: string, types: number[],
            sizes: number[]; price: number; category: number; rating: number;
        }
    ]

    const order = sortType.sort.includes('-') ? 'asc' : 'desc'
    const sortBy = sortType.sort.replace('-', '')
    const category = categoryID > 0 ? `category=${categoryID}` : ''

    useEffect(() => {
        const url = `https://629138a9665ea71fe142c328.mockapi.io/items?page=${currentPage}&limit=8&${category}&sortBy=${sortBy}&order=${order}`
        setFlagSkeleton(true)

        fetch(url)
            .then((res) => {
                return res.json()
                    .then((arr => {
                        setItems(arr)
                        setFlagSkeleton(false)
                    }))
            })
    }, [categoryID, sortType, currentPage])

    //pagecount- nomer stranici tekushej

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
                <h2 className="content__title">Visos picos </h2>
                <div className="content__items">

                    {flagSkeleton ? [...(new Array(6))].map((_, index) => <PizzaSkeleton key={index}/>)
                        : pizzasMap}

                </div>
                <Pagination value={currentPage} onChangePage={onChangePage}/>
            </div>

        </>
    );
};

export default HomePage;