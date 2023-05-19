// import React, { useEffect } from "react";
import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
} from "react-bootstrap";



export default function TableList() {
  let history = useHistory();

  function handleClick() {
    history.push("/admin/basic_details");
  }
  
 

  const data = () => {
    fetch("https://readyforyourreview.com/loan19/api.php/records/loan19_users",{
      method: 'GET'
    })
    .then((res) => res.json())
    .then((json) => setCount(json.records))
  }
  const [count, setCount] = useState([]);
useEffect(() => {
    data();
    },[])
 

   
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">User</Card.Title>
              
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">              
                  <thead>
                    <tr>
                      <th className="border-0">ID</th>
                      <th className="border-0">Name</th>
                      <th className="border-0">phone</th>
                      <th className="border-0">email</th>
                      <th className="border-0">action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {count.map((item) => {
                      return(
                        <tr>                      
                          <td>  
                            <p>{item.id}</p>                  
                          </td>    
                          <td>  
                            <p>{item.fname}</p>                  
                          </td>    
                          <td>  
                            <p>{item.mobile_number}</p>                  
                          </td>    
                          <td>  
                            <p>{item.email}</p>                  
                          </td>    
                          <td>  
                          <button style={{ margin:4, padding: 2,fontSize: 14}}  mt={1} type="submit" onClick={handleClick} >View Details</button>                
                          </td>    
                        </tr>                                        
                      )
                    })}
                  </tbody>
                </Table>

              </Card.Body>
            </Card>
          </Col>
      
        </Row>
      </Container>
    </>
  ); }
        