import React, { Component,Fragment } from 'react';
import Contacthelper from '../../../helper/Contacthelper';
import ReCAPTCHA from "react-google-recaptcha";
import * as CONSTANT from '../../../Constent';
import jquery from 'jquery';


class Register extends Component {
    constructor(props) {
        if( localStorage.getItem("auth") == 1){
            window.location.href = "/";
            return false;
        }
        super();
        this.state = {
            fname: '',
            lname: '',
            email: '',
            password: '',
            message: '',
            isVerified: false
        }
    }
    componentDidMount() {
        jquery('#server_response_parent').hide();
        this.setState({ message : ''});
        jquery('.close').on('click',function(){
            jquery('#server_response_parent').hide();
        });
    }
    onfNameChange(event) {
        this.setState({ fname: event.target.value })
    }
    onlNameChange(event) {
        this.setState({ lname: event.target.value })
    }
    onEmailChange(event) {
        this.setState({ email: event.target.value })
    }
    onPasswordChange(event) {
        this.setState({ password: event.target.value })
    }
    
    handleSubmit(e) {
        e.preventDefault();
         fetch(CONSTANT.BaseUrl + '/services/register', {
            method: "POST",
            
            headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                fname :this.state.fname,
                lname :this.state.lname,
                email :this.state.email,
                password :this.state.password
              })
        }).then(
            (response) => (response.json())
        ).then((response) => {

            if(response.message == 1) {
                
                this.setState({ message : 'Success! : Account Create Successfully.'});
                jquery('#server_response').addClass('alert-success');
                jquery("#server_response_parent").slideDown().delay(5000).slideUp();

                this.resetForm();
                this.setState({
                    isVerified: true
                })
            } else {
                this.setState({ message : 'Oops! : Something bad happened.Please try again later.'});

                jquery('#server_response').addClass('alert-danger');
                jquery("#server_response_parent").slideDown().delay(5000).slideUp();

            }
        })
        
    }
    resetForm() {
        this.setState({ fname: "", lname: "", email: "", password: "", })
    }
  
    render() {
        return (
            <Fragment>
                <div className="section-padding contact-form-map">
                    <div className="container-flude">
                        <div className="row">
                            <div className="offset-3 col-md-6 text-left">
                                <div className="section-header style-left pb-3">
                                    <div className="section-heading">
                                        <h3 className="text-custom-black">Create Account</h3>                                       
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
                                <form className="mb-md-80" onSubmit={this.handleSubmit.bind(this)}  method="GET">
                                    <div className="row"> 
                                    <div className="col-md-6 mt-3">
                                            <div className="form-group">
                                                <input type="text" name="user" className="form-control form-control-custom" onChange={this.onfNameChange.bind(this)} Value={this.state.fname} placeholder="Enter First Name" required />
                                            </div>
                                        </div>  
                                        <div className="col-md-6 mt-3">
                                            <div className="form-group">
                                                <input type="text" name="user" className="form-control form-control-custom" onChange={this.onlNameChange.bind(this)}  Value={this.state.lname} placeholder="Enter Last Name" required />
                                            </div>
                                        </div>                                       
                                        <div className="col-md-12 mt-3">
                                            <div className="form-group">
                                                <input type="email" name="user" className="form-control form-control-custom" onChange={this.onEmailChange.bind(this)}  Value={this.state.email} placeholder="Email Address " required />
                                            </div>  
                                        </div>  
                                    </div>  
                                    <div className="row mt-3"> 
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <input type="password" name="password"  className="form-control form-control-custom" onChange={this.onPasswordChange.bind(this)}  Value={this.state.password} placeholder="passowrd" required />
                                                <span>The password policy a minimum of 6 characters</span>

                                            </div>
                                        </div>                                      
                                        <div className="col-md-12 mt-3">                                            
                                            <button type="submit" className="btn-first btn-submit">Create Account</button>                                    
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

export default Register;