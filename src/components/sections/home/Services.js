import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import services from '../../../data/services.json'

class Services extends Component {
    render() {
        return (
            <section className="section-padding service-symptoms parallax  bg-light-white">
                <div className="overlay overlay-bg-theme" />
                <div className="container service">
                    <div className="section-header text-center">
                        <div className="section-heading">
                            <h3 className="text-custom-black"><div className="logo"> <Link to="/"> <img  loading="lazy" src={process.env.PUBLIC_URL + "/assets/images/logo5.png"} className="img-fluid" alt="logo" /> </Link> </div></h3>
                            <div className="section-description head_description">
                                <h5>Rumble Assured® Benefits</h5>
                                <p>The sure road to Car Joy</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {services.map((item, i) => (
                            <div className="col-lg-3 col-md-6" key={i}>
                                <section className="our-work-sec bg-light-white">
                                 <div className="work-sec animate-img" style={{ borderRadius: "20px" }}> <Link to="/cars"> <img  loading="lazy" src={process.env.PUBLIC_URL + "/" + item.img} className="image-fit" alt={item.title} />
                                        <div className="text-wrapper text-center">
                                            <h6 className="no-margin fw-600"><Link to="/cars" className="text-custom-black" style={{ color: "#fff"}}>{item.title}</Link></h6>
                                        </div>
                                    </Link> </div>
                                </section>
                            </div>
                        ))}
                    </div>
                    <div className="row"> 
                        <div className="col-lg-12 col-md-12 text-center mt-5">
                            <Link to="/cars"><button type="button" className="btn watch_film_btn">Watch the film <i class="fa fa-caret-right"></i></button></Link> <br/>
                            <Link to="/cars"><button className="learn_more_btn">Learn More <i class="fa fa-angle-right"></i></button></Link>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Services;