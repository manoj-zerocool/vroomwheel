import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import partners from "../../data/partners.json"

const settings = {
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    dotsClass: "d-flex slick-dots",
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    cssEase: 'linear',
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                arrows: true,
                slidesToShow: 5
            }
        }, {
            breakpoint: 768,
            settings: {
                arrows: false,
                dots: true,
                slidesToShow: 4
            }
        }, {
            breakpoint: 576,
            settings: {
                arrows: false,
                dots: true,
                slidesToShow: 3
            }
        }, {
            breakpoint: 400,
            settings: {
                arrows: false,
                dots: true,
                slidesToShow: 2
            }
        }
    ]
};

class Partners extends Component {
    render() {
        return (
            <div className="container">
                <div className="section-header text-center">
                    <div className="section-heading">
                        <h3 className="text-custom-black" style={{ color: "#2e054e" }}>Popular <span className="text-custom-blue">Brands</span></h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <Slider className="carousel" {...settings}>
                            {partners.map((item, i) => (
                                <div key={i} className="slide-item col-12">
                                    <div className="partner-box bx-wrapper animate-img">
                                        <Link to="#"> <img  loading="lazy" src={process.env.PUBLIC_URL + "/" + item.img} className="img-fluid image-fit" alt="img" /> </Link>
                                    </div>
                                    <div className="partner-box bx-wrapper animate-img mt-3">
                                        <Link to="#"> <img  loading="lazy" src={process.env.PUBLIC_URL + "/" + item.img} className="img-fluid image-fit" alt="img" /> </Link>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        );
    }
}

export default Partners;