// import React, { useEffect } from "react";
import React, { useState, useEffect } from 'react';
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
export default function basic_details() {
  const data = () => {
    fetch("https://readyforyourreview.com/loan19/api.php/records/loan19_users_basic_info",{
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
                <Card.Title as="h4">Basic Details</Card.Title>
              
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
              
                  <thead>
                    <tr>
                      <th className="border-0">User-Id</th>
                      <th className="border-0">Name</th>
                      <th className="border-0">Gender</th>
                      <th className="border-0"> Education_level</th>
                      <th className="border-0">Marrage_status</th>
                    </tr>
                  </thead>
                  <tbody>
                   
                
                   
                  {count.map((item) => {

                    return(
                      <tr>                      
                      <td>  
                      <p>{item.user_id}</p>
                                        
                      </td>  
                      <td>  
                      <p>{item.name}</p>
                                        
                      </td>  
                      
                      <td>
                      <p>{item.gender}</p>
                                        
                      </td> 
                      <td> 
                      <p>{item.education_level}</p>
                                        
                      </td>  
                      <td>
                      <p>{item.marrage_status}</p>
                                       
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
  );
        }
        