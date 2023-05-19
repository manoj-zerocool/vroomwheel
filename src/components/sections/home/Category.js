import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import $ from 'jquery';

class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city_id: "",
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

        $(document).ready(function(){
            $(".cityname").click(function(){
              var cityid = $(this).attr('data-id');
              var dataname = $(this).attr('data-name');
              localStorage.setItem('city_id', cityid);
              localStorage.setItem('selected_city', dataname);
            });
        });

        const mystyle = {
            background: "#ff0000",
            color: "#fff",
            fontWeight: "700",
            border: "none",
            borderRadius: "5px",
            padding: "15px 60px",
            fontFamily: "Futura Md BT"
        };
        return (
            <section className="section-padding our-work-sec bg-light-white custome_mr pb-2">
                <div className="container">
                    <div className="section-header text-center">
                        <div className="section-heading">
                            <Link to={`/used-cars-in-${this.state.cityname}`} className="btn-first btn-small view_all mb-3" target={'_blank'} style={mystyle}>View All Cars</Link>
                            <h3 className="text-custom-black" style={{ color: "#2e054e" }}>Search by City</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="row">
                                <div className="col-sm-4">
                                    <div className="work-sec animate-img" style={{ borderRadius: "20px" }}> <Link to="/used-cars-in-bangalore" className="cityname no_pop" data-id='3' data-name='Bangalore'> <img  loading="lazy" src={process.env.PUBLIC_URL + "/assets/images/city/1.webp"} style={{ height: "250px", width: "100%" }} alt="img" />
                                        <div className="text-wrapper text-center">
                                            <h6 className="text-custom-white no-margin fw-600 cityname">Bangalore</h6>
                                        </div>
                                    </Link> </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="work-sec animate-img" style={{ borderRadius: "20px" }}> <Link to="/used-cars-in-mumbai" className="cityname no_pop" data-id='2' data-name='Mumbai'> <img  loading="lazy" src={process.env.PUBLIC_URL + "/assets/images/city/2.webp"} style={{ height: "250px", width: "100%" }} alt="img" />
                                        <div className="text-wrapper text-center">
                                            <h6 className="text-custom-white no-margin fw-600 cityname">Mumbai</h6>
                                        </div>
                                    </Link> </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="work-sec animate-img" style={{ borderRadius: "20px" }}> <Link to="/used-cars-in-delhi" className="cityname no_pop" data-id='1' data-name='Delhi'> <img  loading="lazy" src={process.env.PUBLIC_URL + "/assets/images/city/3.webp"} style={{ height: "250px", width: "100%" }} alt="img" />
                                        <div className="text-wrapper text-center">
                                            <h6 className="text-custom-white no-margin fw-600 cityname">Delhi NCR</h6>
                                        </div>
                                    </Link> </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="work-sec animate-img" style={{ borderRadius: "20px" }}> <Link to="used-cars-in-jaipur" className="cityname no_pop"> <img  loading="lazy" src={process.env.PUBLIC_URL + "/assets/images/city/4.webp"} style={{ height: "250px", width: "100%" }} alt="img" />
                                        <div className="text-wrapper text-center">
                                            <h6 className="text-custom-white no-margin fw-600 cityname">Jaipur</h6>
                                        </div>
                                    </Link> </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="work-sec animate-img" style={{ borderRadius: "20px" }}> <Link to="used-cars-in-pune" className="cityname no_pop"> <img  loading="lazy" src={process.env.PUBLIC_URL + "/assets/images/city/5.webp"} style={{ height: "250px", width: "100%" }} alt="img" />
                                        <div className="text-wrapper text-center">
                                            <h6 className="text-custom-white no-margin fw-600 cityname">Pune</h6>
                                        </div>
                                    </Link> </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="work-sec animate-img" style={{ borderRadius: "20px" }}> <Link to="/used-cars-in-india" className="cityname no_pop" data-id='all' data-name='All India'> <img  loading="lazy" src={process.env.PUBLIC_URL + "/assets/images/city/6.webp"} style={{ height: "250px", width: "100%" }} alt="img" />
                                        <div className="text-wrapper text-center">
                                            <h5 className="text-custom-white no-margin fw-600 cityname">All India</h5>
                                        </div>
                                    </Link> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Category;