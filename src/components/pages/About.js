import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Header';
import Breadcrumbs from '../layouts/Breadcrumbs';
import Footer from '../layouts/Footer';
import Content from '../sections/about/Content';
import { colors } from '@material-ui/core';

const pagelocation = "About Us";

class About extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags>
                    <title>Vroom-wheel | {pagelocation}</title>
                    <meta
                        name="description"
                        content="#"
                    />
                </MetaTags>
                <Header />
                <Breadcrumbs breadcrumb={{ pagename: pagelocation }} />
                {/* <Content /> */}
                
                <div className="grid__item medium-up--five-sixths medium-up--push-one-twelfth " style={{margin: "72px 0px",padding:"0px 11px"}}>
                    <div className="section-header text-center d-flex justify-content-center">
                        <h1>About Us</h1>
                    </div>
                    <div className="rte mt-5 p-5 w-100">
                        <h4>About VroomWheel</h4>
                        <p><strong>Vroomwheel</strong> is India's first online search engine for finding used or <a href="https://vroomwheel.com/collections/used-cars-in-delhi-ncr">second-hand Cars</a>. Now online searching, finding and comparing second used cars in India is super easy by using <a href="https://vroomwheel.com" target="_blank" title="Used Cars Online in India | Buy Used Cars in India - Vroom Wheel" rel="noopener noreferrer">Vroomwheel.com</a>. Select you city and desired used car and compare all the listing available on internet. We provide all listings in one place and you can search all type of used cars of various make and models in petrol and diesel at affordable price in your city.<br/><br/>Currently, we are providing services in major cities like <a href="https://vroomwheel.com/collections/used-cars-in-delhi-ncr" target="_blank" title="Used Cars For Sale In Delhi NCR" rel="noopener noreferrer">Delhi NCR</a>, <a href="https://vroomwheel.com/collections/used-cars-in-mumbai" target="_blank" title="Second Hand Cars in Mumbai" rel="noopener noreferrer">Mumbai</a>, <a href="https://vroomwheel.com/collections/used-cars-in-bangalore" target="_blank" title="Used Cars for Sale in Bangalore" rel="noopener noreferrer">Bangalore</a> etc. and very soon we will cover other major cities in India to make sure you get the best deal in your city.<br/><br/></p>
                        <h2>FAQ</h2>
                        <p><strong>Qu.-</strong> What is VroomWheel ?</p>
                        <p><strong>Ans.-</strong> VroomWheel is online search engine for <a href="https://vroomwheel.com/">Used cars in India</a>. Here you will find all used car listings from different sites and able to filter and compare them as per your choice.</p>
                        <p>&nbsp;</p>
                        <p><strong>Qu.-</strong> How can I find best deal on used cars ?</p>
                        <p><strong>Ans.-</strong> It is a search engine for all used cars available on internet so you can find the best and cheap deal by sorting and comparing.<strong> </strong></p>
                        <p>&nbsp;</p>
                        <p><strong>Qu.-&nbsp; </strong>How can i buy a used cars in Vroomwheel.com ?</p>
                        <p><strong>Ans.-&nbsp;</strong>You have to select your city and select filters of your choice and use sorting to get desired results and you can visit original site for further details to buy.</p>
                        <p>&nbsp;</p>
                    </div>
                  
                </div>
            
                <Footer />
            </Fragment>
        );
    }
}

export default About;