import { Card, Row, Col, Container } from "react-bootstrap";

const Cards = () => {
  return (
      <Container className='mt-5 pl-5 mb-5'>
    <Row>
      <Col>
        <Card style={{ width: "18rem" }} className='mb-1'>
          <Card.Img variant="top" src="https://res.cloudinary.com/dsu915vad/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1634565484/DelIt/Groceries_tjmekk.png" />
        </Card>
      </Col>
      <Col>
        <Card style={{ width: "18rem" }} className='mb-1'>
          <Card.Img variant="top" src="https://res.cloudinary.com/dsu915vad/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1634565484/DelIt/Pickup_fjtjcw.png" />
        </Card>
      </Col>
      <Col>
        <Card style={{ width: "18rem" }} className='mb-1'>
          <Card.Img variant="top" src="https://res.cloudinary.com/dsu915vad/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1634565484/DelIt/Fruits_z2lww4.png" />
        </Card>
      </Col>
    </Row>
    </Container>
  );
};

export default Cards;
