import React, { Component } from 'react';
// import { getRecentPost, getDateInitials } from "../../../helper/blogHelper";
// import { getAuthor } from "../../../helper/helper";
// import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "./style.css"

const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    dotsClass: "d-flex slick-dots",
    autoplay: false,
    autoplaySpeed: 2000,
    speed: 500,
    cssEase: 'linear',
    responsive: [{
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
            slidesToShow: 1
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

class Blogs extends Component {
    render() {
        return (
            <section className="section-padding bg-light-white our_articles">
                <div className="container">
                    <div className="section-header text-center">
                        <div className="section-heading">
                            <h3 className="text-custom-black" style={{ color: "#2e054e" }}>Solid <span className="text-custom-blue">Rumble</span> State</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <Slider className="blog-slider arrow-layout-2 row" {...settings}>
                                <article className="col-12 post slide-item">
                                    <div className="post-wrapper bx-wrapper state_card">
                                        <div className="row">
                                            <div className="col-sm-4">
                                                <img  loading="lazy" src={process.env.PUBLIC_URL + "/assets/images/stats_1.png"} className="full-width" alt="image here" />
                                            </div>
                                            <div className="col-sm-8">
                                                <h4>48%</h4>
                                                <p>The number of Spinny customers that are referrals</p>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                                <article className="col-12 post slide-item">
                                    <div className="post-wrapper bx-wrapper state_card">
                                        <div className="row">
                                            <div className="col-sm-4">
                                                <img  loading="lazy" src={process.env.PUBLIC_URL + "/assets/images/stats_2.png"} className="full-width" alt="image here" />
                                            </div>
                                            <div className="col-sm-8">
                                                <h4>35%</h4>
                                                <p>People who've become customers after first drive</p>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                                <article className="col-12 post slide-item">
                                    <div className="post-wrapper bx-wrapper state_card">
                                        <div className="row">
                                            <div className="col-sm-4">
                                                <img  loading="lazy" src={process.env.PUBLIC_URL + "/assets/images/stats_3.png"} className="full-width" alt="image here" />
                                            </div>
                                            <div className="col-sm-8">
                                                <h4>70%</h4>
                                                <p>Our women customer quotient</p>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                                <article className="col-12 post slide-item">
                                    <div className="post-wrapper bx-wrapper state_card">
                                        <div className="row">
                                            <div className="col-sm-4">
                                                <img  loading="lazy" src={process.env.PUBLIC_URL + "/assets/images/stats_4.png"} className="full-width" alt="image here" />
                                            </div>
                                            <div className="col-sm-8">
                                                <h4>20%</h4>
                                                <p>Our average review rating on Social platforms</p>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Blogs;