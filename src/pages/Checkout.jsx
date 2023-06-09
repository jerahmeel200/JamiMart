import React from "react";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import "../styles/checkout.css";
import { useSelector } from "react-redux";
const Checkout = () => {
  const totalQty = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  return (
    <Helmet title="Checkout">
      <CommonSection title="Checkout" />
      <section>
        <Container>
          <Row>
            <Col lg="8">
              <h6 className="mb-4 fw-bold">Billing Information</h6>

              <Form className="billing__form">
                <FormGroup className="form__group">
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Enter Your Name...."
                  />
                </FormGroup>

                <FormGroup className="form__group">
                  <input
                    type="email"
                    name=""
                    id=""
                    placeholder="Enter Your Email...."
                  />
                </FormGroup>

                <FormGroup className="form__group">
                  <input
                    type="number"
                    name=""
                    id=""
                    placeholder="Phone Number"
                  />
                </FormGroup>

                <FormGroup className="form__group">
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Street Address"
                  />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="text" name="" id="" placeholder="City" />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="text" name="" id="" placeholder="Postal Code" />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="text" name="" id="" placeholder="Country" />
                </FormGroup>
              </Form>
            </Col>
            <Col lg="4">
              <div className="checkout__cart">
                <h6>
                  Total Qty: <span>{totalQty} items</span>
                </h6>
                <h6>
                  Subtotal: <span>${totalAmount}</span>
                </h6>
                <h6>
                  <span>
                    Shipping: <br />
                    free shipping
                  </span>
                  <span>$0</span>
                </h6>
                <h6>Free Shipping</h6>
                <h4>
                  Total Cost: <span>${totalAmount}</span>
                </h4>
                <button className="buy__btn auth__btn w-100">
                  Place An Order
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Checkout;
