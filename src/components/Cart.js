import React, { Component } from 'react';
import 'materialize-css';

class Cart extends Component {
    render(){
        return(
            <div className="container">
                {<ul>
                    {this.props.items.map((item) => <h6>{item.desc} ${item.price}</h6>)}
                </ul>}
            </div>
        )
    }
}

export default Cart;