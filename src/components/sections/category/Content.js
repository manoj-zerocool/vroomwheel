/* eslint-disable no-redeclare */
import React, { Component, Fragment } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from 'react-router-dom';
import Cars from "../home/Cars";
import Media from "../home/Blogs";
import FAQ from "../home/faq";
import Details from "./Details";
import $ from "jquery";
import * as CONSTANT from '../../../Constent';
//import MultiRangeSlider from "./rangeslider";
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";
import { isMobile } from "react-device-detect";
import zIndex from '@material-ui/core/styles/zIndex';

class Content extends Component {
    constructor() {
        super();
        this.state = {
            car_listing: [],
            total_cars: '',
            limit: 18,
            querystringhwe: "",
            makemodel: [],
            fueltype: [],
            year: [],
           
            changepara: 0,
            formvalue: "",
            isloading: true,

            makebradcrumb: "",
            modelbradcrumb: "",

            makebradcrumb_id: "",
            modelbradcrumb_id: "",
            makebradcrumb_name: "",
            modelbradcrumb_name: "",

            fuel: [],
            make:[],
            model:[],
            fyear: "",
            kmdriven: "",
            owner: "",
            price: "",
            carminprice: 50000,
            carmaxprice: 50000000
        }
       
        // this.handleScroll = this.handleScroll.bind(this);
        // var myMovie = document.getElementsByClassName('list_listitem');
        // alert(myMovie);
// myMovie.addEventListener('nv-enter', function (event) {
//      console.log('change scope');
// });     
        window.addEventListener('scroll', this.handleScroll, true);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.makeChange = this.makeChange.bind(this);
        this.modelChange = this.modelChange.bind(this);
        this.openModel = this.openModel.bind(this);
        this.filterClick = this.filterClick.bind(this);
    }
    onSlide = (render, handle, value, un, percent) => {
        $('.fluidhwe').addClass("fluidhwe_blur");

        function numDifferentiation(val) {
            // val = (val/100000).toFixed(2)+ ' Lac';)
            if(val >= 10000000){ val = (val/10000000).toFixed()+ 'CR'; }
            else if(val >= 100000){ val = (val/100000).toFixed() + 'L';}
            // else if(val >= 1000){ val = (val/1000).toFixed() + 'K';}
            else if(val >= 1000){ val = val = 0.5 + 'L';}
            // alert(val);
            return val;
        }

        this.setState({
            carminprice: Math.round(value[0]),
            carmaxprice: Math.round(value[1])
        });

        var minprice = new Intl.NumberFormat('en-IN', {

            currency: 'INR'
        }).format(this.state.carminprice).split(",");
        var maxprice = new Intl.NumberFormat('en-IN', {

            currency: 'INR'
        }).format(this.state.carmaxprice).split(",");
        if (minprice[1] > 0) {
            var min = numDifferentiation(this.state.carminprice);// minprice[0] + "." + minprice[1];
        }
        else {
            var min = numDifferentiation(this.state.carminprice);//minprice[0];
        }


        if (0) {
            var max = numDifferentiation(this.state.carmaxprice);//maxprice[0] + "." + maxprice[1];
        }
        else {
            var max =numDifferentiation(this.state.carmaxprice);// maxprice[0];
        }


        if (this.state.carmaxprice >= 10000000) {

            this.setState({ price: "Rs " + min + " - " + max  + " X" });

        } else {
            this.setState({ price: "Rs " + min + " - " + max  + " X" });

        }
        $(".p_hwe").css({ "padding": "7px", "margin-top": "5px", "margin-left": "5px" })
        $(".p_hwe").attr("data-id", this.state.carminprice);
        $(".p_hwe").attr("data-id1", this.state.carmaxprice);
        $('.filter_save').trigger('click');
        $(".clear_all").show();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        //$('.filter_short_hwe').addClass('sticky');
        this.setState({ car_listing: []});


    };

    componentDidMount() {
        $(".navigation-wrapper").hide();
      $('#no_data').hide();
        $('#list_listitem').scroll(function(event){
         
            
         });
        // setTimeout(() => {
        //     $(".clear_all").show();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        //$('.filter_short_hwe').addClass('sticky');
        // }, 5000);
        $('.fluidhwe').addClass("fluidhwe_blur");

        const search = window.location.search;
        const search1 = window.location.pathname;
        const city_validation = search1.split('-in-')[1];
        localStorage.setItem('selected_city', city_validation.replace('/',''));
        var car_min_price ="" ;
        var car_max_price = "";
        var makequerystring = "";

        if (search1.indexOf("-rs") >= 0) {
            const getrs = search1.split("-rs");
            const getminvlaue = getrs[0].split("over-");


            console.log(getminvlaue);
            if (getminvlaue[1]) {

                car_min_price = getminvlaue[1];
                makequerystring = makequerystring + "&car_min_price=" + car_min_price;
            }
            if (getrs[1].indexOf("under") >= 0) {
                car_max_price = getrs[1].replace("-under-", "");
                makequerystring = makequerystring + "&car_max_price=" + car_max_price;
            }
        }
        if (search1.indexOf("-from") >= 0) {
            //alert('year');
            var getyear = search1.split("from-");
            var findyar = getyear[1].split("-");
            var car_year = findyar[0];
            makequerystring = makequerystring + "&car_year=" + car_year;

        }
        if (search1.indexOf("used-cars") < 0) {
            var fuel_typeget = search1.split('-cars');
            var getdata = fuel_typeget[0].replace("/used-", "");

            if(getdata.indexOf('-') != -1){
                if(getdata.indexOf('st-owner') != -1){
                    var fuel_array = getdata.split('st-owner-');
                    console.log(fuel_array);
                    if(fuel_array.length > 1){
                       
                    if(fuel_array[1].indexOf('-') != -1){
                        var fuel_array_hwe = fuel_array[1].split('-');
                        var fuel_type = fuel_array_hwe[0];
                    }else{
                    var fuel_type = fuel_array[1];
                    }
                }
                }
                else if(getdata.indexOf('nd-owner') != -1){
                    var fuel_array = getdata.split('nd-owner-');
                    console.log(fuel_array);
                    if(fuel_array.length > 1){
                       
                    if(fuel_array[1].indexOf('-') != -1){
                        var fuel_array_hwe = fuel_array[1].split('-');
                        var fuel_type = fuel_array_hwe[0];
                    }else{
                    var fuel_type = fuel_array[1];
                    }
                }
                }
                else if(getdata.indexOf('rd-owner') != -1){
                    var fuel_array = getdata.split('rd-owner-');
                    console.log(fuel_array);
                    if(fuel_array.length > 1){
                       
                    if(fuel_array[1].indexOf('-') != -1){
                        var fuel_array_hwe = fuel_array[1].split('-');
                        var fuel_type = fuel_array_hwe[0];
                    }else{
                    var fuel_type = fuel_array[1];
                    }
                }
                }
                else if(getdata.indexOf('th-owner') != -1){
                    var fuel_array = getdata.split('th-owner-');
                    console.log(fuel_array);
                    if(fuel_array.length > 1){
                       
                    if(fuel_array[1].indexOf('-') != -1){
                        var fuel_array_hwe = fuel_array[1].split('-');
                        var fuel_type = fuel_array_hwe[0];
                    }else{
                    var fuel_type = fuel_array[1];
                    }
                }
                }else{
                    var fuel_array = getdata.split('-');
                    var fuel_type = fuel_array[0];
                }
            }else{
                var fuel_type = getdata;
            }
            makequerystring = makequerystring + "&fuel_type[]=" + fuel_type;
        } // else if(search1.indexOf("-owner") < 0){

        // }
        
        if (search1.indexOf("kms") >= 0) {
            var kamdriget = search1.split('-kms-');
            var getdatanew = kamdriget[0].split("under-");
            var km_driven = getdatanew[1].replace(",", "");
            makequerystring = makequerystring + "&km_driven[]=" + km_driven;

        }
        if (search1.indexOf("owner") >= 0) {
            var ownwergwt = search1.split('-owner-');
             
           if(ownwergwt[0].indexOf('used-') != -1){
           var getdatanewow = ownwergwt[0].split("/used-");
           if(getdatanewow[1].indexOf('cars-') != -1){
            var getdatanewow = getdatanewow[1].split("cars-");
           }
           }
           if(getdatanewow[1].indexOf('st') != -1){
            var owner = getdatanewow[1].replace('st','');
            makequerystring = makequerystring + "&owner[]=" + owner;
           }else if(getdatanewow[1].indexOf('nd') != -1){
            var owner = getdatanewow[1].replace('nd','');
            makequerystring = makequerystring + "&owner[]=" + owner;
           }else if(getdatanewow[1].indexOf('rd') != -1){
            var owner = getdatanewow[1].replace('rd','');
            makequerystring = makequerystring + "&owner[]=" + owner;
           }else if(getdatanewow[1].indexOf('th') != -1){
            var owner = getdatanewow[1].replace('th','');
            makequerystring = makequerystring + "&owner[]=" + owner;
           }
        }

        if (search1.indexOf("used-cars") < 0) {
            var maketypeget = search1.split('-cars');
            var getdata = maketypeget[0].replace("/used-", "");
             var get_final =maketypeget[0].split('-');
            var make_ids = get_final[get_final.length-1];
            makequerystring = makequerystring + "&make_ids[]=" + make_ids;


            var modaltypeget = search1.split('-cars');
            var getdata = modaltypeget[0].replace("/used-", "");
            var get_final =maketypeget[0].split('-');
            var modal_ids =get_final[get_final.length-1];
            makequerystring = makequerystring + "&modal_ids[]=" + modal_ids;
            // get_final[get_final.length-2]+'-'+

        }
        this.setState({ querystringhwe: makequerystring });
        this.car_listing();
        // console.log(ownwergwt);
        // console.log(getdatanewow);
        // alert(modal_ids);


        //const make_ids = new URLSearchParams(search).get('make_ids[]');
        // const modal_ids = new URLSearchParams(search).get('modal_ids[]');


        //const km_driven = new URLSearchParams(search).get('km_driven');
        // const owner = new URLSearchParams(search).get('owner');

        // const car_max_price = new URLSearchParams(search).get('car_max_price');

        if (make_ids) {
            setTimeout(() => {
                if ($(".make_ids" + make_ids).length > 0) {
                    $(".make_ids" + make_ids).prop("checked", true);
                    if ($(".make_ids" + make_ids).prop("checked") == true) {
                        $(".hwe" + make_ids).prop('checked', true);
                        var modelcheck = $('input.modelcheckval:checked').length;
                        if (modelcheck == 1) {
                            var modelcheck = $('.modelcheckval:checked').next("p").html();
                            this.setState({ modelbradcrumb: "> " + modelcheck });
                            var modelcheck_val = $('.modelcheckval:checked').val();
                            var classset = $('.modelcheckval:checked').attr("class");
                            var newval = classset.split("modal_ids" + modelcheck_val + " ");
                            var modalset = newval[1].replace("modal_ids", "");

                            // modalset=modelcheck.toLowerCase() ;
                            // alert(modalset);
                            this.setState({ modelbradcrumb_id: modelcheck_val });
                            this.setState({ modelbradcrumb_name: modalset });


                        }
                    }
                    var makechecked = $('input.makecheckval:checked').next("p").html();
                    this.setState({ makebradcrumb: "> " + makechecked });
                    this.setState({ makebradcrumb_id: make_ids });
                    var makeset = makechecked.toLowerCase();
                    makeset = makeset.replace(" ", "-");
                    this.setState({ makebradcrumb_name: makeset });
                }
            }, 5000);
        }
        if (modal_ids) {
            setTimeout(() => {

                // alert(".modal_ids" + modal_ids);
                if ($(".modal_ids" + modal_ids).length > 0) {
                    $(".modal_ids" + modal_ids).prop("checked", true);
                    var modelcheck = $('input.modelcheckval:checked').length;
                    if (modelcheck == 1) {
                        var modelcheck = $('.modelcheckval:checked').next("p").html();
                        this.setState({ modelbradcrumb: "> " + modelcheck });

                        this.setState({ modelbradcrumb_id: modal_ids });
                    }
                }
            }, 5000);
        }
        if (fuel_type) {
            $(".clear_all").show();
            this.setState({ car_listing: [] })
            window.scrollTo({ top: 0, behavior: 'smooth' });
            //$('.filter_short_hwe').addClass('sticky');
            setTimeout(() => {
                $(".fuel_type" + fuel_type).prop("checked", true);
                var fuelval = [];
                var i = 0;
                $(".fueltype:checkbox:checked").each(function () {
                    var fuilval = $(this).val();
                    var fuilattr = $(this).attr('fuil_type');
                    fuelval[i++] = { 'id': fuilval, name: fuilattr };
                });
                this.setState({ fuel: fuelval })

                $(".clear_all").show();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                //$('.filter_short_hwe').addClass('sticky');
                var makeval = [];
                
                $(".makecheckval:checkbox:checked").each(function () {
                   var total_checkbox_hwe = $(this).parent().parent().parent().find('> .model > label >  input.modelcheckval').length; 
                   var  selected_total_checkbox = $(this).parent().parent().parent().find('> .model > label >  input.modelcheckval:checked').length; 
                    var make_val = $(this).val();
                    var makeattr = $(this).attr('make_type');

                    if(selected_total_checkbox == total_checkbox_hwe){
                    makeval[make_val] = { 'id': make_val, name: makeattr };
                    }
                });
   
                this.setState({ make: makeval })

                var modelval = [];
           
            $(".modelcheckval:checkbox:checked").each(function () {
                var  total_checkbox = $(this).parent().parent().find('> label >  input.modelcheckval').length;
                var  selected_total_checkbox = $(this).parent().parent().find('> label >  input.modelcheckval:checked').length;
                var model_val = $(this).val();
                var modelattr = $(this).attr('model_type');
                if(selected_total_checkbox < total_checkbox){
                modelval[model_val] = { 'id': model_val, name: modelattr};
                }
            });
            this.setState({ model: modelval })

            }, 5000);
        }
        if (car_year) {
            $(".clear_all").show();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            //$('.filter_short_hwe').addClass('sticky');
            setTimeout(() => {
                $(".car_year" + car_year).prop("checked", true);
                this.setState({ fyear: car_year + " & above X" });
                $(".y_hwe").css({ "padding": "3px", "margin-top": "5px", "margin-left": "5px" })
                let y_hwe = $(".car_year" + car_year).val();
                $(".y_hwe").attr("data-id", y_hwe);
                $(".clear_all").show();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                //$('.filter_short_hwe').addClass('sticky');
            }, 5000);
        }
         if (km_driven) {
            
            $(".clear_all").show();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            //$('.filter_short_hwe').addClass('sticky');
            setTimeout(() => {
                $(".km_driven" + km_driven).prop("checked", true);
                this.setState({ kmdriven: new Intl.NumberFormat('US').format(km_driven) + " km X" });
                $(".km_hwe").css({ "padding": "3px", "margin-top": "10px", "margin-left": "5px" })
                let km_hwe = $(".km_driven" + km_driven).val();
                $(".km_hwe").attr("data-id", km_hwe);
                $(".clear_all").show();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                //$('.filter_short_hwe').addClass('sticky');
            }, 5000);
        }
        if (owner) {
            $(".clear_all").show();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            //$('.filter_short_hwe').addClass('sticky');
            setTimeout(() => {
                $(".owner" + owner).prop("checked", true);
                var ownerattr = $(".owner" + owner).attr('owner');
                this.setState({ owner: ownerattr + " X" });
                $(".o_hwe").css({ "padding": "3px", "margin-top": "5px", "margin-left": "5px" })
                let o_hwe = $(".owner" + owner).val();
                $(".o_hwe").attr("data-id", o_hwe);
                $(".clear_all").show();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                //$('.filter_short_hwe').addClass('sticky');
            }, 5000);
        }
         if (car_min_price && car_max_price) {
            function numDifferentiation(val) {
                // val = (val/100000).toFixed(2)+ ' Lac';)
                if(val >= 10000000){ val = (val/10000000).toFixed()+ 'CR'; }
                else if(val >= 100000){ val = (val/100000).toFixed() + 'L';}
                // else if(val >= 1000){ val = 0.5(val/1000).toFixed() + 'K';}
                else if(val >= 1000){ val = 0.5 + 'L';}
                // alert(val);
                return val;
            }
            $(".clear_all").show();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            //$('.filter_short_hwe').addClass('sticky');
            this.setState({ carminprice: car_min_price });
            this.setState({ carmaxprice: car_max_price });
            var minprice = new Intl.NumberFormat('en-IN', {

                currency: 'INR'
            }).format(car_min_price).split(",");
            var maxprice = new Intl.NumberFormat('en-IN', {

                currency: 'INR'
            }).format(car_max_price).split(",");
            if (0) {
                var max = numDifferentiation(car_max_price);//maxprice[0] + "." + maxprice[1];
            }
            else {
                var max = numDifferentiation(car_max_price);//maxprice[0];
            }
            if (0) {
                var min = numDifferentiation(car_min_price);//minprice[0] + "." + minprice[1];
            }
            else {
                var min = numDifferentiation(car_min_price);//minprice[0];
            }


            if (car_max_price >= 10000000) {

                this.setState({ price: "Rs " + min + " - " + max  + " X" });

            } else {
                this.setState({ price: "Rs " + min + " - " + max  + " X" });

            }
            $(".p_hwe").css({ "padding": "7px", "margin-top": "5px", "margin-left": "5px" })
            $(".p_hwe").attr("data-id", car_min_price);
            $(".p_hwe").attr("data-id1", car_max_price);
            $(".clear_all").show();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            //$('.filter_short_hwe').addClass('sticky');
        }

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

    ///////////////////Get Car listing////////////////////
    async car_listing() {
        var city = localStorage.getItem("selected_city");
        if (city == null) {
            const city_get_hwe = window.location.pathname.split('-in-')[1];
            if(city_get_hwe == null){

                    $('#exampleModal').show();
                    $('#exampleModal').css('backdrop-filter','blur(6px) saturate(100%) contrast(100%)');
                    $('#exampleModal').find('.close').hide();
                   
                
            }else{
                localStorage.setItem('city_id', 'all');
                localStorage.setItem('selected_city', city_get_hwe.replace('/',''));
            }
            
            // alert("Please Select City");
            // window.location.href = "/"
        }

        //$(".loader").show();

        var filter = "";
        // alert(this.state.changepara);
        if (this.state.changepara == 0) {  
            const queryString = window.location.pathname;
            const queryString__data = window.location.search || '';
            var filter = queryString.replace("/", "path=")+ queryString__data;
        }
        else if (this.state.changepara == 1) {
            var filter = this.state.formvalue;

        }

        const d = new Date();
        let time = d.getTime();
        // alert(time);
        console.log(filter);



        await fetch(`${CONSTANT.BaseUrl}/services/get_car_listing?limit=${this.state.limit}&start=0&${filter}&time=${time}`, {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((response) => {
            
            // alert(response.time);
          this.setState({ car_listing: this.state.car_listing.concat(response.result) })
        //   this.setState({ car_listing: response.result })
        // if(response.time == time){
            // this.setState({ car_listing: response.result })
        // }
                console.log('car_listing');
                console.log(this.state.car_listing);
                this.setState({ total_cars: response.total_cars })
                this.setState({ isloading: true })
               if(response.total_cars == 0){
                $('#no_data').removeClass('d-none');
                $('#no_data').show();
               }else{
                $('#no_data').addClass('d-none');
                $('#no_data').hide();
               }
                $(".loader").hide();
                $('.fluidhwe').removeClass("fluidhwe_blur");
            })
            .catch((error) => {
            });
    }
   

    handleScroll = (event) => {
        // $(window).scroll(function () {
        // this.car_listing();
        // $(".loader").show();
        // if (this.state.isloading == true) {
        //     this.setState({ limit: this.state.limit + 9 })
        // }
        // this.setState({ isloading: false })


              /*   // var sticky =$('#sticky_nav_cat').offset();
$(window).scroll(function() {
 
    var top_position = $(window).scrollTop();
    if(top_position >= 100){
        $('#sticky_nav_cat').addClass('sticky_scroll');
        $('#sticky_nav_cat > .filteradd_hwe_parent').removeClass('col-md-7');
        $('#sticky_nav_cat > .filteradd_hwe_parent').addClass('col-md-6 pt-3');
        $('#sticky_nav_cat > .filter_short_hwe_hwe ').addClass('pt-2');
        $('#sticky_nav_cat > .filter_short_hwe_hwe > .custome_group').addClass('sticky');
      
    }else{
        $('#sticky_nav_cat ').removeClass('sticky_scroll');
        $('.filter_short_hwe.sticky').css('position','sticky !important');
        $('.filter_short_hwe').css('position','sticky !important')
        $('#sticky_nav_cat > .filteradd_hwe_parent').addClass('col-md-7');
        $('#sticky_nav_cat > .filteradd_hwe_parent').removeClass('col-md-6 pt-3');
        $('#sticky_nav_cat > .filter_short_hwe_hwe ').removeClass('pt-2');
        $('#sticky_nav_cat > .filter_short_hwe_hwe > .custome_group').removeClass('sticky');

    }

})
}) */

console.log(event);
// console.log(event.target.body.id);
// console.log('-------------------------------------------')

if(event.bubbles){
    var body_class_type =event.target.body.id;

}else{
    var body_class_type =event.target.id;

}
// alert(body_class_type);
if('rumble_scroll' == body_class_type){
    var scrollHeight = $(document).height() - $(".hwefeature").height() - $(".footer").height();
    var top_position = $(window).scrollTop();
    if((top_position >= 101)){
        $('.desktop_sidebar').addClass('up');

    }else{
       
        $('.desktop_sidebar').removeClass('up');


    
    }
    if((top_position >= 101) && (this.state.make.length > 0 || this.state.model.length > 0 || this.state.fuel.length > 0 || this.state.fyear != '' || this.state.kmdriven!= '' || this.state.price!= '' || this.state.owner != '')){
        var class_name_hwe ="fixed_with__data";
        $('#sticky_nav_cat,.mobilefilter_hwe').removeClass('sticky_with_data');
        $('#sticky_nav_cat,.mobilefilter_hwe').removeClass('sticky_with_non_data');
        $('#sticky_nav_cat,.mobilefilter_hwe').addClass('fixed_with__data');
    }else if((top_position >= 101) && (this.state.make.length < 1 || this.state.model.length < 1 || this.state.fuel.length < 1 || this.state.fyear == '' || this.state.kmdriven == '' || this.state.price == '' || this.state.owner == '')){
        $('#sticky_nav_cat,.mobilefilter_hwe').removeClass('fixed_with__data');
        $('#sticky_nav_cat,.mobilefilter_hwe').removeClass('sticky_with_data');
        $('#sticky_nav_cat,.mobilefilter_hwe').removeClass('sticky_with_non_data');
        $('#sticky_nav_cat,.mobilefilter_hwe').addClass('sticky_with_non_data');
    }else if((top_position < 100) && (this.state.make.length > 0 || this.state.model.length > 0 || this.state.fuel.length > 0 || this.state.fyear != '' || this.state.kmdriven!= '' || this.state.price!= '' || this.state.owner != '')){
        $('#sticky_nav_cat,.mobilefilter_hwe').removeClass('fixed_with__data');
        $('#sticky_nav_cat,.mobilefilter_hwe').removeClass('sticky_with_non_data');
        $('#sticky_nav_cat,.mobilefilter_hwe').addClass('sticky_with_data');
    } else if((top_position < 100) && (this.state.make.length < 1 || this.state.model.length < 1 || this.state.fuel.length < 1 || this.state.fyear == '' || this.state.kmdriven == '' || this.state.price == '' || this.state.owner == '')){
        $('#sticky_nav_cat,.mobilefilter_hwe').removeClass('fixed_with__data');
        $('#sticky_nav_cat,.mobilefilter_hwe').removeClass('sticky_with_non_data');
        $('#sticky_nav_cat,.mobilefilter_hwe').removeClass('sticky_with_data');
        $('#sticky_nav_cat,.mobilefilter_hwe').addClass('sticky_with_non_data');
    }else{
        var class_name_hwe ="sticky_with_data";
    }
    $('#sticky_nav_cat,.mobilefilter_hwe').addClass(class_name_hwe);
            if (this.state.limit < this.state.total_cars) {
                var lastPos = 0;
                var lastPos = 0;
                var scrollPos = $(window).height() + $(window).scrollTop();
                // console.log("feature" + $(".hwefeature").height());
                // console.log("height" + scrollHeight);
                // console.log("post" + scrollPos);
                // console.log("catlist" + $(".cat_list").height())
                if (((scrollHeight - 800) >= scrollPos) / scrollHeight <= 10) {
                    //$('.fluidhwe').addClass("fluidhwe_blur");
                   //$(".loader").show();
                    if (this.state.isloading == true) {
                        this.setState({ limit: this.state.limit + 18 })
                        this.car_listing();
                    }
                    this.setState({ isloading: false })
                }
           
            }
} 
}


    handleSubmit(e) {
        e.preventDefault();

        var formvalue = $("form :input[value!='']").serialize();
        this.setState({ formvalue: this.state.formvalue = formvalue })

        this.setState({ limit: this.state.limit = 18 })

        this.setState({ changepara: this.state.changepara = 1 })

        this.car_listing();
    }

    handleChange(e) {
        $('.fluidhwe').addClass("fluidhwe_blur");
        $('.fluidhwe').off('click');

        // $(".fluidhwe").css("");
        this.setState({ car_listing: []});
        
        var url_string = '';
        var Model_string = '';
        var Model_string_single ='';
        var make_string = '';
        var make_string_single ='';
        var fuel_string = '';
        var fuel_string_single ='';
        var url_string_multi = '';
        var path_year ='';
        var path_owner ='';
        var path_km ='';
        const pathname_her =  window.location.pathname;
        var get_city_name = pathname_her.split('-in-');
        localStorage.setItem('selected_city', get_city_name[1]);
        var make_model = $('.makecheckval:checkbox:checked').length;
       
        if (make_model > 0) {
            $(".clear_all").show();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            //$('.filter_short_hwe').addClass('sticky');
            var makeval = [];
            var i = 0;
            this.setState({ car_listing: []});
            // const search = ;
            $(".makecheckval:checkbox:checked").each(function () {
               var total_checkbox_hwe = $(this).parent().parent().parent().find('> .model > label >  input.modelcheckval').length; 
               var  selected_total_checkbox = $(this).parent().parent().parent().find('> .model > label >  input.modelcheckval:checked').length; 
                var make_val = $(this).val();
                var makeattr = $(this).attr('make_type');
                var makeslug = $(this).attr('make_slug');
                url_string +='"'+makeslug+'",';
                var url_string_rep = url_string.replace(/,\s*$/, "");

                if(make_model < 2){
                    make_string_single =makeslug+'-';
                    make_string='';
                   // window.history.pushState('', '', 'used-'+makeslug+'-cars-in-'+get_city_name[1]);
                }else{
                    make_string = '"make":['+url_string_rep+']';
                    make_string_single='';
                    //url_string_multi ='{"make":['+url_string_rep+']}';
                }
                if(selected_total_checkbox == total_checkbox_hwe){
                makeval[make_val] = { 'id': make_val, name: makeattr };
                }
            });

            this.setState({ make: makeval })
        }else{
            this.setState({ make: [] })

        }
      var model_extra_str = [];
    var model_model = $('input.modelcheckval:checked').length;
        if (model_model > 0) {
            url_string='';
            $(".clear_all").show();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            var modelval = [];
            var i = 0;
            var makeslug='';
            var make_replace_string='';
            this.setState({ car_listing: []});
            $(".modelcheckval:checkbox:checked").each(function () {
                var  total_checkbox = $(this).parent().parent().find('> label >  input.modelcheckval').length;
                var  selected_total_checkbox = $(this).parent().parent().find('> label >  input.modelcheckval:checked').length;
                var model_val = $(this).val();
                var modelattr = $(this).attr('model_type');
                 makeslug = $(this).attr('make_slug');
                var model_slug = $(this).attr('model_slug');
                if(selected_total_checkbox < total_checkbox){
                    //$(this).parent().parent().parent().find('.phead > label > input[make_slug="'+makeslug+'"]').removeAttr('checkked')
                    if(make_string.indexOf(makeslug) != -1){

                        make_replace_string = '"'+makeslug+'"';
                        url_string +='"'+makeslug+'_'+model_slug+'",';
                        var url_string_rep = url_string.replace(/,\s*$/, "");
                        if(model_extra_str.indexOf(makeslug) == -1){
                            model_extra_str[model_extra_str.length] = makeslug;
                            }
                            Model_string = '"model":['+url_string_rep+']';
                    }else if(make_string_single.indexOf(makeslug) != -1){
                        url_string +='"'+makeslug+'_'+model_slug+'",';
                        var url_string_rep = url_string.replace(/,\s*$/, "");
                        if(model_extra_str.indexOf(makeslug) == -1){
                            model_extra_str[model_extra_str.length] = makeslug;
                            }
                            Model_string = '"model":['+url_string_rep+']';
                    }else{
                        if(model_model > 1){
                           // make_string_single='';
                            url_string +='"'+makeslug+'_'+model_slug+'",';
                            var url_string_rep = url_string.replace(/,\s*$/, "");
                            Model_string = '"model":['+url_string_rep+']';
                        }else{
                            make_string_single =model_slug+'-';

                        }
                   // make_string='';
                    }
                        
                        modelval[model_val] = { 'id': model_val, name: modelattr};
                       
                        
                }else{
                    $(this).parent().parent().parent().find('.phead > label > input[make_slug="'+makeslug+'"]').prop('checked',true)
                }
                // var remove_make_str  = '"'+makeslug+'"';
                // if(make_string.indexOf(remove_make_str) != -1){
                // var new_make_str = make_string.replace(remove_make_str, "");
                // make_string = new_make_str;
                // }
            });
           
            this.setState({ model: modelval })
          
        }else{
            this.setState({ model: [] })

        }
        var fuellength = $(".fueltype:checkbox:checked").length;
        if (fuellength > 0) {
            url_string='';
            $(".clear_all").show();
           
            window.scrollTo({ top: 0, behavior: 'smooth' });
            //$('.filter_short_hwe').addClass('sticky');
            var fuelval = [];
            this.setState({ car_listing: []});
            var i = 0;
            $(".fueltype:checkbox:checked").each(function () {
                var fuilval = $(this).val();
                var fuilattr = $(this).attr('fuil_type');
                url_string +='"'+fuilattr+'",';
                var url_string_rep = url_string.replace(/,\s*$/, "");
                if(fuellength < 2){
                    fuel_string_single = fuilattr+'-';

                    fuel_string='';
                }else{
                    fuel_string_single ='';
                    fuel_string='"fuel":['+url_string_rep+']';
                    
                    //url_string_multi ='{"make":['+url_string_rep+']}';
                }
                   
                fuelval[fuilval] = { 'id': fuilval, name: fuilattr };
            });

            this.setState({ fuel: fuelval })
        }else{
            this.setState({ fuel: [] })

        }

        var year = $('input[name=car_year]:checked').val();
        if (year != undefined) {
            this.setState({ car_listing: []});
            $(".clear_all").show();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            //$('.filter_short_hwe').addClass('sticky');
            path_year =year;
            this.setState({ fyear: year + " & above X" });
            $(".y_hwe").css("padding", "3px");
            $(".y_hwe").attr("data-id", year);
            $(".clear_all").show();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            //$('.filter_short_hwe').addClass('sticky');
        }

        var kmdriven = $('input[name=km_driven]:checked').val();
        if (kmdriven != undefined) {
            this.setState({ car_listing: []});
             this.setState({ kmdriven: ''})
            $(".clear_all").show();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            //$('.filter_short_hwe').addClass('sticky');
            path_km =new Intl.NumberFormat('US').format(kmdriven);

            this.setState({ kmdriven: new Intl.NumberFormat('US').format(kmdriven) + " km X" });
            $(".km_hwe").css("padding", "3px");
            $(".km_hwe").attr("data-id", kmdriven);
            $(".clear_all").show();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            //$('.filter_short_hwe').addClass('sticky');
        }

        var owner = $('input[name=owner]:checked').attr('owner');
        if (owner != undefined) {
            this.setState({ car_listing: []});
            $(".clear_all").show();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            //$('.filter_short_hwe').addClass('sticky');
            this.setState({ owner: owner + " X" });
            $(".o_hwe").css("padding", "3px");
            var ownerval = $('input[name=owner]:checked').val();
            path_owner =ownerval;

            $(".o_hwe").attr("data-id", ownerval)
            $(".clear_all").show();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            //$('.filter_short_hwe').addClass('sticky');
        }
        // url changeing coding by ravi

        var first_str ='used-';
        var middle_str ='cars';
        var last_str ='-in-'+get_city_name[1];
        var multi_path = '?filterObject={';
        var make_string_path='';
        var model_string_path='';
        var path_year_hwe='';
        var path_owner_hwe='';
        var path_km_hwe='';
        if(path_year !=''){
            path_year_hwe ='-from-'+path_year;
        }
        if(path_km !=''){
            path_km_hwe ='-under-'+path_km+'-kms';
        }
        if(path_owner !=''){
            if(path_owner == 1){
                path_owner_hwe =path_owner+'st-owner-';
            }
            if(path_owner == 2){
                path_owner_hwe =path_owner+'nd-owner-';
            }
            if(path_owner == 3){
                path_owner_hwe =path_owner+'rd-owner-';
            }
            if(path_owner == 4){
                path_owner_hwe =path_owner+'th-owner-';
            }
            
        }
       if(make_string !=''){
         make_string_path +=make_string;
       }else{
         make_string_path ='';
       }
       if(Model_string !=''){
        make_string_single='';
        model_string_path +=','+Model_string;
        
       }
       if(fuel_string != ''){

           make_string_path +=','+fuel_string;

       }
       if(make_string_path != '' || model_string_path != ''){
        multi_path +=make_string_path;
        multi_path +=model_string_path;
           multi_path += '}';
           $.each(model_extra_str, function(index, item) {
            multi_path = multi_path.replace('"'+item+'",', "");
            
        });
           window.history.pushState('', '', first_str+path_owner_hwe+fuel_string_single+make_string_single+middle_str+path_year_hwe+path_km_hwe+last_str+multi_path);
       } else{
        window.history.pushState('', '', first_str+path_owner_hwe+fuel_string_single+make_string_single+middle_str+path_year_hwe+path_km_hwe+last_str);
       }
       const d = new Date();
       let time = d.getTime();
    //    alert(time);
        this.setState({ car_listing: []});
$('.filter_save').trigger('click');
    }

    // filterClick(e, id) {
    //     var attrval = e.currentTarget.getAttribute('data-id');
    //     // var attrval1 = e.currentTarget.getAttribute('data-id1');

    //     if (id == 1) {
    //         const fuelhwe = this.state.fuel;

    //         delete fuelhwe[attrval];

    //         $('.fuel_type' + attrval).prop('checked', false);

    //         var fuelval = [];
    //         $(".fueltype:checkbox:checked").each(function () {
    //             var fuilval = $(this).val();
    //             var fuilattr = $(this).attr('fuil_type');
    //             fuelval[fuilval] = { 'id': fuilval, name: fuilattr };
    //         });

    //         this.setState({ fuel: fuelval })

    //     } else if (id == 2) {

    //         $('.car_year' + attrval).prop('checked', false);
    //         this.setState({ fyear: "" });
    //         $(".y_hwe").css("padding", "0");

    //     } else if (id == 3) {

    //         $('.km_driven' + attrval).prop('checked', false);
    //         this.setState({ kmdriven: "" });
    //         $(".km_hwe").css("padding", "0");

    //     } else if (id == 4) {

    //         $('.owner' + attrval).prop('checked', false);
    //         this.setState({ owner: "" });
    //         $(".o_hwe").css("padding", "0");

    //     } else if (id == 5) {

    //         this.setState({ price: "" });
    //         $(".p_hwe").css("padding", "0");

    //     }
    //     else if (id == "all") {

    //         const fuelhwe = this.state.fuel;
    //         fuelhwe.length = 0;
    //         $('.fueltype').prop('checked', false);
    //         $(".f_hwe").css("padding", "0");

    //         $('.car_year').prop('checked', false);
    //         this.setState({ fyear: "" });
    //         $(".y_hwe").css("padding", "0");

    //         $('.kmdriven').prop('checked', false);
    //         this.setState({ kmdriven: "" });
    //         $(".km_hwe").css("padding", "0");

    //         $('.owner').prop('checked', false);
    //         this.setState({ owner: "" });
    //         $(".o_hwe").css("padding", "0");

    //         this.setState({ price: "" });
    //         $(".p_hwe").css("padding", "0");

    //         $('.clear_all').hide();

    //     }

    //     // if(this.state.fuel && this.state.fyear && this.state.kmdriven && this.state.owner && this.state.price == ""){
    //     //     $('.clear_all').hide();
    //     // }

    //     $('.filter_save').trigger('click');
    // }


    filterClick(e, id) {
        $('.fluidhwe').addClass("fluidhwe_blur");
        const pathname_her =  window.location.pathname;
        var get_city_name = pathname_her.split('-in-');
        var attrval = e.currentTarget.getAttribute('data-id');
        // var attrval1 = e.currentTarget.getAttribute('data-id1');
       var count_make= this.state.make.length;
       var count_model= this.state.model.length;
       
        if (id == 1) {
            const fuelhwe = this.state.fuel;

            delete fuelhwe[attrval];
            this.setState({ car_listing: []});
            $('.fuel_type' + attrval).prop('checked', false);
            const fuel_type = $('.fuel_type' + attrval).attr('fuil_type');
            const pathname_her =  window.location.pathname;
            const   new_path_nfv = pathname_her.replace('-'+fuel_type,'')
           window.history.pushState('', '', new_path_nfv);

            var fuelval = [];
            $(".fueltype:checkbox:checked").each(function () {
                var fuilval = $(this).val();
                var fuilattr = $(this).attr('fuil_type');
                fuelval[fuilval] = { 'id': fuilval, name: fuilattr };
            });
           
            this.setState({ fuel: fuelval })
            var count_fule =0;
            var count_make =0;
            var count_model =0;
             const count_hwe_fuel  = this.state.fuel;
             delete count_hwe_fuel[attrval];
             
             count_hwe_fuel.forEach(fuel => {
              count_fule++;
             });
              const count_hwe_make  = this.state.make;
              delete count_hwe_make[attrval];
             
              count_hwe_make.forEach(fuel => {
                 count_make++;
              });
               const count_hwe_model  = this.state.model;
               delete count_hwe_model[attrval];
              
               count_hwe_model.forEach(fuel => {
                 count_model++;
             });
            if (count_fule == 0 && !this.state.fyear && !this.state.kmdriven && !this.state.price && count_make ==0 && count_model == 0 || this.state.owner > 0)  {
                console.log("under");
                $('.clear_all').hide();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                $('.filter_short_hwe ').removeClass('sticky');

            }

        }if (id == 6) {
            const makehwe = this.state.make;

            delete makehwe[attrval];
            $('.make_type' + attrval).prop('checked', false);
            const make_name = $('.make_type' + attrval).attr('make_type');
            const make_slug = $('.make_type' + attrval).attr('make_slug');
            const pathname_her =  window.location.pathname;
            const   new_path_nfv = pathname_her.replace('-'+make_slug,'')

           window.history.pushState('', '', new_path_nfv);
            $('.make_type' + attrval).parent().parent().parent().find('> .model > label >  input.modelcheckval:checked').prop('checked', false);
            this.setState({ car_listing: []}); 
            var makeval = [];
            $(".makecheckval:checkbox:checked").each(function () {
                var total_checkbox_hwe = $(this).parent().parent().parent().find('> .model > label >  input.modelcheckval').length; 
                var  selected_total_checkbox = $(this).parent().parent().parent().find('> .model > label >  input.modelcheckval:checked').length; 
                 var make_val = $(this).val();
                 var makeattr = $(this).attr('make_type');
                 if(selected_total_checkbox == total_checkbox_hwe){
                 makeval[make_val] = { 'id': make_val, name: makeattr };
                 }
            });

            this.setState({ make: makeval })
            var count_fule =0;
            var count_make =0;
            var count_model =0;
             const count_hwe_fuel  = this.state.fuel;
             delete count_hwe_fuel[attrval];
             
             count_hwe_fuel.forEach(fuel => {
              count_fule++;
             });
              const count_hwe_make  = this.state.make;
              delete count_hwe_make[attrval];
             
              count_hwe_make.forEach(fuel => {
                 count_make++;
              });
               const count_hwe_model  = this.state.model;
               delete count_hwe_model[attrval];
              
               count_hwe_model.forEach(fuel => {
                 count_model++;
             });
            if (count_fule == 0 && !this.state.fyear && !this.state.kmdriven && !this.state.price && count_make ==0 && count_model == 0)  {
                console.log("under");
                $('.clear_all').hide();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                $('.filter_short_hwe ').removeClass('sticky');
            }
        }
        if (id == 7) {
            const modelhwe = this.state.model;

            delete modelhwe[attrval];

            $('.model_type' + attrval).prop('checked', false);
            const model_slug = $('.model_type' + attrval).attr('model_slug');
            const pathname_her =  window.location.pathname;
            const   new_path_nfv = pathname_her.replace('-'+model_slug,'')
           window.history.pushState('', '', new_path_nfv);
            if($('.model_type' + attrval).parent().parent().find('> label >  input.modelcheckval:checked').length == 0){
                $('.model_type' + attrval).parent().parent().parent().find('.phead > label > input').prop('checked', false);
                $('.model_type' + attrval).parent().parent().parent().find('.col-sm-3.text-right').trigger('click');
            }
            this.setState({ car_listing: []}); 
            var modelval = [];
            $(".modelcheckval:checkbox:checked").each(function () {
                var  total_checkbox = $(this).parent().parent().find('> label >  input.modelcheckval').length;
                var  selected_total_checkbox = $(this).parent().parent().find('> label >  input.modelcheckval:checked').length;
                var model_val = $(this).val();
                var modelattr = $(this).attr('model_type');
                if(selected_total_checkbox < total_checkbox){
                modelval[model_val] = { 'id': model_val, name: modelattr};
                }
            });

            this.setState({ model: modelval })
            var count_fule =0;
            var count_make =0;
            var count_model =0;
             const count_hwe_fuel  = this.state.fuel;
             delete count_hwe_fuel[attrval];
             
             count_hwe_fuel.forEach(fuel => {
              count_fule++;
             });
              const count_hwe_make  = this.state.make;
              delete count_hwe_make[attrval];
             
              count_hwe_make.forEach(fuel => {
                 count_make++;
              });
               const count_hwe_model  = this.state.model;
               delete count_hwe_model[attrval];
              
               count_hwe_model.forEach(fuel => {
                 count_model++;
             });
            if (count_fule == 0 && !this.state.fyear && !this.state.kmdriven && !this.state.price && count_make ==0 && count_model == 0)  {
                console.log("under");
                $('.clear_all').hide();
                window.scrollTo({ top: 0, behavior: 'smooth' });
               $('.filter_short_hwe ').removeClass('sticky');
            }

        }
        
        else if (id == 2) {
            $('.car_year' + attrval).prop('checked', false);
            const pathname_her =  window.location.pathname;
            const   new_path_nfv = pathname_her.replace('-from-'+attrval,'')
           window.history.pushState('', '', new_path_nfv);
            this.setState({ fyear: "" });
            $(".y_hwe").css("padding", "0");
            var count_fule =0;
            var count_make =0;
            var count_model =0;
             const count_hwe_fuel  = this.state.fuel;
             delete count_hwe_fuel[attrval];
             
             count_hwe_fuel.forEach(fuel => {
              count_fule++;
             });
              const count_hwe_make  = this.state.make;
              delete count_hwe_make[attrval];
             
              count_hwe_make.forEach(fuel => {
                 count_make++;
              });
               const count_hwe_model  = this.state.model;
               delete count_hwe_model[attrval];
              
               count_hwe_model.forEach(fuel => {
                 count_model++;
             });

        if (count_fule == 0 && !this.state.fyear && !this.state.kmdriven && !this.state.price && count_make ==0 && count_model == 0)  {
            console.log("under");
            $('.clear_all').hide();
            window.scrollTo({ top: 0, behavior: 'smooth' });
           $('.filter_short_hwe ').removeClass('sticky');
        }

        } else if (id == 3) {

            $('.km_driven' + attrval).prop('checked', false);
            const pathname_her =  window.location.pathname;
            const fn_hwe= new Intl.NumberFormat('US').format(attrval);
            const   new_path_nfv = pathname_her.replace('-under-'+fn_hwe+'-kms','')
           window.history.pushState('', '', new_path_nfv);
            this.setState({ kmdriven: "" });
            $(".km_hwe").css("padding", "0");
            var count_fule =0;
            var count_make =0;
            var count_model =0;
             const count_hwe_fuel  = this.state.fuel;
             delete count_hwe_fuel[attrval];
             
             count_hwe_fuel.forEach(fuel => {
              count_fule++;
             });
              const count_hwe_make  = this.state.make;
              delete count_hwe_make[attrval];
             
              count_hwe_make.forEach(fuel => {
                 count_make++;
              });
               const count_hwe_model  = this.state.model;
               delete count_hwe_model[attrval];
              
               count_hwe_model.forEach(fuel => {
                 count_model++;
             });
            if (count_fule == 0 && !this.state.fyear && !this.state.kmdriven && !this.state.price && count_make ==0 && count_model == 0)  {
                console.log("under");
                $('.clear_all').hide();
                window.scrollTo({ top: 0, behavior: 'smooth' });
               $('.filter_short_hwe ').removeClass('sticky');
            }

        } else if (id == 4) {

            $('.owner' + attrval).prop('checked', false);
            const pathname_her =  window.location.pathname;
            var remove_owner_str = '';

            if(attrval == 1){
                var remove_owner_str = 'st-owner';
            }else if(attrval == 2){
                var remove_owner_str = 'nd-owner';

            }else if(attrval == 3){
                var remove_owner_str = 'rd-owner';

            }else if(attrval == 4){
                var remove_owner_str = 'th-owner';

            }
            const   new_path_nfv = pathname_her.replace('-'+attrval+remove_owner_str,'')
           window.history.pushState('', '', new_path_nfv);
            this.setState({ owner: "" });
            $(".o_hwe").css("padding", "0");
            var count_fule =0;
            var count_make =0;
            var count_model =0;
             const count_hwe_fuel  = this.state.fuel;
             delete count_hwe_fuel[attrval];
             
             count_hwe_fuel.forEach(fuel => {
              count_fule++;
             });
              const count_hwe_make  = this.state.make;
              delete count_hwe_make[attrval];
             
              count_hwe_make.forEach(fuel => {
                 count_make++;
              });
               const count_hwe_model  = this.state.model;
               delete count_hwe_model[attrval];
              
               count_hwe_model.forEach(fuel => {
                 count_model++;
             });
            if (count_fule == 0 && !this.state.fyear && !this.state.kmdriven && !this.state.price && count_make ==0 && count_model == 0)  {
                console.log("under");
                $('.clear_all').hide();
                window.scrollTo({ top: 0, behavior: 'smooth' });
               $('.filter_short_hwe ').removeClass('sticky');
            }

        } else if (id == 5) {
            
            this.setState({ carminprice: 50000 });
            this.setState({ carmaxprice: 50000000 });


            $(".car_min_price").val(50000);
            $(".car_max_price").val(5000000);
            
            this.setState({ price: "" });
            $(".p_hwe").css("padding", "0");
            this.setState({ car_listing: []}); 
            
        
            var count_fule =0;
            var count_make =0;
            var count_model =0;
             const count_hwe_fuel  = this.state.fuel;
             delete count_hwe_fuel[attrval];
             
             count_hwe_fuel.forEach(fuel => {
              count_fule++;
             });
              const count_hwe_make  = this.state.make;
              delete count_hwe_make[attrval];
             
              count_hwe_make.forEach(fuel => {
                 count_make++;
              });
               const count_hwe_model  = this.state.model;
               delete count_hwe_model[attrval];
              
               count_hwe_model.forEach(fuel => {
                 count_model++;
             });
            // alert(this.state.price + '-'+this.state.kmdriven + '-'+ this.state.fyear) ;
           
            if (count_fule == 0 && !this.state.fyear && !this.state.kmdriven && !this.state.price && count_make ==0 && count_model == 0)  {
                console.log("under");
                $('.clear_all').hide();
                window.scrollTo({ top: 0, behavior: 'smooth' });
               $('.filter_short_hwe ').removeClass('sticky');
            }
            if (count_fule == 0 && !this.state.fyear && !this.state.kmdriven && this.state.price && count_make ==0 && count_model == 0)  {
                console.log("under");
                $('.clear_all').hide();
                window.scrollTo({ top: 0, behavior: 'smooth' });
               $('.filter_short_hwe ').removeClass('sticky');
            }
        // $('.filter_save').trigger('click');

        }
        else if (id == "all") {
            window.history.pushState('', '','used-cars-in-'+get_city_name[1]);
            const fuelhwe = this.state.fuel;
            const makehwe = this.state.make;
            const modelhwe = this.state.model;
            fuelhwe.length = 0;
            makehwe.length = 0;
            modelhwe.length = 0;
            this.setState({ carminprice: 50000 });
            this.setState({ carmaxprice: 50000000 });
            $(".car_min_price").val(50000);
            $(".car_max_price").val(5000000);

            $('.fueltype').prop('checked', false);
            $(".f_hwe").css("padding", "0");
            $('.makecheckval').prop('checked', false);
            $(".make_hwe").css("padding", "0");
           
            $('.modelcheckval').prop('checked', false);
            $(".model_hwe").css("padding", "0");
           

            $('.car_year').prop('checked', false);
            this.setState({ fyear: "" });
            $(".y_hwe").css("padding", "0");

            $('.kmdriven').prop('checked', false);
            this.setState({ kmdriven: "" });
            $(".km_hwe").css("padding", "0");

            $('.owner').prop('checked', false);
            this.setState({ owner: "" });
            $(".o_hwe").css("padding", "0");

            this.setState({ price: "" });
            $(".p_hwe").css("padding", "0");
            this.setState({ car_listing: []}); 
            $('.clear_all').hide()
            window.scrollTo({ top: 0, behavior: 'smooth' });;
            $('.filter_short_hwe').removeClass('sticky');

        }
        
        $('.filter_save').trigger('click');
        // this.setState({ car_listing: []});
    }

    handleClick(e) {
        $('.fluidhwe').addClass("fluidhwe_blur");
        this.setState({ car_listing: []});
        $('.filter_save').trigger('click');

    }

    openModel(id) {
        $(".model" + id).toggle();
    }

    makeChange(make) {
        var makecheckval = $('input.makecheckval:checked').length;
        var modelcheckval = $('input.modelcheckval:checked').length;
        var modelcheckval1 = $('input.modelcheckval:checked').attr('data-id');

        if (makecheckval == 0 && modelcheckval == 0) {
            this.setState({ makebradcrumb: "" })
            this.setState({ modelbradcrumb: "" })
        }
        if (makecheckval == 1 && modelcheckval == 0) {
            var makebradcrumb = $('input.makecheckval:checked').next().html();
            this.setState({ makebradcrumb: "> " + makebradcrumb })
        }
        else if (makecheckval == 1 && modelcheckval == 1) {
            var singlemakeval = $('input.makecheckval:checked').val();
            if (make == modelcheckval1) {
                var makebradcrumb = $('input.makecheckval:checked').next().html();
                this.setState({ makebradcrumb: "> " + makebradcrumb })
                var modelbradcrumb = $('input.modelcheckval:checked').next().html();
                this.setState({ modelbradcrumb: "> " + modelbradcrumb })
            }
            else if (singlemakeval == modelcheckval1) {
                var makebradcrumb = $('input.makecheckval:checked').next().html();
                this.setState({ makebradcrumb: "> " + makebradcrumb })
                var modelbradcrumb = $('input.modelcheckval:checked').next().html();
                this.setState({ modelbradcrumb: "> " + modelbradcrumb })
            }
        }
        else if (makecheckval < 1) {
            this.setState({ makebradcrumb: "" })
        }
        else if (makecheckval > 1) {
            this.setState({ makebradcrumb: "" })
        }
        if (modelcheckval > 1) {
            this.setState({ makebradcrumb: "" })
            this.setState({ modelbradcrumb: "" })
        }
        else if (makecheckval > 1 && modelcheckval > 0) {
            this.setState({ makebradcrumb: "" })
            this.setState({ modelbradcrumb: "" })
        }
        else if (makecheckval == 1 && modelcheckval > 1) {
            this.setState({ makebradcrumb: "" })
            this.setState({ modelbradcrumb: "" })
        }
        else if (makecheckval == 1 && modelcheckval == 1 && $(".make_ids" + make).is(':checked')) {
            var makebradcrumb = $('input.makecheckval:checked').next().html();
            this.setState({ makebradcrumb: "> " + makebradcrumb })
            var modelbradcrumb = $('input.modelcheckval:checked').next().html();
            this.setState({ modelbradcrumb: "> " + modelbradcrumb })
        }
        else if (modelcheckval < 1 || modelcheckval > 1) {
            this.setState({ modelbradcrumb: "" })
        }
    }

    modelChange(make) {
        var makecheckval = $('input.makecheckval:checked').length;
        var modelcheckval = $('input.modelcheckval:checked').length;
        var modelcheckval1 = $('input.modelcheckval:checked').attr('data-id');

        if (makecheckval == 0 && modelcheckval == 1) {
            var modelbradcrumb = $('input.modelcheckval:checked').next().html();
            this.setState({ modelbradcrumb: "> " + modelbradcrumb })
        }
        else if (makecheckval == 1 && modelcheckval == 1) {
            var singlemakeval = $('input.makecheckval:checked').val();
            if (make == modelcheckval1) {
                var makebradcrumb = $('input.makecheckval:checked').next().html();
                this.setState({ makebradcrumb: "> " + makebradcrumb })
                var modelbradcrumb = $('input.modelcheckval:checked').next().html();
                this.setState({ modelbradcrumb: "> " + modelbradcrumb })
            }
            else if (singlemakeval == modelcheckval1) {
                var makebradcrumb = $('input.makecheckval:checked').next().html();
                this.setState({ makebradcrumb: "> " + makebradcrumb })
                var modelbradcrumb = $('input.modelcheckval:checked').next().html();
                this.setState({ modelbradcrumb: "> " + modelbradcrumb })
            }
            else {
                this.setState({ makebradcrumb: "" })
                this.setState({ modelbradcrumb: "" })
            }
        }
        else if (makecheckval == 1 && modelcheckval == 0) {
            var makebradcrumb = $('input.makecheckval:checked').next().html();
            this.setState({ makebradcrumb: "> " + makebradcrumb })
            this.setState({ modelbradcrumb: "" })
        }
        else if (modelcheckval < 1 || modelcheckval > 1) {
            this.setState({ modelbradcrumb: "" })
        }
        else if (makecheckval > 1 && modelcheckval > 0) {
            this.setState({ makebradcrumb: "" })
            this.setState({ modelbradcrumb: "" })
        }
        else if (makecheckval == 1 && modelcheckval == 1 && !$(".make_ids" + make).is(':checked')) {
            this.setState({ makebradcrumb: "" })
            this.setState({ modelbradcrumb: "" })
        }
    }

    render() {
        const { carminprice, carmaxprice } = this.state;
        var city_name = localStorage.getItem("selected_city");
        if (city_name) {
            var selected_city = localStorage.getItem("selected_city");
        } else {
            var selected_city = "India";
        }
        const pagelocation = "Used cars in " + selected_city;

        $(document).ready(function () {
            $(".makecheckval").click(function () {
                if ($(this).prop("checked") == true) {
                    var makeval = $(this).val();
                    $(".hwe" + makeval).prop('checked', true);
                } else if ($(this).prop("checked") == false) {
                    var makeval = $(this).val();
                    $(".hwe" + makeval).prop('checked', false);
                }
            });
        });

        $(document).ready(function () {

            $(".sort_category,.shorting_menu").on('mouseover',function () {
                $(".shorting_menu").show();
            });
            $(".sort_category,.shorting_menu").on('mouseout',function () {
                $(".shorting_menu").hide();
            });
            $(".sort_category").dblclick(function () {
                $(".shorting_menu").hide();
            });

            $(".dropvalue").click(function () {
                var newval = $(this).val();
                var newtext = $(this).html();
                $(".sort_category").html('<i class="fa fa-sort">' + '&nbsp;&nbsp;' + newtext + '&nbsp;&nbsp;&nbsp;');
                $(".dropdown-menu").hide();
                $(".car_sorting").val(newval);
            });

        });

        $(document).ready(function () {
            $('body').delegate('.popUpBtn','click', function () {
                $('#' + $(this).data('modal')).show();
                // $('.partners').css('display', 'none');
                // $('.partners_first').css('display', 'none');
            })

            $('span.close,.btn-filter_popup').on('click', function () {
                $('.modal').hide();

                // $('.partners').css('display', 'block');
                // $('.partners_first').css('display', 'block');
            })
           
})
    

        const paginationData = this.state.car_listing.map((Car) => {
            return <div className="col-md-4 d-flex justify-content-center" id="paginationData">
                <div className="car-grid mb-xl-30 category" style={{ boxShadow: "0 0 10px #dbdbdb" }}>
                    <div className="car-grid-wrapper car-grid bx-wrapper rounded" style={{  }}>
                        <Link  target={'_blank'} to={"/car-details/used-car-" + Car.make_path + "-in-" + Car.name_path +"?car=" + Car.index}>
                            <div className="image-sec animate-img" >
                                <img  loading="lazy" src={Car.images} className="full-width" alt="" />
                            </div>
                        </Link>
                        <div className="car-grid-caption padding-10 bg-custom-white p-relative">
                            <h4 className="col-md-12 title fs-16 pl-1 pr-1 mb-2">
                                <Link  target={'_blank'} to={"/car-details/used-car-" + Car.make_path + "-in-" + Car.name_path +"?car=" + Car.index}><span title={Car.full_name}>{Car.name}</span><small className="mt-2 mb-2" style={{ fontSize: "13px", fontWeight: "500" }}>{new Intl.NumberFormat('US').format(Car.kmdriven)} KM . {Car.fuil_type} . {Car.year}</small><h5>Rs.{new Intl.NumberFormat('US').format(Car.price)}</h5></Link>
                            </h4>
                            <div style={{ borderTop: "1px solid #dbdbdb",  }}>
                                <a href={Car.carurl} target="_blank" ><span className="car_footer mb-0 fw-1000 mt-2" style={{ color: "#6300a3" }}><h6  className="mt-2" style={{ color: "#6300a3" }}>Check this on {Car.source}</h6></span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        });
        return (

            <Fragment>

                <section className="section-padding bg-light-white pb-4 partners_first" style={{ paddingTop: "10px" }}>
                    <div className="container-fluid fluidhwe" style={{ padding: "0rem 0rem 0rem 3rem" }}>
                        <div className="row">
                            {isMobile ? null :
                                <aside className="col-lg-3 desktop_sidebar " style={{ position: "fixed", zIndex: "99999999" }}>
                                    <div className="sidebar_wrap mb-md-80">
                                        <div id="side_bar" className="sidebar" style={{ maxHeight: "100vh", overflowY: "scroll", scrollbarWidth: "thin" }}>
                                            <div className="sidebar_widgets">
                                                <form method="GET" action="" onChange={this.handleChange} onSubmit={this.handleSubmit}>

                                                    <input type="hidden" name="car_sorting" Value="" className="car_sorting" />
                                                    <div className="row" style={{ display: "none" }}>
                                                        <div className="col-md-12">
                                                            <button type="submit" className="btn-first btn-small btn-block filter_save">Filter</button>
                                                        </div>
                                                    </div>

                                                    <div className="widget_title">
                                                        <h6 className="no-margin text-custom-white" style={{ color: "#2e054e", fontFamily: "futura Lt BT" }}>Budget</h6>
                                                    </div>
                                                    <div className="widget_title mt-2 pt-2" style={{ border: "none" }}>
                                                        <div>
                                                            <Nouislider
                                                                connect
                                                                start={[this.state.carminprice, this.state.carmaxprice]}
                                                                behaviour="drag"
                                                                range={{
                                                                    'min': [50000, 50000],
                                                                    '20%': [600000, 100000],
                                                                    '32%': [500000, 200000],
                                                                    '38%': [700000, 300000],
                                                                    '42%': [1000000, 500000],
                                                                    '55%': [2000000, 1000000],
                                                                    '65%': [5000000, 5000000],
                                                                    '70%': [10000000, 10000000],
                                                                    'max': [50000000]
                                                                }}
                                                                onChange ={this.onSlide}
                                                            />
                                                            {carminprice && carmaxprice && (
                                                                <div className='maxprice'>
                                                                    {new Intl.NumberFormat('en-IN', {

                                                                        currency: 'INR'
                                                                    }).format(carminprice)} - {new Intl.NumberFormat('en-IN', {

                                                                        currency: 'INR'
                                                                    }).format(carmaxprice)}
                                                                </div>
                                                                
                                                            )}
                                                        </div>

                                                        <input type="hidden" className="car_min_price" name="car_min_price" value={carminprice} />
                                                        <input type="hidden" className="car_max_price" name="car_max_price" value={carmaxprice} />
                                                    </div>

                                                    <div className="widget_title mt-2 pt-2">
                                                        <h6 className="no-margin text-custom-white" style={{ color: "#2e054e", fontFamily: "futura Lt BT" }}>Make + Model</h6>
                                                    </div>
                                                    <div className="checkbox-group" style={{ maxHeight: "300px", overflowY: "scroll", scrollbarWidth: "thin" }}>
                                                        {this.state.makemodel.map((makemodel) => (
                                                            <div className="form-group" style={{ borderBottom: "1px solid #f0eded" }}>
                                                                <div className="row make">
                                                                    <div className="col-sm-9 pl-0 phead">
                                                                        <label className="custom-checkbox makecheck">
                                                                            <input type="checkbox" onChange={() => this.makeChange(makemodel.make.index)} make_type={makemodel.make.name} make_slug={makemodel.make.slug_header}  className={`makecheckval make_ids${makemodel.make.index} make_type${makemodel.make.index} make_ids${makemodel.make.slug_header}`} value={makemodel.make.index} />
                                                                            <p style={{ display: "none" }}>{makemodel.make.name}</p>
                                                                            <span className="checkmark" /> {makemodel.make.name}
                                                                        </label>
                                                                    </div>
                                                                    <div className="col-sm-3 text-right" style={{ cursor: "pointer" }} onClick={() => this.openModel(makemodel.make.index)}><i className="fa fa-angle-down makedownhwe"></i></div>
                                                                    <div className={`model model${makemodel.make.index}`} style={{ display: "none" }}>
                                                                        {makemodel.modal.map(modal => (
                                                                            <label className="custom-checkbox mt-3 ml-1 modelcheck">
                                                                                <input type="checkbox" onChange={() => this.modelChange(makemodel.make.index, modal.index)} parent_make={makemodel.make.name} make_slug={makemodel.make.slug_header} model_slug={modal.slug_header} model_type={modal.name} className={`modelcheckval hwe${makemodel.make.index} model_type${modal.index} hwe${makemodel.make.slug_header} modal_ids${modal.index} modal_ids${modal.slug_header}`} data-id={makemodel.make.index} name='modal_ids[]' Value={modal.index} />
                                                                                <p style={{ display: "none" }}>{modal.name}</p>
                                                                                <span className="checkmark" /> {modal.name}
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
                                                    {/* <div className="checkbox-group sidebar" style={{ maxHeight: "300px", overflowY: "scroll", scrollbarWidth: "thin" }}> */}
                                                    <div className="checkbox-group sidebar" style={{ maxHeight: "300px", overflowY: "scroll", scrollbarWidth: "none" }}>
                                                        {this.state.fueltype.map(fueltype =>
                                                            <div className="form-group">
                                                                <label className="custom-checkbox">
                                                                    <input type="checkbox" className={`fueltype fuel_type${fueltype.index} fuel_type${fueltype.name}`} name="fuel_type[]" fuil_type={fueltype.name}  Value={fueltype.index} />
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
                                                                    <input type="radio" className={`car_year car_year${year.name}`} name="car_year" Value={year.name} style={{ height: "20px", width: "20px", position: "relative", top: "2px" }} />
                                                                    <span className="checkmark" /> {year.name} & above </label>
                                                            </div>
                                                        )}
                                                    </div>

                                                    <div className="widget_title mt-4">
                                                        <h6 className="no-margin text-custom-white" style={{ color: "#2e054e", fontFamily: "futura Lt BT" }}>KM Driven</h6>
                                                    </div>
                                                    {/* <div className="checkbox-group sidebar" style={{ maxHeight: "300px", overflowY: "scroll", scrollbarWidth: "thin" }}> */}
                                                    <div className="checkbox-group sidebar" style={{ maxHeight: "300px", overflowY: "scroll", scrollbarWidth: "none" }}>
                                                        <div className="form-group">
                                                            <label className="custom-radio">
                                                                <input type="radio" className="kmdriven km_driven10000" name="km_driven" Value="10000" style={{ height: "20px", width: "20px", position: "relative", top: "2px" }} />
                                                                <span className="checkmark" /> {new Intl.NumberFormat('US').format(10000)} kms & less
                                                            </label>
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="custom-radio">
                                                                <input type="radio" className="kmdriven km_driven30000" name="km_driven" Value="30000" style={{ height: "20px", width: "20px", position: "relative", top: "2px" }} />
                                                                <span className="checkmark" /> {new Intl.NumberFormat('US').format(30000)} kms & less
                                                            </label>
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="custom-radio">
                                                                <input type="radio" className="kmdriven km_driven50000" name="km_driven" Value="50000" style={{ height: "20px", width: "20px", position: "relative", top: "2px" }} />
                                                                <span className="checkmark" /> {new Intl.NumberFormat('US').format(50000)} kms & less
                                                            </label>
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="custom-radio">
                                                                <input type="radio" className="kmdriven km_driven75000" name="km_driven" Value="75000" style={{ height: "20px", width: "20px", position: "relative", top: "2px" }} />
                                                                <span className="checkmark" /> {new Intl.NumberFormat('US').format(75000)} kms & less
                                                            </label>
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="custom-radio">
                                                                <input type="radio" className="kmdriven km_driven100000" name="km_driven" Value="100000" style={{ height: "20px", width: "20px", position: "relative", top: "2px" }} />
                                                                <span className="checkmark" /> {new Intl.NumberFormat('US').format(100000)} kms & less
                                                            </label>
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="custom-radio">
                                                                <input type="radio" className="kmdriven km_driven200000" name="km_driven" Value="200000" style={{ height: "20px", width: "20px", position: "relative", top: "2px" }} />
                                                                <span className="checkmark" /> {new Intl.NumberFormat('US').format(200000)} kms & less
                                                            </label>
                                                        </div>
                                                    </div>

                                                    <div className="widget_title mt-4">
                                                        <h6 className="no-margin text-custom-white" style={{ color: "#2e054e", fontFamily: "futura Lt BT" }}>Owner</h6>
                                                    </div>
                                                    {/* <div className="checkbox-group sidebar" style={{ maxHeight: "300px", overflowY: "scroll", scrollbarWidth: "thin" }}> */}
                                                    <div className="checkbox-group sidebar" style={{ maxHeight: "300px", overflowY: "scroll", scrollbarWidth: "none" }}>
                                                        <div className="form-group">
                                                            <label className="custom-radio">
                                                                <input type="radio" className="owner owner1" name="owner" owner="1st owner" Value="1" style={{ height: "20px", width: "20px", position: "relative", top: "2px" }} />
                                                                <span className="checkmark" /> 1-owner
                                                            </label>
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="custom-radio">
                                                                <input type="radio" className="owner owner2" name="owner" owner="2nd owner" Value="2" style={{ height: "20px", width: "20px", position: "relative", top: "2px" }} />
                                                                <span className="checkmark" /> 2-owner
                                                            </label>
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="custom-radio">
                                                                <input type="radio" className="owner owner3" name="owner" owner="3rd owner" Value="3" style={{ height: "20px", width: "20px", position: "relative", top: "2px" }} />
                                                                <span className="checkmark" /> 3-owner
                                                            </label>
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="custom-radio">
                                                                <input type="radio" className="owner owner4" name="owner" owner="4th & more owner" Value="4" style={{ height: "20px", width: "20px", position: "relative", top: "2px" }} />
                                                                <span className="checkmark" /> 4 or more-owner
                                                            </label>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </aside>
                            }
                            <div className="col-lg-9 offset-3 darkmode" id="list_listitem_top" onScroll={this.handleScroll}>
                                <div className="cat_list list_listitem" id="list_listitem"  >
                                    <div className="row">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <span> <Link to="/" style={{ textTransform: "uppercase", color: "#411c5f", fontWeight: "800", fontFamily: "Futura Md BT", fontSize: "12px", letterSpacing: "1px" }}>Home <i className="fa fa-angle-right"></i></Link> </span>
                                                <span className="fw-500 citybradcrumb" aria-current="page"><a href={`/used-cars-in-${localStorage.getItem("selected_city")}`} style={{ textTransform: "uppercase", color: "hwb(300 1.2% 98.4%)", fontWeight: "800", fontFamily: "Futura Md BT", fontSize: "12px" }}>{pagelocation}</a>&nbsp;</span>
                                                <span className="fw-500 make_bradcrumb"><a href={`/used-${this.state.makebradcrumb_name}-cars-in-${localStorage.getItem("selected_city")}`} style={{ textTransform: "uppercase", color: "hwb(300 1.2% 98.4%)", fontWeight: "800", fontFamily: "Futura Md BT", fontSize: "12px" }}>{" " + this.state.makebradcrumb}</a></span>
                                                <span className="fw-500 make_bradcrumb"><a href={`/used-${this.state.modelbradcrumb_name}-cars-in-${localStorage.getItem("selected_city")}
`} style={{ textTransform: "uppercase", color: "#a593b3", fontWeight: "800", fontFamily: "Futura Md BT", fontSize: "12px" }}>{" " + this.state.modelbradcrumb}</a></span>
                                            </div>
                                        </div>
                                        <div className='mobilefilter_hwe' style={{ Maxwidth: "200px", overflow: "scroll", padding: "9px" }}>
                                            <div className='row' style={{ display: "flex", flexWrap: 'nowrap' }}>
                                                <button class="btn btn-light sort_mobile mt-1 popUpBtn" data-modal="myModal1"><i class="fa fa-filter"></i> Filter</button> &nbsp;
                                                <button class="btn btn-light sort_mobile mt-1 popUpBtn" data-modal="myModal1"> Budget <i class="fa fa-caret-down"></i></button> &nbsp;
                                                <button class="btn btn-light sort_mobile mt-1 popUpBtn" data-modal="myModal1"> Make + Models <i class="fa fa-caret-down"></i></button> &nbsp;
                                                <button class="btn btn-light sort_mobile mt-1 popUpBtn" data-modal="myModal1"> Fuel Type <i class="fa fa-caret-down"></i></button> &nbsp;
                                                <button class="btn btn-light sort_mobile mt-1 popUpBtn" data-modal="myModal1"> KM Driven <i class="fa fa-caret-down"></i></button> &nbsp;
                                                <button class="btn btn-light sort_mobile mt-1 popUpBtn" data-modal="myModal1"> Owner <i class="fa fa-caret-down"></i></button>
                                            </div>
                                        </div>
                                        <div className="row  pb-1 pr-0 filter_short_hwe" id="sticky_nav_cat">

                                            <div className="col-md-7 pt-1 pb-2 filteradd_hwe filteradd_hwe_parent" style={{ display: "flex", flexWrap: "wrap" }}>
                                                <button className="top_filterhwe clear_all" onClick={(e) => this.filterClick(e, "all")} style={{ display: "none",height:"35px",marginTop:"unset" }}> <i class="fa fa-refresh"></i> Clear All</button> &nbsp;
                                                <span className="top_filterhwe linetext p_hwe" onClick={(e) => this.filterClick(e, 5)} data-id="" data-id1="">{this.state.price}</span> &nbsp;
                                                
                                                 {this.state.make.map(make =>
                                                    <span className={`top_filterhwe linetext make_hwe make_hwe${make.id} `} onClick={(e) => this.filterClick(e, 6)} data-id={make.id} style={{ padding: "2px 5px", marginLeft: "5px", marginRight: "5px" , height: "35px"  }}>{make.name + " "}<span>X</span></span>
                                                )}
                                                 {this.state.model.map(model =>
                                               
                                                   <span className={`top_filterhwe linetext model_hwe model_hwe${model.id} `} onClick={(e) => this.filterClick(e, 7)} data-id={model.id} style={{ padding: "2px 5px", marginLeft: "5px", marginRight: "5px" , height: "35px"  }}>{model.name + " "}<span>X</span></span>
                                                )}
                                                {this.state.fuel.map(fuel =>
                                                    <span className={`top_filterhwe linetext f_hwe f_hwe${fuel.id}`} onClick={(e) => this.filterClick(e, 1)} data-id={fuel.id} style={{ padding: "2px 5px", marginLeft: "5px", marginRight: "5px" , height: "35px" }}>{fuel.name + " "}<span>X</span></span>
                                                )}
                                                <span className="top_filterhwe linetext km_hwe" onClick={(e) => this.filterClick(e, 3)} data-id="">{this.state.kmdriven}</span> &nbsp;
                                                <span className="top_filterhwe linetext o_hwe" onClick={(e) => this.filterClick(e, 4)} data-id="">{this.state.owner}</span> &nbsp;
                                                <span className="top_filterhwe linetext y_hwe" onClick={(e) => this.filterClick(e, 2)} data-id="">{this.state.fyear}</span> &nbsp;

                                            </div>

                                            <div className="col-md-5 text-right pr-0 filter_short_hwe_hwe" style={{ width: "60% !important",paddingTop: "11px" }}>
                                                <div class="btn-group custome_group">
                                                    <button type="button" className="btn btn-block sort_category"><i className="fa fa-sort"></i>&nbsp; Newest First &nbsp;&nbsp;&nbsp;</button>
                                                    <ul className="dropdown-menu shorting_menu">
                                                        <li className="dropvalue" value="1" onClick={this.handleClick}>Newest First</li>
                                                        <li className="dropvalue" value="2" onClick={this.handleClick}>Price - Low to High</li>
                                                        <li className="dropvalue" value="3" onClick={this.handleClick}>Price - High to Low</li>
                                                        <li className="dropvalue" value="4" onClick={this.handleClick}>KM Driven - Low to High</li>
                                                        <li className="dropvalue" value="5" onClick={this.handleClick}>KM Driven - High to Low</li>
                                                        <li className="dropvalue" value="6" onClick={this.handleClick}>Year - Old to New</li>
                                                        <li className="dropvalue" value="7" onClick={this.handleClick}>Year - New to Old</li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <div className="col-md-6 pt-0">
                                                <span className="no-margin text-custom-black mt-2 mb-3" style={{ color: "#2e054e", fontWeight: "400", fontSize: "15px" }}>Showing {this.state.total_cars} Cars</span>
                                            </div>

                                        </div>
                                        {paginationData}
                                        <div className="col-sm-12 d-none no_data" id="no_data">
                                            <h5>No Data Found</h5>
                                            </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 loader">
                                        <div className="spinner-border text-dark mb-3 ml-3" role="status">
                                            <span className="sr-only">Loading...</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <section className="section-padding partners pt-5 pb-0"> */}
                <section className="section-padding partners hwefeature pt-5 pb-0" style={{ position: "relative", zIndex: "99999999999", background: "#f5f5f5" }}>
                    <Cars />
                    <Media />
                    {/* <FAQ /> */}
                    <Details />
                </section>
                {isMobile ?
                    <div id="myModal1" class="modal">
                        <div class="modal-content">
                            <div class="modal-header">
                                <span class="close">×</span>
                                <button class="close btn btn-filter_popup" style={{ position: "fixed",right: "23px",zIndex: "9999",background: "#ed264f",color: "#fff",opacity: "unset",padding: "12px 27px",width: "100%",margin: "0px -23px",bottom: "0px"}}>Apply</button>
                            </div>
                            <div class="modal-body">
                                <aside className="col-lg-3">
                                    <div className="sidebar_wrap mb-md-80">
                                        <div className="sidebar">
                                            <div className="sidebar_widgets">
                                                <form method="GET" action="" onChange={this.handleChange} onSubmit={this.handleSubmit}>

                                                    <input type="hidden" name="car_sorting" Value="" className="car_sorting" />
                                                    <div className="row" style={{ display: "none" }}>
                                                        <div className="col-md-12">
                                                            <button type="submit" className="btn-first btn-small btn-block filter_save">Filter</button>
                                                        </div>
                                                    </div>

                                                    <div className="widget_title">
                                                        <h6 className="no-margin text-custom-white" style={{ color: "#2e054e", fontFamily: "futura Lt BT" }}>Budget</h6>
                                                    </div>
                                                    <div className="widget_title mt-2 pt-2" style={{ border: "none" }}>
                                                        <div>
                                                            <Nouislider
                                                                connect
                                                                start={[this.state.carminprice, this.state.carmaxprice]}
                                                                behaviour="drag"
                                                                range={{
                                                                    'min': [50000, 50000],
                                                                    '22%': [300000, 100000],
                                                                    '30%': [500000, 200000],
                                                                    '36%': [700000, 300000],
                                                                    '42%': [1000000, 500000],
                                                                    '60%': [2000000, 1000000],
                                                                    '76%': [5000000, 5000000],
                                                                    '80%': [10000000, 10000000],
                                                                    'max': [50000000]
                                                                }}
                                                                onSlide={this.onSlide}
                                                            />
                                                            {carminprice && carmaxprice && (
                                                                <div className='minprice'>
                                                                    {new Intl.NumberFormat('en-IN', {

                                                                        currency: 'INR'
                                                                    }).format(carminprice)} - {new Intl.NumberFormat('en-IN', {
                                                                        // style: 'currency',
                                                                        currency: 'INR'
                                                                    }).format(carmaxprice)}
                                                                </div>
                                                            )}
                                                        </div>

                                                        <input type="hidden" className="car_min_price" name="car_min_price" value={carminprice} />
                                                        <input type="hidden" className="car_max_price" name="car_max_price" value={carmaxprice} />
                                                    </div>

                                                    <div className="widget_title mt-2 pt-2">
                                                        <h6 className="no-margin text-custom-white" style={{ color: "#2e054e", fontFamily: "futura Lt BT" }}>Make + Model</h6>
                                                    </div>

                                                    <div className="checkbox-group" style={{ maxHeight: "300px", overflowY: "scroll", scrollbarWidth: "thin" }}>
                                                        {this.state.makemodel.map((makemodel) => (
                                                            <div className="form-group" style={{ borderBottom: "1px solid #f0eded" }}>
                                                                <div className="row make">
                                                                    <div className="col-sm-9 pl-0 phead">
                                                                        <label className="custom-checkbox makecheck">
                                                                            <input type="checkbox" onChange={() => this.makeChange(makemodel.make.index)} make_type={makemodel.make.name} make_slug={makemodel.make.slug_header}  className={`makecheckval make_type${makemodel.make.index} make_ids${makemodel.make.index}  make_ids${makemodel.make.slug_header}`} value={makemodel.make.index} />
                                                                            <p style={{ display: "none" }}>{makemodel.make.name}</p>
                                                                            <span className="checkmark" /> {makemodel.make.name}
                                                                        </label>
                                                                    </div>
                                                                    <div className="col-sm-3 text-right" style={{ cursor: "pointer" }} onClick={() => this.openModel(makemodel.make.index)}><i className="fa fa-angle-down makedownhwe"></i></div>
                                                                    <div className={`model model${makemodel.make.index}`} style={{ display: "none" }}>
                                                                        {makemodel.modal.map(modal => (
                                                                            <label className="custom-checkbox mt-3 ml-1 modelcheck">
                                                                                <input type="checkbox" onChange={() => this.modelChange(makemodel.make.index, modal.index)} parent_make={makemodel.make.name} make_slug={makemodel.make.slug_header} model_slug={modal.slug_header}  model_type={modal.name} className={`modelcheckval hwe${makemodel.make.index} model_type${modal.index} hwe${makemodel.make.slug_header} modal_ids${modal.index} modal_ids${modal.slug_header}`} data-id={makemodel.make.index} name='modal_ids[]' Value={modal.index} />
                                                                                <p style={{ display: "none" }}>{modal.name}</p>
                                                                                <span className="checkmark" /> {modal.name}
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

                                                    <div className="checkbox-group sidebar" style={{ maxHeight: "300px", overflowY: "scroll", scrollbarWidth: "none" }}>
                                                        {this.state.fueltype.map(fueltype =>
                                                            <div className="form-group">
                                                                <label className="custom-checkbox">
                                                                    <input type="checkbox" className={`fueltype fuel_type${fueltype.index} fuel_type${fueltype.name}`} name="fuel_type[]" fuil_type={fueltype.name}  Value={fueltype.index} />
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
                                                                    <input type="radio" className={`car_year car_year${year.name}`} name="car_year" Value={year.name} style={{ height: "20px", width: "20px", position: "relative", top: "2px" }} />
                                                                    <span className="checkmark" /> {year.name} & above </label>
                                                            </div>
                                                        )}
                                                    </div>

                                                    <div className="widget_title mt-4">
                                                        <h6 className="no-margin text-custom-white" style={{ color: "#2e054e", fontFamily: "futura Lt BT" }}>KM Driven</h6>
                                                    </div>
                                                    <div className="checkbox-group sidebar" style={{ maxHeight: "300px", overflowY: "scroll", scrollbarWidth: "none" }}>
                                                        <div className="form-group">
                                                            <label className="custom-radio">
                                                                <input type="radio" className="kmdriven km_driven10000" name="km_driven" Value="10000" style={{ height: "20px", width: "20px", position: "relative", top: "2px" }} />
                                                                <span className="checkmark" /> {new Intl.NumberFormat('US').format(10000)} kms & less
                                                            </label>
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="custom-radio">
                                                                <input type="radio" className="kmdriven km_driven30000" name="km_driven" Value="30000" style={{ height: "20px", width: "20px", position: "relative", top: "2px" }} />
                                                                <span className="checkmark" /> {new Intl.NumberFormat('US').format(30000)} kms & less
                                                            </label>
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="custom-radio">
                                                                <input type="radio" className="kmdriven km_driven50000" name="km_driven" Value="50000" style={{ height: "20px", width: "20px", position: "relative", top: "2px" }} />
                                                                <span className="checkmark" /> {new Intl.NumberFormat('US').format(50000)} kms & less
                                                            </label>
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="custom-radio">
                                                                <input type="radio" className="kmdriven km_driven75000" name="km_driven" Value="75000" style={{ height: "20px", width: "20px", position: "relative", top: "2px" }} />
                                                                <span className="checkmark" /> {new Intl.NumberFormat('US').format(75000)} kms & less
                                                            </label>
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="custom-radio">
                                                                <input type="radio" className="kmdriven km_driven100000" name="km_driven" Value="100000" style={{ height: "20px", width: "20px", position: "relative", top: "2px" }} />
                                                                <span className="checkmark" /> {new Intl.NumberFormat('US').format(100000)} kms & less
                                                            </label>
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="custom-radio">
                                                                <input type="radio" className="kmdriven km_driven200000" name="km_driven" Value="200000" style={{ height: "20px", width: "20px", position: "relative", top: "2px" }} />
                                                                <span className="checkmark" /> {new Intl.NumberFormat('US').format(200000)} kms & less
                                                            </label>
                                                        </div>
                                                    </div>

                                                    <div className="widget_title mt-4">
                                                        <h6 className="no-margin text-custom-white" style={{ color: "#2e054e", fontFamily: "futura Lt BT" }}>Owner</h6>
                                                    </div>

                                                    <div className="checkbox-group sidebar" style={{ maxHeight: "300px", overflowY: "scroll", scrollbarWidth: "none" }}>
                                                        <div className="form-group">
                                                            <label className="custom-radio">
                                                                <input type="radio" className="owner owner1" name="owner" owner="1st owner" Value="1" style={{ height: "20px", width: "20px", position: "relative", top: "2px" }} />
                                                                <span className="checkmark" /> 1-owner
                                                            </label>
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="custom-radio">
                                                                <input type="radio" className="owner owner2" name="owner" owner="2nd owner" Value="2" style={{ height: "20px", width: "20px", position: "relative", top: "2px" }} />
                                                                <span className="checkmark" /> 2-owner
                                                            </label>
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="custom-radio">
                                                                <input type="radio" className="owner owner3" name="owner" owner="3rd owner" Value="3" style={{ height: "20px", width: "20px", position: "relative", top: "2px" }} />
                                                                <span className="checkmark" /> 3-owner
                                                            </label>
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="custom-radio">
                                                                <input type="radio" className="owner owner4" name="owner" owner="4th & more owner" Value="4" style={{ height: "20px", width: "20px", position: "relative", top: "2px" }} />
                                                                <span className="checkmark" /> 4 or more-owner
                                                            </label>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </div>
                    : null}
            </Fragment>

        );
    }
}

export default Content;