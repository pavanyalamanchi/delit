import { Container, Col, Card, Button, Row, Form } from "react-bootstrap";
import { BiCircle } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Pickup.css";
import { usePlacesWidget } from "react-google-autocomplete";
import MapModal from "./Modal/MapModel";
import {useSelector} from 'react-redux'


const options = {
//   fields: ["address_components", "geometry", "icon", "name"],
//   strictBounds: false,
  types: ["address",'geocode','establisments','(regions)'],
  componentRestrictions: { country: "IE" }
};

const Pickup = () => {

    const address = useSelector((state) => state.address)
    const reduxRef = useSelector((state) => state.ref)

  const { ref } = usePlacesWidget({
    apiKey: "AIzaSyCLKJPN2AwuEPInrV54tkLSqYb2WOOTM8A",
    onPlaceSelected: (place) => {
      console.log(place);
    },
    options,
  });

//   const {secRef} = usePlacesWidget({
//     apiKey: "AIzaSyCLKJPN2AwuEPInrV54tkLSqYb2WOOTM8A",
//     onPlaceSelected: (place) => {
//       console.log(place);
//     },
//     options,
//   });

  const [startDate, setStartDate] = useState(new Date());
  return (
    <>
    
      <Container className="pt-5">
        <Row>
          <Col className="col-9 mr-0">
            <Card className="pickup-card">
              <Card.Body>
                <Card.Title>Send Packages</Card.Title>
                <Card.Text>Your on demand local courier</Card.Text>
                <Row>
                  <Col>
                    {/* <BiCircle/> */}
                    <Form>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicEmail"
                        required
                      >
                        <Form.Label>PICKUP LOCATION</Form.Label>
                        {/* <MapModal/> */}
                        <div>
                          <input
                            ref={reduxRef}
                            id='id1'
                            style={{ width: "100%" }}
                            placeholder="search pickup"
                            defaultValue={address.split(',')[0]}
                          />
                          {/* Render dropdown */}
                        </div>
                        {/* <Form.Text className="text-muted">
                          We'll never share your email with anyone else.
                        </Form.Text> */}
                        <Row className='justify-content-center mt-3'>
                        <div>
                          <input
                            
                            style={{ width: "90%" }}
                            placeholder="Flat No."
                            
                          />
                          {/* Render dropdown */}
                        </div>
                        <div>
                          <input
                            
                            style={{ width: "90%" }}
                            placeholder="Building name"
                            
                          />
                          {/* Render dropdown */}
                        </div>
                        <div>
                          <input
                            
                            style={{ width: "90%" }}
                            placeholder="Street"
                            
                          />
                          {/* Render dropdown */}
                        </div>
                        </Row>
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                        required
                      >
                        <Form.Label>DROP LOCATION</Form.Label>
                        <div>
                          <input
                            
                            id='id2'
                            style={{ width: "100%" }}
                            placeholder="search drop"
                          />
                          {/* Render dropdown */}
                        </div>
                        <Row className='justify-content-center mt-3'>
                        <div>
                          <input
                            
                            style={{ width: "90%" }}
                            placeholder="Flat No."
                            
                          />
                          {/* Render dropdown */}
                        </div>
                        <div>
                          <input
                            
                            style={{ width: "90%" }}
                            placeholder="Building name"
                            
                          />
                          {/* Render dropdown */}
                        </div>
                        <div>
                          <input
                            
                            style={{ width: "90%" }}
                            placeholder="Street"
                            
                          />
                          {/* Render dropdown */}
                        </div>
                        </Row>
                      </Form.Group>
                      <Form.Label>Date to be picked on?</Form.Label>
                      <DatePicker
                        className="mb-3"
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                      />

                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                      >
                        <Form.Label>
                          Any instructions for delivery partner?
                        </Form.Label>
                        <Form.Control as="textarea" rows={3} />
                      </Form.Group>
                      {/* <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      >
                        <Form.Check type="checkbox" label="Check me out" />
                      </Form.Group> */}
                      <Button variant="success" type="submit">
                        Confirm Order
                      </Button>
                    </Form>
                  </Col>
                </Row>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          </Col>
          <Col className="col-3">
            <Card className="pickup-card">
              <Card.Body>
                <Card.Title className="text-success">
                  Terms & conditions
                </Card.Title>
                <Card.Text>Upcoming...</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Pickup;
