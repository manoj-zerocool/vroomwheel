import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Header';
import Breadcrumbs from '../layouts/Breadcrumbs';
import Footer from '../layouts/Footer';
import Verify from '../sections/email/Verifyemail';

const pagelocation = "Verify";

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
                <Verify />
                <Footer />
            </Fragment>
        );
    }
}

export default Contact;