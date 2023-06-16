import React, { Component, Fragment } from 'react';
import * as CONSTANT from '../Constent';
import jquery from 'jquery';
class Contacthelper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            phone: '',
            email: '',
            subject: '',
            mess: '',
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

    onNameChange(event) {
        this.setState({ name: event.target.value })
    }
    onPhoneChange(event) {
        this.setState({ phone: event.target.value })
    }
    onEmailChange(event) {
        this.setState({ email: event.target.value })
    }
    onSubjectChange(event) {
        this.setState({ subject: event.target.value })
    }
    onMessChange(event) {
        this.setState({ mess: event.target.value })
        // console.log("mmmmmmm",message);
     
    }
    // REcaptcha
    reCaptchaLoaded(value) {
        console.log("Captcha Successfully Loaded", value);
    }
    handleSubmit(e) {
        e.preventDefault();

        if(this.state.phone.length < 10 || this.state.phone.length > 10){

            if(this.state.phone.length < 10){
                this.setState({ message : 'Please enter 10 digits of number.'});
                jquery('#server_response').addClass('alert-danger');
                jquery("#server_response_parent").slideDown().delay(5000).slideUp();
            }else if(this.state.phone.length > 10){  
                this.setState({ message : 'Can`t ender more then 10 digits.'});
                jquery('#server_response').addClass('alert-danger');
                jquery("#server_response_parent").slideDown().delay(5000).slideUp();
            }

            return false;

        }else{
        jquery('#server_response').removeClass('alert-danger');
        
        // eslint-disable-next-line no-restricted-globals
        fetch(CONSTANT.BaseUrl + '/services/contact_insert', {
            method: "POST",
            body: JSON.stringify(this.state),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then(
            (response) => (response.json())
        ).then((response) => {

            if(response.message == 1) {
               
                this.setState({ message : 'Success! : Form submitted Successfully....'});
                jquery('#server_response').addClass('alert-success');
                jquery("#server_response_parent").slideDown().delay(5000).slideUp();
                // document.getElementById("server_response_success").classList.add("d-block");
                this.resetForm();
                this.setState({
                    isVerified: true
                })
                return
            } else {
                      
                this.setState({ message : 'Oops! : Something bad happened.Please try again later.'});

                jquery('#server_response').addClass('alert-danger');
                jquery("#server_response_parent").slideDown().delay(5000).slideUp();

              
                // document.getElementById("server_response_danger").classList.add("d-block");
            }
        })
        }
    }
    resetForm() {
        this.setState({ name: "", phone: "", email: "", subject: "", mess: "",  })
    }
    render() {
        return (
            <Fragment />
        );
    }
}

export default Contacthelper;