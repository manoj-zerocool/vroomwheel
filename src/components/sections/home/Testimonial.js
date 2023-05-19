import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import $ from "jquery";

import Testimonial from "../../../data/Testimonial.json"

const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    dotsClass: "d-flex slick-dots",
    arrowsClass: "d-flex slick-arrows slick-arrows_hwe",
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    cssEase: 'linear',
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                
                arrows: true,
                slidesToShow: 3
            }
        }, {
            breakpoint: 768,
            settings: {
                arrows: false,
                dots: true,
                slidesToShow: 2
            }
        }, 
        {
            breakpoint: 576,
            settings: {
                arrows: false,
                dots: true,
                slidesToShow:1
            }
        }, 
        // {
        //     breakpoint: 400,
        //     settings: {
        //         arrows: false,
        //         dots: true,
        //         slidesToShow: 1
        //     }
        // }
    ]
};

class Partners extends Component {
    componentDidMount() {
       $('.slick-arrow.slick-prev').html('<i class="fas fa-angle-left"></i>');
       $('.slick-arrow.slick-next').html('<i class="fas fa-angle-right"></i>');
    }
    render() {
        return (
            <div className="container">
                <div className="section-header text-center">
                    <div className="section-heading">
                        <h3 className="text-custom-black" style={{ color: "#2e054e" }}>Testimonials</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <Slider className="carousel" {...settings}>
                            {Testimonial.map((item, i) => (
                                <div key={i} className="slide-item col-12">
                                    <div className="partner-box bx-wrapper animate-img text-center" style={{ color: "#2e054e", borderRadius: "10px", padding: "1rem" }}>
                                        <h5><i class="fa fa-quote-left" style={{ color: "#2e054e" }}></i></h5>
                                        <p>{item.Text}</p>
                                        <h6 style={{ color: "#2e054e" }}>{item.Name}</h6>
                                    </div>
                                    {/* <div className="partner-box bx-wrapper animate-img mt-3">
                                        <Link to="#"> <img  loading="lazy" src={process.env.PUBLIC_URL + "/" + item.img} className="img-fluid image-fit" alt="img" /> </Link>
                                    </div> */}
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