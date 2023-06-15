import React from 'react';
import { Link } from 'react-router-dom';
import NavHelper from '../../helper/NavHelper';
import Topnavigation from '../../data/Topnavigation.json';
import "./layoutstyle.css";
import $ from "jquery";
import * as CONSTANT from '../../Constent';

class Header extends NavHelper {
    constructor(props) {
        super(props);
        this.state = {
            city_id: "",
            cityname:"",
            auth:"",
            city: [],
            make: [],
            model: [],
            fueltype: [],
            year: [],
            path_hwe_blog : '',
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleclick1 = this.handleclick1.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
        this.submenu = this.submenu.bind(this);
    }

    componentDidMount() {
        var protocal =window.location.protocol;
        var hostname_hwe = window.location.host;
        var hostname = hostname_hwe.replace('www.','');
        if(hostname == 'localhost:3000' || hostname == 'dev59.vroomwheel.com'){
            
             this.setState({ path_hwe_blog: protocal+"//blog.vroomwheel.com" });
        }else{
            this.setState({ path_hwe_blog: protocal+"//blog."+hostname});
        }
        const city_id = localStorage.getItem("city_id");
        this.setState({ city_id: city_id })

        const cityname = localStorage.getItem("selected_city");
        this.setState({ cityname: cityname })
        this.setState({ auth: localStorage.getItem("auth") });
        const d = new Date();
        let time = d.getTime();
        ///////////////////Get City////////////////////
        fetch(`${CONSTANT.BaseUrl}/services/getcity?&time=${time}`, {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((response) => {
                this.setState({ city: response.result })
                localStorage.setItem('getcity', JSON.stringify(response.result)  );
                
            })
            .catch((error) => {
            });

        ///////////////////Get Make////////////////////
        fetch(`${CONSTANT.BaseUrl}/services/getmake`, {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((response) => {
                this.setState({ make: response.result })
                localStorage.setItem('getmake', JSON.stringify(response.result)  );
                $(".loader").hide();
            })
            .catch((error) => {
            });

        ///////////////////Get Modal////////////////////
        fetch(`${CONSTANT.BaseUrl}/services/getmodel_hwe`, {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((response) => {
                this.setState({ model: response.result })
                localStorage.setItem('getmodel', JSON.stringify(response.result) );
                $(".loader1").hide();
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
                localStorage.setItem('getfueltype', JSON.stringify(response.result) );

                $(".loader2").hide();
            })
            .catch((error) => {
            });

        ///////////////////Get Year////////////////////
        fetch(`${CONSTANT.BaseUrl}/services/getyear?&time=${time}`, {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((response) => {
                this.setState({ year: response.result })
                localStorage.setItem('getyear', JSON.stringify(response.result));

                $(".loader3").hide();
            })
            .catch((error) => {
            });
    }

    handleClick(min, max) {
      //  window.location.replace('/category?city_ids=' + this.state.city_id + '&car_min_price=' + min + '&car_max_price=' + max);
      window.location.replace('/used-cars-over-'+min+'-rs-under-'+max+'-rs-in-'+this.state.cityname);
    }

    handleclick1(e) {
        if (window.matchMedia('(max-width: 992px)').matches) {
            $(".menu-item" + e).children(".submenu").toggle();
        }
    }

    submenu() {
        $(".top_right_submenu_mobile").css("width", "unset");
        $(".top_right_submenu_mobile").toggle();
    }

    handleKeyUp = event => {
        // alert('fd');
        $(".data_list").html('');
        $(".data_list").show();
        $(".data_list").text("Loading...");
        setTimeout(function () {
            var search = event.target.value;
            if (search != "") {
                $.ajax({
                    url: `${CONSTANT.BaseUrl}/services/getseach_val?searchval=${search}`,
                    type: 'GET',
                    dataType: 'json',
                    success: function (response) {
                        $(".data_list").hide();
                        var status = response.status;
                        var len = response.result.length;
                        if (status == 0) {
                            $(".data_list").text("");
                            $(".data_list").html('');
                            $(".data_list").append("<li style='width: 100%; text-decoration: none; font-size: 15px; color: grey;'>Result not found &nbsp; <i class='fa fa-search'></i> </li>");
                        }
                        else if (status == 1) {
                            $(".data_list").text("");
                            for (var i = 0; i < len; i++) {
                                var makelength = response.result[i].make.length;
                                for (var j = 0; j < makelength; j++) {
                                    var index = response.result[i].make[j]['index'];
                                    var name = response.result[i].make[j]['name'];
                                    var type = response.result[i].make[j]['type'];
                                    var slug = response.result[i].make[j]['slug'];

                                    if (type == "make") {
                                        $(".data_list").append("<div class='search_val' style='display: flex; justify-content: space-between;'><li style='font-weight: 600;' value='" + index + "' checktype='" + type + "' slug='"+slug+"'>" + name + "</li><i class='fa fa-arrow-right' style='position: relative; top: 10px; color: #2e054e;'></i></div>");
                                    }
                                    else if (type == "modal") {
                                        $(".data_list").append("<div class='search_val' style='display: flex; justify-content: space-between;'><li style='padding-left: 15px;' value='" + index + "' checktype='" + type + "' slug='"+slug+"'>" + name + "</li><i class='fa fa-arrow-right' style='position: relative; top: 10px; color: #2e054e;'></i></div>");
                                    }
                                }
                            }
                        }
                        setTimeout(function () {
                            $(".data_list").show();
                        }, 100);
                    }
                })
            }
            else {
                $(".data_list").hide();
            }
        }, 100);
    }

    render() {
        const pathname = window.location.pathname ; 
        console.log(pathname);
       
        if(pathname!="/")
        {
           // alert("dsdfdsf");
            $(".toggle").hide();

        }
        const city_id = localStorage.getItem("city_id");
        const selected_city = localStorage.getItem("selected_city");
        if (selected_city) {
            $("#select_city_id").val(city_id);
            $(".select_city").html(selected_city + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + '<i class="fa fa-caret-down"></i>');
            $(".select_city").css('text-transform', 'capitalize');
        }
        else {
            $("#select_city_id").val("");
            $(".select_city").html("Select city" + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + '<i class="fa fa-caret-down"></i>');
        }


        $(document).ready(function () {
           
            $(".top_city").click(function () {
                var cityid = $(this).attr('data-id');
                var dataname = $(this).html();
                dataname=dataname.replace(" ","");
                if(dataname == 'All India'){
                    dataname = 'India';
                }
                localStorage.setItem('city_id', cityid);
                localStorage.setItem('selected_city', dataname.toLowerCase());
                window.location.replace(`/used-cars-in-`+dataname.toLowerCase());
            });

        });
         
        $(document).ready(function () {
            $('a:not(.no_pop),button,link:not(.no_pop)').on('click',function(e){
            var check_city_rv = $('#select_city_id').val();
            var target_class = $(e.target).attr('class');
            if( check_city_rv < 1){
                $('#exampleModal').show();
                $('#exampleModal').css('backdrop-filter','blur(6px) saturate(100%) contrast(100%)');
                if(target_class != 'btn btn-block select_city'){
                $('#exampleModal').find('.close').hide();
                }

                e.preventDefault();
                e.stopPropagation();

            }else{
                $('#exampleModal').find('.close').show();

            }
                        });
            });


        $(document).ready(function () {
            $(".select_city").click(function () {
                $("#exampleModal").show();
            });

            $(".close").click(function () {
                $("#exampleModal").fadeOut();
            });

            $(".body_content").click(function () {
                var city_id = $(this).find('input').val();
                var selected_city = $(this).find('h6').html();
                if(selected_city == 'All India'){
                    selected_city = 'India';
                }
                $("#select_city_id").val(city_id);
                $(".select_city").html(selected_city + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + '<i class="fa fa-caret-down"></i>');
                localStorage.setItem('city_id', city_id);
                localStorage.setItem('selected_city', selected_city.toLowerCase());
                if( window.location.pathname.indexOf('-in-') != -1){
                    const before_path = window.location.pathname.split('-in-')[0];
                    const new_path =before_path+'-in-'+selected_city.toLowerCase(); 
                    window.history.pushState('','',new_path);
                    $("#exampleModal").hide();
                window.location.replace(new_path);
                    
                }else{
                    $("#exampleModal").hide();
                    window.location.reload();
                }
                
            });

            $(document).on("click", ".search_val", function () {
                var search_val = $(this).find('li').val();
                var final_select = $(this).find('li').html();
                var checktype = $(this).find('li').attr("checktype");
                var slug = $(this).find('li').attr("slug");

                if (checktype == "make") {
                    $("#make_ids").val(search_val);
                }
                else if (checktype == "modal") {
                    $("#modal_ids").val(search_val);
                }

                $("#final_select").val(final_select);
                $(".data_list").hide();
                //
                window.location.href = "/used-"+slug+"-cars-in-"+localStorage.getItem("selected_city");
                //$(".search_action").trigger("click");
            });
        });


        $(document).ready(function(){
            $('.toggle').click(function(){
               
                $('.sidebar-contact').addClass('active')
                  // ravi start
  
                $('.hamburger-menu > .menu-btn').hide()
  
              //   $(this).closest("true").removeClass("grown");
  
              })
              $('.toggle_hwe').click(function(){
                $('.sidebar-contact').removeClass('active')
                // ravi start
                $('.hamburger-menu > .menu-btn').show()
          
                
  
              })
          })

        const stickyHeader = this.state.stickyHeader ? 'sticky' : '';
        return (
            <header className="header">

                <div className="heddingport">
                    <div className="topbar bg-theme" style={{ padding: "1rem 2rem", backgroundColor: "#fff", borderBottom: "1px solid #dbdbdb", }}>
                        <div className="container-fluid topheader_bar">
                            <div className="row">
                                <div className="col-md-8">
                                    <div className="leftside">
                                        <div className="row">
                                            <div className="col-md-3 mt-1">
                                                <div className="logo">
                                                     <Link className="no_pop"  to="/"> 
                                                     <img  loading="lazy" src={process.env.PUBLIC_URL + "/assets/images/Vroomwheel-Logo-H.webp"} className="img-fluid no_pop" alt="logo" style={{ width: "195px", height: "57px", marginTop:"-13px" }} />
                                                      </Link> 
                                                      </div>
                                            </div>
                                            <div className="col-md-9">
                                                <form method="GET" action="/category">
                                                    <div className="row">
                                                        <div className="col-md-4">
                                                            <input type="hidden" name="city_ids" id="select_city_id" Value="" />
                                                            <button type="button" className="btn btn-block select_city">Select city &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <i className="fa fa-caret-down"></i></button>
                                                        </div>
                                                        <div className="col-md-8 searchhwe">
                                                            <div className="form_data_search" style={{position: 'relative'}}>
                                                                <input type="hidden" name="make_ids[]" id="make_ids" Value="" />
                                                                <input type="hidden" name="modal_ids[]" id="modal_ids" Value="" />
                                                                <input type="hidden"  id="slugset" Value="" />
                                                                <input type="search" onKeyUp={this.handleKeyUp} placeholder="Search by Make & Modal etc." id="final_select" className="search_data" autoComplete='off' />
                                                                <img src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/search-512.png" alt="React Image" style={{position: 'absolute',right: 10,top: '30%',width: 18,height: 18}} />
                                                                 {/* <button type="submit" className="search_action" >Search</button> */}
                                                          
                                                                 {/* <div className="spinner-border text-dark mb-3 ml-3 loader3" role="status"> */}
                                                                    {/* <span className="sr-only">Loading...</span> */}
                                                                {/* </div> */}
                                                            </div>

                                                            <div className="data_list" style={{ maxHeight: "300px", overflowY: "scroll", scrollbarWidth: "none" }}>
                                                            <div class="spinner-border" role="status">
                                                            <span class="sr-only">Loading...</span>
                                                            </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 topmenuhwe">
                                    <ul className="custom-flex" style={{ justifyContent: "space-evenly", position: "relative", top: "20%", zIndex: "10" }}>
                                        {Topnavigation.length > 0 ? Topnavigation.map((item, i) => (
                                            <li key={i} className={`menu-item ${item.child ? 'menu-item-has-children' : ''} `} onClick={this.triggerChild} style={{ fontFamily: "Futura Hv BT", fontWeight: "500" }}>
                                                {item.child 
                                                ? <Link style={{ color: "#2e054e", fontWeight: "500", fontSize: "15px" }} onClick={e => e.preventDefault()} to="#" > {item.linkText} <span className="arrow" /></Link> 
                                                : item.linkText == 'Blog' ? <a style={{ color: "#2e054e", fontWeight: "500", fontSize: "15px" }} href={this.state.path_hwe_blog} className="text-theme fs-14 no_pop"> {item.linkText} </a> 
                                                : item.linkText == 'login' ? this.state.auth != 1 ?<Link style={{ color: "#2e054e", fontWeight: "700", fontSize: "15px",  padding: "0px 0px", borderRadius: "5px",position: "relative" ,left: "9px"}} to={item.link} className="text-theme fs-14">Log in</Link>  : <Link style={{ color: "#2e054e", fontWeight: "700", fontSize: "20px",  padding: "0px 0px", borderRadius: "5px",position: "relative" ,left: "9px"}} to={item.dashboard_link} className="text-theme fs-14"><i className="fas fa-car-alt" /></Link> 
                                                : item.linkText == 'register' ? this.state.auth != 1 ? <Link style={{ color: "#2e054e", fontWeight: "700", fontSize: "15px",  padding: "0px 0px", borderRadius: "5px" }} to={item.link}className="text-theme fs-14"></Link>  :<Link style={{ color: "#2e054e", fontWeight: "700", fontSize: "15px",  padding: "0px 0px", borderRadius: "5px" }} to={item.logout_link}className="text-theme fs-14"><i className="fas fa-sign-out-alt" /></Link>
                                                : <Link style={{ color: "#2e054e", fontWeight: "500", fontSize: "15px" }} to={item.link} className="text-theme fs-14"> {item.linkText} </Link>
                                                }
                                                {item.child ?
                                                    <ul className="custom submenu top_right_submenu" role="menu" style={{ maxHeight: "300px", overflowY: "scroll", overflowX: "clip", width: "350px", padding: "10px" }}>
                                                        <div className="row">
                                                            <div className="col-md-5">
                                                                {this.state.city.map(city =>
                                                                    <li className={`menu-item custome_menu_item mb-3`}>
                                                                       <Link to={""} className="text-theme custome_menu top_city no_pop {city.id}" data-id={city.id} > {city.city} </Link>
                                                                    </li>
                                                                )}
                                                                <li className={`menu-item custome_menu_item mb-3`}>
                                                                    <Link to={""} className="text-theme custome_menu top_city no_pop India" data-id="all" > India </Link>
                                                                </li>
                                                            </div>
                                                            <div className="col-md-7">
                                                                <li className={`menu-item custome_menu_item mb-3`} onClick={() => this.handleClick(100000, 300000)}>
                                                                    <Link to={''} className="text-theme custome_menu"> 1 - 3L </Link>
                                                                </li>
                                                                <li className={`menu-item custome_menu_item mb-3`} onClick={() => this.handleClick(300000, 600000)}>
                                                                    <Link to={''} className="text-theme custome_menu"> 3L - 6L </Link>
                                                                </li>
                                                                <li className={`menu-item custome_menu_item mb-3`} onClick={() => this.handleClick(600000, 1000000)}>
                                                                    <Link to={''} className="text-theme custome_menu"> 6L - 10L </Link>
                                                                </li>
                                                                <li className={`menu-item custome_menu_item mb-3`} onClick={() => this.handleClick(1000000, 1500000)}>
                                                                    <Link to={''} className="text-theme custome_menu"> 10L - 15L </Link>
                                                                </li>
                                                                <li className={`menu-item custome_menu_item mb-3`} onClick={() => this.handleClick(1500000, 3000000)}>
                                                                    <Link to={''} className="text-theme custome_menu"> 15L - 30L </Link>
                                                                </li>
                                                                <li className={`menu-item custome_menu_item mb-3`} onClick={() => this.handleClick(3000000, 4000000)}>
                                                                    <Link to={''} className="text-theme custome_menu"> 30L & Above </Link>
                                                                </li>
                                                            </div>
                                                        </div>
                                                    </ul>
                                                    : null
                                                }
                                            </li>
                                            
                                        )) : null}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                
                    <div className="topbar bg-theme" style={{ backgroundColor: "#fff", borderBottom: "1px solid #dbdbdb",display:"block" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", padding: "13px" }}>

                            <div className="col-sm-6 logo" style={{ paddingRight: "unset" }}> <Link to="/" className="no_pop" > <img  loading="lazy" src={process.env.PUBLIC_URL + "/assets/images/Vroomwheel-Logo-H.webp"} className="img-fluid logo_image_hwe" alt="logo" style={{ width: "195px", height: "54px", position:"absolute", marginTop:"-8px",left:"0"}} /> </Link>
                            </div>
                            <div className="col-sm-5 p-0 pe-3">
                                <form method="GET" action="/category" style={{ background: "#e2e9f5 none repeat ," }}>
                                    <input type="hidden" name="city_ids" id="select_city_id" Value="" />
                                    <button type="button" className="btn btn-block select_city  select_city p-0 pt-2 pb-2" style={{ width: "140px" }}>Select city <i className="fa fa-caret-down" ></i></button>
                                </form>
                            </div>
                            <div className="col-sm-1 p-0 w-25 pe-2">
                                <div className={"navigation-wrapper" + stickyHeader}>
                                    <div className="container-fluid">
                                        <nav>
                                            <div className="main-navigation">
                                            <div className="sidebar-contact2">
                                                <div className={this.state.navMethod === true ? 'main-menu active' : 'main-menu'}>
                                                    <ul className="custom-flex" style={{ justifyContent: "space-evenly", position: "relative", zIndex: "10"  }}>
                                                        {Topnavigation.length > 0 ? Topnavigation.map((item, i) => (
                                                            <li key={i} className={`menu-item ${item.child ? 'menu-item-has-children' : ''} `} onClick={this.triggerChild} style={{ fontFamily: "Futura Hv BT", fontWeight: "500" }}>
                                                                {item.child 
                                                                ? <Link onClick={(i) => this.submenu(i)} style={{ fontWeight: "900", fontSize: "15px"  ,color:"white !important", fontFamily: "Futura Lt BT",background: "rgb(46, 5, 78)",padding:"12px", color:"white"}} to="#" > {item.linkText} <span className="arrow" /></Link> 
                                                                : item.linkText == 'Blog' ? <a style={{ color: "#2e054e", fontWeight: "900", fontSize: "15px" }} href={this.state.path_hwe_blog} className="text-theme fs-14 no_pop"> {item.linkText} </a>
                                                                : item.linkText == 'login' ? this.state.auth != 1 ?<Link style={{ color: "#2e054e", fontWeight: "700", fontSize: "15px",  padding: "0px 0px", borderRadius: "5px",position: "relative" ,left: "9px"}} to={item.link} className="text-theme fs-14">Sign In</Link>  : <Link style={{ color: "#2e054e", fontWeight: "700", fontSize: "20px",  padding: "0px 0px", borderRadius: "5px",position: "relative" ,left: "0px"}} to={item.dashboard_link} className="text-theme fs-14"><i className="fas fa-car-alt" /></Link> 
                                                                : item.linkText == 'register' ? this.state.auth != 1 ? <Link style={{ color: "#2e054e", fontWeight: "700", fontSize: "15px",  padding: "0px 0px", borderRadius: "5px" }} to={item.link}className="text-theme fs-14">/ Sign Up</Link>  : <Link style={{ color: "#2e054e", fontWeight: "700", fontSize: "20px",  padding: "0px 0px", borderRadius: "5px" }} to={item.logout_link}className="text-theme fs-14"><i className="fas fa-sign-out-alt" /></Link> 
                                                                 : <Link style={{ color: "#2e054e", fontWeight: "900", fontSize: "15px" }} to={item.link} className="text-theme fs-14"> {item.linkText} </Link>}
                                                            {/* {item.child ? <Link style={{ color: "#2e054e", fontWeight: "500", fontSize: "15px" }} onClick={e => e.preventDefault()} to="#" > {item.linkText} <span className="arrow" /></Link> : item.linkText == 'Blog' ? <a style={{ color: "#2e054e", fontWeight: "500", fontSize: "15px" }} href={item.link} className="text-theme fs-14"> {item.linkText} </a>: <Link style={{ color: "#2e054e", fontWeight: "500", fontSize: "15px" }} to={item.link} className="text-theme fs-14"> {item.linkText} </Link>} */}

                                                                {item.child ?                                                                    
                                                                    <ul className={`custom submenu top_right_submenu top_right_submenu_mobile {city.id}`} role="menu" style={{ maxHeight: "300px", overflowY: "scroll", overflowX: "clip", scrollbarWidth: "none", width: "350px", padding: "10px" }}>
                                                                        <div className="row">
                                                                            <div className="col-sm-5">
                                                                                {this.state.city.map(city =>
                                                                                    <li className={`menu-item custome_menu_item mb-3`}>
                                                                                        <Link to={""} className="text-theme custome_menu top_city no_pop {city.id}" data-id={city.id} > {city.city} </Link>
                                                                                    </li>
                                                                                )}
                                                                                <li className={`menu-item custome_menu_item mb-3`}>
                                                                                    <Link to={""} className="text-theme custome_menu top_city no_pop India" data-id="all" >  India </Link>
                                                                                </li>
                                                                            </div>
                                                                            <div className="col-sm-7">
                                                                                <li className={`menu-item custome_menu_item mb-3`} onClick={() => this.handleClick(100000, 300000)}>
                                                                                    <Link to={''} className="text-theme custome_menu"> 1 - 3L </Link>
                                                                                </li>
                                                                                <li className={`menu-item custome_menu_item mb-3`} onClick={() => this.handleClick(300000, 600000)}>
                                                                                    <Link to={''} className="text-theme custome_menu"> 3L - 6L </Link>
                                                                                </li>
                                                                                <li className={`menu-item custome_menu_item mb-3`} onClick={() => this.handleClick(600000, 1000000)}>
                                                                                    <Link to={''} className="text-theme custome_menu"> 6L - 10L </Link>
                                                                                </li>
                                                                                <li className={`menu-item custome_menu_item mb-3`} onClick={() => this.handleClick(1000000, 1500000)}>
                                                                                    <Link to={''} className="text-theme custome_menu"> 10L - 15L </Link>
                                                                                </li>
                                                                                <li className={`menu-item custome_menu_item mb-3`} onClick={() => this.handleClick(1500000, 3000000)}>
                                                                                    <Link to={''} className="text-theme custome_menu"> 15L - 30L </Link>
                                                                                </li>
                                                                                <li className={`menu-item custome_menu_item mb-3`} onClick={() => this.handleClick(3000000, 4000000)}>
                                                                                    <Link to={''} className="text-theme custome_menu"> 30L & Above </Link>
                                                                                </li>
                                                                            </div>
                                                                        </div>
                                                                    </ul>
                                                                    : null
                                                                }
                                                            </li>
                                                        )) : null}
                                                    </ul>
                                                    </div>
                                            
                                                </div>
                                                <div className="hamburger-menu mobile_menu" onClick={this.toggleNav}>
                                                    <div className={this.state.navMethod === true ? 'menu-btn active' : 'menu-btn'}> <span /> <span /> <span /> </div>
                                                </div>
                                            </div>
                                          
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="row">
                            <div className="col-md-12 searchhwe" style={{ paddingLeft: "0px" }}>
                                <div className="form_data_search" style={{position: 'relative'}}>
                                    <input type="hidden" name="make_ids[]" id="make_ids" Value="" />
                                    <input type="hidden" name="modal_ids[]" id="modal_ids" Value="" />

                                    <input type="search" onKeyUp={this.handleKeyUp} placeholder="Search by Make & Modal etc." id="final_select" className="search_data" autoComplete='off' />
                                    <img src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/search-512.png" alt="React Image" style={{position: 'absolute',right: 10,top: '30%',width: 18,height: 18}} />
                                    {/* <button type="submit" className="search_action" >Search</button> */}
                                </div>

                                <div className="data_list" style={{ maxHeight: "300px", overflowY: "scroll", scrollbarWidth: "none" }}>
                                </div>
                            </div>
                        </div>
                    </div>
              





                <div className="tunoter">
                    <div className={"navigation-wrapper" + stickyHeader}>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12">
                                    <nav>
                                        <div className="main-navigation">
                                            <div className={this.state.navMethod === true ? 'main-menu active' : 'main-menu'}>
                                                <ul className="custom-flex mainnavhwe" style={{ justifyContent: "flex-start" }}>
                                                   
                                                    <li className={`menu-item`}>
                                                        <Link style={{ color: "grey", fontFamily: "Futura Lt BT" }} to="/" className="text-theme fs-14"> Explore By </Link>
                                                    </li>
                                                    <li className={`menu-item menu-item-has-children menu-item1`} onClick={() => this.handleclick1(1)}>
                                                        <Link style={{ color: "#2e054e", fontFamily: "Futura Lt BT" }} to="/"> Price <span className="arrow" /></Link>
                                                        <ul className="custom submenu 1 - 3L" role="menu" style={{ maxHeight: "300px", overflowY: "scroll",  padding: "20px" }}>
                                                            <li className={`menu-item menu-item-has-children`}>
                                                                <Link to={`/used-cars-over-100000-rs-under-300000-rs-in-${this.state.cityname}`} className="text-theme"> 1 - 3L </Link>
                                                            </li>
                                                            <li className={`menu-item menu-item-has-children`}>
                                                                <Link to={`/used-cars-over-300000-rs-under-600000-rs-in-${this.state.cityname}`} className="text-theme"> 3L - 6L </Link>
                                                            </li>
                                                            <li className={`menu-item menu-item-has-children`}>
                                                                <Link to={`/used-cars-over-600000-rs-under-1000000-rs-in-${this.state.cityname}`} className="text-theme"> 6L - 10L </Link>
                                                            </li>
                                                            <li className={`menu-item menu-item-has-children`}>
                                                                <Link to={`/used-cars-over-1000000-rs-under-1500000-rs-in-${this.state.cityname}`} className="text-theme"> 10L - 15L </Link>
                                                            </li>
                                                            <li className={`menu-item menu-item-has-children`}>
                                                                <Link to={`/used-cars-over-1500000-rs-under-3000000-rs-in-${this.state.cityname}`} className="text-theme"> 15L - 30L </Link>
                                                            </li>
                                                            <li className={`menu-item menu-item-has-children`}>
                                                                <Link to={`/used-cars-over-3000000-rs-under-4000000-rs-in-${this.state.cityname}`} className="text-theme"> 30L & Above </Link>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className={`menu-item menu-item-has-children menu-item2`} onClick={() => this.handleclick1(2)}>
                                                        <Link style={{ color: "#2e054e", fontFamily: "Futura Lt BT" }} to="/"> Make <span className="arrow" /></Link>
                                                        <ul className="custom submenu {make.name}" role="menu" style={{ maxHeight: "300px", overflowY: "scroll",  padding: "20px" }}>
                                                            <li className={`menu-item menu-item-has-children`}>
                                                                <div className="spinner-border text-dark mb-3 ml-3 loader" role="status">
                                                                    {/* <span className="sr-only">Loading...</span> */}
                                                                </div>
                                                            </li>
                                                            {this.state.make.map(make =>
                                                                <li className={`menu-item menu-item-has-children`}>
                                                                    <Link to={`/used-${make.slug_header}-cars-in-${this.state.cityname}`} className="text-theme"> {make.name} </Link>
                                                                </li>
                                                            )}
                                                        </ul>
                                                    </li>
                                                    <li className={`menu-item menu-item-has-children menu-item3`} onClick={() => this.handleclick1(3)}>
                                                        <Link style={{ color: "#2e054e", fontFamily: "Futura Lt BT" }} to="/"> Model <span className="arrow" /></Link>
                                                        <ul className="custom submenu {model.name}" role="menu" style={{ maxHeight: "300px", overflowY: "scroll",  padding: "20px" }}>
                                                            <li className={`menu-item menu-item-has-children`}>
                                                                <div className="spinner-border text-dark mb-3 ml-3 loader1" role="status">
                                                                    {/* <span className="sr-only">Loading...</span> */}
                                                                </div>
                                                            </li>
                                                            {this.state.model.map(model =>
                                                           
                                                                <li className={`menu-item menu-item-has-children`}>
                                                                    <Link to={`/used-${model.slug_header}-cars-in-${this.state.cityname}`} className="text-theme"> {model.name} </Link>
                                                                </li>
                                                           
                                                            )}
                                                        </ul>
                                                    </li>
                                                    <li className={`menu-item menu-item-has-children menu-item4`} onClick={() => this.handleclick1(4)}>
                                                        <Link style={{ color: "#2e054e", fontFamily: "Futura Lt BT" }} to="/"> Fuel Type <span className="arrow" /></Link>
                                                        <ul className="custom submenu {fueltype.name}" role="menu" style={{ maxHeight: "300px", overflowY: "scroll",  padding: "20px" }}>
                                                            <li className={`menu-item menu-item-has-children`}>
                                                                <div className="spinner-border text-dark mb-3 ml-3 loader2" role="status">
                                                                    {/* <span className="sr-only">Loading...</span> */}
                                                                </div>
                                                            </li>
                                                            {this.state.fueltype.map(fueltype =>
                                                                <li className={`menu-item menu-item-has-children`}>
                                                                    <Link to={`/used-${fueltype.name}-cars-in-${this.state.cityname}`} className="text-theme"> {fueltype.name} </Link>
                                                                </li>
                                                            )}
                                                        </ul>
                                                    </li>
                                                    <li className={`menu-item menu-item-has-children menu-item5`} onClick={() => this.handleclick1(5)}>
                                                        <Link style={{ color: "#2e054e", fontFamily: "Futura Lt BT" }} to="/"> Year <span className="arrow" /></Link>
                                                        <ul className="custom submenu {year.name}" role="menu" style={{ maxHeight: "300px", overflowY: "scroll",  padding: "20px" }}>
                                                            <li className={`menu-item menu-item-has-children`}>
                                                                <div className="spinner-border text-dark mb-3 ml-3 loader3" role="status">
                                                                    {/* <span className="sr-only">Loading...</span> */}
                                                                </div>
                                                            </li>
                                                            {this.state.year.map(year =>
                                                                <li className={`menu-item menu-item-has-children`}>
                                                                    <Link to={`/used-cars-from-${year.name}-in-${this.state.cityname}`} className="text-theme"> {year.name} & Above</Link>
                                                                </li>
                                                            )}
                                                        </ul>
                                                    </li>
                                                    <li className={`menu-item menu-item-has-children menu-item6`} onClick={() => this.handleclick1(6)}>
                                                        <Link style={{ color: "#2e054e", fontFamily: "Futura Lt BT" }} to="/"> KM Driven <span className="arrow" /></Link>
                                                        <ul className="custom submenu price" role="menu" style={{ maxHeight: "300px", overflowY: "scroll",  padding: "20px" }}>
                                                            <li className={`menu-item menu-item-has-children`}>
                                                                <Link to={`/used-cars-under-10000-kms-in-${this.state.cityname}`} className="text-theme"> {new Intl.NumberFormat('US').format(10000)} kms & less </Link>
                                                            </li>
                                                            <li className={`menu-item menu-item-has-children`}>
                                                                <Link to={`/used-cars-under-30000-kms-in-${this.state.cityname}`} className="text-theme"> {new Intl.NumberFormat('US').format(30000)} kms & less </Link>
                                                            </li>
                                                            <li className={`menu-item menu-item-has-children`}>
                                                                <Link to={`/used-cars-under-50000-kms-in-${this.state.cityname}`} className="text-theme"> {new Intl.NumberFormat('US').format(50000)} kms & less </Link>
                                                            </li>
                                                            <li className={`menu-item menu-item-has-children`}>
                                                                <Link to={`/used-cars-under-75000-kms-in-${this.state.cityname}`} className="text-theme"> {new Intl.NumberFormat('US').format(75000)} kms & less </Link>
                                                            </li>
                                                            <li className={`menu-item menu-item-has-children`}>
                                                                <Link to={`/used-cars-under-100000-kms-in-${this.state.cityname}`} className="text-theme"> {new Intl.NumberFormat('US').format(100000)} kms & less </Link>
                                                            </li>
                                                            <li className={`menu-item menu-item-has-children`}>
                                                                <Link to={`/used-cars-under-200000-kms-in-${this.state.cityname}`} className="text-theme"> {new Intl.NumberFormat('US').format(200000)} kms & less </Link>
                                                            </li>
                                                        </ul>
                                                    </li>

                                                    <li className={`menu-item menu-item-has-children menu-item7`} onClick={() => this.handleclick1(7)}>
                                                        <Link style={{ color: "#2e054e", fontFamily: "Futura Lt BT" }} to="/"> Owner <span className="arrow" /></Link>
                                                        <ul className="custom submenu owner" role="menu" style={{ maxHeight: "300px", overflowY: "scroll",  padding: "20px" }}>
                                                            <li className={`menu-item menu-item-has-children`}>
                                                                <Link to={`/used-1st-owner-cars-in-${this.state.cityname}`} className="text-theme"> 1-owner </Link>
                                                            </li>
                                                            <li className={`menu-item menu-item-has-children`}>
                                                                <Link to={`/used-2nd-owner-cars-in-${this.state.cityname}`} className="text-theme"> 2-owner </Link>
                                                            </li>
                                                            <li className={`menu-item menu-item-has-children`}>
                                                                <Link to={`/used-3rd-owner-cars-in-${this.state.cityname}`} className="text-theme"> 3-owner </Link>
                                                            </li>
                                                            <li className={`menu-item menu-item-has-children`}>
                                                                <Link to={`/used-4th-owner-cars-in-${this.state.cityname}`} className="text-theme"> 4 or more-owner </Link>
                                                            </li>
                                                        </ul>
                                                    </li>


                                                </ul>
                                            </div>
                                            <div className="hamburger-menu ravi" onClick={this.toggleNav} style={{ padding: "11px" }}>
                                                <div className={this.state.navMethod === true ? 'menu-btn active' : 'menu-btn'}> <span /> <span /> <span /> </div>
                                            </div>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    
            <div className='row'>
                <div className='slidmen'>
                <div class="sidebar-contact">
                    <div class="toggle">
                    <i class='fas fa-angle-right'style={{ fontSize: "21px", color: "white",}}></i>

                    </div>

                    <div className="tunoter1">
                    <div className={"navigation-wrapper " + stickyHeader}>
                        <div className="container-fluid ">
                             <div className="row">
                                
                                <div className="col-12"> 
                              
                                    <nav>
                                        
                                        <div className="main-navigation active">
  
                                        <div className={this.state.navMethod === true ? 'main-menu active' : 'main-menu active monize'}>
                                         
                                                <ul className=" " style={{ justifyContent: "flex-start", listStyleType: "none"}}>
                                                   
                                                    <div className='toggle_hwe trues'>
                                                    <i class="fa fa-times" aria-hidden="true"></i>
                                                    </div>
                                    
                                                    <li className={`menu-item`}>
                                                        <Link style={{ color:"white !important", fontFamily: "Futura Lt BT",background: "rgb(46, 5, 78)",padding:"12px", color:"white"}} to="/" className="text-theme fs-14 mandot"> Explore By </Link>
                                                    </li>
                                                    <li className={`menu-item menu-item-has-children menu-item1`} onClick={() => this.handleclick1(1)}>
                                                        <Link style={{ color: "#2e054e", fontFamily: "Futura Lt BT" }} to="/"> Price <span className="arrow" /></Link>
                                                        <ul className="custom submenu" role="menu" style={{ maxHeight: "300px", overflowY: "scroll",  padding: "20px" }}>
                                                            <li className={`menu-item menu-item-has-children`}>
                                                                <Link to={`/used-cars-over-100000-rs-under-300000-rs-in-${this.state.cityname}`} className="text-theme"> 1 - 3L </Link>
                                                            </li>
                                                            <li className={`menu-item menu-item-has-children`}>
                                                                <Link to={`/used-cars-over-300000-rs-under-600000-rs-in-${this.state.cityname}`}className="text-theme"> 3L - 6L </Link>
                                                            </li>
                                                            <li className={`menu-item menu-item-has-children`}>
                                                                <Link to={`/used-cars-over-600000-rs-under-1000000-rs-in-${this.state.cityname}`} className="text-theme"> 6L - 10L </Link>
                                                            </li>
                                                            <li className={`menu-item menu-item-has-children`}>
                                                                <Link to={`/used-cars-over-1000000-rs-under-1500000-rs-in-${this.state.cityname}`} className="text-theme"> 10L - 15L </Link>
                                                            </li>
                                                            <li className={`menu-item menu-item-has-children`}>
                                                                <Link to={`/used-cars-over-1500000-rs-under-3000000-rs-in-${this.state.cityname}`} className="text-theme"> 15L - 30L </Link>
                                                            </li>
                                                            <li className={`menu-item menu-item-has-children`}>
                                                                <Link to={`/used-cars-over-3000000-rs-under-4000000-rs-in-${this.state.cityname}`} className="text-theme"> 30L & Above </Link>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className={`menu-item menu-item-has-children menu-item2`} onClick={() => this.handleclick1(2)}>
                                                        <Link style={{ color: "#2e054e", fontFamily: "Futura Lt BT" }} to="/"> Make <span className="arrow" /></Link>
                                                        <ul className="custom submenu {make.name}" role="menu" style={{ maxHeight: "300px", overflowY: "scroll",  padding: "20px" }}>
                                                            <li className={`menu-item menu-item-has-children`}>
                                                                <div className="spinner-border text-dark mb-3 ml-3 loader" role="status">
                                                                    {/* <span className="sr-only">Loading...</span> */}
                                                                </div>
                                                            </li>
                                                            {this.state.make.map(make =>
                                                                <li className={`menu-item menu-item-has-children`}>
                                                                    <Link to={`/used-${make.slug_header}-cars-in-${this.state.cityname}`} className="text-theme"> {make.name} </Link>
                                                                </li>
                                                            )}
                                                        </ul>
                                                    </li>
                                                    <li className={`menu-item menu-item-has-children menu-item3`} onClick={() => this.handleclick1(3)}>
                                                        <Link style={{ color: "#2e054e", fontFamily: "Futura Lt BT" }} to="/"> Model <span className="arrow" /></Link>
                                                        <ul className="custom submenu {model.name}" role="menu" style={{ maxHeight: "300px", overflowY: "scroll",  padding: "20px" }}>
                                                            <li className={`menu-item menu-item-has-children`}>
                                                                <div className="spinner-border text-dark mb-3 ml-3 loader1" role="status">
                                                                    {/* <span className="sr-only">Loading...</span> */}
                                                                </div>
                                                            </li>
                                                            {this.state.model.map(model =>
                                                                <li className={`menu-item menu-item-has-children`}>
                                                                    <Link to={`/used-${model.slug_header}-cars-in-${this.state.cityname}`} className="text-theme"> {model.name} </Link>
                                                                </li>
                                                            )}
                                                        </ul>
                                                    </li>
                                                    <li className={`menu-item menu-item-has-children menu-item4`} onClick={() => this.handleclick1(4)}>
                                                        <Link style={{ color: "#2e054e", fontFamily: "Futura Lt BT" }} to="/"> Fuel Type <span className="arrow" /></Link>
                                                        <ul className="custom submenu {fueltype.name}" role="menu" style={{ maxHeight: "300px", overflowY: "scroll",  padding: "20px" }}>
                                                            <li className={`menu-item menu-item-has-children`}>
                                                                <div className="spinner-border text-dark mb-3 ml-3 loader2" role="status">
                                                                    {/* <span className="sr-only">Loading...</span> */}
                                                                </div>
                                                            </li>
                                                            {this.state.fueltype.map(fueltype =>
                                                                <li className={`menu-item menu-item-has-children`}>
                                                                    <Link to={`/used-${fueltype.name}-cars-in-${this.state.cityname}`} className="text-theme"> {fueltype.name} </Link>
                                                                </li>
                                                            )}
                                                        </ul>
                                                    </li>
                                                    <li className={`menu-item menu-item-has-children menu-item5`} onClick={() => this.handleclick1(5)}>
                                                        <Link style={{ color: "#2e054e", fontFamily: "Futura Lt BT" }} to="/"> Year <span className="arrow" /></Link>
                                                        <ul className="custom submenu {year.name}" role="menu" style={{ maxHeight: "300px", overflowY: "scroll",  padding: "20px" }}>
                                                            <li className={`menu-item menu-item-has-children`}>
                                                                <div className="spinner-border text-dark mb-3 ml-3 loader3" role="status">
                                                                    {/* <span className="sr-only">Loading...</span> */}
                                                                </div>
                                                            </li>
                                                            {this.state.year.map(year =>
                                                                <li className={`menu-item menu-item-has-children`}>
                                                                    <Link to={`/used-cars-from-${year.name}-in-${this.state.cityname}`} className="text-theme"> {year.name} & Above</Link>
                                                                </li>
                                                            )}
                                                        </ul>
                                                    </li>
                                                    <li className={`menu-item menu-item-has-children menu-item6`} onClick={() => this.handleclick1(6)}>
                                                        <Link style={{ color: "#2e054e", fontFamily: "Futura Lt BT" }} to="/"> KM Driven <span className="arrow" /></Link>
                                                        <ul className="custom submenu price_m" role="menu" style={{ maxHeight: "300px", overflowY: "scroll",  padding: "20px" }}>
                                                            <li className={`menu-item menu-item-has-children`}>
                                                                <Link to={`/used-cars-under-10000-kms-in-${this.state.cityname}`} className="text-theme"> {new Intl.NumberFormat('US').format(10000)} kms & less </Link>
                                                            </li>
                                                            <li className={`menu-item menu-item-has-children`}>
                                                                <Link to={`/used-cars-under-30000-kms-in-${this.state.cityname}`} className="text-theme"> {new Intl.NumberFormat('US').format(30000)} kms & less </Link>
                                                            </li>
                                                            <li className={`menu-item menu-item-has-children`}>
                                                                <Link to={`/used-cars-under-50000-kms-in-${this.state.cityname}`} className="text-theme"> {new Intl.NumberFormat('US').format(50000)} kms & less </Link>
                                                            </li>
                                                            <li className={`menu-item menu-item-has-children`}>
                                                                <Link to={`/used-cars-under-75000-kms-in-${this.state.cityname}`} className="text-theme"> {new Intl.NumberFormat('US').format(75000)} kms & less </Link>
                                                            </li>
                                                            <li className={`menu-item menu-item-has-children`}>
                                                                <Link to={`/used-cars-under-100000-kms-in-${this.state.cityname}`} className="text-theme"> {new Intl.NumberFormat('US').format(100000)} kms & less </Link>
                                                            </li>
                                                            <li className={`menu-item menu-item-has-children`}>
                                                                <Link to={`/used-cars-under-200000-kms-in-${this.state.cityname}`} className="text-theme"> {new Intl.NumberFormat('US').format(200000)} kms & less </Link>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className={`menu-item menu-item-has-children menu-item7`} onClick={() => this.handleclick1(7)}>
                                                        <Link style={{ color: "#2e054e", fontFamily: "Futura Lt BT" }} to="/"> Owner <span className="arrow" /></Link>
                                                        <ul className="custom submenu owner_m" role="menu" style={{ maxHeight: "300px", overflowY: "scroll",  padding: "20px" }}>
                                                            <li className={`menu-item menu-item-has-children`}>
                                                                <Link to={`/used-1st-owner-cars-in-${this.state.cityname}`} className="text-theme"> 1-owner </Link>
                                                            </li>
                                                            <li className={`menu-item menu-item-has-children`}>
                                                                <Link to={`/used-2nd-owner-cars-in-${this.state.cityname}`} className="text-theme"> 2-owner </Link>
                                                            </li>
                                                            <li className={`menu-item menu-item-has-children`}>
                                                                <Link to={`/used-3rd-owner-cars-in-${this.state.cityname}`} className="text-theme"> 3-owner </Link>
                                                            </li>
                                                            <li className={`menu-item menu-item-has-children`}>
                                                                <Link to={`/used-4th-owner-cars-in-${this.state.cityname}`} className="text-theme"> 4 or more-owner </Link>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                              
                                            </div>
                                            
                                             <div className="hamburger-menu ravi" onClick={this.toggleNav} style={{ padding: "11px" }}>
                                          
                                            </div>
                                         
                                        </div>
                                      
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                </div>


                <div class="banner"></div>
                <div class="content">
             </div>
             </div>
                <div id="exampleModal">
                    <div className="modal-dialog custome_dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Select a city</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>

                            <div className="modal-body" style={{ padding: "1rem 2rem" }}>
                                <div className="row">
                                    {this.state.city.map(city =>
                                        <div className="col-md-2 text-center body_content">
                                            <input type="hidden" Value={city.id} />
                                            <img  loading="lazy" src={process.env.PUBLIC_URL + "/assets/images/city/city.png"} className="img-fluid" alt="logo" />
                                            <h6>{city.city}</h6>
                                        </div>
                                    )}
                                    {/* <div className="col-md-2 text-center body_content">
                                        <input type="hidden" Value="all" />
                                        <img  loading="lazy" src={process.env.PUBLIC_URL + "/assets/images/city/city.png"} className="img-fluid" alt="logo" />
                                        <h6>All India</h6>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;