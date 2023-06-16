import React, { Component } from 'react';
// import "./category.css";
import * as CONSTANT from '../../../Constent';

class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: "",
            title: "Used Cars for Sale in India",
            desc: "Are you looking to buy used cars in India? Certainly, Vroom Wheel is the right platform where you can start your search for the best deals on used cars. We have come up as a dependable marketplace where you can get great deals on used cars and meet your preferences of buying your own vehicle. Our sole purpose is to make the process of selling and buying used cars easy. We welcome you to take a test drive and buy your favorite model of the car at competitive prices. We represent the best car deals and ensure to stay at the forefront of it. We make sure to meet our customers’ diverse needs.",
            pre_desc: "With reliable options, we make sure to provide used cars in a considerable condition. We strive to bring you a better car buying experience no matter where you stay in India. We have genuine deals that fit your pocket and help you meet your preferences of buying a used car. You can search through different car options and get complete and authentic documents when buying a car from us. With Vroom Wheel, you stand a chance to source better deals on used cars and meet your preferences.",
            pre_title: "Pre Owned Cars in India",
        };
    }
    componentDidMount() {
      
       
    }
    render() {
        return (
            <section className="section-padding bg-light-white faqs pt-0 pb-3">
            <div className="container cars_lest_details">
                <div className="row">
                    <div className="col-md-12">
                        <div>
                        <div className="section-header text-center">
                            <div className="section-heading">
                                <h3 className="text-custom-black" style={{ color: "#2e054e" }}>{this.state.title}</h3>
                            </div>
                        </div>
                            <p className="text-center p-2" style={{ color: "#2e054e" }}>{this.state.desc}</p>
                        </div>
                        <div>
                        <div className="section-header text-center">
                            <div className="section-heading">
                                <h3 className="text-custom-black" style={{ color: "#2e054e" }}>{this.state.pre_title}</h3>
                            </div>
                        </div>
                            <p className="text-center p-2" style={{ color: "#2e054e" }}>{this.state.pre_desc}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        );
    }
}

export default Details;