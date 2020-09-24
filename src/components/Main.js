import React, { Component } from 'react';
import Items from '../Items'
import 'materialize-css';
import "../App.css";
//import { connect } from 'react-redux'

//const itemList = 
const home = [
        {
            id: 1,
            alt: "meat",
            title: "meat",
            desc: "ground beef",
            price: "20.0",
            src: require("../images/ground_beef.jpg"),
        },
        {
            id: 2,
            alt: "veggie",
            title: "veggie",
            desc: "lettuce",
            price: "10.0",
            src: require("../images/lettuce.jpg"),
        },
        {
            id: 3,
            alt: "seafood",
            title: "seafood",
            desc: "squid",
            price: "30.0",
            src: require("../images/squid.jpg"),

        }
]

class Main extends Component{
    handleClick = (id)=>{
        this.props.addToCart(id); 
    }
    render (){
        let itemList = home.map((_objects, i, id)=>{
            return (
                <div className="card" key={home[i].id}>
                    
                    <div className="container">
                    <img src={home[i].src} className = "Picture" alt={home[i].title}/>
                    <span to="/" className="btn-floating halfway-fab waves-effect waves-light blue"><i className="material-icons">add_shopping_cart</i></span>
                    </div>


                    <div className="card-content">
                    <p><b>{home[i].desc}</b></p>
                    <p><b>Price: ${home.price}</b></p>
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