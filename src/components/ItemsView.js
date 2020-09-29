import React, { Component } from 'react';
import Items from './Items.js';
import 'materialize-css';

class ItemsView extends Component{
    constructor(props){
        super(props);
    }
    render(){
        let itemList = Items.map(item =>{
            return (
                <div className="card" key={item.id}>
                    
                    <div className="container">
                    <img src={item.src} className = "Picture" alt={item.title}/>
                    <span to="/" className="btn-floating halfway-fab waves-effect waves-light blue-grey" onClick={() => this.props.addItem(item.id)}><i className="material-icons">add_shopping_cart</i></span>
                    </div>


                    <div className="card-content">
                    <p><b>{item.desc}</b></p>
                    <p><b>Price: ${item.price}</b></p>
                    </div>
                </div>
            )
        })
        return(
            <div className="box">
                {itemList}
            </div>
        );
    }
}

export default ItemsView;