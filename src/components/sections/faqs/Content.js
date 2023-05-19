import React, { Component, Fragment } from 'react';
import faqs from "../../../data/faqs.json";
import { Accordion, Card, Button } from 'react-bootstrap';
import Partners from '../../layouts/Partners';

class Content extends Component {
    render() {
        return (
            <Fragment>
                <section className="section-padding bg-light-white faqs">
                    <div className="container">
                        <div className="row">
                            <h6 className="d-none">1</h6>
                            <div className="col-lg-8">
                                <Accordion defaultActiveKey={1} className="custom-accordion mb-md-80 d-block">
                                    {faqs.map((item, i) => (
                                        <Card key={i}>
                                            <Accordion.Collapse eventKey={1 + i} className="collapseparent">
                                                <Card.Body>
                                                    <div dangerouslySetInnerHTML={{ __html: item.text }} />
                                                </Card.Body>
                                            </Accordion.Collapse>
                                            <Card.Header>
                                                <Accordion.Toggle as={Button} variant="link" eventKey={1 + i}>
                                                    {item.title}
                                                </Accordion.Toggle>
                                            </Card.Header>
                                        </Card>
                                    ))}
                                </Accordion>
                            </div>
                            <aside className="col-lg-4">
                                <div className="sidebar_wrap">
                                    <div className="sidebar">
                                        <div className="sidebar_widgets mb-xl-30">
                                            <div className="widget_title">
                                                <h5 className="no-margin text-custom-white">Search</h5>
                                            </div>
                                            <form>
                                                <div className="input-group group-form">
                                                    <input type="search" name="#" className="form-control form-control-custom" placeholder="Search" />
                                                    <span className="input-group-append"> <i className="fas fa-search" /> </span>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="sidebar_widgets">
                                            <div className="widget_title">
                                                <h5 className="no-margin text-custom-white">FAQs Topic</h5>
                                            </div>
                                            <form className="checkbox-group">
                                                <div className="form-group">
                                                    <label className="custom-checkbox">
                                                        <input type="checkbox" name="#" defaultChecked />
                                                        <span className="checkmark" /> All </label>
                                                </div>
                                                <div className="form-group">
                                                    <label className="custom-checkbox">
                                                        <input type="checkbox" name="#" />
                                                        <span className="checkmark" /> Features </label>
                                                </div>
                                                <div className="form-group">
                                                    <label className="custom-checkbox">
                                                        <input type="checkbox" name="#" />
                                                        <span className="checkmark" /> Sliders </label>
                                                </div>
                                                <div className="form-group">
                                                    <label className="custom-checkbox">
                                                        <input type="checkbox" name="#" />
                                                        <span className="checkmark" /> Manage Listing </label>
                                                </div>
                                                <div className="form-group">
                                                    <label className="custom-checkbox">
                                                        <input type="checkbox" name="#" />
                                                        <span className="checkmark" /> Address &amp; Map </label>
                                                </div>
                                                <div className="form-group">
                                                    <label className="custom-checkbox">
                                                        <input type="checkbox" name="#" />
                                                        <span className="checkmark" /> Reservation Request </label>
                                                </div>
                                                <div className="form-group">
                                                    <label className="custom-checkbox">
                                                        <input type="checkbox" name="#" />
                                                        <span className="checkmark" /> Your Reservation </label>
                                                </div>
                                                <div className="form-group">
                                                    <label className="custom-checkbox">
                                                        <input type="checkbox" name="#" />
                                                        <span className="checkmark" /> Other Questions </label>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </div>
                </section>
                {/* Start Partners */}
                <section className="section-padding partners">
                    <Partners />
                </section>
                {/* End Partners */}
            </Fragment>
        );
    }
}

export default Content;