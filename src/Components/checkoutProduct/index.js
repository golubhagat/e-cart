import React from 'react'
import { useStateValue } from '../StateProvider'
import "./style.scss"

function CheckoutProduct({ id, title, image, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();

    console.log(id, title, image, price, rating);

    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            title: title,

            id: id,
        })
    }
    return (
        <div className="checkoutProduct">
            <img src={image} alt="" />
            <div className="checkoutProduct__info" >
                <p className="checkoutProduct__title">{title}</p>

                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price} </strong>
                </p>



                <div className="product__rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <span className="product__starRating">
                                <i class="fas fa-star" ></i>
                            </span>
                        ))}
                </div>

                <button onClick={removeFromBasket}>Remove from basket</button>

            </div>




        </div>
    )
}

export default CheckoutProduct;
