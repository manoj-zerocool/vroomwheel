import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Header';
import Breadcrumbs from '../layouts/Breadcrumbs';
import Footer from '../layouts/Footer';
import Content from '../sections/car-details/Content';
import * as CONSTANT from '../../Constent';

const pagelocation = "Car Details";
const site_href = window.location.href.split('?')[0];
 
const site_title_hwe = window.location.href.split('?')[0];
const site_title_used = site_title_hwe.split('used')[1] ;
if(site_title_used !=null){
    var site_title_wr = 'Used-'+site_title_hwe.split('used')[1];
    var site_title_toupper =site_title_wr.toLowerCase().replaceAll("-"," ");
    var site_title =site_title_toupper.toLowerCase().replace(/^[\u00C0-\u1FFF\u2C00-\uD7FF\w]|\s[\u00C0-\u1FFF\u2C00-\uD7FF\w]/g, function(letter) {
        return letter.toUpperCase();
    });

}else{
    var site_title ='Vroom-wheel';
}    
var car_id = new URLSearchParams(window.location.search).get('car');
       

class Cardetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            meta_desc: "",
        };
    }
    componentDidMount() {
        

        const cityname = localStorage.getItem("selected_city");
        const city_id = localStorage.getItem("city_id");

        fetch(`${CONSTANT.BaseUrl}/services/get_cardetails_meta_hwe?id=${car_id}`, {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((response) => {
                console.log('ravio'+response.result);
                this.setState({ meta_desc: response.result[0]['Meta Description'].replaceAll("what_city_name",cityname) })
                // alert(this.state.meta_desc);
               

            })
            .catch((error) => {
            });
    }
    render() {
        return (
            <Fragment>
                <MetaTags>
                    <title>{site_title} | Vroom-wheel</title>
                    <link rel="canonical" href={site_href} />
                    <meta
                        name="description"
                        content={this.state.meta_desc}
                    />
                </MetaTags>
                <Header />
                {/* <Breadcrumbs breadcrumb={{ pagename: pagelocation }} /> */}
                <Content
                    detailId={this.props.match.params.id}
                />
                <Footer />
            </Fragment>
        );
    }
}

export default Cardetails;