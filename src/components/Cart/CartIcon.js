import React from "react";
import CartPng from "../../assets/cart.png";
import classes from "./CartIcon.module.css";
const CartIcon = () => {
    
   

    return (
        <div className={classes.cartIcon}>
            <img src={CartPng} alt="Cart Icon"  />
        </div>
    );
    };


export default CartIcon;