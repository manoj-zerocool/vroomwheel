import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import NavHelper from '../../helper/NavHelper';

class Footer extends NavHelper {
    constructor(props) {
        super(props);
        this.state = {
            city_id: "" ,
            cityname:"",
            path_hwe_blog:"",
        };
    }

    componentDidMount() {
        var protocal =window.location.protocol;
        var hostname_hwe = window.location.host;
var hostname = hostname_hwe.replace('www.','');
        if(hostname == 'localhost:3000'){
            
             this.setState({ path_hwe_blog: protocal+"//blog.vroomwheel.com" });
        }else{
            this.setState({ path_hwe_blog: protocal+"//blog."+hostname});

        
        
        }
        const city_id = localStorage.getItem("city_id");
const cityname=localStorage.getItem("selected_city");
        this.setState({ city_id: city_id })
        this.setState({ cityname: cityname })
    }

    render() {
        const backToTop = this.state.stickyHeader ? ' d-block' : '';

        const container_style = {
            padding: "0rem 3rem"
        };

        const mystyle = {
            background: "#ff0000",
            color: "#fff",
            fontWeight: "500",
            border: "none",
            borderRadius: "5px",
            padding: "15px 60px",
            fontFamily: "Futura Md BT"
        };

        return (
            <Fragment>
                {/* Start Footer */}
                <footer className="section-padding footer" style={{ background: "#0e3a54", paddingTop: "3rem", paddingBottom: "2rem" }}>
                    <div className="container-fluid" style={container_style}>
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <div className="footer-box mb-md-40">
                                    <div className="footer_logo mb-4"> <Link to="/"> <img  loading="lazy" src={process.env.PUBLIC_URL + "/assets/images/VROOM-WHEEL-logo-F.webp"} className="img-fluid" alt="logo" style={{ Maxwidth: "195px", height: "74px" }} /> </Link> </div>
                                    <p className="text-custom-white">
                                        Vroomwheel is India's first online search engine for finding used or second hand Cars.
                                    </p>
                                    <ul className="custom-flex socials">
                                        <li><a href="https://www.facebook.com/VroomWheel/" className="text-custom-white fs-14 no_pop"><i className="fab fa-facebook-f" /></a></li>
                                        <li><a href="https://twitter.com/vroomwheel" className="text-custom-white fs-14 no_pop"><i className="fab fa-twitter" /></a></li>
                                        <li><a href="https://www.instagram.com/vroomwheel/" className="text-custom-white fs-14 no_pop"><i className="fab fa-instagram" /></a></li>
                                        <li><a href="https://www.youtube.com/channel/UCyiZfoIe1v9ViIsAjVEK4mA/about" className="text-custom-white fs-14 no_pop"><i className="fab fa-youtube" /></a></li>
                                    </ul>
                                    <p className="text-custom-white mt-3">© 2023, VroomWheel | All Right Reserved.</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="footer-box mb-md-40">
                                    <h4 className="text-custom-white fw-600 fot_head">Used Cars</h4>
                                    <ul className="m-0 p-0 main">
                                        <li><Link  className="no_pop" to="used-cars-in-delhi">Delhi-NCR</Link></li>
                                        <li><Link  className="no_pop" to="used-cars-in-mumbai">Mumbai</Link></li>
                                        <li><Link  className="no_pop" to="used-car-in-chennai">Chennai </Link></li>
                                        <li><Link  className="no_pop" to="used-car-in-kolkata">Kolkata </Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="footer-box mb-md-40">
                                    <h4 className="text-custom-white fw-600 fot_head">About</h4>
                                    <ul className="m-0 p-0 main">
                                        <li><Link className="no_pop" to="about">About Us</Link></li>
                                        <li><a  className="no_pop" href={this.state.path_hwe_blog}>Blog</a></li>
                                        <li><Link  className="no_pop" to="privacy-policy">Privacy Policy</Link></li>
                                        <li><Link   className="no_pop" to="term-condition">Terms and Conditions</Link></li>
                                        <li><Link  className="no_pop" to="contact-us">Contact Us</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="footer-box mb-sm-40">
                                    <h4 className="text-custom-white fw-600 fot_head">Buy Used car in</h4>
                                    <div className="newsletter">
                                        {/* <p className="text-custom-white"><Link to="used-cars-in-Delhi">Delhi NCR</Link> | <Link to="used-cars-in-Bangalore">Bangalore  </Link> | <Link to="used-cars-in-Mumbai">Mumbai </Link> | <Link to="used-cars-in-Pune">Pune </Link> | <Link to="used-cars-in-Delhi">Delhi </Link> | <Link to="used-cars-in-Noida">Noida </Link> | <Link to="used-cars-in-Chennai">Chennai </Link> | <Link to="used-cars-in-Kolkata">Kolkata </Link>  </p> */}
                                        <p className="text-custom-white"><Link  className="no_pop" to="used-car-in-bangalore">Bangalore </Link> | <Link  className="no_pop" to="used-car-in-hyderabad">Hyderabad </Link> | <Link  className="no_pop" to="used-car-in-kolkata"> Kolkata </Link> | <Link  className="no_pop" to="used-car-in-chennai"> Chennai  </Link> | <Link  className="no_pop" to="used-car-in-mumbai"> Mumbai  </Link> | <Link  className="no_pop" to="used-car-in-delhi"> Delhi  </Link> | <Link  className="no_pop" to="used-car-in-ahmedabad"> Ahmedabad </Link> | <Link  className="no_pop" to="used-car-in-surat"> Surat </Link> | <Link  className="no_pop" to="used-car-in-pune"> Pune </Link> | <Link  className="no_pop" to="used-car-in-jaipur"> Jaipur </Link> | <Link  className="no_pop" to="used-car-in-lucknow">Lucknow </Link> | <Link  className="no_pop" to="used-car-in-kanpur">Kanpur </Link> | <Link  className="no_pop" to="used-car-in-nagpur">Nagpur </Link> | <Link  className="no_pop" to="used-car-in-indore">Indore </Link> | <Link  className="no_pop" to="used-car-in-thane">Thane </Link> </p> 
                                    </div>   
                                    <Link to={"/used-cars-in-"+this.state.cityname} className="btn-first btn-small view_all mb-3" style={mystyle}>Browse Cars</Link>                                                                                                                                                                            
                                </div> 
                            </div>
                        </div>
                    </div>
                </footer>
                <div id="back-top" className={"back-top" + backToTop}> <Link to="#" data-toggle="button" aria-pressed="true" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><i className="flaticon-arrows"/></Link> </div>
            </Fragment>
        );
    }
}

export default Footer;