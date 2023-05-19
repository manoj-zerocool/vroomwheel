import React, { Component } from 'react';
import whyus from "../../../data/whyus.json";

class Testimonials extends Component {
    render() {
        return (
            <section className="section-padding why-choose-testimonials">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12">
                            <div className="why-choose-box">
                                <div className="section-header text-center ">
                                    <div className="section-heading">
                                        <h3 className="text-custom-black">Why <span className="text-custom-blue">Choose Us</span></h3>
                                        <div className="section-description">
                                            <p className="text-light-dark">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="why-choose-wrapper">
                                    <div className="why-choose-img p-relative">
                                        <div className="row clearfix">
                                            {whyus.map((item, i) => (
                                                <div className="col-6" key={i}>
                                                    <div className="choose-item animate-img"> <img  loading="lazy" src={process.env.PUBLIC_URL + "/" + item.img} alt={item.title} className="full-width" />
                                                        <div className="text-wrapper">
                                                            <h4 className="text-custom-white">{item.title}</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Testimonials;