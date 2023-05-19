import React, { Component } from 'react';
import Masonry from "react-masonry-component";
import { Link } from 'react-router-dom';

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city_id: "" ,
            cityname:""
        };
    }

    componentDidMount() {
        const city_id = localStorage.getItem("city_id");
        const cityname=localStorage.getItem("selected_city");
        // alert(cityname);
        this.setState({ cityname: cityname })
        this.setState({ city_id: city_id })
    }
    
    render() {
        return (
            <section className="section-padding gallery custome_mr pb-2">
                <div className="container">
                    <div className="section-header text-center b">
                        <div className="section-heading">
                            <h3 className="text-custom-black" style={{ color: "#2e054e" }}>Search by Budget</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <Masonry className="row gallery-grid">
                                <div className="col-lg-4 col-md-6 filter-box mb-2">
                                    <section className="our-work-sec">
                                        <div className="work-sec animate-img" style={{ borderRadius: "20px" }}> 
                                            <Link to={`/used-cars-over-50000-rs-under-200000-rs-in-${this.state.cityname}`}> <img  loading="lazy" src={process.env.PUBLIC_URL + "/assets/images/cars/1.webp"} style={{ height: "250px", width: "100%" }} alt="img" />
                                                <div className="text-wrapper">
                                                    <h6 className="text-custom-white no-margin fw-600 mb-1 text-center cityname">Below 2 Lakhs</h6>
                                                </div>
                                            </Link> 
                                        </div>
                                    </section>
                                </div>
                                <div className="col-lg-4 col-md-6 filter-box mb-2">
                                    <section className="our-work-sec">
                                        <div className="work-sec animate-img" style={{ borderRadius: "20px" }}> 
                                            <Link to={`/used-cars-over-200000-rs-under-500000-rs-in-${this.state.cityname}`}> <img  loading="lazy" src={process.env.PUBLIC_URL + "/assets/images/cars/2.webp"} style={{ height: "250px", width: "100%" }} alt="img" />
                                                <div className="text-wrapper">
                                                    <h6 className="text-custom-white no-margin fw-600 mb-1 text-center cityname">2 To 5 Lakhs</h6>
                                                </div>
                                            </Link> 
                                        </div>
                                    </section>
                                </div>
                                <div className="col-lg-4 col-md-6 filter-box mb-2">
                                    <section className="our-work-sec">
                                        <div className="work-sec animate-img" style={{ borderRadius: "20px" }}> 
                                            <Link to={`/used-cars-over-500000-rs-under-1000000-rs-in-${this.state.cityname}`}> <img  loading="lazy" src={process.env.PUBLIC_URL + "/assets/images/cars/3.webp"} style={{ height: "250px", width: "100%" }} alt="img" />
                                                <div className="text-wrapper">
                                                    <h6 className="text-custom-white no-margin fw-600 mb-1 text-center cityname">5 To 10 Lakhs</h6>
                                                </div>
                                            </Link> 
                                        </div>
                                    </section>
                                </div>
                                <div className="col-lg-4 col-md-6 filter-box mb-2">
                                    <section className="our-work-sec">
                                        <div className="work-sec animate-img" style={{ borderRadius: "20px" }}> 
                                            <Link to={`/used-cars-over-1000000-rs-under-1500000-rs-in-${this.state.cityname}`}> <img  loading="lazy" src={process.env.PUBLIC_URL + "/assets/images/cars/4.webp"} style={{ height: "250px", width: "100%" }} alt="img" />
                                                <div className="text-wrapper">
                                                    <h6 className="text-custom-white no-margin fw-600 mb-1 text-center cityname">10 To 15 Lakhs</h6>
                                                </div>
                                            </Link> 
                                        </div>
                                    </section>
                                </div>
                                <div className="col-lg-4 col-md-6 filter-box mb-2">
                                    <section className="our-work-sec">
                                        <div className="work-sec animate-img" style={{ borderRadius: "20px" }}> 
                                            <Link to={`/used-cars-over-1500000-rs-under-3000000-rs-in-${this.state.cityname}`}> <img  loading="lazy" src={process.env.PUBLIC_URL + "/assets/images/cars/5.webp"} style={{ height: "250px", width: "100%" }} alt="img" />
                                                <div className="text-wrapper">
                                                    <h6 className="text-custom-white no-margin fw-600 mb-1 text-center cityname">15 To 30 Lakhs</h6>
                                                </div>
                                            </Link> 
                                        </div>
                                    </section>
                                </div>
                                <div className="col-lg-4 col-md-6 filter-box mb-2">
                                    <section className="our-work-sec">
                                        <div className="work-sec animate-img" style={{ borderRadius: "20px" }}> 
                                            <Link to={`/used-cars-over-3000000-rs-under-4000000-rs-in-${this.state.cityname}`}> <img  loading="lazy" src={process.env.PUBLIC_URL + "/assets/images/cars/6.webp"} style={{ height: "250px", width: "100%" }} alt="img" />
                                                <div className="text-wrapper">
                                                    <h6 className="text-custom-white no-margin fw-600 mb-1 text-center cityname">Above 30 Lakhs</h6>
                                                </div>
                                            </Link> 
                                        </div>
                                    </section>
                                </div>
                            </Masonry>
                            {/* <Masonry className="row gallery-grid">
                               {renderAll}
                            </Masonry> */}
                        </div>
                        {/* <div className="col-12 text-center mt-5">
                            <Link to="/cars"><button className="learn_more_btn" style={{ color: "#690ba6", fontWeight: "700" }}>View all Cars <i class="fa fa-angle-right"></i></button></Link>
                        </div> */}
                    </div>
                </div>
            </section>
        );
    }
}

export default Gallery;