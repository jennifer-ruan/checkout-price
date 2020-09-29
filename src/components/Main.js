import React, { Component } from 'react';
import ItemsView from './ItemsView.js';
import Cart from './Cart.js';
import 'materialize-css';
import "../App.css";

class Main extends Component{
    constructor(props){
        super(props);
        this.addToCart = this.addToCart.bind(this);
        //this.quant = this.quant.bind(this);
        //this.addFromCart = this.addFromCart.bind(this);
        //this.displayCart = this.displayCart.bind(this);
        this.deleteFromCart = this.deleteFromCart.bind(this);
        this.state = {
            items: []
        }
    }
    //quant(id, add){
        // if ((!add) && (this.state.items[id-1][0] > 0)){
        //     // this.setState({
        //     //     quantity: (this.state.quantity[id-1]-1).push(this.state.quantity.slice(id, this.state.quantity.length)),
        //     // })
            
        // }
        // else{
        //     this.setState({
        //         quantity: ([this.state.quantity[id-1]+1]).push(this.state.quantity.slice(id, this.state.quantity.length)),
        //     })
        // }
        // if(this.state.items[id-1] != null){
        //     if (!add && this.state.items[id-1][0] > 0){
        //         this.state.items[id-1][0] -= 1;
        //     }
        //     else if(add){
        //         this.state.items[id-1][0] += 1;
        //     }
        // }
        
    //}
    //addFromCart(index){
        // {this.state.items.map((value, ) => {
        //     if (value[1].desc === Items[id1-1]){
        //         this.state.items[id1-1][0] += 1;
        //         return null; 
        //         this.state.items[id-1][0] += 1;

        //     }
        // })}
        // {this.state.items.map((value, id1) => {
        //     if (value[1].index === index){
        //         this.state.items[id1][0] += 1;
        //         this.setState({
        //             numItems: this.state.numItems+1,
        //             total: this.state.total + Items[index].price,
                    
        //         })
        //     }
        // })}
        
        //     this.setState({
        //         items: [...this.state.items, [1, Items[index]]],
        //         numItems: this.state.numItems+1,
        //         total: this.state.total + Items[index].price,
        //     })
        
        
    //    var value = this.state.items[index];
    //    if(value!= null){
    //        value[0] +=1;
    //        this.setState({
    //            numItems: this.state.numItems+1,
    //            total: this.state.total + value[1].price,
    //        })
    //    }
    //    else{
    //        this.setState({
    //            numItems: this.state.numItems+200,
    //            total: this.state.total,
    //        })
    //    }
        
    //}

        /*displayCart(){
        let cartList = []
        {this.props.items.map((quantity, index) => {
            if (quantity > 0){
                cartList.push([Items[index].desc, quantity, Items[index].id]);
            }
        })}
        return cartList
    }*/
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
        
        /*this.setState({
            numItems: this.state.numItems-1,
            total: this.state.total - this.state.items[id][1].price,
        })
        if (this.state.items[id][0] == 1){
            this.state.items.splice(id, 1);
        }
        else if(this.state.items[id][0] > 1){  
            this.state.items[id][0] -= 1;
        }*/
    }
    render (){
                /*let cartList = this.displayCart().map((item, index) => {
            return(
                <div className="cart" key={item.id}>
                    <h9> descr: {item[0]} </h9>
                    <h10> amount: {item[1]} </h10>
                    <h10> id: {item[2]} </h10>
                    <a className="waves-effect waves-light btn-small blue" onClick={() => {this.props.deleteCartItem(item[2]);}}><i className="material-icons">remove</i></a>
                    <a className="waves-effect waves-light btn-small red" onClick={() => {this.props.addCartItem(item[2]);}}><i className="material-icons">add</i></a>
                </div>
            )
            
        })*/
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
