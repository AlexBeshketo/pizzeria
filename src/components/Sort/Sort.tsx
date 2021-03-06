import React, {useRef, useState} from "react";

import top from '../../assets/img/topIcon.svg'
import down from '../../assets/img/downIcon.svg'
import {useAppDispatch, useAppSelector} from "../../stateRedux/store";
import {setSort} from "../../stateRedux/filterSlice";

export type sortsType = { name: string, sort: string, type: string }[]
export type sortType = { name: string, sort: string, type: string }


export type SortType = {
    sortType: { name: string, sort: string, type: string }
    setSortType: (i: any) => void
}


export const Sort = () => {

    const sortType = useAppSelector((state) => state.filter.sortType)
    const dispatch = useAppDispatch()
    const sortRef = useRef<HTMLHeadingElement>(null)

    const [isVisible, setIsVisible] = useState(false)

    const sorts: sortsType = [
        {name: 'populiarumą', sort: 'rating', type: 'up'},
        {name: 'populiarumą', sort: '-rating', type: 'down'},
        {name: 'kainą', sort: 'price', type: 'up'},
        {name: 'kainą', sort: '-price', type: 'down'},
        {name: 'abėcėlę', sort: 'title', type: 'up'},
        {name: 'abėcėlę', sort: '-title', type: 'down'}
    ]

    React.useEffect(() => {

        const handleClickOutside = (event: any) => {
            if (!event.path.includes(sortRef.current)) {
                setIsVisible(false)
                console.log('click outside')
            }
        }

        document.body.addEventListener('click', handleClickOutside)
        return () => {
            console.log('Sort unmount')
            document.body.removeEventListener('click', handleClickOutside)
        }
    },[])




            const onClickSelectsList = (i: sortType) => {
                dispatch(setSort(i))
                setIsVisible(false)
            }

            return (
                <div ref={sortRef} className="sort">
                    <div className="sort__label">
                        <svg
                            width="10"
                            height="6"
                            viewBox="0 0 10 6"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                                fill="#2C2C2C"
                            />
                        </svg>
                        <b>Rūšiuoti pagal:</b>
                        <span onClick={() => {
                            setIsVisible(!isVisible)
                        }}>{sortType.name}</span>
                    </div>
                    {isVisible && (
                        <div className="sort__popup">

                            <ul>
                                {sorts.map((obj, i) => (
                                    <li key={i} onClick={() => onClickSelectsList(obj)}
                                        className={sortType.sort === obj.sort ? "active" : ''}>{obj.name}
                                        <span><img alt='photo' className='icon' src={obj.type === 'up' ? top : down}/> </span>
                                    </li>
                                ))}
                            </ul>

                            <img src="" alt=""/>
                        </div>
                    )}


                </div>
            );
        };