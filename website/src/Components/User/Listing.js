import {
  Container,
  Row,
  Col,
  Image,
  Navbar,
  Nav,
  NavDropdown,
  Form, Button
} from "react-bootstrap";
import { Link } from "react-router-dom";

import {
  FaStar,
  FaUser,
  FaHome,
  FaEnvelope,
  FaInstagram,
  FaLinkedin, FaSearch
} from "react-icons/fa";
import "./profile.scss";

const Footer = () => {
  return (
    <>
      <Navbar className="header" bg="dark" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="header-navbar-nav" />
          <Navbar.Collapse id="header-navbar-nav">
            <Nav className="me-auto">
              <Link className="nav-link" to="/">
                Home
              </Link>
              <Link className="nav-link mx-md-3" to="/artists">
                Artists
              </Link>
              <Link className="nav-link" to="/artwork">
                Artworks
              </Link>
              <Link className="nav-link" to="/search">
                Search
              </Link>
            </Nav>
            <Navbar.Brand className="d-none d-sm-block">
              <Link to="/">Art Gallery</Link>
            </Navbar.Brand>
            <Nav className="ms-auto">
              <NavDropdown title="More" id="moreDropDown">
                <NavDropdown.Item href="/reviews">Reviews</NavDropdown.Item>
              </NavDropdown>
              <Link className="nav-link mx-md-3" to="/sign-in">
                Sign In
              </Link>
              <Link className="nav-link" to="/">
                Create an account
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container fluid className="px-0">
        <Row>
        <Col md={3} className="sidebar">
          <div className="pt-5 ps-4 d-flex flex-column text-start bg-dark h-100">
            <Link className=" text-decoration-none" to="/dashboard">
              <FaHome />
              &nbsp; Dashboard
            </Link>
            <Link className="text-decoration-none" to="/profile">
              <FaUser />
              &nbsp; Profile
            </Link>
            <Link className=" text-decoration-none" to="/addreview">
              <FaStar />
              &nbsp; Reviews
            </Link>
            <Link className=" text-decoration-none" to="/addreview">
              <FaStar />
              &nbsp; Add Listing
            </Link>
          </div>
        </Col>
        <Col md={9}>
            <h1 className="my-5">Add Listing</h1>
          <Form className="m-3 ">
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Title</Form.Label>
              <Form.Control
                className="p-3 shadow-sm border border-dark"
                type="text"
                placeholder="Enter title"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Artist</Form.Label>
              <Form.Control
                className="p-3 shadow-sm border border-dark"
                type="text"
                placeholder="Enter artist"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Category</Form.Label>
              <Form.Control
                className="p-3 shadow-sm border border-dark"
                type="text"
                placeholder="Enter category"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Size</Form.Label>
              <Form.Control
                className="p-3 shadow-sm border border-dark"
                type="text"
                placeholder="Enter size in inches"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Description</Form.Label>
              <Form.Control
                className="p-3 shadow-sm border border-dark"
                type="text"
                placeholder="Enter description"
              />
            </Form.Group>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Control type="file" />
            </Form.Group>
            <Button
              className="rounded-pill px-4 py-2 mt-3"
              variant="dark"
              type="submit"
            >
              Submit
            </Button>
          </Form>
        </Col>
        </Row>
      </Container>
      <footer>
        <Container fluid className="p-lg-4 p-2">
          <Row>
            <Col lg={4} md={4}>
              <div className="align-self-end">
                <p className="my-5 text-center text-md-start">
                  &copy; Copyrights All rights reserved
                </p>
              </div>
            </Col>

            <Col lg={4} md={4}>
              <div className="text-white d-flex justify-content-center">
                <span className="px-2">
                  <FaInstagram />
                </span>
                <span className="px-2">
                  <FaLinkedin />
                </span>
                <span className="px-2">
                  <FaEnvelope />
                </span>
              </div>
              <hr style={{ backgroundColor: "white", height: "2px" }} />
              <div className="d-flex justify-content-center">
                <Link
                  className="px-2 text-decoration-none text-white"
                  to="/artists"
                >
                  Artist
                </Link>
                <Link
                  className="px-2 text-decoration-none text-white"
                  to="/artwork"
                >
                  Artworks
                </Link>
                <Link
                  className="px-2 text-decoration-none text-white"
                  to="/reviews"
                >
                  Reviews
                </Link>
              </div>
              <div className="d-flex justify-content-center">
                <Link
                  className="px-2 text-decoration-none text-white"
                  to="/contact"
                >
                  <small className="text-muted">Contact</small>
                </Link>
                <Link
                  className="px-2 text-decoration-none text-white"
                  to="/about"
                >
                  <small className="text-muted">About</small>
                </Link>
              </div>
            </Col>
            <Col lg={4} md={4}>
              <div className=" my-3  d-flex justify-content-md-end justify-content-center">
                <Image
                  className="px-2"
                  src="https://via.placeholder.com/150"
                  width="100px"
                  height="60px"
                />
                <Image
                  className="px-2"
                  src="https://via.placeholder.com/150"
                  width="100px"
                  height="60px"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
