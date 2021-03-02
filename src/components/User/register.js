import React from 'react';
import { Form, Tabs, Tab, Row, Col, Button } from 'react-bootstrap';

function Register({ data }) {
  return (
    <Form className="mt-3">
      <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
        <Tab eventKey="home" title="User register">
          <Form.Group as={Row}>
            <Form.Label column sm="2" className="text-right" htmlFor="userName">
              User Name *
            </Form.Label>
            <Col sm="6">
              <Form.Control
                type="text"
                name="userName"
                id="userName"
                placeholder="User name"
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Form.Label
              column
              sm="2"
              className="text-right"
              htmlFor="firstName"
            >
              FullName *
            </Form.Label>
            <Col sm="5">
              <Form.Control
                type="text"
                placeholder="First name"
                name="firstName"
                id="firstName"
              />
            </Col>
            <Col sm="5">
              <Form.Control
                type="text"
                placeholder="Last name"
                name="lastName"
                id="lastName"
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Form.Label column sm="2" className="text-right" htmlFor="email">
              E-mail *
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="email"
                name="email"
                id="email"
                placeholder="E-mail"
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Form.Label column sm="2" className="text-right" htmlFor="phone">
              Phone
            </Form.Label>
            <Col sm="4">
              <Form.Control
                type="text"
                placeholder="Phone"
                name="phone"
                id="phone"
              />
            </Col>
            <Form.Label column sm="2" className="text-right" htmlFor="celular">
              Celular
            </Form.Label>
            <Col sm="4">
              <Form.Control
                type="password"
                placeholder="Celular"
                name="celular"
                id="celular"
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Form.Label column sm="2" className="text-right" htmlFor="password">
              Password
            </Form.Label>
            <Col sm="8">
              <Form.Control
                type="text"
                name="password"
                id="password"
                placeholder="Password"
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Form.Label
              column
              sm="2"
              className="text-right"
              htmlFor="confirmPassword"
            >
              Confirm password
            </Form.Label>
            <Col sm="8">
              <Form.Control
                type="text"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Confirm password"
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Form.Label column sm="2" className="text-right">
              Expire
            </Form.Label>
            <Col sm="2">
              <div className="mb-3">
                <Form.Check
                  name="expire"
                  type={'radio'}
                  id={`ex_yes`}
                  label={`Yes`}
                />
              </div>
            </Col>
            <Col sm="2">
              <div className="mb-3">
                <Form.Check
                  name="expire"
                  type={'radio'}
                  id={`ex_never`}
                  label={`Never`}
                />
              </div>
            </Col>
            <Form.Label
              column
              sm="2"
              className="text-right"
              htmlFor="expireDate"
            >
              Expire Date
            </Form.Label>
            <Col sm="4">
              <Form.Control
                type="date"
                name="expireDate"
                id="expireDate"
                placeholder=""
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Form.Label column sm="2" className="text-right" htmlFor="status">
              Status:
            </Form.Label>
            <Col sm="3">
              <Form.Control
                name="status"
                id="status"
                className="ml-2 mr-2"
                as="select"
                custom
                onChange={null}
                value={null}
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </Form.Control>
            </Col>
          </Form.Group>
        </Tab>
        <Tab eventKey="profile" title="Profile">
          2
        </Tab>
      </Tabs>
      <div className="text-right mb-5">
        <Button variant="danger" className="mr-3">
          Cancelar
        </Button>
        <Button variant="success">Add</Button>
      </div>
    </Form>
  );
}
export default Register;
