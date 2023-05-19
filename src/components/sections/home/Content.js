import React, { Component, Fragment } from 'react';
import Banner from './Slider';
import Category from './Category';
import Gallery from './Gallery';
import Faq from './faq';
import Brands from './Brands';
import Details from "../category/Details";

class Content extends Component {
    render() {
        return (
            <Fragment>
                <Banner />
                <Category />
                <Gallery />
                <Brands />
                <Faq />
                <Details />
            </Fragment>
        );
    }
}

export default Content;