import React, { Component } from 'react';
import teamblock from '../../../data/authors.json'
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

const settings = {
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    dotsClass: "d-flex slick-dots",
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    cssEase: 'linear',
    responsive: [{
        breakpoint: 1200,
        settings: {
            arrows: true,
            slidesToShow: 3
        }
    }, {
        breakpoint: 992,
        settings: {
            arrows: true,
            slidesToShow: 2
        }
    }, {
        breakpoint: 768,
        settings: {
            arrows: false,
            dots: true,
            slidesToShow: 2
        }
    }, {
        breakpoint: 576,
        settings: {
            arrows: false,
            dots: true,
            slidesToShow: 1
        }
    }]
}

class Team extends Component {
    render() {
        return (
            <section className="section-padding parallax our-team">
                <div className="overlay overlay-bg-black" />
                <div className="container">
                    <div className="section-header text-center">
                        <div className="section-heading">
                            <h3 className="text-custom-white">Cars across City</h3>
                            <div className="section-description">
                                <p className="text-custom-white">Search cars by location</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <Slider className="team-slider arrow-layout-2 row" {...settings}>
                                {teamblock.map((item, i) => (
                                    <div key={i} className="slide-item col-12">
                                        <div className="team-sy-grid mb-xl-30" style={{ borderRadius: "10px" }}>
                                            <div className="img-wrap"> <img  loading="lazy" src={process.env.PUBLIC_URL + "/" + item.img} className="image-fit" alt={item.name} /> </div>
                                            <div className="caption"> 
                                                <h5 className="no-margin fw-600 mb-3" style={{ textAlign: "left"}}><Link to="#" className="text-custom-black" style={{ color: "#2e054e" }}>{item.name}</Link></h5>
                                                <p>{item.title}</p>
                                            </div>
                                            <div className="caption text-center" style={{ backgroundColor: "#dbdbdb" }}>
                                                <Link to="#"><h6 style={{ color: "#6300a3", marginBottom: "0" }}>View Cars</h6></Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Team;