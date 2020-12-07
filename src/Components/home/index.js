import React from "react";
import Product from "../Product";
import "./style.scss"

function Home() {
    return (
        <div className="home">
            <img className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Boson/Sid/CCBP/Nov/BAU/Credit-Card-Bill_1500x600_without._CB415288872_.jpg"
                alt="" />


            <div className="home__row">

                <Product
                    id="1233"
                    title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                    image="https://m.media-amazon.com/images/I/41R+VaxAEbL._AC_SY200_.jpg"
                    price="18"
                    rating={5}
                />

                <Product
                    id="1234"
                    title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                    image="https://m.media-amazon.com/images/I/41KL+iXUXCL._AC_SY200_.jpg"
                    price="18"
                    rating={5}
                />

            </div>
            <div className="home__row">


                <Product
                    id="1235"
                    title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                    image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
                    price="18"
                    rating={5}
                />

                <Product
                    id="1236"
                    title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                    image="https://m.media-amazon.com/images/I/41mkvuv53TL._AC_SY200_.jpg"
                    price="18"
                    rating={5}
                />


                <Product
                    id="1237"
                    title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                    image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg"
                    price="18"
                    rating={5}
                />
            </div>

            <div className="home__row">


                <Product
                    id="1"
                    title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                    image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/HolidayDeals/Desktop/Fuji_Dash_HolidayDeals_1x._SY304_CB414581989_.jpg"
                    price="18"
                    rating={5}
                />
            </div>


        </div>



    )



}

export default Home;