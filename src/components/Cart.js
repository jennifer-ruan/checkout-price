import React, { Component } from 'react';
import 'materialize-css';

class Cart extends Component {
    constructor(props){
        super(props);
        this.displayCart = this.displayCart.bind(this);
    }
    displayCart(){
        let cartList = []
        {this.props.items.map((value, id) => {
            if (value[0] > 0 && !cartList.includes(value[1].desc)){
                cartList.push([value[1].desc, value[0], id]);
            }
        })}
        return cartList
    }
    render(){
        let cartList = this.displayCart().map((item, index) => {
            return(
                <div className="cart" key={item.id}>
                    <h9> descr: {item[0]} </h9>
                    <h10> amount: {item[1]} </h10>
                    <h10> id: {item[2]} </h10>
                    <a className="waves-effect waves-light btn-small blue" onClick={() => {this.props.removeItem(index);}}><i className="material-icons">remove</i></a>
                    <a className="waves-effect waves-light btn-small red" onClick={() => {this.props.addItem(item[2]);}}><i className="material-icons">add</i></a>
                </div>
            )
            
        })
        return(
            <div>
                HI
                {cartList}
            </div>
        );
    }
}

export default Cart;