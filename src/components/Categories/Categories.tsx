import React, {useState} from "react";

export const Categories = () => {
    let [state, setState] = useState(0)

    const categories = ['Su mėsa', 'Vegetariška', 'Grill', 'Aštrios', 'Calcone']
    return (
        <div className="categories">
            <ul>
                {categories.map((el , i) => (
                    <li key={i} onClick={()=> {setState(i)}} className={state=== i? "active" : ''}>{el}</li>
                        ) )}

            </ul>

        </div>
    );
};