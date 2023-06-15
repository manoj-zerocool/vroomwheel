import React, { Component } from 'react';
import "./category.css";
import Slider from 'react-slick';

import { Accordion, Card, Button } from 'react-bootstrap';

import $ from "jquery";

import * as CONSTANT from '../../../Constent';

const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    dotsClass: "d-flex slick-dots",
    arrowsClass: "d-flex slick-arrows slick-arrows_hwe",
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    cssEase: 'linear',
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                
        
                slidesToShow: 3
            }
        }, {
            breakpoint: 768,
            settings: {
        
                dots: true,
                slidesToShow: 2
            }
        }, 
        {
            breakpoint: 576,
            settings: {
           
                dots: true,
                slidesToShow:1
            }
        }, 
        // {
        //     breakpoint: 400,
        //     settings: {
        //         arrows: false,
        //         dots: true,
        //         slidesToShow: 1
        //     }
        // }
    ]
};
class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collection_content_title: [],
            collection_content_faq: [],
            collection_content_testimonials: [],
            city: "",
        };
    }

    componentDidMount() {
        const cityname = window.location.pathname.split("in-")[1];
        const city_id = localStorage.getItem("city_id");
        var url_name =window.location.pathname;
        fetch(`${CONSTANT.BaseUrl}/services/getfueltype`, {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((response) => {
                this.setState({ fueltype: response.result })
                localStorage.setItem('getfueltype', JSON.stringify(response.result) );

                $(".loader2").hide();
            })
            .catch((error) => {
            });
        if(url_name != '/'){
            fetch(`${CONSTANT.BaseUrl}/services/get_collection_content?city_id=${city_id}&key=collection_page&action=title`, {
                method: 'GET',
            })
                .then((response) => response.json())
                .then((response) => {
                    this.setState({collection_content_title : response.result});
                })
                .catch((error) => {
                });
                fetch(`${CONSTANT.BaseUrl}/services/get_collection_content?city_id=${city_id}&key=collection_page&action=faq`, {
                    method: 'GET',
                })
                    .then((response) => response.json())
                    .then((response) => {
                        this.setState({collection_content_faq : response.result});
                    })
                    .catch((error) => {
                    });
                    fetch(`${CONSTANT.BaseUrl}/services/get_collection_content?city_id=${city_id}&key=collection_page&action=testimonials`, {
                        method: 'GET',
                    })
                        .then((response) => response.json())
                        .then((response) => {
                            this.setState({collection_content_testimonials : response.result});
                        })
                        .catch((error) => {
                        });
        } else{
            
        }
       const i=0;
    }
    
    render() {
        return (
            <section className="section-padding bg-light-white faqs pt-0 pb-3">
            <div className="container cars_lest_details">
                
            <div className="row pb-5 text-center"  style={{justifyContent: "center"}} >
                <h2>Testimonials</h2>
                    <div className="col-6">
                        <Slider className="carousel" {...settings}>
                            {this.state.collection_content_testimonials?.map((collection_content_testimonials,index) => (
                                <div key={1+index} className="slide-item col-12">
                                    <div className="partner-box bx-wrapper animate-img text-center" style={{ color: "#2e054e", borderRadius: "10px", padding: "1rem" }}>
                                        <h5><i class="fa fa-quote-left" style={{ color: "#2e054e" }}></i></h5>
                                        <div dangerouslySetInnerHTML={{ __html:collection_content_testimonials.desc}} />
                                        
                                    </div>
                                    {/* <div className="partner-box bx-wrapper animate-img mt-3">
                                        <Link to="#"> <img  loading="lazy" src={process.env.PUBLIC_URL + "/" + item.img} className="img-fluid image-fit" alt="img" /> </Link>
                                    </div> */}
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            <div className="row pb-5">
                            <h6 className="d-none">1</h6>
                            <div className="col-lg-12 col-sm-10">
                                <Accordion defaultActiveKey={1} className="custom-accordion mb-md-80 d-block customaccordionhwe">
                                    
                                    {this.state.collection_content_faq?.map((collection_content_faq, index) =>
                                    <Card>
                                        <Accordion.Collapse eventKey={1 + index} className="collapseparent" style={{ color: "#371056" }}>
                                            <Card.Body>
                                                <div dangerouslySetInnerHTML={{ __html:collection_content_faq.desc }} />
                                            </Card.Body>
                                        </Accordion.Collapse>
                                        <Card.Header>
                                            <Accordion.Toggle as={Button} variant="link" eventKey={1 + index} style={{ textAlign: "left", background: "none", color: "#371056", fontWeight: "600", fontSize: "14px" }}>
                                            {collection_content_faq.title}
                                            </Accordion.Toggle>
                                        </Card.Header>
                                    </Card>
                                    
                        )}
                                </Accordion>
                            </div>
                        </div>
                <div className="row pb-5">
                    <div className="col-md-12">
                        <div>
                        {this.state.collection_content_title?.map(collection_content_title =>
                            <div>
                            <h5 className="pt-3" >{collection_content_title.title}</h5>
                            <div dangerouslySetInnerHTML={{ __html:collection_content_title.desc}} /> 
                                </div>
                        )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        );
    }
}

export default Details;