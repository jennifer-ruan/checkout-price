import React, { Component } from 'react';
import Items from './Items.js';
import 'materialize-css';
import "../App.css";
//import { connect } from 'react-redux'

class Main extends Component{
    handleClick = (id)=>{
        this.props.addToCart(id); 
    }
    render (){
        let itemList = Items.map(item =>{
            return (
                <div className="card" key={item.id}>
                    
                    <div className="container">
                    <img src={item.src} className = "Picture" alt={item.title}/>
                    <span to="/" className="btn-floating halfway-fab waves-effect waves-light blue"><i className="material-icons">add_shopping_cart</i></span>
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
                <h3 className="center">Groceries</h3>
                <div className="box">
                    {itemList}
                </div>
            </div>
        )
    }
}


const stateOfProps = (state)=>{
    return {
        items: state.items
         }
    }

export default Main
//export default connect(stateOfProps)(Main)