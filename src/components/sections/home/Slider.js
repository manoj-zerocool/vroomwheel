import React, { Component } from 'react';
import bannerpost from "../../../data/banner.json";
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import './style.css';

const settings = {
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    cssEase: 'linear',
    responsive: [{
        breakpoint: 768,
        settings: {
            arrows: false,
            dots: true,
            dotsClass: "d-flex slick-dots",
            slidesToShow: 1
        }
    }]
}

class Banner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city_id: "",
            cityname:"",
        };
    }

    componentDidMount() {
        const city_id = localStorage.getItem("city_id");
        const cityname = localStorage.getItem("selected_city");
        this.setState({ cityname: cityname })
        this.setState({ city_id: city_id })
    }

    render() {

        $(document).ready(function () {
            $(".cityname").click(function () {
                var cityid = $(this).attr('data-id');
                var dataname = $(this).attr('data-name');
                localStorage.setItem('city_id', cityid);
                localStorage.setItem('selected_city', dataname);
            });
        });

        const mystyle = {
            width: "70%",
            background: "#ff0000",
            color: "#fff",
            fontWeight: "700",
            border: "none",
            borderRadius: "5px",
            padding: "11px 40px",
            fontFamily: "'Futura Md BT', sans-serif",
            display: "none"
        };

        return (
            <div className="slider p-relative">
                <Slider className="main-banner arrow-layout-1" {...settings}>
                    {bannerpost.map((item, i) => (
                        <div key={i}>
                            <div className="slide-item slide-item-og" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/" + item.image + ")" }}>
                                <div className="slider-content-wrap text-center">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-12 slider">
                                                <div className="slider-content">
                                                    <h1 className="text-custom-white" style={{ fontFamily: "Futura Hv BT" }} dangerouslySetInnerHTML={{ __html: item.title }} />
                                                    <ul className="custom">
                                                        {item.list.map((item, i) => (
                                                            <li className="text-custom-white icontext" key={i}>
                                                                <i className={`${item.icon}`} /> {item.text}
                                                            </li>
                                                        ))}
                                                        <Link to={`/used-cars-in-${this.state.cityname}`} className="btn-first btn-small view_all_cars mb-3"  style={mystyle}>View All Cars</Link>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="slide-item slide-item-mobile" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/" + item.image_mobile + ")" }}>
                                <div className="slider-content-wrap text-center">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-12 slider">
                                                <div className="slider-content">
                                                    <h2 className="text-custom-white" style={{ fontFamily: "Futura Hv BT" }} dangerouslySetInnerHTML={{ __html: item.title }} />
                                                    <ul className="custom">
                                                        {item.list.map((item, i) => (
                                                            <li className="text-custom-white icontext" key={i}>
                                                                <i className={`${item.icon}`} /> {item.text}
                                                            </li>
                                                        ))}
                                                        <Link to={`/used-cars-in-${this.state.cityname}`} className="btn-first btn-small view_all_cars mb-3"  style={mystyle}>View All Cars</Link>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        );
    }
}

export default Banner;