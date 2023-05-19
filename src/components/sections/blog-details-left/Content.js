import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import blogblock from '../../../data/blog.json';
import { getBlog, getPostNavigation, getDateInitials } from '../../../helper/blogHelper';
import { getAuthor, getTags, getCategories } from '../../../helper/helper';
import Sidebar from '../../layouts/Blogsidebar';
import Partners from '../../layouts/Partners';

class Content extends Component {
    render() {
        const detailId = this.props.detailId;
        const item = getBlog(detailId);
        return (
            <Fragment>
                <section className="section-padding bg-light-white">
                    <div className="container">
                        <div className="row">
                            <h6 className="d-none">1</h6>
                            <aside className="col-lg-4">
                                <div className="sidebar_wrap mb-md-80">
                                    <Sidebar />
                                </div>
                            </aside>
                            <div className="col-lg-8">
                                <div className="row">
                                    <h6 className="d-none">1</h6>
                                    <div className="col-12">
                                        <div className="blog-details bx-wrapper bg-custom-white padding-20">
                                            {/* article */}
                                            <article className="post p-relative">
                                                <div className="post-wrapper">
                                                    <div className="post-img animate-img mb-xl-20"> <img  loading="lazy" src={process.env.PUBLIC_URL + "/" + item.image} className="image-fit" alt={item.title} /> </div>
                                                    <div className="blog-meta bg-custom-white">
                                                        <div className="post-meta-box mb-xl-20">
                                                            <div className="post-categories">
                                                                {getCategories(item.category).map((cat, i) => (
                                                                    <Link to={"/blog/cat/" + cat.id} className="text-custom-black fs-18" key={i}>{cat.title},
                                                                    </Link>
                                                                ))}
                                                            </div>
                                                            <div className="post-meta"> <Link to="#" className="text-light-dark mr-2" tabIndex={-1}>
                                                                <span className="text-custom-blue"> <i className="fas fa-comment" /> </span>
                                                                {item.reviews.length}
                                                            </Link> <Link to="#" className="text-light-dark mr-2" tabIndex={-1}> <span className="text-custom-blue"> <i className="fas fa-thumbs-up" /> </span>
                                                                    {item.likes}
                                                                </Link>
                                                                <div className="post-date" dangerouslySetInnerHTML={{ __html: getDateInitials(item.postdate) }}>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="post-heading p-relative">
                                                            <h2><Link to={"/blog-details/" + item.id} className="text-custom-black">{item.title}</Link></h2>
                                                        </div>
                                                        {getAuthor(item.author).map((author, i) => (
                                                            <div className="post-author mb-xl-20" key={i}>
                                                                <div className="author-img animate-img">
                                                                    <Link to={"/blog/user/" + author.id}> <img  loading="lazy" src={process.env.PUBLIC_URL + "/" + author.img} className="rounded-circle" alt={author.name} />
                                                                    </Link>
                                                                </div>
                                                                <span className="text-theme fs-14">By <Link to={"/blog/user/" + author.id} className="text-custom-black fw-500">{author.name}</Link></span>
                                                            </div>
                                                        ))}
                                                        <div dangerouslySetInnerHTML={{ __html: item.longdesc }} />
                                                    </div>

                                                </div>
                                            </article>
                                            {/* article */}
                                            <hr />
                                            {/* tags & social */}
                                            <div className="post-details-tags-social mb-xl-20">
                                                <div className="row no-margin">
                                                    <div className="col-md-6">
                                                        <div className="tags-box"> <span className="fs-18 text-light-dark"><i className="fas fa-tags" /></span>
                                                            <div className="tags">
                                                                {getTags(item.tags).map((tag, i) => (
                                                                    <Link to={"/blog/tag/" + tag.id} key={i}>{tag.title}</Link>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="social-media-box">
                                                            <ul className="custom-flex">
                                                                <li> <Link to="#" className="fb"> <i className="fab fa-facebook-f" /> </Link> <span className="social-number bg-light-white">500</span> </li>
                                                                <li> <Link to="#" className="tw"> <i className="fab fa-twitter" /> </Link> <span className="social-number bg-light-white">20</span> </li>
                                                                <li> <Link to="#" className="fb"> <i className="fab fa-youtube" /> </Link> <span className="social-number bg-light-white">46</span> </li>
                                                                <li> <Link to="#" className="bg-custom-blue"> <i className="fas fa-share-alt" /> </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* tags & social */}
                                            {/* post author */}
                                            {getAuthor(item.author).map((author, i) => (
                                                <div className="post-author bg-light-white padding-15 mb-xl-20" key={i}>
                                                    <div className="author-img animate-img mb-sm-20"> <Link to={"/blog/user/" + author.id}> <img  loading="lazy" src={process.env.PUBLIC_URL + "/" + author.img} className="image-fit" alt={author.name} /> </Link>
                                                    </div>
                                                    <div className="author-caption">
                                                        <h5 className="fw-600"><Link to={"/blog/user/" + author.id} className="text-custom-black">{author.name}</Link>
                                                            {author.social.map((media, i) => (
                                                                <span className="text-custom-blue fs-16 ml-2" key={i}><i className={media.icon} /></span>
                                                            ))}
                                                        </h5>
                                                        <Link to={"/blog/user/" + author.id} className="authorpost text-custom-blue fw-600">Most
                                                            article by this author</Link>
                                                        <p className="text-light-white">{author.longdesc}</p>
                                                    </div>
                                                </div>
                                            ))}
                                            {/* post author */}
                                            {/* post pagination */}
                                            <div className="pagination-btn">
                                                <nav>
                                                    <ul className="pagination">
                                                        {getPostNavigation(blogblock, blogblock.findIndex(item => parseInt(item.id) === parseInt(detailId)))}
                                                    </ul>
                                                </nav>
                                            </div>
                                            {/* post pagination */}
                                            {/* comments */}
                                            <div className="comment-box section-padding-top p-relative">
                                                <div id="comment-box">
                                                    <h4 className="text-custom-black fw-600">Reviews [{item.reviews.length}]</h4>
                                                    <ul className="comments custom">
                                                        {item.reviews.map((review, i) => (
                                                            <li className="comment" key={i}>
                                                                <article>
                                                                    <div className="comment-avatar"> <img  loading="lazy" src={process.env.PUBLIC_URL + "/" + review.img} className="rounded-circle" alt={review.name} /> </div>
                                                                    <div className="comment-content">
                                                                        <div className="comment-meta">
                                                                            <div className="comment-meta-header">
                                                                                <h5 className="text-custom-black fw-600 author mb-3">{review.name}
                                                                                </h5>
                                                                                <div className="post-date"> <Link to="/blog-details" className="date bg-custom-blue text-custom-white">{review.date}</Link>
                                                                                </div>
                                                                            </div>
                                                                            <div className="comment-meta-reply"> <Link to="#" className="comment-reply-link btn-first btn-submit"><i className="fas fa-reply" /></Link> </div>
                                                                        </div>
                                                                        <div className="comment">
                                                                            <p className="text-light-dark">{review.comment}</p>
                                                                        </div>
                                                                    </div>
                                                                </article>
                                                                <ul className="children">
                                                                    {review.replies.map((reply, i) => (
                                                                        <li className="comment" key={i}>
                                                                            <article>
                                                                                <div className="comment-avatar"> <img  loading="lazy" src={process.env.PUBLIC_URL + "/" + reply.img} className="rounded-circle" alt={reply.name} /> </div>
                                                                                <div className="comment-content">
                                                                                    <div className="comment-meta">
                                                                                        <div className="comment-meta-header">
                                                                                            <h5 className="text-custom-black fw-600 author mb-3">
                                                                                                {reply.name}</h5>
                                                                                            <div className="post-date"> <Link to="/blog-details" className="date bg-custom-blue text-custom-white">{reply.date}</Link>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="comment-meta-reply"> <Link to="#" className="comment-reply-link btn-first btn-submit"><i className="fas fa-reply" /></Link> </div>
                                                                                    </div>
                                                                                    <div className="comment">
                                                                                        <p className="text-light-dark">{reply.comment}</p>
                                                                                    </div>
                                                                                </div>
                                                                            </article>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                    <div className="comment-respond" id="respond">
                                                        <h4 className="text-custom-black fw-600">Leave Comment</h4>
                                                        <form>
                                                            <div className="row">
                                                                <div className="col-md-6">
                                                                    <div className="form-group">
                                                                        <label className="text-custom-black fw-500 fs-14">Full Name</label>
                                                                        <input type="text" name="#" className="form-control form-control-custom" placeholder="Full Name" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="form-group">
                                                                        <label className="text-custom-black fw-500 fs-14">Email I'd</label>
                                                                        <input type="email" name="#" className="form-control form-control-custom" placeholder="Email I'd" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-12">
                                                                    <div className="form-group">
                                                                        <label className="text-custom-black fw-500 fs-14">Comment</label>
                                                                        <textarea rows={4} name="#" className="form-control form-control-custom" placeholder="Comment" defaultValue={""} />
                                                                    </div>
                                                                    <button type="submit" className="btn-first btn-submit">Leave Comment</button>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* comments */}
                                        </div>
                                    </div>
                                </div>
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