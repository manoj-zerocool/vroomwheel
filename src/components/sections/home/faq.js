import React, { Component, Fragment } from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';
import Testimonial from './Testimonial';
import * as CONSTANT from '../../../Constent';

const Helpcenter = {
    border: "1px solid #2e054e",
    color: "#2e054e",
    fontWeight: "600",
    padding: "12px 40px"
}

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: "",
            title: "Used Cars Online in India",
            desc: "As you all know, buying a car can be quite an expensive affair and many of us might not have the required budget to afford a brand-new car. So, what should you do? Well, you need not worry as we have got it all covered for you. We have an extraordinary range of pre-owned used cars in India available from some of the most reputed brands. Now you can compare with an xtraordinary range to buy used cars in India that you can search from our website. We offer you an excellent choice and value for your money on your used car purchase. We have cars available in various price ranges and you can pick the car that perfectly meets all your needs and requirement. You simply need to choose your favorite car and the car will be all yours in the shortest possible time.",
            bold_desc: "Searching cars in different websites and comparing them is not possible in general scenarios and will be hectic job so why do not use Vroomwheel !",
        };
    }
    componentDidMount() {
        const cityname =window.location.pathname.split("in-")[1];
        this.setState({ city: cityname })
        const city_id = localStorage.getItem("city_id");
        var url_name =window.location.pathname;
        if(url_name != '/'){
        fetch(`${CONSTANT.BaseUrl}/services/get_content_hwe?city_id=${city_id}&key=Used_Cars_Online_title`, {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((response) => {
                // this.setState({ city: response.result[0]['city'] })
                this.setState({ title: response.result[0]['value'] + ' ' + cityname })
            })
            .catch((error) => {
            });

        fetch(`${CONSTANT.BaseUrl}/services/get_content_hwe?city_id=${city_id}&key=Used_Cars_Online`, {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((response) => {
                this.setState({ desc: response.result[0]['value'] })
                // alert(this.state.meta_desc);

            })
            .catch((error) => {
            });
            }
    }
    render() {
        return (
            <Fragment>
                <section className="section-padding bg-light-white faqs custome_mr pb-5">
                    <div className="container">
                        <div className="section-header text-center">
                            <div className="section-heading">
                                <h3 className="text-custom-black" style={{ color: "#2e054e" }}>{this.state.title}</h3>
                            </div>
                        </div>

                        <div className="row">
                            <p className="text-center p-2" style={{ color: "#2e054e" }}>
                                {this.state.desc}
                                <br>
                                </br>
                                <strong>{this.state.bold_desc}</strong>
                            </p>
                        </div>
                        <div className="row">
                            <h6 className="d-none">1</h6>
                            <div className="col-lg-12 col-sm-10">
                                <Accordion defaultActiveKey={1} className="custom-accordion mb-md-80 d-block customaccordionhwe">
                                    <Card>
                                        <Accordion.Collapse eventKey={1 + 1} className="collapseparent" style={{ color: "#371056" }}>
                                            <Card.Body>
                                                <div dangerouslySetInnerHTML={{ __html: "<p class='text-theme'>When it comes to buying used cars in India, one could not find a better companion for their needs than Vroom Wheel – the No. 1 search platform for used cars in India. With Vroom Wheel, one can search for their car according to their residence and budget without any hassle.</p>" }} />
                                            </Card.Body>
                                        </Accordion.Collapse>
                                        <Card.Header>
                                            <Accordion.Toggle as={Button} variant="link" eventKey={1 + 1} style={{ textAlign: "left", background: "none", color: "#371056", fontWeight: "600", fontSize: "14px" }}>
                                                Where can one buy used cars online in {this.state.city}?
                                            </Accordion.Toggle>
                                        </Card.Header>
                                    </Card>
                                    <Card>
                                        <Accordion.Collapse eventKey={1 + 2} className="collapseparent" style={{ color: "#371056" }}>
                                            <Card.Body>
                                                <div dangerouslySetInnerHTML={{ __html: "<p class='text-theme'>When it comes to buying used cars in India, one could not find a better companion for their needs than Vroom Wheel – the No. 1 search platform for used cars in India. With Vroom Wheel, one can search for their car according to their residence and budget without any hassle.</p>" }} />
                                            </Card.Body>
                                        </Accordion.Collapse>
                                        <Card.Header>
                                            <Accordion.Toggle as={Button} variant="link" eventKey={1 + 2} style={{ textAlign: "left", background: "none", color: "#371056", fontWeight: "600", fontSize: "14px" }}>
                                                Why should one use Vroom Wheel to search for used cars in {this.state.city}?
                                            </Accordion.Toggle>
                                        </Card.Header>
                                    </Card>
                                    <Card>
                                        <Accordion.Collapse eventKey={1 + 3} className="collapseparent" style={{ color: "#371056" }}>
                                            <Card.Body>
                                                <div dangerouslySetInnerHTML={{ __html: "<p class='text-theme'>At Vroom Wheel, we are the search engines for providing used cars of different brands. We have a wide range of options of used cars available for you. You can check our extensive range to find the ideal option for you.</p>" }} />
                                            </Card.Body>
                                        </Accordion.Collapse>
                                        <Card.Header>
                                            <Accordion.Toggle as={Button} variant="link" eventKey={1 + 3} style={{ textAlign: "left", background: "none", color: "#371056", fontWeight: "600", fontSize: "14px" }}>
                                                Do you guarantee the used car I buy from Vroom Wheel?
                                            </Accordion.Toggle>
                                        </Card.Header>
                                    </Card>
                                    <Card>
                                        <Accordion.Collapse eventKey={1 + 4} className="collapseparent" style={{ color: "#371056" }}>
                                            <Card.Body>
                                                <div dangerouslySetInnerHTML={{ __html: "<p class='text-theme'>The price of a used car depends on various factors such as the model number and brand. You can connect with our professionals and discuss your needs to seize the best deals. We understand your needs and provide you with the best quote that fits your budget.</p>" }} />
                                            </Card.Body>
                                        </Accordion.Collapse>
                                        <Card.Header>
                                            <Accordion.Toggle as={Button} variant="link" eventKey={1 + 4} style={{ textAlign: "left", background: "none", color: "#371056", fontWeight: "600", fontSize: "14px" }}>
                                                How much used car will cost?
                                            </Accordion.Toggle>
                                        </Card.Header>
                                    </Card>
                                    <Card>
                                        <Accordion.Collapse eventKey={1 + 5} className="collapseparent" style={{ color: "#371056" }}>
                                            <Card.Body>
                                                <div dangerouslySetInnerHTML={{ __html: "<p class='text-theme'> Yes, we provide you with a reliable tool through which you can compare the prices before you buy used cars.</p>" }} />
                                            </Card.Body>
                                        </Accordion.Collapse>
                                        <Card.Header>
                                            <Accordion.Toggle as={Button} variant="link" eventKey={1 + 5} style={{ textAlign: "left", background: "none", color: "#371056", fontWeight: "600", fontSize: "14px" }}>
                                                Can you help me compare the prices of used cars?"
                                            </Accordion.Toggle>
                                        </Card.Header>
                                    </Card>
                                </Accordion>
                            </div>
                        </div>



                        <section className="section-padding partners pt-5 pb-0">
                            <Testimonial />
                        </section>
                    </div>
                </section>
            </Fragment>
        );
    }
}

export default Content;