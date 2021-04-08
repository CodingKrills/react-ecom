import React from 'react'
import Slider from "react-slick";

const Carosel = () => {

    const data = [
        {
            id: 1,
            img: "https://jooinn.com/images/stylish-model-1.jpg"
        },
        {
            id: 2,
            img: "https://images6.alphacoders.com/361/361022.jpg"
        },
        {
            id: 3,
            img: "https://img.freepik.com/free-photo/fashion-beauty-concept-profile-view-stylish-woman-black-evening-dress-makeup-earrings-looking-left-sensual-standing-white-background_1258-41292.jpg?size=626&ext=jpg&ga=GA1.2.855662366.1617148800"
        }
    ]

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    };


    return (
        <>
            <Slider {...settings}>
                {data.map((el) => (
                    <div className="" key={el.id}>
                        <img
                            className="img-fluid"
                            style={{ height: "25em", width: "100%" }}
                            src={el.img}
                            alt={el.img}
                        />
                    </div>
                ))}
            </Slider>
        </>
    )
}

export default Carosel
