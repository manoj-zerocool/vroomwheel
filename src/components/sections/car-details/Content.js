import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Media from "./Media";
import './car_details.css';
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import Faq from './faq';
import Details from './Details';
import * as CONSTANT from '../../../Constent';
import $ from "jquery";

const selected_city = localStorage.getItem("selected_city");

const pagelocation = "Used cars in " + selected_city;

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            path_full : '',
            source:''
        }
    }

    componentDidMount() {
        $(".navigation-wrapper").hide();

        const path_full = window.location.href;
        const search = window.location.search;
        const car_id = new URLSearchParams(search).get('car');
        const make_id = new URLSearchParams(search).get('make_id');
        const modal_id = new URLSearchParams(search).get('modal_id');
        this.setState({ path_full: path_full });
        this.setState({ make_id: make_id });
        this.setState({ modal_id: modal_id });

        ///////////////////Get Car listing////////////////////
        fetch(`${CONSTANT.BaseUrl}/services/get_single_car?car_id=${car_id}`, {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((response) => {
                this.setState({ name: response.result.name });
                this.setState({ images: response.result.images });
                this.setState({ year: response.result.year });
                this.setState({ fuil_type: response.result.fuil_type });
                this.setState({ owner: response.result.owner });
                this.setState({ city_name: response.result.city_name });
                this.setState({ carurl: response.result.carurl });
                this.setState({ make: response.result.make });
                this.setState({ make: response.result.make });
                this.setState({ makeslug: response.result.makeslug });
                this.setState({ modalslug: response.result.modalslug });
               this.setState({ source: response.result.source });

                this.setState({ price: new Intl.NumberFormat('US').format(response.result.price) });
                this.setState({ kmdriven: new Intl.NumberFormat('US').format(response.result.kmdriven) });
            })
            .catch((error) => {
            });

    }

    render() {

        const container_style = {
            padding: "0rem 3rem"
        };

        const mystyle = {
            background: "#ff0000",
            color: "#fff",
            fontWeight: "500",
            border: "none",
            borderRadius: "5px",
            padding: "12px 20px",
            fontFamily: "Futura Hv BT",
            width:"100%"
        };
        const mystyle1 = {
            background: "#ff0000",
            color: "#fff",
            fontWeight: "500",
            border: "none",
            borderRadius: "5px",
            padding: "12px 20px",
            fontFamily: "Futura Hv BT",
            width: "100%",
            fontSize: "17px !important",
        };
        return (
            <Fragment>
                <section className="section-padding bg-light-white listing-details" style={{ paddingTop: "10px", paddingBottom: "0px" }}>
                    <div className="container-fluid fluidhwe" style={container_style}>
                        <div className="row">
                            <div className="col-12">
                                <div className="row">
                                    <div className="col-md-12">
                                        <span> <Link to="/" style={{ textTransform: "uppercase", color: "#411c5f", fontWeight: "500", fontFamily: "Futura Md BT", fontSize: "12px", letterSpacing: "1px" }}>Home <i className="fa fa-angle-right"></i></Link> </span>
                                        <span className="fw-500 city_bradcrumb" aria-current="page"><a href={`/used-cars-in-${localStorage.getItem("selected_city")}`} style={{ textTransform: "uppercase", color: "#a593b3", fontWeight: "500", fontFamily: "Futura Md BT", fontSize: "12px" }}>{pagelocation}</a>&nbsp; <i className="fa fa-angle-right "></i></span>
                                        <span className="fw-500 make_bradcrumb"><a href={`/used-${this.state.makeslug}-cars-in-${localStorage.getItem("selected_city")}`} style={{ textTransform: "uppercase", color: "#a593b3", fontWeight: "500", fontFamily: "Futura Md BT", fontSize: "12px" }}>{" " + this.state.make}</a>&nbsp; <i className="fa fa-angle-right "></i></span>
                                        <span className="fw-500 make_bradcrumb"><a href={`/used-${this.state.modalslug}-cars-in-${localStorage.getItem("selected_city")}`} style={{ textTransform: "uppercase", color: "#a593b3", fontWeight: "500", fontFamily: "Futura Md BT", fontSize: "12px" }}>{" " + this.state.name}</a></span>
                                    </div>
                                </div>
                                <div className="listing-details-inner  bg-custom-white padding-20 singel_car ">
                                    <div className="row">
                                        <div className="col-lg-8">
                                            <div className="mb-md-80 carimghwe">
                                                <div className="detail-slider-for mb-xl-20 magnific-gallery">
                                                    <div className="slide-item slide_item_hwe">
                                                        <a rel={"external"} className="popup">
                                                            <img  loading="lazy" src={this.state.images} className="image-fit" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="modem"> 
                                                    <div className="bx-wrapper padding-20 details_section">
                                                        <h5 className="text-custom-black mb-1">{this.state.name}</h5>
                                                        <h5 style={{ marginBottom: "0.5rem", fontSize: "20px", fontFamily: "Futura Hv BT" }}>Rs. {this.state.price}</h5>
                                                        <div className="social_action">
                                                            <a href={this.state.carurl} target="_blank" className="btn-first btn-small view_all mt-3 mb-2" style={mystyle}>Check this on {this.state.source}</a>
                                                            <div className="row mt-3 mb-2" style={{width:"50%",float:"right"}}>
                                                                <div class="col-md-6">
                                                                    <label className="fs-6" style={{ color: "#2e054e" }}>Share this on: </label>
                                                                </div>
                                                                <div class="col-md-6">
                                                                   <a target="_blank" href={`https://www.facebook.com/sharer/sharer.php?u=${this.state.path_full}?utm_source=facebook_share&utm_medium=social-sharing` } ><FaFacebookSquare className="social_icon" /></a>
                                                                   <a target="_blank" href={`http://twitter.com/share?url=${this.state.path_full}?utm_source=twitter_share&utm_medium=social-sharing&text=Checkout%20this%20cool`}><FaTwitter className="social_icon" /></a>
                                                                   <a target="_blank" href={`mailto:?subject=Awesome Vroom-Wheel Car&body=Hey I found this cool car at Vroom-Wheel go checkout the link at ${this.state.path_full}?utm_source=mail_share&utm_medium=social-sharing`}><FaEnvelope className="social_icon" /></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <form>                                                      
                                                            <div className="row">
                                                                <div className="col-12">
                                                                    <h5 className="mt-2 mb-0 pb-0">Car Overview</h5>
                                                                    <div className="row_one" style={{ display: "flex", justifyContent: "space-between" }}>
                                                                        <div style={{ width: "60%" }}>
                                                                            <label>Year</label>
                                                                            <h6>{this.state.year}</h6>
                                                                        </div>
                                                                        <div style={{ width: "40%" }}>
                                                                            <label>Fuel</label>
                                                                            <h6>{this.state.fuil_type}</h6>
                                                                        </div>
                                                                    </div>
                                                                    <div className="center_row row_one" style={{ display: "flex", justifyContent: "space-between" }}>
                                                                        <div style={{ width: "60%" }}>
                                                                            <label>Owner</label>
                                                                            <h6>{this.state.owner}</h6>
                                                                        </div>
                                                                        <div style={{ width: "40%" }}>
                                                                            <label>Km Driven</label>
                                                                            <h6>{this.state.kmdriven} KM</h6>
                                                                        </div>
                                                                    </div>
                                                                    <div className="row_one" style={{ display: "flex", justifyContent: "space-between" }}>
                                                                        <div style={{ width: "60%" }}>
                                                                            <label>City</label>
                                                                            <h6>{this.state.city_name}</h6>
                                                                        </div>
                                                                        <div style={{ width: "40%" }}>
                                                                            <label>Price</label>
                                                                            <h6>Rs. {this.state.price}</h6>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </form>
                                                        <div className="trger">
                                                            <a href={this.state.carurl} target="_blank" className="btn-first btn-small view_all mt-3 mb-2" style={mystyle1}>Check this on {this.state.source}</a>
                                                            <div className="row mt-3 mb-2">
                                                                <div class="col-md-6">
                                                                    <label className="fs-6" style={{ color: "#2e054e" }}>Share this on: </label>
                                                                </div>
                                                                <div class="col-md-6">
                                                                <a target="_blank"  href={`https://www.facebook.com/sharer/sharer.php?u=${this.state.path_full}?utm_source=facebook_share&utm_medium=social-sharing` } ><FaFacebookSquare className="social_icon" /></a>
                                                                    <a target="_blank" href={`http://twitter.com/share?url=${this.state.path_full}?utm_source=twitter_share&utm_medium=social-sharing&text=Checkout%20this%20cool`}><FaTwitter className="social_icon" /></a>
                                                                    <a target="_blank" href={`mailto:?subject=Awesome Vroom-Wheel Car&body=Hey I found this cool car at Vroom-Wheel go checkout the link at ${this.state.path_full}?utm_source=mail_share&utm_medium=social-sharing`}><FaEnvelope className="social_icon" /></a>
                                                                 </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-padding partners pt-0 pb-0">
                    {/* <Media /> */}
                    {/* <Faq /> */}
                    {/* <Details /> */}
                </section>
            </Fragment>
        );
    }
}

export default Content;