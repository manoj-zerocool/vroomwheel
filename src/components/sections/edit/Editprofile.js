import React, { Component,Fragment,Redirect } from 'react';
import * as CONSTANT from '../../../Constent';
import { Link, useNavigate } from "react-router-dom";
import jquery from 'jquery';

class Editprofile extends Component {
    constructor(props) {
        // if( localStorage.getItem("auth") == 1){
        //     window.location.href = "/";
        //     return false;
        // }
        super();
        this.state = {
          make_name: '',
          model_name: '',
          year: '',
          fuel: '',
          owner: '',
          km_driven: '',
            
        }
    }


    onmake_nameChange(event) {
      this.setState({ make_name: event.target.value })
  }
  onmodel_nameChange(event) {
      this.setState({ model_name: event.target.value })
  }
  onyearChange(event) {
      this.setState({ year: event.target.value })
  }
  onfuelChange(event) {
      this.setState({ fuel: event.target.value })
  }
  onownerChange(event) {
      this.setState({ owner: event.target.value })
  }
  onkm_drivenChange(event) {
      this.setState({ km_driven: event.target.value })
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

        // if(response.message == 1) {
            
        //     this.setState({ message : 'Success! : Account Create Successfully.'});
        //     jquery('#server_response').addClass('alert-success');
        //     jquery("#server_response_parent").slideDown().delay(5000).slideUp();

        //     this.resetForm();
        //     this.setState({
        //         isVerified: true
        //     })
        // } else {
        //     this.setState({ message : 'Oops! : Something bad happened.Please try again later.'});

        //     jquery('#server_response').addClass('alert-danger');
        //     jquery("#server_response_parent").slideDown().delay(5000).slideUp();

        // }
    })
    
}
resetForm() {
    this.setState({ fname: "", lname: "", email: "", password: "", })
}


    render() {
return (
            
            <Fragment>
                   <div className='cointainer-fluid mt-5'>
        <div className='row'>
        <div className='col-sm-12 mt-5 m-5   text-light'></div>
                <div className="container-flude">
                        <div className="row">
                            <div className="offset-1 col-md-8 text-left">
                                <div className="section-header style-left pb-3">
                                    <div className="section-heading">
                                        <h3 className="text-custom-black">Edit Car</h3>                                       
                                    </div>
                                </div>
                                {/* <div className="col-md-12" id="server_response_parent">
                                <div class="alert  alert-dismissible fade show " role="alert" id="server_response">
                                {this.state.message} 
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                                </div>
                                </div> */}
                <form>
                  <div className='row'>
                      <div className='col-md-6 mb-3'>
                        <label for="make_name" className="form-label">Make Name</label>
                        <div className="form-group">
                            <input type="text" name="make_name"  className="form-control form-control-custom" onChange={this.onmake_nameChange.bind(this)} Value={this.state.make_name} placeholder="Enter Make Name" required />
                        </div>
                      </div>
                      <div className='col-md-6 mb-3'>
                        <label for="model_name" className="form-label">Model Name</label>
                        <div className="form-group">
                            <input type="text" name="model_name"  className="form-control form-control-custom" onChange={this.onmodel_nameChange.bind(this)} Value={this.state.model_name} placeholder="Enter Modal Name" required />
                        </div>
                      </div>
                  </div>
                  <div className='row'>
                      <div className='col-md-6 mb-3'>
                        <label for="year" className="form-label">Enter Year</label>
                        <div className="form-group">
                            <input type="number" name="year"  className="form-control form-control-custom" onChange={this.onyearChange.bind(this)} Value={this.state.year} placeholder="Enter Year" required />
                        </div>
                      </div>
                      <div className='col-md-6 mb-3'>
                        <label for="fuel" className="form-label">Fuel</label>
                        <div className="form-group">
                            <input type="text" name="fuel"  className="form-control form-control-custom" onChange={this.onfuelChange.bind(this)} Value={this.state.fuel} placeholder="Enter Fuel Type" required />
                        </div>
                      </div>
                  </div>
                  <div className='row'>
                      <div className='col-md-6 mb-3'>
                        <label for="owner" className="form-label">Enter Owner Type</label>
                        <div className="form-group">
                            <input type="text" name="owner"  className="form-control form-control-custom" onChange={this.onownerChange.bind(this)} Value={this.state.owner} placeholder="Enter Owner Type" required />
                        </div>
                      </div>
                      <div className='col-md-6 mb-3'>
                        <label for="km_driven" className="form-label">Enter Km Driven</label>
                        <div className="form-group">
                            <input type="text" name="km_driven"  className="form-control form-control-custom" onChange={this.onkm_drivenChange.bind(this)} Value={this.state.km_driven} placeholder="Enter Km Driven" required />
                        </div>
                      </div>
                  </div>
                 
                  <button type="submit" className="btn btn-first btn-submit">Update Car</button>
         
                </form>

                <br></br>
              </div>  
              </div>  
              </div>  
              </div>  
              </div>  
             
            </Fragment>
        );
    }
}

export default Editprofile;