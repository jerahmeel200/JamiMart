import React from "react";
import "./footer.css";
import logo from "../../assets/images/eco-logo.png";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="6">
            <div className="logo">
              <div>
                <h1 className="text-white">JamiMart</h1>
                {/* <p>since 1960</p> */}
              </div>
            </div>
            <p className="footer__text mt-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptas, odio! Recusandae corrupti repellendus ea magni labore
              vitae esse, impedit quia quasi est molestias perferendis.
            </p>
          </Col>
          <Col lg="2" md="3" className="mb-4">
            <div className="footer__quick-links">
              <h4 className="quick__link-title text-white">Top Category</h4>
              <ListGroup>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Mobile Phone</Link>
                </ListGroupItem>
              </ListGroup>

              <ListGroup>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Modern Sofa</Link>
                </ListGroupItem>
              </ListGroup>
              <ListGroup>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Arm Chair</Link>
                </ListGroupItem>
              </ListGroup>
              <ListGroup>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Smart Watches</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="2" md="3">
            <div className="footer__quick-links">
              <h4 className="quick__link-title text-white">Useful Links</h4>
              <ListGroup>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/shop">Shop</Link>
                </ListGroupItem>
              </ListGroup>

              <ListGroup>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/cart">Cart</Link>
                </ListGroupItem>
              </ListGroup>
              <ListGroup>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/login">Login</Link>
                </ListGroupItem>
              </ListGroup>
              <ListGroup>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Privacy Policy</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="3" md="4">
            <div className="footer__quick-links">
              <h4 className="quick__link-title text-white"> Contacts</h4>
              <ListGroup className="footer__contact">
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span>
                    <i class="ri-map-pin-line"></i>
                  </span>
                  <p>234 frist street</p>
                </ListGroupItem>
              </ListGroup>

              <ListGroup>
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span>
                    <i class="ri-phone-line"></i>
                  </span>
                  <p> +23496968697079</p>
                </ListGroupItem>
              </ListGroup>
              <ListGroup>
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span>
                    <i class="ri-mail-line"></i>
                  </span>
                  <p>example234@gmail.com</p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <p className="footer__copyright">
            Copyright {year} developed by jamico. All rights reserved.
          </p>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
