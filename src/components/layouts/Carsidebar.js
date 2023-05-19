import React, { Component } from 'react';
import $ from "jquery";
import * as CONSTANT from '../../Constent';

class Carsidebar extends Component {
    constructor(props) {
        super(props, ...arguments);
        this.state = {
            makemodel: [],
            fueltype: [],
            year: [],
        };
    }

    componentDidMount() {

        ///////////////////Get Make & Model////////////////////
        fetch(`${CONSTANT.BaseUrl}/services/get_modal_bymakeid`, {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((response) => {
                this.setState({ makemodel: response.result })
            })
            .catch((error) => {
            });

        ///////////////////Get Fueltype////////////////////
        fetch(`${CONSTANT.BaseUrl}/services/getfueltype`, {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((response) => {
                this.setState({ fueltype: response.result })
            })
            .catch((error) => {
            });

        ///////////////////Get Year////////////////////
        fetch(`${CONSTANT.BaseUrl}/services/getyear`, {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((response) => {
                this.setState({ year: response.result })
            })
            .catch((error) => {
            });
    }

    render() {

        $(document).ready(function () {

            $(".make").click(function () {
                $(this).children(".model").toggle();
            });

            // $(".makecheck").click(function () {
            //     var makename = $(this).children("p").html();
            //     localStorage.setItem('makename', makename);
            //     window.location.reload()
            // });

            // $(".modelcheck").click(function () {
            //     var modelname = $(this).children("p").html();
            //     localStorage.setItem('modelname', modelname);
            //     window.location.reload()
            // });

            // $(document).on('change', '.min_price', function () {
            //     var min_price = $(this).val();
            //     $(".min_price_val").val(min_price);
            // });

            // $(document).on('change', '.max_price', function () {
            //     var max_price = $(this).val();
            //     $(".max_price_val").val(max_price);
            // });
        });

        return (
            <div className="sidebar" style={{ maxHeight: "1000px", overflowY: "scroll", scrollbarWidth: "thin" }}>
                <div className="sidebar_widgets sidebar">
                    <form method="GET" action="" >
                        <div className="row">
                            <div className="col-md-12">
                                <button type="submit" className="btn-first btn-small btn-block filter_save">Filter</button>
                            </div>
                        </div>

                        {/* <div className="widget_title mt-2 pt-2">
                            <input type="range" className="form-range min_price" name="car_min_price" min="0" max="2500000" step="500000" />
                            <input type="range" className="form-range max_price" name="car_max_price" min="2500000" max="5000000" step="500000" />
                            <div className="row">
                                <div className="col-md-6">
                                    <input type="number" className="form-control mt-2 min_price_val" />
                                </div>
                                <div className="col-md-6">
                                    <input type="number" className="form-control mt-2 max_price_val" />
                                </div>
                            </div>
                        </div> */}

                        <div className="widget_title mt-2 pt-2">
                            <h6 className="no-margin text-custom-white" style={{ color: "#2e054e", fontFamily: "futura Lt BT" }}>Budget</h6>
                        </div>
                        <div className="widget_title mt-2 pt-2">
                            <div className="row">
                                <div className="col-md-6">
                                    <select class="form-select" name='car_min_price'>
                                        <option value="0" selected>Min</option>
                                        <option value="500000">500000</option>
                                        <option value="1000000">1000000</option>
                                        <option value="1500000">1500000</option>
                                        <option value="2000000">2000000</option>
                                        <option value="2500000">2500000</option>
                                    </select>
                                </div>
                                <div className="col-md-6">
                                    <select class="form-select" name='car_max_price'>
                                        <option value="" selected>Max</option>
                                        <option value="2500000">2500000</option>
                                        <option value="3000000">3000000</option>
                                        <option value="3500000">3500000</option>
                                        <option value="4000000">4000000</option>
                                        <option value="4500000">4500000</option>
                                        <option value="5000000">5000000</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="widget_title mt-2 pt-2">
                            <h6 className="no-margin text-custom-white" style={{ color: "#2e054e", fontFamily: "futura Lt BT" }}>Make + Model</h6>
                        </div>
                        <input type="search" className="form-control filter" placeholder="Search by Make or Model..." style={{ opacity: "70% !important" }} />
                        <div className="checkbox-group" style={{ maxHeight: "300px", overflowY: "scroll", scrollbarWidth: "thin" }}>
                            {this.state.makemodel.map((makemodel) => (
                                <div className="form-group" style={{ borderBottom: "1px solid #f0eded" }}>
                                    <div className="row make">
                                        <div className="col-sm-9 pl-0 phead">
                                            <label className="custom-checkbox makecheck">
                                                <input type="checkbox" className='makecheckval' name='make_ids[]' value={makemodel.make.id}/>
                                                <span className="checkmark" /> {makemodel.make.name}
                                                <p style={{ display: "none" }}>{makemodel.make.name}</p>
                                            </label>
                                        </div>
                                        <div className="col-sm-3 text-right" style={{ cursor: "pointer" }}><i className="fa fa-angle-down"></i></div>
                                        <div className="model" style={{ display: "none" }}>
                                            {makemodel.modal.map(modal => (
                                                <label className="custom-checkbox mt-3 ml-1 modelcheck">
                                                    <input type="checkbox" className='modelcheckval' name='modal_ids[]' Value={modal.id} />
                                                    <span className="checkmark" /> {modal.name}
                                                    <p style={{ display: "none" }}>{modal.name}</p>
                                                </label>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="widget_title mt-4">
                            <h6 className="no-margin text-custom-white" style={{ color: "#2e054e", fontFamily: "futura Lt BT" }}>Fuel Type</h6>
                        </div>
                        <div className="checkbox-group sidebar" style={{ maxHeight: "300px", overflowY: "scroll", scrollbarWidth: "thin" }}>
                            {this.state.fueltype.map(fueltype =>
                                <div className="form-group">
                                    <label className="custom-checkbox">
                                        <input type="checkbox" className="fueltype" name="fuel_type[]" Value={fueltype.id} />
                                        <span className="checkmark" />{fueltype.name}</label>
                                </div>
                            )}
                        </div>

                        <div className="widget_title mt-4">
                            <h6 className="no-margin text-custom-white" style={{ color: "#2e054e", fontFamily: "futura Lt BT" }}>Year</h6>
                        </div>
                        <div className="checkbox-group sidebar" style={{ maxHeight: "300px", overflowY: "scroll", scrollbarWidth: "thin" }}>
                            {this.state.year.map(year =>
                                <div className="form-group">
                                    <label className="custom-radio">
                                        <input type="radio" className="car_year" name="car_year" Value={year.id} style={{ height: "20px", width: "20px", position: "relative", top: "2px" }} />
                                        <span className="checkmark" /> {year.name} </label>
                                </div>
                            )}
                        </div>

                        <div className="widget_title mt-4">
                            <h6 className="no-margin text-custom-white" style={{ color: "#2e054e", fontFamily: "futura Lt BT" }}>KM Driven</h6>
                        </div>
                        <div className="checkbox-group sidebar" style={{ maxHeight: "300px", overflowY: "scroll", scrollbarWidth: "thin" }}>
                            <div className="form-group">
                                <label className="custom-radio">
                                    <input type="radio" className="kmdriven" name="km_driven" Value="10000" style={{ height: "20px", width: "20px", position: "relative", top: "2px" }} />
                                    <span className="checkmark" /> 10000 kms & less
                                </label>
                            </div>
                            <div className="form-group">
                                <label className="custom-radio">
                                    <input type="radio" className="kmdriven" name="km_driven" Value="30000" style={{ height: "20px", width: "20px", position: "relative", top: "2px" }} />
                                    <span className="checkmark" /> 30000 kms & less
                                </label>
                            </div>
                            <div className="form-group">
                                <label className="custom-radio">
                                    <input type="radio" className="kmdriven" name="km_driven" Value="50000" style={{ height: "20px", width: "20px", position: "relative", top: "2px" }} />
                                    <span className="checkmark" /> 50000 kms & less
                                </label>
                            </div>
                            <div className="form-group">
                                <label className="custom-radio">
                                    <input type="radio" className="kmdriven" name="km_driven" Value="75000" style={{ height: "20px", width: "20px", position: "relative", top: "2px" }} />
                                    <span className="checkmark" /> 75000 kms & less
                                </label>
                            </div>
                            <div className="form-group">
                                <label className="custom-radio">
                                    <input type="radio" className="kmdriven" name="km_driven" Value="100000" style={{ height: "20px", width: "20px", position: "relative", top: "2px" }} />
                                    <span className="checkmark" /> 100000 kms & less
                                </label>
                            </div>
                            <div className="form-group">
                                <label className="custom-radio">
                                    <input type="radio" className="kmdriven" name="km_driven" Value="200000" style={{ height: "20px", width: "20px", position: "relative", top: "2px" }} />
                                    <span className="checkmark" /> 200000 kms & less
                                </label>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-12">
                                <input type="hidden" name="car_sorting" Value="" id="car_sorting" />
                            </div>
                        </div>

                        <div className="widget_title mt-4">
                            <div className="row">
                                <div className="col-md-12">
                                    <button type="submit" className="btn-first btn-small btn-block filter_save">Filter</button>
                                </div>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        );

    }
}

export default Carsidebar;