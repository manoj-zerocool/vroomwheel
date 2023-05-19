import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import carsblock from '../../../data/cars.json';
import { getFilteredPosts } from '../../../helper/carHelper';
import { getType } from "../../../helper/helper";
import Partners from '../../layouts/Partners';
import Pagination from "react-js-pagination";

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.getPosts(),
            activePage: 1,
            itemPerpage: 6
        }
    }
    getPosts() {
        var tag = this.props.tagId ? this.props.tagId : '';
        var author = this.props.authorId ? this.props.authorId : '';
        var filteredItems = getFilteredPosts(carsblock, { tag, author });
        return filteredItems;
    }
    handlePageChange(pageNumber) {
        this.setState({ activePage: pageNumber });
    }
    render() {
        const paginationData = this.state.data.slice((this.state.activePage - 1) * this.state.itemPerpage, this.state.activePage * this.state.itemPerpage).map((item, i) => {
            return <div className="col-lg-4 col-md-6" key={i}>
                <div className="car-grid mb-xl-30">
                    <div className="car-grid-wrapper car-grid bx-wrapper">
                        <div className="image-sec animate-img"> <Link to={"/car-details/" + item.id}>
                            {getType(item.cartype).map((type, i) => (
                                <img  loading="lazy" src={process.env.PUBLIC_URL + "/" + item.img} className="full-width" key={i} alt={type.title} />
                            ))}
                        </Link> </div>
                        <div className="car-grid-caption padding-20 bg-custom-white p-relative">
                            <h4 className="title fs-16">
                                {getType(item.cartype).map((type, i) => (
                                    <Link to={"/car-details/" + item.id} className="text-custom-black" key={i}>{type.title}<small className="text-light-dark">{item.bookingtime}</small></Link>
                                ))}
                            </h4>
                            <span className="price"><small>From</small>${new Intl.NumberFormat().format((item.price).toFixed(2))}</span>
                            <p>{item.shortdesc}</p>
                            <div className="action"> <Link to={"/car-details/" + item.id} className="btn-second btn-small">View</Link> <Link className="btn-first btn-submit yellow" to="/booking">Book</Link> </div>
                        </div>
                    </div>
                </div>
            </div>
        });
        return (
            <Fragment>
                <section className="section-padding bg-light-white">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="listing-top-heading mb-xl-20">
                                    <h6 className="no-margin text-custom-black">Showing {paginationData.length} Results</h6>
                                    <div className="sort-by"> <span className="text-custom-black fs-14 fw-600">Sort by</span>
                                        <div className="group-form">
                                            <select className="form-control form-control-custom custom-select">
                                                <option>A to Z</option>
                                                <option>Z to A</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {paginationData}
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <nav className="section-padding-top pagination_layout">
                                    <Pagination
                                        activePage={this.state.activePage}
                                        itemsCountPerPage={this.state.itemPerpage}
                                        totalItemsCount={this.state.data.length}
                                        pageRangeDisplayed={this.state.data.length}
                                        onChange={this.handlePageChange.bind(this)}
                                        innerClass="pagination mb-0 justify-content-center"
                                        activeClass="active"
                                        itemClass="page-item"
                                        linkClass="page-link"
                                    />
                                </nav>
                            </div>
                        </div>
                    </div>
                </section>
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