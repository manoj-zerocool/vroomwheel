// import React from "react";
import React, { useState, useEffect } from 'react';
// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Form,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import { Link } from 'react-router-dom'

  export default function Login() {
    const [username, setusername] = useState('');

    const [password, setpassword] = useState('');
    const [count, setCount] = useState([]);

    // const data = () => {

  function  handleSubmit(e) {
      e.preventDefault();

      const requestOptions = {
        method: 'GET',
     
          }
   fetch(`https://readyforyourreview.com/loan19/api.php/records/loan19_admin?filter=adminusername,eq,${username}&filter=adminpassword,eq,${password}`,requestOptions
     )
      .then((res) => res.json())
      .then((json) => {
        console.log("hhhhhhhh",json.records);
        setCount(json.records)
        if(json.records.length>=1){
          setTimeout(function(){ window.location.href = "/admin/dashboard"; }, 3000);
      
        } else {
          alert(" Wrong Details 'Please try again'.");  }
        }

      )
    }
  
 
  return (
    <>
<Container fluid>
        < Row style={{marginTop: "20%"}}>
          <Col md="8">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Login</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form  onSubmit={handleSubmit}  >
                  <Row>
                    <Col md="12">
                      <Form.Group>
                        <label>Username</label>
                        <Form.Control
                         required
                          placeholder="username"
                          type="username"
                          onChange={(event) => {
                            setusername(event.target.value);
                          }
                        }
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                   <Row>
                    <Col md="12">
                      <Form.Group>
                        <label>Password</label>
                        <Form.Control
                        required
                          placeholder="password"
                          type="password"
                          onChange={(event) =>
                            setpassword(event.target.value)
                          }
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>            
                  <Button
                    className="btn-fill pull-right mt-3"
                    type="submit"
                    variant="info"                   
                  >
                  submit
                  </Button>
              
                  <div className="clearfix"></div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        
        </Row>
      </Container>
    </>
  );
}


