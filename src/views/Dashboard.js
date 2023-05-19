import React, { useEffect, useState } from "react";
import ChartistGraph from "react-chartist";
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
  Form,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";

function Dashboard() {

  const styles = {
    center : {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }
  }
    const [count, setCount] = useState([]);

  const data = () => {
    fetch("https://readyforyourreview.com/loan19/api.php/records/loan19_users",{
      method: 'GET'
    })
    .then((res) => res.json())
    .then((json) => setCount(json.records))
  }
useEffect(() => {
    data();
    },[count])
  return (
    <>
      <Container fluid>
       
        <Row>
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Dashboard</Card.Title>
               
              </Card.Header>
              <Card.Body>
                <div className="ct-chart" style={styles.center} id="chartHours">
                 <h5>Total User: {count.length}</h5>
                </div>
              </Card.Body>
             
            </Card>
          </Col>
        
        </Row>
       
      </Container>
    </>
  );
}

export default Dashboard;
