import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import work from '../../../data/work.json'
import "./style.css";

class Work extends Component {
    render() {
        return (
            <section className="section-padding service-symptoms parallax  bg-light-white">
                <div className="overlay overlay-bg-theme" />
                <div className="container work_component">
                    <div className="section-header text-center">
                        <div className="section-heading">
                            <div className="section-description">
                                <h5 className="text-light-dark fw-800">How Does VroomWheel Works</h5>
                                <p>You won’t just love our cars, you’ll love the way you buy them.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {work.map((item, i) => (
                            <div className="col-lg-4 col-md-4" key={i}>
                                <div className="service-sy-grid mb-md-30 rounded">
                                    <div className="img-wrap"> <img  loading="lazy" src={process.env.PUBLIC_URL + "/" + item.img} className="image-fit" alt={item.title} /> </div>
                                    <div className="text-center content_heading">
                                        <h5 className="no-margin fw-600b">{item.title}</h5>
                                        <p>{item.text}</p>
                                        <Link to="#"><button>Learn More <i class="fa fa-angle-right"></i></button></Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="row"> 
                        <div className="col-lg-12 col-md-12 text-center mt-5">
                            <Link to="/cars"><button type="button" className="btn watch_film_btn">Watch for it work <i class="fa fa-caret-right"></i></button></Link> <br/>
                            <Link to="/cars"><button className="learn_more_btn">Learn More <i class="fa fa-angle-right"></i></button></Link>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Work;