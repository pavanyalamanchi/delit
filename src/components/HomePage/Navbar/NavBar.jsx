import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Row,
  Button,
  Col,
} from "react-bootstrap";
import "./NavBar.css";
import { ImLocation2 } from "react-icons/im";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsCart4, BsMenuButtonWideFill } from "react-icons/bs";

const NavBar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="navbar-class">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="https://res.cloudinary.com/dsu915vad/image/upload/v1634554707/DelIt/DelIt_1_ifxnrb.png"
              className="d-inline-block align-top img"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav">
            {" "}
            <span>
              {" "}
              <BsMenuButtonWideFill />{" "}
            </span>
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto mr-auto">
              <Nav.Link href="#features" className="mr-1 pr-0 nav-link-class">
                <ImLocation2 color="green" />
              </Nav.Link>
              <NavDropdown title="Set Location" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
            <Row>
            <Col>
              <BiSearchAlt2 />
            </Col>
            <Col className="mr-3">
              <BsCart4 />
            </Col>
            <Button
              variant="success"
              className="button-class"
              style={{ color: "#5af4b2" }}
            >
              Sign In
            </Button>
          </Row>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
