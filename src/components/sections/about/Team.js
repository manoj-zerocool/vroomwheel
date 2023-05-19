import React, { Component } from 'react';
import teamblock from '../../../data/authors.json'
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

const settings = {
    infinite: true,
    slidesToShow: 4,
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
                            <h3 className="text-custom-white">Our <span className="text-custom-blue">Team</span></h3>
                            <div className="section-description">
                                <p className="text-custom-white">Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <Slider className="team-slider arrow-layout-2 row" {...settings}>
                                {teamblock.map((item, i) => (
                                    <div key={i} className="slide-item col-12">
                                        <div className="team-sy-grid mb-xl-30">
                                            <div className="img-wrap"> <img  loading="lazy" src={process.env.PUBLIC_URL + "/" + item.img} className="image-fit" alt={item.name} /> </div>
                                            <div className="caption">
                                                <h5 className="no-margin fw-600"><Link to="#" className="text-custom-black">{item.name}</Link>
                                                </h5>
                                            </div>
                                            <div className="hover-wrap">
                                                <div className="text-wrap">
                                                    <h5 className="fw-600"><Link to="#" className="text-custom-black">{item.name}</Link></h5>
                                                    <p className="text-light-white mb-xl-20">{item.shortdesc}</p>
                                                    <Link to="#" className="btn-second btn-small">Read More</Link>
                                                </div>
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