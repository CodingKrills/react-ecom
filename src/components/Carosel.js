import React from 'react'
import TinySlider from "tiny-slider-react";

import './Carosel.css'

const Carosel = () => {

    const data = [
        {
            id: 1,
            img: "https://dummyimage.com/1200x400/000/fff"
        },
        {
            id: 2,
            img: "https://dummyimage.com/1200x400/000/fff"
        },
        {
            id: 3,
            img: "https://dummyimage.com/1200x400/000/fff"
        }
    ]

    const settings = {
        lazyload: true,
        nav: true,
        mouseDrag: true,
        autoWidth: true,
        navPosition: "bottom",
        controls: true,
    };


    return (
        <>
            <TinySlider settings={settings}>
                {data.map((el) => (
                    <div key={el.id}>
                        <img
                            className="img-fluid tns-lazy-img"
                            src={el.img}
                            data-src={el.img}
                            alt="asd"
                        />
                    </div>
                ))}
            </TinySlider>
        </>
    )
}

export default Carosel
