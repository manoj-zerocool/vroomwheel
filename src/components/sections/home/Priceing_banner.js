import React, { Component } from 'react';
// import teamblock from '../../../data/authors.json'
// import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import './style.css';

class Pricing extends Component {
    render() {
        return (
            <div className="container-fluid pricing_banner">
                <div className="row">
                    <div className="col-md-6 pricing_section1">
                        <h5 className="text-custom-black">Sell Right By <span style={{ color: "#00eab4" }}>Rumble</span></h5>
                        <h3 className="text-custom-black">Sell your car for the <br /> best price</h3>
                        <h6 className="text-custom-black">Get instant online quote | Free Doorstep Evaluation | <br /> Same Day Payment</h6>
                        <Link to={"/cars"} ><button type="button" className="btn btn-light get_price">Get Price</button></Link>
                    </div>
                    <div className="col-md-6 pricing_section2" style={{ paddingRight: "0" }}>
                        <img  loading="lazy" src={process.env.PUBLIC_URL + "/" + "assets/images/pbanner.png"} className="full-width" alt="image here" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Pricing;