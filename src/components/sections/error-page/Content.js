import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Content extends Component {
    render() {
        return (
            <div className="page-404 parallax">
                {/* Start 404 */}
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-padding page-404-text">
                                <div className="text-wrapper">
                                    <h1 className="text-custom-white">ouch!</h1>
                                    <h6 className="text-custom-white">sorry the page you are looking for does not exist</h6>
                                    <Link to="/" className="btn-first btn-submit">Back to Home</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End 404 */}
            </div>
        );
    }
}

export default Content;