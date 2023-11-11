// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Cart.css'

const Cart = () => {
    return (
        <div>
            <div className="cart-container">
                <h3 className='ramaining-hr'>Credit Hour Remaining 7 hr</h3>
                <h2>Course Name</h2>
                <ol>
                    <li>Introduction to c++</li>
                </ol>
                <h3>Total Credit Hour: 15</h3>
                <h3>Total Price: 5000 USD</h3>                
            </div>
        </div>
    );
};

export default Cart;