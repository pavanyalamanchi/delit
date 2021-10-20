import { Card, CardGroup } from "react-bootstrap";

const Cards = () => {
  return (
    <CardGroup className='mt-4 mb-4'>
        <Card>
          <Card.Img variant="top" src="https://res.cloudinary.com/dsu915vad/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1634565484/DelIt/Groceries_tjmekk.png" />
        </Card>
        <Card>
          <Card.Img variant="top" src="https://res.cloudinary.com/dsu915vad/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1634565484/DelIt/Pickup_fjtjcw.png" />
        </Card>
        <Card>
          <Card.Img variant="top" src="https://res.cloudinary.com/dsu915vad/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1634565484/DelIt/Fruits_z2lww4.png" />
        </Card>
        </CardGroup>
  );
};

export default Cards;
