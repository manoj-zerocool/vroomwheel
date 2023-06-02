import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Contacthelper from '../../../helper/Contacthelper';
import ReCAPTCHA from "react-google-recaptcha";
import { Alert } from 'react-bootstrap';

class Content extends Contacthelper {
    render() {
        return (
            <Fragment>
                <div className="section-padding contact-form-map">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="section-header style-left">
                                    <div className="section-heading">
                                        <h3 className="text-custom-black">Contact Us</h3>
                                        <div className="section-description">
                                            <p className="text-light-dark">Write us, We would be happy to assist you. </p>
                                        </div>
                                    </div>
                                </div>

  <div className="col-md-12" id="server_response_parent">
                                <div class="alert  alert-dismissible fade show " role="alert" id="server_response">
                                {this.state.message} 
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                                </div>
                                        </div>

                                <form className="mb-md-80" onSubmit={this.handleSubmit.bind(this)} method="Get">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="text" name="name" value={this.state.name} onChange={this.onNameChange.bind(this)} className="form-control form-control-custom" placeholder="Name" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="email" name="email" value={this.state.email} onChange={this.onEmailChange.bind(this)} className="form-control form-control-custom" placeholder="Email I'd" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="text" name="subject" value={this.state.subject} onChange={this.onSubjectChange.bind(this)} className="form-control form-control-custom" placeholder="Subject" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="number" name="phone" value={this.state.phone} onChange={this.onPhoneChange.bind(this)} className="form-control form-control-custom" placeholder="Phone No." required />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <textarea name="message1" value={this.state.message1} onChange={this.onMessage1Change.bind(this)} rows={5} className="form-control form-control-custom" placeholder="Message" required />
                                            </div>
                                         
                                            <button type="submit" className="btn-first btn-submit">Submit</button>
                                            {/* <ReCAPTCHA
                                                sitekey="6LeazcwcAAAAAFTLy71rIECmWQw3mGHh-G7ELJtF"
                                                onChange={this.reCaptchaLoaded.bind(this)}
                                                size="invisible"
                                            /> */}
                                          </div>
                                        {/* <div className="col-md-12"> */}
                                            {/* Form Messages */}
                                            {/* <Alert variant="success" className="d-none mt-3 mb-0" id="server_response_success"> */}
                                                {/* <strong>Success!</strong> Contact form has been successfully submitted. */}
                                            {/* </Alert>
                                            <Alert variant="danger" className="d-none mt-3 mb-0" id="server_response_danger">
                                                <strong>Oops!</strong> Something bad happened.Please try again later.
                                            </Alert> */}
                                            {/* Form Messages */}
                                        {/* </div> */}

                                      
                                    </div>
                                </form>
                            </div>
                            <div className="col-lg-5">
                                <div className="contact-map full-height">
                                    <iframe title="map" className="full-height"
                                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497699.9973997049!2d77.35073846149973!3d12.953847719426582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1677585441058!5m2!1sen!2sin" />
                                </div>
                            </div>
                        </div>
                        <hr/>
                        

                    </div>
                </div>
                {/* Start Contact top */}
                <section className="section-padding bg-light-white contact-top ">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-sm-6">
                                <div className="contact-info-box mb-md-40"> <i className="flaticon-placeholder" />
                                    <h6 className="text-theme fw-600">Bangalore, India</h6>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 d-none">
                                <div className="contact-info-box mb-md-40"> <i className="flaticon-telephone-1" />
                                    <h6 className="text-theme fw-600"><Link to="#" className="text-theme"></Link><br />
                                        Mon-Sun 8:00am-9:00pm</h6>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="contact-info-box"> <i className="flaticon-envelope" />
                                    <h6 className="text-theme fw-600"><a href="mailto:info@vroomwheel.com"><strong>info@vroomwheel.com<br/></strong> </a><br />
                                        24 X 7 online support</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Contact top */}
            </Fragment>
        );
    }
}

export default Content;