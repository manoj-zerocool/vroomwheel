import React, { Component,Fragment,Redirect } from 'react';
import * as CONSTANT from '../../../Constent';
import { Link, useNavigate } from "react-router-dom";
import jquery from 'jquery';

class Forgotpassword extends Component {

    constructor(props) {
        if( localStorage.getItem("auth") == 1){
            window.location.href = "/";
            return false;
        }
        super();
        this.state = {
            email: 'khan@gmail.com',
            password: '',
            confirmpassword:'',
            message: ''
            
        }
    }

    componentDidMount() {
        jquery('#server_response_parent').hide();
        this.setState({ message : ''});
        jquery('.close').on('click',function(){
            jquery('#server_response_parent').hide();
        });
    }


    onEmailChange(event) {
        this.setState({ email: event.target.value })
    }

    
    onPasswordChange(event) {
        this.setState({ password: event.target.value })
    }

    onconfirmPasswordChange(event) {
        this.setState({ confirmpassword: event.target.value })
    }
   
    
    handleSubmit(e) {
        e.preventDefault();
        const { password, confirmpassword } = this.state;
        // perform all neccassary validations
        if (!password) {
            alert("Passwords Enter ");
            return
        } if (password.length <= 5) {
            alert("password length min 6");
            return
        } 
        if (password !=confirmpassword) {
            alert("Passwords don't match");
            return
        } 
    }

       
//         fetch(CONSTANT.BaseUrl + '/services/forgotpassword', {
//             method: "POST",
            
//             headers: {
//                 'Content-Type': 'application/json'
//               },
//               body: JSON.stringify({
                
//                 email :this.state.email,
//                 password :this.state.password
//               })
//         }).then(
//             (response) => (response.json())
//         ).then((response) => {
// <Redirect to={{ pathname: '/forgotpassword' }} />
//             if(response.message == 1) {
                
//                 this.setState({ message : 'Success! : Please wait while redirecting To Collection....'});
//                 jquery('#server_response').addClass('alert-success');
//                 jquery("#server_response_parent").slideDown().delay(5000).slideUp();
//                 localStorage.setItem('auth', '1');
//                 // const navigate = useNavigate();
//                 // navigate('/homepage')
//                 setTimeout(function(){ window.location.href = "/dashboard"; }, 3000);
//                 this.resetForm();
//                 this.setState({
//                     isVerified: true
//                 })
//             } else {
//                 this.setState({ message : 'Oops! : Something bad happened.Please try again later.'});

//                 jquery('#server_response').addClass('alert-danger');
//                 jquery("#server_response_parent").slideDown().delay(5000).slideUp();

//             }
//         })
        
   
    resetForm() {
        this.setState({email: "", password: "", })
    }
   
   
    render() { 
        return ( 
                  
            <Fragment>   
                <div className=" section-padding contact-form-map">
                    <div className="container">
                        <div className="row">
                            <div className="offset-3 col-md-6 text-left">
                                <div className="section-header style-left pb-3 pt-5">
                                    <div className="section-heading text-center" >
                                        <h3 className="text-custom-black">Forgot Password</h3>                                       
                                    </div>
                                </div>
                                <div className="col-md-12" id="server_response_parent">
                                <div class="alert  alert-dismissible fade show " role="alert" id="server_response">
                                {this.state.message} 
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                                </div>
                                </div>



                                <form className="mb-md-80 w-75" onSubmit ={this.handleSubmit.bind(this)} method="Get">
                                    <div className="row">                                       
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <input type="email" name="email"
                                             
                
                                                 className="form-control form-control-custom" 
                                                  onChange={this.onEmailChange.bind(this)} 
                                                  Value={this.state.email}  placeholder="Email Address or Useranme" 
                                                  required autoComplete='off'  />
                                            </div> 
                                        </div>  
                                    </div>  
                                    <div className="row"> 
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <input type="password" name="password" Value={this.state.passowrd} onChange={this.onPasswordChange.bind(this)} className="form-control form-control-custom" placeholder="Passowrd" required autoComplete='off' />
                                            </div>
                                        </div>        
                                                                      
                                        <div className="col-md-12 ">  
                                            <div className="form-group">
                                                <input type="confirmpassword" name="confirmpassword" Value={this.state.confirmpassowrd} onChange={this.onconfirmPasswordChange.bind(this)} className="form-control form-control-custom" placeholder=" Confirm passowrd" required autoComplete='off' />
                                            </div>
                                            <div >        
                                              {/* <Link  to='/forgotpassword'>  */}
                                               <button  className="btn-first btn-submit w-50">Forgot</button> 
                                               {/* </Link>                               */}
                                          </div>
                                        </div>                                       
                                    </div>
                                </form>





                            </div>                           
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Forgotpassword;