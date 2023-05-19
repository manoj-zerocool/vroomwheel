import React, { Component } from 'react';
// import { getRecentPost, getDateInitials } from "../../../helper/blogHelper";
// import { getAuthor } from "../../../helper/helper";
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import "./style.css";

const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    dotsClass: "d-flex slick-dots",
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 5000,
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

class Story extends Component {
    render() {
        return (
            <section className="section-padding bg-light-white our_articles">
                <div className="container">
                    <div className="section-header text-center">
                        <div className="section-heading">
                            <h3 className="text-custom-black" style={{ color: "#2e054e" }}>Rumble <span className="text-custom-blue">Love Stories</span></h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <Slider className="blog-slider arrow-layout-2 row" {...settings}>
                                <article className="col-12 post slide-item">
                                    <div className="post-wrapper bx-wrapper post_story">
                                        <div className="post-img animate-img rounded"> <Link to="#">
                                            <img  loading="lazy" src={process.env.PUBLIC_URL + "/assets/images/story/1.jpg"} className="full-width" alt="image here" />
                                        </Link>
                                        </div>
                                        <div className="blog-meta padding-20 bg-custom-white p-relative">
                                            <div className="post-heading post_storyp">
                                                <p style={{ marginBottom: "0px" }}>We saw the Baleno listed on Rumble.com and immediately booked the test drive. we got an awesome delivery experience.</p>
                                            </div>
                                        </div>
                                        <div className="post-footer">
                                            <Link to={"#"} className="btn-first">Srinath Adepu</Link>
                                            <small>Jaipur</small>
                                        </div>
                                    </div>
                                </article>
                                <article className="col-12 post slide-item">
                                    <div className="post-wrapper bx-wrapper post_story">
                                        <div className="post-img animate-img rounded"> <Link to="#">
                                            <img  loading="lazy" src={process.env.PUBLIC_URL + "/assets/images/story/2.jpg"} className="full-width" alt="image here" />
                                        </Link>
                                        </div>
                                        <div className="blog-meta padding-20 bg-custom-white p-relative">
                                            <div className="post-heading">
                                                <p style={{ marginBottom: "0px" }}>I took home test drives of two cars before falling in love with the car, which was delivered at our doorstep.</p>
                                            </div>
                                        </div>
                                        <div className="post-footer">
                                            <Link to={"#"} className="btn-first">Anuj and Anushree Kapur</Link>
                                            <small>Delhi</small>
                                        </div>
                                    </div>
                                </article>
                                <article className="col-12 post slide-item">
                                    <div className="post-wrapper bx-wrapper post_story">
                                        <div className="post-img animate-img rounded"> <Link to="#">
                                            <img  loading="lazy" src={process.env.PUBLIC_URL + "/assets/images/story/3.jpg"} className="full-width" alt="image here" />
                                        </Link>
                                        </div>
                                        <div className="blog-meta padding-20 bg-custom-white p-relative">
                                            <div className="post-heading">
                                                <p style={{ marginBottom: "0px" }}>I chose Rumble® for my first car. It took half an hour from booking to a home test drive. my car was with me with complete documentation.</p>
                                            </div>
                                        </div>
                                        <div className="post-footer">
                                            <Link to={"#"} className="btn-first">Susheel Kumar</Link>
                                            <small>Gurgaon</small>
                                        </div>
                                    </div>
                                </article>
                                <article className="col-12 post slide-item">
                                    <div className="post-wrapper bx-wrapper post_story">
                                        <div className="post-img animate-img rounded"> <Link to="#">
                                            <img  loading="lazy" src={process.env.PUBLIC_URL + "/assets/images/story/4.jpg"} className="full-width" alt="image here" />
                                        </Link>
                                        </div>
                                        <div className="blog-meta padding-20 bg-custom-white p-relative">
                                            <div className="post-heading">
                                                <p style={{ marginBottom: "0px" }}>Our Jeep Compass has brought us closer as a family, And Monday doesn't seem so daunting anymore.</p>
                                            </div>
                                        </div>
                                        <div className="post-footer">
                                            <Link to={"#"} className="btn-first">Arun and Neha</Link>
                                            <small>Hyderabad</small>
                                        </div>
                                    </div>
                                </article>
                                <article className="col-12 post slide-item">
                                    <div className="post-wrapper bx-wrapper post_story">
                                        <div className="post-img animate-img rounded"> <Link to="#">
                                            <img  loading="lazy" src={process.env.PUBLIC_URL + "/assets/images/story/5.jpg"} className="full-width" alt="image here" />
                                        </Link>
                                        </div>
                                        <div className="blog-meta padding-20 bg-custom-white p-relative">
                                            <div className="post-heading">
                                                <p style={{ marginBottom: "0px" }}>I wanted to surprise Neha with something big in her birthday month, Happy to update, she's very happy.</p>
                                            </div>
                                        </div>
                                        <div className="post-footer">
                                            <Link to={"#"} className="btn-first">Chandni and Vinit Udasi</Link>
                                            <small>Delhi</small>
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

export default Story;