import React, { Component } from 'react';
import Items from './Items.js';
import 'materialize-css';

class Cart extends Component {
    constructor(props){
        super(props);
    }
    countItems(){
        var total = 0;
        for (var i = 0; i < this.props.items.length; i++){
            total += this.props.items[i][0];
        }
        return total;
    }
    calculateTotal(){
        var total = 0;
        for (var i = 0; i < this.props.items.length; i++){
            for (var j = 0; j < Items.length; j++){
                if (Items[j].id == this.props.items[i][1]){
                    total += Items[j].price * this.props.items[i][0];
                }
            }
        }
        return total;
    }
    render(){
        let numItems = this.countItems();
        let total = this.calculateTotal();
        let cartList = this.props.items.map((item, key) => {

            var desc = '';
            
            for (var i = 0; i < Items.length; i++){
                if (Items[i].id == item[1]){
                    desc = Items[i].desc;
                }
            }

            return(
                <div className="cart" key={key}>
                <h9> descr: {desc} </h9>
                <h10> amount: {item[0]} </h10>
                <h10> id: {item[1]} </h10>
                <a className="waves-effect waves-light btn-small blue" onClick={() => {this.props.deleteCartItem(item[1]);}}><i className="material-icons">remove</i></a>
                <a className="waves-effect waves-light btn-small red" onClick={() => {this.props.addCartItem(item[1]);}}><i className="material-icons">add</i></a>
            </div>
            );
        })
        return(
            <div>
                <h5>{numItems} items in cart</h5>
                {cartList}
                <h6>Total: ${total}</h6>
                <h7>After tax: ${Math.round((total * 1.13 + Number.EPSILON) * 100) / 100}</h7>
            </div>
        );
    }
}

export default Cart;