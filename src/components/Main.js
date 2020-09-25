import React, { Component } from 'react';
import Items from './Items.js';
import Cart from './Cart.js';
import 'materialize-css';
import "../App.css";
//import { connect } from 'react-redux'

class Main extends Component{
    constructor(props){
        super(props);
        this.addToCart = this.addToCart.bind(this);
        this.toggleCart = this.toggleCart.bind(this);
        this.state = {
            items: [],
            numItems: 0,
            showCart: false,
        }
    }
    addToCart(id){
        this.setState({
            items: [...this.state.items, Items[id-1]],
            numItems: this.state.numItems+1,
        })
    }
    toggleCart(){
        this.setState({
            showCart: !this.state.showCart,
        })
    }
    render (){
        let itemList = Items.map(item =>{
            return (
                <div className="card" key={item.id}>
                    
                    <div className="container">
                    <img src={item.src} className = "Picture" alt={item.title}/>
                    <span to="/" className="btn-floating halfway-fab waves-effect waves-light blue-grey" onClick={() => this.addToCart(item.id)}><i className="material-icons">add_shopping_cart</i></span>
                    </div>


                    <div className="card-content">
                    <p><b>{item.desc}</b></p>
                    <p><b>Price: ${item.price}</b></p>
                    </div>
                </div>
            )
        })
        return(
            <div className="container">
                <div className="row">
                    <div className="col s9">
                        <h3 className="center">Groceries</h3>
                        <div className="box">
                            {itemList}
                        </div>
                    </div>

                    <div className="col s3">
                        <h4 className="center">Cart</h4>
                        <h5>{this.state.numItems} items in cart</h5>
                        <Cart items={this.state.items}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main
//export default connect(stateOfProps)(Main)