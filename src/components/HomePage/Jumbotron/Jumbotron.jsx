import { Container, Image} from 'react-bootstrap'
import './Jumbotron.css'

const Jumbotron = () => {
return(
    <Container className='jumboContainer'>
        <Image  src="https://res.cloudinary.com/dsu915vad/image/upload/v1635062272/DelIt/GreenNewBanner_k1grdw.png" fluid />
        {/* <Button className='jumboBtn'>Order Now</Button> */}
    </Container>
)
}

export default Jumbotron