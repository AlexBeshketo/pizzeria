import React, {ChangeEvent, useRef} from 'react';
import search from './Search.module.css'
import SearchIcon from '../../assets/img/Icon_Search.svg'
import CloseIcon from '../../assets/img/CloseIcon.svg'
import {useAppDispatch, useAppSelector} from "../../stateRedux/store";
import {setSearchInputValue} from "../../stateRedux/searchSlice";


export const Search = () => {

    const searchInputValue = useAppSelector((state) => state.search.searchInputValue)
    const dispatch = useAppDispatch()


    const inputValue = useRef<any>()


    // useEffect(() => {
    //     setTimeout(() => {
    //
    //     }, 250)
    // }, [])

    const onClickImg = () => {
        dispatch(setSearchInputValue(''))
        inputValue.current.focus()
    }
    const onChangeInputValue = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearchInputValue(event.target.value))
        console.log(event.target.value)
    }


    return (
        <div className={search.root}>
            <input className={search.input} onChange={onChangeInputValue}
                   ref={inputValue}
                   value={searchInputValue} placeholder='Picos pavadinimas' type="text"/>
            <img className={search.searchIcon} src={SearchIcon} alt=""/>
            {searchInputValue && <img onClick={onClickImg} alt='close' className={search.closeIcon} src={CloseIcon}/>}
        </div>
    );

}
