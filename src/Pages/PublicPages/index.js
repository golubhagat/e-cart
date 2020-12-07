import React, { Component } from 'react';
import CheckoutProduct from "../../Components/checkoutProduct"

import { useStateValue } from "../../Components/StateProvider";
import "./checkout.scss"

function Checkout() {
    const [{ basket }] = useStateValue();
    return (
        <div className="checkout">



            {basket?.length === 0 ? (
                <div>
                    <h2>Your Shopping Basket is empty</h2>
                    <p>You have no items in your basket.To add one or more "Add to basket" next to the item.</p>
                </div>
            ) : (
                    <div className="checkout__title">
                        <h2>Your Shopping Basket</h2>


                        {basket?.map((item) => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={
                                    item.rating
                                }
                            />))}



                    </div>
                )}



        </div>
    );
}
export default Checkout;