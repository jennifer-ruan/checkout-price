import React from 'react';
import 'materialize-css';
const Navbar = ()=>{
    
    return(
        
        <nav>
            <div class="nav-wrapper">
                <a href="#" class="brand-logo">Shop!</a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><a href="https://github.com/jennifer-ruan/checkout-price"><i className="material-icons">person</i></a></li>
                </ul>
            </div>
         </nav> 
    )
}

export default Navbar;