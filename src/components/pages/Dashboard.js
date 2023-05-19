import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Header';
import Breadcrumbs from '../layouts/Breadcrumbs';
import Footer from '../layouts/Footer';
import Register from '../sections/dashboard/Dashboard';

const pagelocation = "Dashbord";

class Contact extends Component {
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
                <Register />
                <Footer />
            </Fragment>
        );
    }
}

export default Contact;