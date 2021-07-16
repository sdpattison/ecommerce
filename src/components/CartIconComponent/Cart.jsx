import React from 'react';
import styles from './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

const cartIcon = () =>{
    return(
        <div className="cart-icon">
            <ShoppingIcon />
            <span>0</span>
        </div>
    );
}