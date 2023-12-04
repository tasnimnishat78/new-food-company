import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {


    let totalPrice = 0;
    let totalShipping = 0;
    for(const product of cart){
        totalPrice = totalPrice + product.price;
        totalShipping = totalShipping + product.shipping;
    }

    const tax = totalPrice*7/100;

    const grandTotal = totalPrice + totalShipping + tax;

    return (
        <div className='cart'>
            <h4>Order Summery</h4>
                <p>Selected Items: {cart.length}</p>
                <p>Total Price: ${totalPrice}</p>
                <p>Total Shipping Charge: ${totalShipping}</p>
                <p>Tax: ${tax.toFixed(2)} </p>
                <h4>Grand Total: ${grandTotal} </h4>

                <button className='clear-cart'>Clear Cart</button>
                <button className='checkout'>Review Order</button>
        </div>
    );
};

export default Cart;