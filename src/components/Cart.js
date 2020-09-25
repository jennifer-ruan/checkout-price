import React, { Component } from 'react';
import 'materialize-css';

class Cart extends Component {
    render(){
        return(
            <div className="container">
                {<ul>
                    {this.props.items.map((item) => <li>{item.title}</li>)}
                </ul>}
            </div>
        )
    }
}

export default Cart;