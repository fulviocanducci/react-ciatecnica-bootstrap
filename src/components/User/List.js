import React, { useState } from 'react';
import { Button, Col, Form, Row, Table } from 'react-bootstrap';
import {
  useUserChangeRemove,
  useUserToList,
} from '../../contexts/UsersContext';
import { BsFillPersonPlusFill } from 'react-icons/bs';
import { BsFillTrashFill } from 'react-icons/bs';
import { BsPen } from 'react-icons/bs';
import { BsFunnel } from 'react-icons/bs';
import { useHistory } from 'react-router-dom';

function List() {
  const [filter, setFilter] = useState('');
  const data = useUserToList(filter);
  const handleChangeRemove = useUserChangeRemove();
  const history = useHistory();
  return (
    <>
      <Row className="mb-3">
        <Col sm={2}>
          <Button
            variant="outline-primary"
            onClick={(e) => history.push('/register/user/add')}
          >
            <BsFillPersonPlusFill /> Add
          </Button>
        </Col>
        <Col sm={5}>
          <Form inline>
            <Form.Group controlId="exampleForm.SelectCustom">
              <Form.Label>Status:</Form.Label>
              <Form.Control
                className="ml-2 mr-2"
                as="select"
                custom
                onChange={(e) => setFilter(e.target.value)}
                value={filter}
              >
                <option value="all">All</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </Form.Control>
              <Button variant="outline-info">
                <BsFunnel />
              </Button>
            </Form.Group>
          </Form>
        </Col>
        <Col sm={5}>
          <Form inline className="align-right">
            <Form.Group size="sm" controlId="exampleForm.SelectCustom">
              <Form.Label>Search:</Form.Label>
              <Form.Control
                className="ml-2"
                type="text"
                placeholder="Search ..."
              />
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <Table striped bordered hover responsive="sm">
        <thead>
          <tr>
            <th className="text-center">Name</th>
            <th className="text-center">User Name</th>
            <th className="text-center">Profile</th>
            <th className="text-center">Status</th>
            <th className="text-center">...</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((x, i) => (
              <tr key={i}>
                <td>{x.firstName + ' ' + x.lastName}</td>
                <td className="text-center">{x.userName}</td>
                <td className="text-center">{x.profile}</td>
                <td className="text-center">
                  {x.status ? 'Active' : 'Inactive'}
                </td>
                <td className="text-center">
                  <Button variant="outline-primary">
                    <BsPen />
                  </Button>{' '}
                  <Button
                    variant="outline-danger"
                    onClick={(e) => handleChangeRemove(x.id)}
                  >
                    <BsFillTrashFill />
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </>
  );
}

export default List;
