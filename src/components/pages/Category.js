import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Header';
// import Breadcrumbs from '../layouts/Breadcrumbs';
import Footer from '../layouts/Footer';
import * as CONSTANT from '../../Constent';

import Content from '../sections/category/Content';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/slick-carousel/slick/slick.css';
import '../../../node_modules/magnific-popup/dist/magnific-popup.css';
const pagelocation = "Category";

//   else if (search1_hwer.indexOf("lakhs") >= 0) {
//     const blog_url1 = search1_hwer.split("-to-");
//     var firstint = blog_url1[0].replace ( /[^\d.]/g, '' )*100000;
//     var sectint = blog_url1[1].replace ( /[^\d.]/g, '' )*100000;
//     const new_url = "https://manojsahu.ml/used-cars-over-"+firstint+"-rs-under-"+sectint+"-rs-in-All India";
//     window.location.href  = new_url;
//     var Error =null;
//   }
class Carsleft extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            title: "",
            meta_desc: "",
            site_href: "",
        };
    }
    
    componentDidMount() {
       

        this.setState({site_href : window.location.href.split('?')[0]});
        const site_title_hwe = window.location.href.split('?')[0];
        const site_title_used = site_title_hwe.split('used')[1] ;
        if(site_title_used !=null){
            var site_title_wr = 'Used-'+site_title_hwe.split('used')[1];
            var site_title_toupper =site_title_wr.toLowerCase().replaceAll("-"," ");
            var site_title =site_title_toupper.toLowerCase().replace(/^[\u00C0-\u1FFF\u2C00-\uD7FF\w]|\s[\u00C0-\u1FFF\u2C00-\uD7FF\w]/g, function(letter) {
                return letter.toUpperCase();
            });
        
        }else{
            this.setState({site_href : 'Vroom-wheel'});
        }    
        var sql_make_name='';
        var first_int =null;
        var second_int =null;
                const search1_hwer = window.location.pathname;
                var city_name = search1_hwer.split("in-")[1];
                if ((city_name.indexOf("/") >= 0)){
                    var valid_path= window.location.protocol+'//'+window.location.host+''+search1_hwer.slice(0, search1_hwer.lastIndexOf('/'));
                    window.location.replace(valid_path);
                }
                 if ((search1_hwer.indexOf("used-") >= 0) && (search1_hwer.indexOf("under") <= 1 )  && (search1_hwer.indexOf("under-car") <= 1 )){
                const make_name_get = search1_hwer.split("used-")[1];
                   
                    if(make_name_get.indexOf("-cars") >=0){
                         sql_make_name = make_name_get.split("-cars")[0].replaceAll("-"," ");
        
                }else if(make_name_get.indexOf("cars") >=0){
                  //  alert(city_name);
                     sql_make_name = city_name;
                    }
                    else{
        
                         sql_make_name =city_name;
                    }
        
                  
                  } else if((search1_hwer.indexOf("under") >= 0 )  && (search1_hwer.indexOf("under-car") <= 1 )){
                    const blog_url1 = search1_hwer.split("-rs-under-");
                     first_int = blog_url1[0].replace ( /[^\d.]/g, '' );
                     if(blog_url1[1] != undefined){

                         second_int = blog_url1[1].replace ( /[^\d.]/g, '' );
                     }
                     sql_make_name ='bugdet';
                  }
        const cityname = localStorage.getItem("selected_city");
        const city_id = localStorage.getItem("city_id");
        fetch(`${CONSTANT.BaseUrl}/services/get_meta_hwe?key=${sql_make_name}`, {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((response) => {
                console.log('ravio'+response.result);
                this.setState({ meta_desc: response.result[0]['Meta Description'].replaceAll("what_city_name",city_name).replaceAll("bugdet_int_one",first_int).replaceAll("bugdet_int_two",second_int) })
                this.setState({ title: response.result[0]['Title'].replaceAll("what_city_name",city_name).replaceAll("bugdet_int_one",first_int).replaceAll("bugdet_int_two",second_int) })
                // alert(this.state.meta_desc);
            })
            .catch((error) => {
            });

    }
    render() {
        return (
            <Fragment>
                <MetaTags>
                    {/* <title>Vroom-wheel | { pagelocation}</title> */}
                    <title> {this.state.title} | Vroom-wheel </title>
                    <link rel="canonical" href={this.state.site_href} />
                    <meta
                        name="description"
                        content={this.state.meta_desc} />
                </MetaTags>
                <Header />
                <h1></h1>
                {/* <Breadcrumbs breadcrumb={{ pagename: pagelocation }} /> */}
                <Content />
                <Footer />
            </Fragment>
        );
    }
}

export default Carsleft;