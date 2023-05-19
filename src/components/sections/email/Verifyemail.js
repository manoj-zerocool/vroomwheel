import React, { Component,Fragment,Redirect } from 'react';
import * as CONSTANT from '../../../Constent';
import { Link, useNavigate } from "react-router-dom";
import jquery from 'jquery';

class Verifyemail extends Component {
    constructor(props) {
        if( localStorage.getItem("auth") == 1){
            window.location.href = "/";
            return false;
        }
        super();
        this.state = {
            email: '',
            password: '',
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
    
    handleSubmit(e) {
        e.preventDefault();
        this.setState({ message : 'Success! : Please wait while redirecting To Collection....'});
        jquery('#server_response').addClass('alert-success');
        jquery("#server_response_parent").slideDown().delay(5000).slideUp();
     
        setTimeout(function(){ window.location.href = "/forgotpassword"; }, 3000);
      
        
    }

    resetForm() {
        this.setState({email: "", password: "", })
    }
   
   
    
    render() {
return (
            
            <Fragment>
                <div className="section-padding contact-form-map">
                    <div className="container">
                        <div className="row">
                            <div className="offset-3 col-md-6 text-left">



                                <div className="section-header style-left pt-4 pb-3">
                                   
                                    <div className="section-heading text-center" mt="5">
                                        <h3 className="text-custom-black" >Verify Email</h3>                                       
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
                        <form className="mb-md-80 w-75" onSubmit={this.handleSubmit.bind(this)}  method="Get">
                                    <div className="row">                                       
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                    <input type="email" name="email" className="form-control form-control-custom"  onChange={this.onEmailChange.bind(this)} Value={this.state.email} placeholder="Email Address " required autoComplete='off' />
                                            </div> 
                                        </div>  
                                    </div>  
                                    <div className="row"> 
                                <div className="col-md-12 ">  
                               <div >   

                               <button type="submit" className="btn-first btn-submit w-50">Verify</button>                            
                           
      
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

export default Verifyemail;