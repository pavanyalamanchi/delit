import {Container} from 'react-bootstrap'
import './Search.css'

const Search = () => {

    return(
        <>
        <Container>
            <input className='search-class' type="text" placeholder="Search.."></input>
        </Container>
        </>
    )
}

export default Search