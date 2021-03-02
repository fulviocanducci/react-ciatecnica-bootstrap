import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from '../Home';
import Add from '../User/add';
import Edit from '../User/edit';
import List from '../User/List';

const App = () => {
  return (
    <Router>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Navbar.Brand href="#home">Test Ciatécnica</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/" className="nav-link" role="button">
              Home
            </Link>
            <Link to="/register/users" className="nav-link" role="button">
              Users
            </Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown> */}
          </Nav>
          {/* <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form> */}
        </Navbar.Collapse>
      </Navbar>
      <Container className="mt-5">
        <Switch>
          <Route path="/register/user/add">
            <Add />
          </Route>
          <Route path="/register/user/edit/:id">
            <Edit />
          </Route>
          <Route path="/register/users">
            <List />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
};

export default App;
