import React, { Component, Fragment } from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';

class Content extends Component {
    render() {
        return (
            <Fragment>
                <section className="section-padding bg-light-white faqs custome_mr pt-5 pb-5">
                    <div className="container">
                        <div className="section-header text-center">
                            <div className="section-heading">
                                <h3 className="text-custom-black" style={{ color: "#2e054e" }}>Frequently Asked Questions</h3>
                            </div>
                        </div>

                        <div className="row">
                            <h6 className="d-none">1</h6>
                            <div className="col-lg-12">
                                <Accordion defaultActiveKey={1} className="custom-accordion mb-md-80 d-block singleaccordionhwe">
                                    <Card>
                                        <Accordion.Collapse eventKey={1 + 1} className="collapseparent" style={{ color: "#371056" }}>
                                            <Card.Body>
                                                <div dangerouslySetInnerHTML={{ __html: "<p class='text-theme'>Maruti Suzuki Swift cars are very popular cars to drive in Delhi-NCR. Used Maruti Suzuki cars at Spinny Delhi-NCR start from Rs. 2.9 lakhs.</p>" }} />
                                            </Card.Body>
                                        </Accordion.Collapse>
                                        <Card.Header>
                                            <Accordion.Toggle as={Button} variant="link" eventKey={1 + 1} style={{ textAlign: "left", background: "none", color: "#371056", fontWeight: "600", fontSize: "14px" }}>                                            
                                                What is the starting price of used Maruti Suzuki Swift cars in Delhi-NCR?
                                            </Accordion.Toggle>
                                        </Card.Header>
                                    </Card>
                                    <Card>
                                        <Accordion.Collapse eventKey={1 + 2} className="collapseparent" style={{ color: "#371056" }}>
                                            <Card.Body>
                                                <div dangerouslySetInnerHTML={{ __html: "<p class='text-theme'>All variants of second-hand Maruti Suzuki Swift offer great value. At Spinny Delhi-NCR, used petrol Maruti Suzuki Swift variants include LXi, VXi and ZXi; and second-hand diesel Maruti Suzuki Swift variants include LDi, VDi and ZDi.</p>" }} />
                                            </Card.Body>
                                        </Accordion.Collapse>
                                        <Card.Header>
                                            <Accordion.Toggle as={Button} variant="link" eventKey={1 + 2} style={{ textAlign: "left", background: "none", color: "#371056", fontWeight: "600", fontSize: "14px" }}>                                            
                                                What are the different variants of used Maruti Suzuki Swift in Delhi-NCR?
                                            </Accordion.Toggle>
                                        </Card.Header>
                                    </Card>
                                    <Card>
                                        <Accordion.Collapse eventKey={1 + 3} className="collapseparent" style={{ color: "#371056" }}>
                                            <Card.Body>
                                                <div dangerouslySetInnerHTML={{ __html: "<p class='text-theme'>For second hand Maruti Suzuki Swift, both manual and automatic transmission options are available at Spinny Delhi-NCR. Used manual Maruti Suzuki Swift are available from Rs. 2.9 lakhs and used automatic Maruti Suzuki Swift are available from Rs. 5.9 lakhs..</p>" }} />
                                            </Card.Body>
                                        </Accordion.Collapse>
                                        <Card.Header>
                                            <Accordion.Toggle as={Button} variant="link" eventKey={1 + 3} style={{ textAlign: "left", background: "none", color: "#371056", fontWeight: "600", fontSize: "14px" }}>                                            
                                                What transmission options are available for second-hand Swift in Delhi-NCR?
                                            </Accordion.Toggle>
                                        </Card.Header>
                                    </Card>
                                    <Card>
                                        <Accordion.Collapse eventKey={1 + 4} className="collapseparent" style={{ color: "#371056" }}>
                                            <Card.Body>
                                                <div dangerouslySetInnerHTML={{ __html: "<p class='text-theme'>Used Maruti Suzuki Swift cars are available with mileage as low as 7,000 km driven. The year of make options available for used Maruti Suzuki cars range from 2011-2019.</p>" }} />
                                            </Card.Body>
                                        </Accordion.Collapse>
                                        <Card.Header>
                                            <Accordion.Toggle as={Button} variant="link" eventKey={1 + 4} style={{ textAlign: "left", background: "none", color: "#371056", fontWeight: "600", fontSize: "14px" }}>                                            
                                                What are the mileage & year of make options available for used Swift cars?
                                            </Accordion.Toggle>
                                        </Card.Header>
                                    </Card>
                                    <Card>
                                        <Accordion.Collapse eventKey={1 + 5} className="collapseparent" style={{ color: "#371056" }}>
                                            <Card.Body>
                                                <div dangerouslySetInnerHTML={{ __html: "<p class='text-theme'>In Delhi-NCR, used petrol Maruti Suzuki Swift cars offer great mileage in city driving. For longer trips, used diesel Maruti Suzuki Swift cars provide better mileage.</p>" }} />
                                            </Card.Body>
                                        </Accordion.Collapse>
                                        <Card.Header>
                                            <Accordion.Toggle as={Button} variant="link" eventKey={1 + 5} style={{ textAlign: "left", background: "none", color: "#371056", fontWeight: "600", fontSize: "14px" }}>                                            
                                                Which used Maruti Suzuki Swift is better, petrol or diesel?
                                            </Accordion.Toggle>
                                        </Card.Header>
                                    </Card>
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </section>
            </Fragment>
        );
    }
}

export default Content;