import React, { Component, Fragment } from 'react';
import Abouttext from './Abouttext';
import Team from './Team';
import Whyus from './Whyus';
import Partners from '../../layouts/Partners';

class Content extends Component {
    render() {
        return (
            <Fragment>
                <Abouttext />
                <Whyus />
                <Team /> 
                {/* Start Partners */}
                <section className="section-padding partners">
                    <Partners />
                </section>
                {/* End Partners */}
            </Fragment>
        );
    }
}

export default Content;