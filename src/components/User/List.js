import React, { useState } from 'react';
import { Button, Col, Form, Row, Table, Badge } from 'react-bootstrap';
import { BsFillPersonPlusFill } from 'react-icons/bs';
import { BsFillTrashFill } from 'react-icons/bs';
import { BsPen } from 'react-icons/bs';
import { useHistory } from 'react-router-dom';

import {
  useUserChangeRemove,
  useUserToList,
} from '../../contexts/UsersContext';

function List() {
  let history = useHistory();
  const [filter, setFilter] = useState('all');
  const data = useUserToList(filter);
  const handleChangeRemove = useUserChangeRemove();
  return (
    <>
      <Row className="mb-3">
        <Col sm={2}>
          <Button
            variant="info"
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
            <th scope="col" className="text-center">
              Name
            </th>
            <th scope="col" className="text-center">
              User Name
            </th>
            <th scope="col" className="text-center">
              Profile
            </th>
            <th scope="col" className="text-center">
              Status
            </th>
            <th scope="col" className="text-center">
              ...
            </th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((x, i) => (
              <tr key={i} className={!x.status ? 'table-danger' : ''}>
                <td>{x.firstName + ' ' + x.lastName}</td>
                <td className="text-center">{x.userName}</td>
                <td className="text-center">{x.profile}</td>
                <td className="text-center">
                  <Badge variant="primary"></Badge>
                  {x.status ? (
                    <Badge pill variant="info" title="Active">
                      Active
                    </Badge>
                  ) : (
                    <Badge pill variant="danger" title="Inactive">
                      Inactive
                    </Badge>
                  )}
                </td>
                <td className="text-center">
                  <Button
                    variant="primary"
                    onClick={(e) => history.push(`/register/user/edit/${x.id}`)}
                  >
                    <BsPen />
                  </Button>{' '}
                  <Button
                    variant="danger"
                    onClick={(e) => handleChangeRemove(x.id)}
                    disabled={!x.status}
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
