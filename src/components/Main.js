import React, { Component } from 'react';
import ItemsView from './ItemsView.js';
import Cart from './Cart.js';
import 'materialize-css';
import "../App.css";

class Main extends Component{
    constructor(props){
        super(props);
        this.addToCart = this.addToCart.bind(this);
        this.deleteFromCart = this.deleteFromCart.bind(this);
        this.state = {
            items: []
        }
    }
    addToCart(id){
        //id is the id in Items.js
        var s = 0;
        {this.state.items.map((item, index) => {
            if (item[1] === id){
                const newItems = this.state.items;
                newItems[index][0]++;
                this.setState({
                    items: newItems,
                })
                s = 1;
            }
        })}
        if(!s){
            this.setState({
                items: [...this.state.items, [1, id]],
            })
        }
    }
    deleteFromCart(id){
        //id is the id in Items.js
        {this.state.items.map((item, index) => {
            if (item[1] === id){
                const newItems = this.state.items;
                if (item[0] == 1){
                    newItems.splice(index, 1);
                }
                else{
                    newItems[index][0]--;
                }
                this.setState({
                    items: newItems,
                })
            }
        })}
    }
    render (){
        return(
            <div className="container">
                <div className="row">
                    <div className="col s9">
                        <h3 className="center">Groceries</h3>
                        <div className="box">
                            <ItemsView addItem={this.addToCart}/>
                        </div>
                    </div>

                    <div className="col s3">
                        <h4 className="center">Cart</h4>
                            <Cart items={this.state.items} addCartItem={this.addToCart} deleteCartItem={this.deleteFromCart}/>
                    </div>
                </div>
            </div>
        )
    }
}


export default Main;
