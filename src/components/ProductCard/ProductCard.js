import React from 'react'
import Slider from "react-slick";

import './ProductCard.css'

const ProductCard = () => {

    const data = [
        {
            id: 1,
            img: "http://bestjquery.com/tutorial/product-grid/demo3/images/img-1.jpeg"
        },
        {
            id: 2,
            img: "http://bestjquery.com/tutorial/product-grid/demo3/images/img-2.jpeg"
        },
        {
            id: 3,
            img: "http://bestjquery.com/tutorial/product-grid/demo3/images/img-3.jpeg"
        },
        {
            id: 4,
            img: "http://bestjquery.com/tutorial/product-grid/demo3/images/img-4.jpeg"
        },
        {
            id: 5,
            img: "http://bestjquery.com/tutorial/product-grid/demo3/images/img-1.jpeg"
        },
        {
            id: 6,
            img: "http://bestjquery.com/tutorial/product-grid/demo3/images/img-2.jpeg"
        },
        {
            id: 7,
            img: "http://bestjquery.com/tutorial/product-grid/demo3/images/img-3.jpeg"
        },
        {
            id: 8,
            img: "http://bestjquery.com/tutorial/product-grid/demo3/images/img-4.jpeg"
        }
    ]

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows: false,
        items: 4,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };



    return (

        <div className="container-fluid">
            <Slider {...settings}>
                {data.map((el) => (
                    <div key={el.id}>
                        <div className="product-grid2 p-md-4 p-sm-2">
                            <div className="product-image2">
                                <img
                                    className="img-fluid"
                                    src={el.img}
                                    alt={el.img}
                                />
                                <ul className="social">
                                    <li>
                                        <a href="/" data-tip="Quick View"
                                        ><i className="fa fa-eye"></i
                                        ></a>
                                    </li>
                                    <li>
                                        <a href="/" data-tip="Add to Wishlist"
                                        ><i className="fa fa-shopping-bag"></i
                                        ></a>
                                    </li>
                                    <li>
                                        <a href="/" data-tip="Add to Cart"
                                        ><i className="fa fa-shopping-cart"></i
                                        ></a>
                                    </li>
                                </ul>
                                <a className="add-to-cart" href="/">Add to cart</a>
                                <div className="product-content">
                                    <h3 className="title"><a href="/">Women's Designer Top</a></h3>
                                    <span className="price">$599.99</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div >
    )
}

export default ProductCard
