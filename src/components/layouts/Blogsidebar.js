import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import tags from "../../data/blogtags.json";
import category from "../../data/blogcategory.json";
import { getRecentPost } from "../../helper/blogHelper";
import Slider from "react-slick";

const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    cssEase: 'linear',
    responsive: [{
        breakpoint: 768,
        settings: {
            dots: false,
            slidesToShow: 1
        }
    }]
}

class Blogsidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: ''
        };
    }
    // Search Filter
    onChange(event) {
        this.setState({ searchText: event.target.value })
    }
    handleSubmit(e) {
        e.preventDefault();
        //const { history } = this.props;
        if (this.state.searchText === "") {
            return;
        } else {
            this.props.history.push("/blog/search/" + this.state.searchText);
        }
    }
    render() {
        return (
            <div className="sidebar">
                <div className="sidebar_widgets mb-xl-30">
                    <div className="widget_title">
                        <h5 className="no-margin text-custom-white">Search</h5>
                    </div>
                    <form onSubmit={this.handleSubmit.bind(this)} method="GET">
                        <div className="input-group group-form">
                            <input type="search" name="searchText" value={this.state.searchText} onChange={this.onChange.bind(this)} className="form-control form-control-custom" placeholder="Search" required />
                            <button type="submit" className="input-group-append"> <i className="fas fa-search" /> </button>
                        </div>
                    </form>
                </div>
                <div className="sidebar_widgets mb-xl-30">
                    <div className="widget_title">
                        <h5 className="no-margin text-custom-white">Category</h5>
                    </div>
                    <ul className="categories custom">
                        {category.map((item, i) => (
                            <li key={i}>
                                <Link to={"/blog/cat/" + item.id} className="text-custom-black fs-14">{item.title} <span className="text-light-dark">({item.count})</span></Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="sidebar_widgets mb-xl-30">
                    <div className="widget_title">
                        <h5 className="no-margin text-custom-white">Popular Post</h5>
                    </div>
                    <ul className="custom popular_post">
                        {getRecentPost().map((item, i) => (
                            <li className="mb-xl-20" key={i}>
                                <div className="post">
                                    <div className="post-wrapper">
                                        <div className="popular_post_img animate-img">
                                            <Link to={"/blog-details/" + item.id}>
                                                <img  loading="lazy" src={process.env.PUBLIC_URL + "/" + item.image} className="image-fit" alt={item.title} />
                                            </Link>
                                        </div>
                                        <div className="popular_post_title">
                                            <h6><Link to={"/blog-details/" + item.id} className="text-custom-black fs-14">{item.title}</Link></h6>
                                            <span className="date text-custom-blue fw-600 fs-14">{item.postdate}</span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* Sidebar Widgets */}
                <div className="sidebar_widgets mb-xl-30">
                    <div className="widget_title">
                        <h5 className="no-margin text-custom-white">Recent Posts</h5>
                    </div>
                    <Slider className="popular-post custom resend-banner sidebar-arrow arrow-layout-2" {...settings}>
                        {getRecentPost().map((item, i) => (
                            <li key={i} className="post-box">
                                <div className="post-img p-relative mb-xl-20">
                                    <Link to={"/blog-details/" + item.id}>
                                        <img  loading="lazy" src={process.env.PUBLIC_URL + "/" + item.image} className="full-width" alt={item.title} />
                                    </Link>
                                    <div className="post-meta"> <Link to={"/blog-details/" + item.id} className="btn-second btn-small mt-3">View Details</Link> </div>
                                </div>
                                <p className="mb-xl-50">{item.shortdesc}</p>
                            </li>
                        ))}
                    </Slider>
                </div>
                {/* Sidebar Widgets */}
                <div className="sidebar_widgets">
                    <div className="widget_title">
                        <h5 className="no-margin text-custom-white">Tags</h5>
                    </div>
                    <div className="tags">
                        {tags.map((item, i) => (
                            <Link to={"/blog/tag/" + item.id} key={i}>{item.title}</Link>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Blogsidebar);