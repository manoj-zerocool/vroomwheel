import React, { Component,Fragment,Redirect } from 'react';
import * as CONSTANT from '../../../Constent';
import { Link, useNavigate } from "react-router-dom";
import jquery from 'jquery';

class Login extends Component {
    constructor(props) {
        if( localStorage.getItem("auth") == 1){
            window.location.href = "/";
            return false;
        }
        super();
        this.state = {
            email: '',
            password: '',
            message: '',
            passwordShowToggle: true
            
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
        fetch(CONSTANT.BaseUrl + '/services/login', {
            method: "POST",
            
            headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                
                email :this.state.email,
                password :this.state.password
              })
        }).then(
            (response) => (response.json())
        ).then((response) => {
            console.log(response);
//<Redirect to={{ pathname: '/login' }} />
            if(response.message == 1) {
                this.setState({ message : 'Success! : Please wait while redirecting To Collection....'});
                jquery('#server_response').addClass('alert-success');
                jquery("#server_response_parent").slideDown().delay(5000).slideUp();
                localStorage.setItem('auth', '1');
                localStorage.setItem('auth_id', response.result.user_data['id']);
                localStorage.setItem('auth_data', JSON.stringify(response.result) );
                
                setTimeout(function(){ window.location.href = "/dashboard"; }, 3000);
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
        this.setState({email: "", password: "", })
    }
   
   
    render() {
        return (
            
            <Fragment>
                <div className="section-padding contact-form-map">
                    <div className="container">
                        <div className="row">
                            <div className="offset-3 col-md-6 text-left">


                                <div className="section-header style-left pb-3">
                                    <div className="section-heading text-center">
                                        <h3 className="text-custom-black">Login</h3>                                       
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
                                                <input type="email" name="email" className="form-control form-control-custom"  onChange={this.onEmailChange.bind(this)} Value={this.state.email} placeholder="Email Address or Useranme" required autoComplete='off' />
                                            </div> 
                                        </div>  
                                    </div>  
                                    <div className="row"> 
                                        <div className="col-md-12">
                                            <div className="form-group" style={{position: 'relative'}}>
                                                <input type={(this.state.passwordShowToggle ? 'password' : 'text')} name="password" Value={this.state.passowrd} onChange={this.onPasswordChange.bind(this)} className="form-control form-control-custom" placeholder="passowrd" required autoComplete='off' />
                                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxw_eKJ7DX6lGvf9SPPHp2fFbCK9qdPjF_dA&usqp=CAU" alt="React Image" style={{position: 'absolute',right: 10,top: '25%',width: 20,height: 20}} onClick={() => this.setState({passwordShowToggle: !this.state.passwordShowToggle})} />
                                            
                                            </div>
                                        </div>                                      
                                        <div className="col-md-12 ">  
                                        <span className='d-block mb-3'><Link style={{ color: "#2e054e", fontWeight: "500", fontSize: "15px" }} to='/verifyemail'>Forgot Passowrd</Link></span>                                 

                                        <div className="text-center">        
                                                                            
                                            <button type="submit" className="btn-first btn-submit w-50">Login</button> 
                                    </div>

                                            <span className='mt-3 d-block'>If you dont have account. <Link style={{ color: "#2e054e", fontWeight: "500", fontSize: "15px" }} to='/register'>Create Account</Link></span>                                 
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

export default Login;