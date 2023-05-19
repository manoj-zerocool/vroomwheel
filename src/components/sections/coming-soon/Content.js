import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Countdown from 'react-countdown';

// Random component
const Completionist = () => <span>You are good to go!</span>;

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
        // Render a completed state
        return <Completionist />;
    } else {
        // Render a countdown
        return <div className="counter">
            <div className="counter-box">
                <div className="inner-box"><span className="text-custom-white" id="cvdays">{days}</span> </div>
                <p className="text-custom-white">Days</p>
            </div>
            <div className="counter-box">
                <div className="inner-box"><span className="text-custom-white" id="cvhours">{hours}</span> </div>
                <p className="text-custom-white">Hours</p>
            </div>
            <div className="counter-box">
                <div className="inner-box"> <span className="text-custom-white" id="cvminutes">{minutes}</span> </div>
                <p className="text-custom-white">Minutes</p>
            </div>
            <div className="counter-box">
                <div className="inner-box"> <span className="text-custom-white" id="cvseconds">{seconds}</span> </div>
                <p className="text-custom-white">Seconds</p>
            </div>
        </div>;
    }
};

class Content extends Component {
    render() {
        return (
            <div className="coming-soon parallax">
                <div className="container">
                    <div className="row no-gutters">
                        <div className="col-lg-4">
                            <div className="full-height coming-soon-img"> <img  loading="lazy" src={process.env.PUBLIC_URL + "/assets/images/soon.jpg"} className="image-fit" alt="img" /> </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="full-height coming-soon-text">
                                <h1 className="text-custom-black">Coming Soon</h1>
                                <Countdown
                                    date={Date.now() + 31622400000}
                                    renderer={renderer}
                                />
                                <div className="coming-soon-contact">
                                    <ul className="custom-flex">
                                        <li>
                                            <label className="text-light-dark fw-600 d-block">Phone:</label>
                                            <a rel={"external"} href={"tel:"} className="text-custom-black fw-600">(+123) 123 4567 890</a>
                                        </li>
                                        <li>
                                            <label className="text-light-dark fw-600 d-block">Address:</label>
                                            <a rel={"external"} href={"YourLocationLink"} className="text-custom-black fw-600">AENEAN VULPUTATE PORTTITOR</a>
                                        </li>
                                        <li>
                                            <label className="text-light-dark fw-600 d-block">Email Us:</label>
                                            <a rel={"external"} href={"mailto:"} className="text-custom-black fw-600">example@example.com</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="newsletter-form">
                                    <div className="form-group">
                                        <div className="input-group group-form">
                                            <input type="email" name="#" className="form-control form-control-custom" placeholder="Email Id" required />
                                            <button type="submit" className="input-group-append"> Send </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="social-media">
                                    <ul className="custom-flex">
                                        <li> <Link to="#" className="text-light-dark"> <i className="fab fa-facebook-f" /> </Link> </li>
                                        <li> <Link to="#" className="text-light-dark"> <i className="fab fa-twitter" /> </Link> </li>
                                        <li> <Link to="#" className="text-light-dark"> <i className="fab fa-instagram" /> </Link> </li>
                                        <li> <Link to="#" className="text-light-dark"> <i className="fab fa-youtube" /> </Link> </li>
                                        <li> <Link to="#" className="text-light-dark"> <i className="fab fa-google-plus" /> </Link> </li>
                                        <li> <Link to="#" className="text-light-dark"> <i className="fab fa-vimeo" /> </Link> </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;