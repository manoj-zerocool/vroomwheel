import React, { Component } from 'react';
import "./category.css";
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
        const cityname = window.location.pathname.split("in-")[1];
        const city_id = localStorage.getItem("city_id");
        var url_name =window.location.pathname;
        if(url_name != '/'){
            fetch(`${CONSTANT.BaseUrl}/services/get_content_hwe?city_id=${city_id}&key=Used_Cars_sale_title`, {
                method: 'GET',
            })
                .then((response) => response.json())
                .then((response) => {
                    this.setState({ city: response.result[0]['city'] })
                    this.setState({ title: response.result[0]['value'] +' '+cityname  })
                   
                })
                .catch((error) => {
                });
    
            fetch(`${CONSTANT.BaseUrl}/services/get_content_hwe?city_id=${city_id}&key=Used_Cars_sale`, {
                method: 'GET',
            })
                .then((response) => response.json())
                .then((response) => {
                    this.setState({ desc: response.result[0]['value'] })
                    // alert(this.state.meta_desc);
    
                })
                .catch((error) => {
                });
                fetch(`${CONSTANT.BaseUrl}/services/get_content_hwe?city_id=${city_id}&key=Pre_Owned_title`, {
                    method: 'GET',
                })
                    .then((response) => response.json())
                    .then((response) => {
                        
                        this.setState({ pre_title: response.result[0]['value'] +' '+cityname })
                       
                    })
                    .catch((error) => {
                    });
        
                fetch(`${CONSTANT.BaseUrl}/services/get_content_hwe?city_id=${city_id}&key=Pre_Owned_Cars`, {
                    method: 'GET',
                })
                    .then((response) => response.json())
                    .then((response) => {
                        this.setState({ pre_desc: response.result[0]['value'] })
                        // alert(this.state.meta_desc);
        
                    })
                    .catch((error) => {
                    });
        } else{
            
        }
       
    }
    render() {
        return (
            <section className="section-padding bg-light-white faqs pt-0 pb-3">
            <div className="container cars_lest_details">
                <div className="row">
                    <div className="col-md-12">
                        <div>
                            <h5>{this.state.title}</h5>
                            <p>{this.state.desc}</p>
                        </div>
                        <div>
                            <h5>{this.state.pre_title}</h5>
                            <p>{this.state.pre_desc}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        );
    }
}

export default Details;