import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city_id: "" ,
            cityname:""
        };
    }

    componentDidMount() {
        const city_id = localStorage.getItem("city_id");
        const cityname=localStorage.getItem("selected_city")

        this.setState({ city_id: city_id })
        this.setState({ cityname: cityname })
    }

    render() {
        return (
            <section className="section-padding our-work-sec custome_mr pb-2">
                <div className="container">
                    <div className="section-header text-center">
                        <div className="section-heading">
                            <h3 className="text-custom-black" style={{ color: "#2e054e" }}>Search by Brand</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="row">
                                <div className="col-sm-3">
                                    <div className="animate-img" style={{ padding: "1rem", borderRadius: "20px", boxShadow: "0px 0px 5px #dbdbdb", background: "#dbdbddb" }}> <Link to={`/used-hyundai-cars-in-${this.state.cityname}`}> <img  loading="lazy" src={process.env.PUBLIC_URL + "/assets/images/brands/1.webp"} style={{ height: "100px", width: "100%" }} alt="img" />
                                        <div className="text-wrapper text-center">
                                            <h6 className="text-custom-white no-margin fw-600" style={{ color: "hwb(0 0% 100%)" }}>Hyundai</h6>
                                        </div>
                                    </Link> </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="animate-img" style={{ padding: "1rem", borderRadius: "20px", boxShadow: "0px 0px 5px #dbdbdb", background: "#dbdbddb" }}> <Link to={`/used-maruti-cars-in-${this.state.cityname}`}> <img  loading="lazy" src={process.env.PUBLIC_URL + "/assets/images/brands/2.webp"} style={{ height: "100px", width: "100%" }} alt="img" />
                                        <div className="text-wrapper text-center">
                                            <h6 className="text-custom-white no-margin fw-600" style={{ color: "hwb(0 0% 100%)" }}>Maruti</h6>
                                        </div>
                                    </Link> </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="animate-img" style={{ padding: "1rem", borderRadius: "20px", boxShadow: "0px 0px 5px #dbdbdb", background: "#dbdbddb" }}> <Link to={`/used-honda-cars-in-${this.state.cityname}`}> <img  loading="lazy" src={process.env.PUBLIC_URL + "/assets/images/brands/3.webp"} style={{ height: "100px", width: "100%" }} alt="img" />
                                        <div className="text-wrapper text-center">
                                            <h6 className="text-custom-white no-margin fw-600" style={{ color: "hwb(0 0% 100%)" }}>Honda</h6>
                                        </div>
                                    </Link> </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="animate-img" style={{ padding: "1rem", borderRadius: "20px", boxShadow: "0px 0px 5px #dbdbdb", background: "#dbdbddb" }}> <Link to={`/used-renault-cars-in-${this.state.cityname}`}> <img  loading="lazy" src={process.env.PUBLIC_URL + "/assets/images/brands/4.webp"} style={{ height: "100px", width: "100%" }} alt="img" />
                                        <div className="text-wrapper text-center">
                                            <h6 className="text-custom-white no-margin fw-600" style={{ color: "hwb(0 0% 100%)" }}>Renault</h6>
                                        </div>
                                    </Link> </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="animate-img" style={{ padding: "1rem", borderRadius: "20px", boxShadow: "0px 0px 5px #dbdbdb", background: "#dbdbddb" }}> <Link to={`/used-ford-cars-in-${this.state.cityname}`}> <img  loading="lazy" src={process.env.PUBLIC_URL + "/assets/images/brands/5.webp"} style={{ height: "100px", width: "100%" }} alt="img" />
                                        <div className="text-wrapper text-center">
                                            <h6 className="text-custom-white no-margin fw-600" style={{ color: "hwb(0 0% 100%)" }}>Ford</h6>
                                        </div>
                                    </Link> </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="animate-img" style={{ padding: "1rem", borderRadius: "20px", boxShadow: "0px 0px 5px #dbdbdb", background: "#dbdbddb" }}> <Link to={`/used-jeep-cars-in-${this.state.cityname}`}> <img  loading="lazy" src={process.env.PUBLIC_URL + "/assets/images/brands/6.webp"} style={{ height: "100px", width: "100%" }} alt="img" />
                                        <div className="text-wrapper text-center">
                                            <h6 className="text-custom-white no-margin fw-600" style={{ color: "hwb(0 0% 100%)" }}>Jeep</h6>
                                        </div>
                                    </Link> </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="animate-img" style={{ padding: "1rem", borderRadius: "20px", boxShadow: "0px 0px 5px #dbdbdb", background: "#dbdbddb" }}> <Link to={`/used-volkswagen-cars-in-${this.state.cityname}`}> <img  loading="lazy" src={process.env.PUBLIC_URL + "/assets/images/brands/7.webp"} style={{ height: "100px", width: "100%" }} alt="img" />
                                        <div className="text-wrapper text-center">
                                            <h6 className="text-custom-white no-margin fw-600" style={{ color: "hwb(0 0% 100%)" }}>Volkswagen</h6>
                                        </div>
                                    </Link> </div>
                                </div>
                                <div className="col-sm-3 text-center" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    <Link to={`/used-cars-in-${this.state.cityname}`}><h6>View all Brands</h6></Link>
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