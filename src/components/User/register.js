import React from 'react';
import InputMask from 'react-input-mask';

import { Form, Tabs, Tab, Row, Col, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import { BsFillCaretLeftFill } from 'react-icons/bs';
import { BsCheckCircle } from 'react-icons/bs';

function Register({ data, onChange, handleSubmit, label = 'Create' }) {
  const history = useHistory();
  return (
    <Form className="mt-3" onSubmit={handleSubmit}>
      <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
        <Tab eventKey="home" title="User register">
          <Form.Group as={Row} className="mt-3">
            <Form.Label column sm="2" className="text-right" htmlFor="userName">
              User Name *
            </Form.Label>
            <Col sm="6">
              <Form.Control
                type="text"
                name="userName"
                id="userName"
                placeholder="User name"
                value={data.userName}
                onChange={onChange}
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
                value={data.firstName}
                onChange={onChange}
              />
            </Col>
            <Col sm="5">
              <Form.Control
                type="text"
                placeholder="Last name"
                name="lastName"
                id="lastName"
                value={data.lastName}
                onChange={onChange}
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
                value={data.email}
                onChange={onChange}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Form.Label column sm="2" className="text-right" htmlFor="phone">
              Phone
            </Form.Label>
            <Col sm="4">
              <InputMask
                mask="(99)9999-9999"
                name="phone"
                label="Phone"
                id="id-phone"
                value={data.phone}
                onChange={onChange}
                className="form-control"
              />
            </Col>
            <Form.Label column sm="2" className="text-right" htmlFor="celular">
              Celular
            </Form.Label>
            <Col sm="4">
              <InputMask
                mask="(99)99999-9999"
                name="celular"
                label="Celular"
                id="id-celular"
                value={data.celular}
                onChange={onChange}
                className="form-control"
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
                value={data.password}
                onChange={onChange}
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
                value={data.confirmPassword}
                onChange={onChange}
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
                  value="yes"
                  checked={data.expire === 'yes'}
                  onChange={onChange}
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
                  checked={data.expire === 'no'}
                  onChange={onChange}
                  value="no"
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
                value={data.expireDate}
                onChange={onChange}
                disabled={data.expire === 'no'}
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
                value={data.status ? 'active' : 'inactive'}
                onChange={onChange}
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </Form.Control>
            </Col>
          </Form.Group>
        </Tab>
        <Tab eventKey="profile" title="Profile">
          <Form.Group as={Row} className="mt-3">
            <Form.Label
              column
              sm="2"
              className="text-right"
              htmlFor="userName0"
            >
              User Name
            </Form.Label>
            <Col sm="6">
              <Form.Control
                type="text"
                name="userName0"
                id="userName0"
                placeholder="User name"
                value={data.userName}
                disabled={true}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Form.Label
              column
              sm="2"
              className="text-right"
              htmlFor="firstName1"
            >
              FullName
            </Form.Label>
            <Col sm="5">
              <Form.Control
                type="text"
                placeholder="First name"
                name="firstName1"
                id="firstName1"
                disabled={true}
                value={data.firstName}
              />
            </Col>
            <Col sm="5">
              <Form.Control
                type="text"
                placeholder="Last name"
                name="lastName2"
                id="lastName2"
                disabled={true}
                value={data.lastName}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Form.Label column sm="2" className="text-right" htmlFor="profile">
              Profile
            </Form.Label>
            <Col sm="2">
              <Form.Control
                name="profile"
                id="profile"
                className="ml-2 mr-2"
                as="select"
                custom
                value={data.profile}
                onChange={onChange}
              >
                <option value="driver">Driver</option>
                <option value="office">Office</option>
              </Form.Control>
            </Col>
            <Form.Label column sm="2" className="text-right" htmlFor="company">
              Company:
            </Form.Label>
            <Col sm="2">
              <Form.Control
                name="company"
                id="company"
                className="ml-2 mr-2"
                as="select"
                custom
                value={data.company}
                onChange={onChange}
              >
                <option value="company1">Company 1</option>
                <option value="company2">Company 2</option>
              </Form.Control>
            </Col>
          </Form.Group>
        </Tab>
      </Tabs>
      <div className="text-right mb-5">
        <Button
          variant="danger"
          className="mr-3"
          onClick={(e) => history.push('/register/users')}
        >
          <BsFillCaretLeftFill /> Cancelar
        </Button>
        <Button type="submit" variant="success">
          <BsCheckCircle /> {label}
        </Button>
      </div>
    </Form>
  );
}
export default Register;
