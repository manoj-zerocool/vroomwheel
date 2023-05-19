import React, { Component } from 'react';

class Bannertabs extends Component {
    render() {
        return (
            <div className="banner-tabs">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="tabs">
                                <div className="tab-content">
                                    <div className="tab-pane active">
                                        <div className="tab-inner">
                                            <form>
                                                <div className="row">
                                                    <div className="col-lg-4 col-md-6">
                                                        <div className="form-group">
                                                            <label className="fs-14 text-custom-white fw-600">Pick Up</label>
                                                            <input type="text" name="#" className="form-control form-control-custom" placeholder="city, distirct or specific airpot" />
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-6">
                                                                <div className="form-group">
                                                                    <label className="fs-14 text-custom-white fw-600">Pick Up Date/Time</label>
                                                                    <div className="input-group group-form">
                                                                        <input type="text" name="#" className="form-control form-control-custom datepickr" placeholder="mm/dd/yy" readOnly />
                                                                        <span className="input-group-append"> <i className="far fa-calendar" /> </span> </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-6">
                                                                <div className="form-group">
                                                                    <label className="submit" />
                                                                    <div className="group-form">
                                                                        <select className="custom-select form-control form-control-custom">
                                                                            <option>Anytime</option>
                                                                            <option>Morning</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-6">
                                                        <div className="form-group">
                                                            <label className="fs-14 text-custom-white fw-600">Drop Off</label>
                                                            <input type="text" name="#" className="form-control form-control-custom" placeholder="city, distirct or specific airpot" />
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-6">
                                                                <div className="form-group">
                                                                    <label className="fs-14 text-custom-white fw-600">Drop Off Date/Time</label>
                                                                    <div className="input-group group-form">
                                                                        <input type="text" name="#" className="form-control form-control-custom datepickr" placeholder="mm/dd/yy" readOnly />
                                                                        <span className="input-group-append"> <i className="far fa-calendar" /> </span> </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-6">
                                                                <div className="form-group">
                                                                    <label className="submit" />
                                                                    <div className="group-form">
                                                                        <select className="custom-select form-control form-control-custom">
                                                                            <option>Anytime</option>
                                                                            <option>Morning</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-12">
                                                        <div className="row">
                                                            <div className="col-3">
                                                                <div className="form-group">
                                                                    <label className="fs-14 text-custom-white fw-600">Adults</label>
                                                                    <div className="group-form">
                                                                        <select className="custom-select form-control form-control-custom">
                                                                            <option>01</option>
                                                                            <option>02</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-3">
                                                                <div className="form-group">
                                                                    <label className="fs-14 text-custom-white fw-600">Kids</label>
                                                                    <div className="group-form">
                                                                        <select className="custom-select form-control form-control-custom">
                                                                            <option>01</option>
                                                                            <option>02</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-6">
                                                                <div className="form-group">
                                                                    <label className="fs-14 text-custom-white fw-600">Promocode</label>
                                                                    <input type="text" name="#" className="form-control form-control-custom" placeholder="type here" />
                                                                </div>
                                                            </div>
                                                            <div className="col-6">
                                                                <div className="form-group">
                                                                    <label className="fs-14 text-custom-white fw-600">Car Type</label>
                                                                    <div className="group-form">
                                                                        <select className="custom-select form-control form-control-custom">
                                                                            <option>Economy</option>
                                                                            <option>Compact</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-6">
                                                                <div className="form-group">
                                                                    <label className="submit" />
                                                                    <button className="btn-first btn-submit full-width btn-height">Search</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Bannertabs;