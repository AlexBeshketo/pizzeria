import React, {useState} from "react";

export type CategoryId= {
    categoryID: number,
    setCategoryID: (id:number)=> void
    }

export const Categories = ({categoryID, setCategoryID, ...props}: CategoryId) => {


    const categories = ['Visos' ,'Su mėsa', 'Vegetariška', 'Grill', 'Aštrios', 'Calcone']

    const onClickCategory =(id:number)=> {
        setCategoryID(id)
    }

    return (
        <div className="categories">
            <ul>
                {categories.map((categoryName , i)   => (
                    <li key={i} onClick={()=> onClickCategory(i)} className={categoryID=== i? "active" : ''}>{categoryName}</li>
                        ) )}

            </ul>

        </div>
    );
};