import React from 'react';
import cartEmpty from '../../assets/img/empty-cart.png'
import {Link} from "react-router-dom";

const EmptyCart = () => {
    return (
        <>
            <div className="cart cart--empty">
                <h2>Tuščias krepšėlis
                    <span>😕</span>
                </h2>
                <p>Greičiausiai, jus pamiršote užsisakyti<br/> Pasirinkite norima maista</p>
                <img src={cartEmpty} alt='empty'/>
                <Link to="/" className="button button--black"><span>Grižti atgal</span></Link>

            </div>
        </>
    );
};

export default EmptyCart;