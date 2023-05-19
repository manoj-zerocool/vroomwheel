import React, { Component,Fragment } from 'react';
import Contacthelper from '../../../helper/Contacthelper';
import ReCAPTCHA from "react-google-recaptcha";
import * as CONSTANT from '../../../Constent';
import jquery from 'jquery';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import $ from "jquery";

import { Link, useNavigate } from "react-router-dom";
class Register extends Component {
 
    constructor(props) {
        if( localStorage.getItem("auth") != 1){
            window.location.href = "/";
            return false;
        }
        super();
        this.state = {
          car_name: 'tata nexon upload by ravi',
          make_name: 'tata',
          model_name: 'zx+',
          year: '2021',
          fuel: 'petrol',
          owner: '1',
          km_driven: '1000',
          price: '1600000',
          city_val: '2',
            auth_id: '',
            fname: '',
            lname: '',
            email: '',
            password: '',
            message: '',
            oldpassword:'',
            newpassword:'',
            city: [],
            
            isVerified: false
        }
    }



    componentDidMount() {
      
        jquery('#server_response_parent').hide();
        this.setState({ message : ''});
        jquery('.close').on('click',function(){
            jquery('#server_response_parent').hide();
        });

        fetch(`${CONSTANT.BaseUrl}/services/getcity`, {
          method: 'GET',
      })
          .then((response) => response.json())
          .then((response) => {
              this.setState({ city: response.result })
          })
          .catch((error) => {
          });
    // store data in profile tab.
    const user_details = JSON.parse(localStorage.getItem("auth_data"));
      
    this.setState({ auth_id: localStorage.getItem("auth_id") })
    this.setState({ fname: user_details.user_data['fname'] })
    this.setState({ lname: user_details.user_data['lname'] })
    this.setState({ email: user_details.user_data['email'] })

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

  oldpasswordChange(event) {
    this.setState({  oldpassword: event.target.value })
    // console.log("cccccccc",Oldpassword)
}

newPasswordChange(event) {
  this.setState({ newpassword: event.target.value })
  // console.log("dddddddd", newpassword)

}





handleSubmit1(e){
  e.preventDefault();

  this.setState({ message : 'Success! : Update Successfully.'});
  jquery('#server_response1').addClass('alert-success');
  jquery("#server_response_parent1").slideDown().delay(5000).slideUp();

 
}

// addc car tab

oncar_nameChange(event) {
  this.setState({ car_name: event.target.value })
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
onpriceChange(event) {
  this.setState({ price: event.target.value })
}
oncityChange(event) {
this.setState({ city_val: event.target.value })
}
handleaddcar(e){
  e.preventDefault();
  fetch(CONSTANT.BaseUrl + '/services/add_car', {
     method: "POST",
     headers: {
         'Content-Type': 'application/json'
       },
       body: JSON.stringify({
         auth_id :localStorage.getItem("auth_id"),
         car_name :this.state.car_name,
         make_name :this.state.make_name,
         model_name :this.state.model_name,
         year :this.state.year,
         price :this.state.price,
         fuel :this.state.fuel,
         owner :this.state.owner,
         km_driven :this.state.km_driven,
         city_val :this.state.city_val,
       })
 }).then(
     (response) => (response.json())
 ).then((response) => {
     if(response.status) {
       
         this.setState({ message : response.message});
         this.resetaddcarForm();
         jquery('#server_response_add_car').addClass('alert-success');
         jquery("#server_response_add_car").slideDown().delay(5000).slideUp();

         this.resetprofileForm();
        
     } else {
         this.setState({ message :  response.message});

         jquery('#server_response_add_car').addClass('alert-danger');
         jquery("#server_response_add_car").slideDown().delay(5000).slideUp();

     }
 })
 
}

handleprofileSubmit(e){
  e.preventDefault();
  fetch(CONSTANT.BaseUrl + '/services/update_profile', {
     method: "POST",
     
     headers: {
         'Content-Type': 'application/json'
       },
       body: JSON.stringify({
         auth_id :localStorage.getItem("auth_id"),
         fname :this.state.fname,
         lname :this.state.lname,
         email :this.state.email,
       })
 }).then(
     (response) => (response.json())
 ).then((response) => {
     if(response.status) {
       
         this.setState({ message : response.message});
         localStorage.setItem('auth_data', JSON.stringify(response.result) );
         this.resetprofileForm();
         jquery('#server_response').addClass('alert-success');
         jquery("#server_response_parent").slideDown().delay(5000).slideUp();

         this.resetprofileForm();
        //  this.setState({
        //      isVerified: true
        //  })
     } else {
         this.setState({ message :  response.message});

         jquery('#server_response').addClass('alert-danger');
         jquery("#server_response_parent").slideDown().delay(5000).slideUp();

     }
 })
 
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
              
                this.setState({ message : 'Success : Profile Update Successfully.'});
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
    resetprofileForm() {
    const user_details = JSON.parse(localStorage.getItem("auth_data"));
    this.setState({ fname: user_details.user_data['fname'] , lname: user_details.user_data['lname'] , email: user_details.user_data['email'] })
    }
    resetaddcarForm() {
      const user_details = JSON.parse(localStorage.getItem("auth_data"));
      this.setState({
        car_name : '',
         make_name: '' , 
         model_name: '' , 
         fuel: '' , 
         km_driven: '' , 
         owner: '' , 
         price: '' , 
         city_val: '' , 
         year: '' , 
      
         })
      }
  
    render() {
        return (
            <Fragment>
     <div className='cointainer-fluid mt-5'>
        <div className='row'>
        <div className='col-sm-12 mt-5 m-5   text-light'>

                  
    <Tab.Container id="left-tabs-example" defaultActiveKey="view_car">
      <Row>
        <Col className="col-sm-3 p-2">
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="view_car">View Car</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="add_car">Add Car</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="reset_password">Reset Password</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="profile">Profile</Nav.Link>
            </Nav.Item>
           
          </Nav>
        </Col>
        <Col className="col-sm-9 p-2" >
         
            <Tab.Pane eventKey="view_car">
            <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Car Image</th>
      <th scope="col">Car Name</th>
      <th scope="col">Make Name</th>
      <th scope="col">MRP</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <th ><img className='img-thumbnail' src='https://images10.gaadicdn.com/usedcar_image/320x240/a0929163d35d80df05ad533ae8b3ae15.jpeg' alt='' style={{maxWidth:'100px'}} /></th>
      <td>Nexon XZ+ (optional)</td>
      <td>Tata</td>
      <td>Sell</td>
      <td><div class="btn-group" role="group" aria-label="Basic example">
      <Link to='/editprofile'>
        <button type="button" class="btn btn-primary bg-success">Edit</button>
        </Link>    
        <button type="button" class="btn btn-primary bg-danger">Trash</button>
      </div></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <th ><img className='img-thumbnail' src='https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20230112034637_Harrier_front.jpg' alt='' style={{maxWidth:'100px'}} /></th>
      <td>Harrier XZ (#dark)</td>
      <td>Tata</td>
      <td>Sell</td>
      <td><div class="btn-group" role="group" aria-label="Basic example">
       
         <Link to='/editprofile'>
      <button type="button" class="btn btn-primary bg-success" >Edit</button>
        </Link>    
                             
      
        <button type="button" class="btn btn-primary bg-danger">Trash</button>
      </div></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <th ><img className='img-thumbnail' src='https://akm-img-a-in.tosshub.com/indiatoday/images/story/202202/Tata_Safari_Adventure_Orcus_Wh.png?size=690:388' alt='' style={{maxWidth:'100px'}} /></th>
      <td>Safari Xm (#dark)</td>
      <td>Tata</td>
      <td>Sell</td>
      <td><div class="btn-group" role="group" aria-label="Basic example">
      <Link to='/editprofile'>
        <button type="button" class="btn btn-primary bg-success">Edit</button>
        </Link>    
        <button type="button" class="btn btn-primary bg-danger">Trash</button>
      </div></td>
    </tr>
  </tbody>
</table>
</Tab.Pane>

            <Tab.Pane eventKey="add_car">
              <div className='container mb-3'>

              <div className="col-md-10" id="server_response_add_car">
                                <div class="alert  alert-dismissible fade show " role="alert" id="server_response1">
                                {this.state.message} 
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                                </div>
                                        </div>
                <form onSubmit={this.handleaddcar.bind(this)} className="col-md-12 mt-3">
                  <div className='row'>
                  <div className='col-md-6 mb-3'>
                        <label for="make_name" className="form-label">Car Name</label>
                        <div className="form-group">
                            <input type="text" name="car_name"  className="form-control form-control-custom" onChange={this.oncar_nameChange.bind(this)} Value={this.state.car_name} placeholder="Enter Car Name" required />
                        </div>
                      </div>
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
                 
                  
                      <div className='col-md-6 mb-3'>
                        <label for="year" className="form-label">Enter Year</label>
                        <div className="form-group">
                            <input type="number" name="year"  className="form-control form-control-custom" onChange={this.onyearChange.bind(this)} Value={this.state.year} placeholder="Enter Year" required />
                        </div>
                      </div>
                      <div className='col-md-6 mb-3'>
                        <label for="price" className="form-label">Enter Price</label>
                        <div className="form-group">
                            <input type="number" name="price"  className="form-control form-control-custom" onChange={this.onpriceChange.bind(this)} Value={this.state.price} placeholder="Enter Fuel Type" required />
                        </div>
                      </div>
                      <div className='col-md-6 mb-3'>
                        <label for="fuel" className="form-label">Fuel</label>
                        <div className="form-group">
                            <input type="text" name="fuel"  className="form-control form-control-custom" onChange={this.onfuelChange.bind(this)} Value={this.state.fuel} placeholder="Enter Fuel Type" required />
                        </div>
                      </div>

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
                  
                      <div className='col-md-6 mb-3'>
                        <label for="city" className="form-label">City</label>
                        <select id="city" className="form-select form-control-custom" onChange={this.oncityChange.bind(this)}>
                          <option>City</option>
                          {this.state.city.map(city =>
                          
                              <option Value={city.city}>
                                  {city.city}
                              </option>
                          )}
                        </select>
                        </div>
                      {/*  */}
                  </div>
                  <button type="submit" className="btn btn-first btn-submit">Add Car</button>
                </form>
              </div>                                             
            </Tab.Pane>
            <Tab.Pane eventKey="reset_password">
              <div className='container mb-3'>

              <div className="col-md-10" id="server_response_parent1">
                                <div class="alert  alert-dismissible fade show " role="alert" id="server_response1">
                                {this.state.message} 
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                                </div>
                                        </div>


              <form className="col-md-12 mt-3" onSubmit={this.handleSubmit1.bind(this)}  method="POST">
                  <div className='row'>
                      <div className='col-md-5 mb-3 d-none '> 
                          <label style={{color: 'black'}}>Old passowrd</label>
                          <div className="form-group">
                          {/* <input type="oldpassword" name="oldpassword" Value={this.state.oldpassword} onChange={this.oldpasswordChange.bind(this)} className="form-control form-control-custom" placeholder="Enter old passowrd" required autoComplete='off' /> */}
                          <input type="oldpassword" name="oldpassword"  className="form-control form-control-custom" onChange={this.oldpasswordChange.bind(this)}  Value={this.state.oldpassword} placeholder="passowrd" required />              
                                          
                                     
                                            </div>  
                      </div>
                      <div className='col-md-5 mb-3 '>
                      <label style={{color: 'black'}}>New passowrd</label>
                      <div className="form-group">
                      <input type="newpassword" name="newpassword" Value={this.state.newpassword} onChange={this.newPasswordChange.bind(this)} className="form-control form-control-custom" placeholder="Enter new passowrd" required autoComplete='off' />
                      </div>  
                      </div>
                  </div>
                  <button type="submit" className="btn btn-first btn-submit">Update</button>
                </form>




              </div>                                             
            </Tab.Pane>
            <Tab.Content>
            <Tab.Pane eventKey="profile">
            <div className="container-flude">
                        <div className="row">
                            <div className="offset-1 col-md-8 text-left">
                                <div className="section-header style-left pb-3">
                                    <div className="section-heading">
                                        <h3 className="text-custom-black">Edit Profile</h3>                                       
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

{/* 
<div className="col-md-12" id="server_response_parent">
                                <div class="alert  alert-dismissible fade show " role="alert" id="server_response">
                                {this.state.message} 
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                                </div>
                                        </div> */}
      <div className="col-md-10" id="server_response_parent">
                                <div class="alert  alert-dismissible fade show " role="alert" id="server_response">
                                {this.state.message} 
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                                </div>
                                        </div>
                                <form className="" onSubmit={this.handleprofileSubmit.bind(this)}  method="GET">
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
                                                                             
                                        <div className="col-md-12 mt-3">                                            
                                            <button type="submit" className="btn-first btn-submit">Update Profile</button>                                    
                                        </div>                                       
                                    </div>
                                </form>
                               
                            </div>   
                                                    
                        </div>
                    </div>
              {/* <Sonnet /> */}
            </Tab.Pane>
          </Tab.Content>
          
        </Col>
      </Row>
    </Tab.Container>
    </div>
            </div>         
            </div> 

            </Fragment>
        );
    }
}

export default Register;