import React, { useState } from 'react'
import Slider from "react-slick";

const SingleProdutCard = () => {

    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    };

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 col-md-7">
                    {/*  */}

                    <div>
                        <Slider {...settings}
                            asNavFor={nav2}
                            ref={slider => (setNav1(slider))}
                        >
                            <div>
                                <img className="img-fluid" style={{ width: "100%" }} src="https://dummyimage.com/900x400/000/fff" alt="img" />
                            </div>
                            <div>
                                <img className="img-fluid" style={{ width: "100%" }} src="https://dummyimage.com/900x400/000/fff" alt="img" />
                            </div>
                            <div>
                                <img className="img-fluid" style={{ width: "100%" }} src="https://dummyimage.com/900x400/000/fff" alt="img" />
                            </div>
                            <div>
                                <img className="img-fluid" style={{ width: "100%" }} src="https://dummyimage.com/900x400/000/fff" alt="img" />
                            </div>
                            <div>
                                <img className="img-fluid" style={{ width: "100%" }} src="https://dummyimage.com/900x400/000/fff" alt="img" />
                            </div>
                            <div>
                                <img className="img-fluid" style={{ width: "100%" }} src="https://dummyimage.com/900x400/000/fff" alt="img" />
                            </div>
                        </Slider>

                        <Slider
                            asNavFor={nav1}
                            ref={slider => (setNav2(slider))}
                            slidesToShow={4}
                            swipeToSlide={true}
                            focusOnSelect={true}
                        >
                            <div>
                                <img className="img-fluid" style={{ width: "100%", padding: "0.2rem" }} src="https://dummyimage.com/900x400/000/fff" alt="img" />
                            </div>
                            <div>
                                <img className="img-fluid" style={{ width: "100%", padding: "0.2rem" }} src="https://dummyimage.com/900x400/000/fff" alt="img" />
                            </div>
                            <div>
                                <img className="img-fluid" style={{ width: "100%", padding: "0.2rem" }} src="https://dummyimage.com/900x400/000/fff" alt="img" />
                            </div>
                            <div>
                                <img className="img-fluid" style={{ width: "100%", padding: "0.2rem" }} src="https://dummyimage.com/900x400/000/fff" alt="img" />
                            </div>
                            <div>
                                <img className="img-fluid" style={{ width: "100%", padding: "0.2rem" }} src="https://dummyimage.com/900x400/000/fff" alt="img" />
                            </div>
                            <div>
                                <img className="img-fluid" style={{ width: "100%", padding: "0.2rem" }} src="https://dummyimage.com/900x400/000/fff" alt="img" />
                            </div>
                        </Slider>
                    </div>

                    {/*  */}
                </div>
                <div className="col-12 col-md-5">
                    <h1>Col 2</h1>
                </div>
            </div>
        </div>
    )
}

export default SingleProdutCard
