import React from 'react'
import TinySlider from "tiny-slider-react";

import './Carosel.css'

const Carosel = () => {

    const data = [
        {
            id: 1,
            img: "https://i.pinimg.com/originals/53/aa/f6/53aaf6011bba6d6bb0499e1eef12c26d.jpg"
        },
        {
            id: 2,
            img: "https://i.pinimg.com/originals/53/aa/f6/53aaf6011bba6d6bb0499e1eef12c26d.jpg"
        },
        {
            id: 3,
            img: "https://i.pinimg.com/originals/53/aa/f6/53aaf6011bba6d6bb0499e1eef12c26d.jpg"
        }
    ]

    const settings = {
        lazyload: true,
        nav: true,
        mouseDrag: true,
        autoWidth: true,
        navPosition: "bottom",
        controls: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayButtonOutput: false,
        gutter: 0,
        responsive: {
            640: {
                items: 2
            },
            700: {
                items: 2
            },
            900: {
                items: 1
            }
        }
    };


    return (
        <>
            <TinySlider settings={settings}>
                {data.map((el) => (
                    <div key={el.id}>
                        <img
                            className="img-fluid tns-lazy-img img-height-50"
                            src={el.img}
                            data-src={el.img}
                            alt={el.img}
                        />
                    </div>
                ))}
            </TinySlider>
        </>
    )
}

export default Carosel
