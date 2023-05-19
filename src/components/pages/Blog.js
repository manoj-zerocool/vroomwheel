import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Header';
import Breadcrumbs from '../layouts/Breadcrumbs';
import Footer from '../layouts/Footer';
import Content from '../sections/blog/Content';

const pagelocation = "Blog Grid";

class Blog extends Component {
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
                {/* //<iframe src="http://blog.manojsahu.ml/" title=""style={{ height: "100vh"}}></iframe>  */}
                <Breadcrumbs breadcrumb={{ pagename: pagelocation }} />
                <Content
                    catId={this.props.match.params.catId}
                    tagId={this.props.match.params.tagId}
                    authorId={this.props.match.params.authorId}
                    query={this.props.match.params.query}
                />

                <Footer />
            </Fragment>
        );
    }
}

export default Blog;

// import { Component } from 'react';
// class Content extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
           
//             ravi: []
//         }
//     }

//     componentDidMount() {
//     fetch(`https://blog.manojsahu.ml/wp-json/blogapi/v1/mobile?task=get_blogs_rv`, {
//         method: 'GET',
//     })
//         .then((response) => response.json())
//         .then((response) => {
//             this.setState({ ravi:response});
//             <Wp_json post="ravi" />;
//             console.log(this.state.ravi);
//         })
//         .catch((error) => {
//         });
        
//     }
//     render() {
// return null;
//     }
// }

// export default Content;