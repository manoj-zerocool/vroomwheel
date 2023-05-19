import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class About extends Component {
    render() {
        return (
            <section className="about-us" style={{ padding: "30px 0" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h6 style={{ color: "#2e054e" }}>Why <span className="text-custom-blue">Rumble</span></h6>
                            <p style={{ color: "#2e054e" }}>Rumble takes the risk out of buying a pre-owned car to offer you peace of mind with zero compromises. Our multi-step filtering ensures that you always get to choose from a pool of highest quality certified second hand cars. When you buy a Rumble Assured car, you get a used car that is non-accidental, non-meter tampered, has clean records and has been thoroughly tested against a stringent 200 point inspection checklist. Any used car can get certified. It takes perfection to be Rumble Certified. Experience a simple & fully transparent way of buying used cars with Rumble. Find your perfect match from our wide range of fully inspected & certified used cars at the best prices. All Rumble Assured cars come with hassle-free paperwork, free RC transfer, and used car finance options with low-interest rates starting from only 12.5%. With Rumble, pre-owned is better than new. Get the savings of a pre-owned with the quality of a new car. All this through a transparent, convenient and trustworthy process, to make sure you buy a car you'll love, guaranteed.</p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;