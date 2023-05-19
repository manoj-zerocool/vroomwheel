import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Abouttext extends Component {
    render() {
        return (
            <section className="section-padding about-us">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-7 col-lg-6 pl-2 pr-2 align-self-center text-left">
                            <div className="about-left-side mb-md-80">
                                <div className="section-header style-left">
                                    <div className="section-heading">
                                        <h3>Subaru <span className="text-custom-blue">Impreza</span></h3>
                                        <div className="section-description">
                                            <div className="car-price"> <strong>$125</strong> <span>/Day</span> </div>
                                        </div>
                                    </div>
                                </div>
                                <p className="pt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                                <p className="pt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                                <p className="pt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text. Lorem Ipsum has been the industry's standard dummy text.
                                    Lorem Ipsum is simply dummy.</p>
                                <Link to="/about" className="btn-first btn-submit">Reserve Now</Link>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6">
                            <div className="about-right-side full-height">
                                <div className="about-img full-height"> <img  loading="lazy" src={process.env.PUBLIC_URL + "/assets/images/about.jpg"} className="img-fluid image-fit" alt="img" /> </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Abouttext;