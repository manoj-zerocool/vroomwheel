import React, { Component } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import "./style.css";
import * as CONSTANT from '../../../Constent';
import $ from "jquery";

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
    constructor() {
        super();
        this.state = {
            mediacoverage: [],
        }
    }

    componentDidMount() {
        const d = new Date();
        let time = d.getTime();

        fetch(`${CONSTANT.BaseUrl}/services/media_coverage_carlist?time=${time}`, {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((response) => {
                this.setState({ mediacoverage: response.result })

                $(".mediacovrage_hwe").hide();
            })
            .catch((error) => {
            });
    }

    render() {
        const container_style = {
            padding: "0rem 3rem"
        };

        return (
            <section className="section-padding bg-light-white our_articles pt-5" style={{ paddingBottom: "0px" }}>
                <div className="container-fluid" style={container_style}>
                    <div className="section-header text-center">
                        <div className="section-heading">
                            <h3 className="text-custom-black" style={{ color: "#2e054e" }}>Popular <span className="text-custom-blue">Cars</span></h3>
                        </div>
                    </div>
                    <div className="section-header text-center mediacovrage_hwe">
                        <div className="section-heading pb-0">
                            <div class="spinner-grow text-primary" role="status">
                                <span class="sr-only">Loading...</span>
                            </div> &nbsp;
                            <div class="spinner-grow text-success" role="status">
                                <span class="sr-only">Loading...</span>
                            </div> &nbsp;
                            <div class="spinner-grow text-danger" role="status">
                                <span class="sr-only">Loading...</span>
                            </div> &nbsp;
                            <div class="spinner-grow text-warning" role="status">
                                <span class="sr-only">Loading...</span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <Slider className="blog-slider arrow-layout-2 row" {...settings}>
                                {this.state.mediacoverage.map((Car) => (
                                    <article className="col-12 post slide-item">
                                        <div className="post-wrapper bx-wrapper blog_component">
                                            <div className="car-grid mb-xl-30 category" style={{ boxShadow: "0 0 1px grey" }}>
                                                <div className="car-grid-wrapper car-grid bx-wrapper rounded">
                                                <Link  target={'_blank'} to={"/car-details/used-car-" + Car.make_path + "-in-" + Car.name_path +"?car=" + Car.index}>
                                                        <div className="image-sec animate-img">
                                                            <img  loading="lazy" src={Car.images} className="full-width" />
                                                        </div>
                                                    </Link>
                                                    <div className="car-grid-caption padding-10 bg-custom-white p-relative">
                                                        <h4 className="col-md-12 title fs-16 pl-1 pr-1 mb-2">
                                                        <Link  target={'_blank'} to={"/car-details/used-car-" + Car.make_path + "-in-" + Car.name_path +"?car=" + Car.index}><span>{Car.name}</span><small className="mt-2 mb-2" style={{ fontSize: "13px", fontWeight: "500" }}>{new Intl.NumberFormat('US').format(Car.kmdriven)} KM . {Car.fuil_type} . {Car.year}</small><h5>Rs.{new Intl.NumberFormat('US').format(Car.price)}</h5></Link>
                                                        </h4>
                                                        <div style={{ borderTop: "1px solid #dbdbdb", padding: "0.5rem" }}>
                                                        <a href={Car.carurl} target="_blank" ><span className="car_footer mb-0 fw-1000 mt-2" style={{ color: "#6300a3" }}><h6  className="mt-2" style={{ color: "#6300a3" }}>Check this on {Car.source}</h6></span></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Blogs;