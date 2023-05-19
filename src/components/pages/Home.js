import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import Content from '../sections/home/Content';
import * as CONSTANT from '../../Constent';

// const pagelocation = "Homepage";

const site_href = window.location.href.split('?')[0];


class Home extends Component {
  
    render() {
        return (
            <Fragment>
                <MetaTags>
                    <title>Used Cars Online in India | Buy Used Cars in India | Vroom-wheel</title>
                    <link rel="canonical" href={site_href} />
                    <meta
                        name="description"
                        content="Welcome to VroomWheel, We are the No.1 search platform for used cars in India, we provide preowned cars in Mumbai, Bangalore and Delhi NCR."
                    />
                </MetaTags>
                <Header />
                <Content />
                <Footer />
            </Fragment>
        );
    }
}

export default Home;