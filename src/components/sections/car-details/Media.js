import React, { Component } from 'react';
import Slider from 'react-slick';
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

class Media extends Component {
    constructor(props) {
        super(props);
        this.state = {
            suggested_car: [],
        }
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        const search = window.location.search;
        const car_id = new URLSearchParams(search).get('car_id');
        const make_id = new URLSearchParams(search).get('make_id');
        const modal_id = new URLSearchParams(search).get('modal_id');

        fetch(`${CONSTANT.BaseUrl}/services/get_relevant_car_modals?car_id=${car_id}&make_id=${make_id}&modal_id=${modal_id}`, {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((response) => {
                this.setState({ suggested_car: response.result });

                $(".spinner_hwe").hide();
            })
            .catch((error) => {
            });

    }

    handleClick(car_id, make_id, modal_id) {
        window.location.replace(`/car-details?car_id=${car_id}&make_id=${make_id}&modal_id=${modal_id}`);
    }

    render() {

        const container_style = {
            padding: "0rem 3rem"
        };

        return (
            <section className="section-padding bg-light-white our_articles pt-5 pb-0">
                <div className="container-fluid" style={container_style}>
                    <div className="section-header text-center">
                        <div className="section-heading pb-0">
                            <h3 className="text-custom-black" style={{ color: "#2e054e" }}>Similar <span className="text-custom-blue">Cars </span></h3>
                        </div>
                    </div>
                    <div className="section-header text-center spinner_hwe">
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
                                {this.state.suggested_car.map(Car =>
                                    <div className="col-12">
                                        <div className="car-grid mb-xl-30 category" style={{ boxShadow: "0 0 10px #dbdbdb" }}>
                                            <div className="car-grid-wrapper car-grid bx-wrapper rounded">
                                                <div className="image-sec animate-img carurl" onClick={() => this.handleClick(Car.index, Car.make_id, Car.modal_id)}>
                                                    <img  loading="lazy" src={Car.images} className="full-width" />
                                                </div>
                                                <div className="car-grid-caption padding-10 bg-custom-white p-relative">
                                                    <h4 className="col-md-12 title fs-16 pl-1 pr-1 mb-2 carurl" onClick={() => this.handleClick(Car.index, Car.make_id, Car.modal_id)}>
                                                        <span>{Car.name}</span><small className="mt-2 mb-2" style={{ fontSize: "13px", fontWeight: "500" }}>{new Intl.NumberFormat('US').format(Car.kmdriven)} KM . {Car.fuil_type} . {Car.year}</small><h5>Rs.{new Intl.NumberFormat('US').format(Car.price)}</h5>
                                                    </h4>
                                                    <div style={{ borderTop: "1px solid #dbdbdb", padding: "0.5rem" }}>
                                                        <a href={Car.carurl} target="_blank" ><span className="car_footer mb-0 fw-1000" style={{ color: "#6300a3" }}>Check this on CarWale</span></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Media;