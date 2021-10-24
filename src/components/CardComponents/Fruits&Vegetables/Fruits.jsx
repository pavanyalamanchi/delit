import { useState, useEffect } from "react";
import { ListGroup, Container, Row, Col, Image } from "react-bootstrap";
import './Fruits.css'

const Fruits = () => {
  const [fruitsData, setFruitsData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      let response = await fetch(`http://localhost:3001/fruits`);

      if (response.ok) {
        console.log("reponse ok!");
        let resp = await response.json();
        setFruitsData(resp);
        console.log("fetch", resp);
      } else {
        console.log("response not ok!");
      }
    } catch (error) {
      console.log("ERROR:", error);
    }
  };

  return (
    <>
      <ListGroup >
        {fruitsData.map((fruit) => (
          <ListGroup.Item>
            <Container>
              <Row className='justify-content-center'>
                <Col xs={6} md={2}>
                  <Image src={fruit.Image_Path} rounded className='img-class'/>
                </Col>
                <Col xs={6} md={2} className='pt-2'>
                  <span>{fruit.Class_Name}</span>
                  <span> {fruit.Fruit_Name}</span>
                </Col>
                <Col xs={6} md={2} className='pt-2'>
                  <h6>€{fruit.Price}/each</h6>
                </Col>
              </Row>
            </Container>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
};

export default Fruits;
