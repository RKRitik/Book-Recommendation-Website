import React, { Component } from "react";
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  Jumbotron,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  Label,
  Input,
  FormGroup
} from "reactstrap";
import { NavLink } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.toggleNav = this.toggleNav.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.state = {
      isNavOpen: false,
      isModalOpen: false

    };
  }
  handleLogin(event) {
    this.toggleModal();
    alert("Username: " + this.username.value + " Password: " + this.password.value
      + " Remember: " + this.remember.checked);
    event.preventDefault();

  }
  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }
  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }


  render() {
    return (
      <div>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleLogin}>
              <FormGroup>
                <Label htmlFor="username">Username</Label>
                <Input type="text" id="username" name="username"
                  innerRef={(input) => this.username = input} />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="password">Password</Label>
                <Input type="password" id="password" name="password"
                  innerRef={(input) => this.password = input} />
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" name="remember"
                    innerRef={(input) => this.remember = input} />
                  Remember me
                                </Label>
              </FormGroup>
              <Button type="submit" value="submit" color="primary">Login</Button>
            </Form>
          </ModalBody>
        </Modal>
        <Navbar dark expand="md">
          <div className="container">
            <NavbarToggler onClick={this.toggleNav} />
            <NavbarBrand className="mr-auto" href="/">
              Company Name
              {/* <img
                src="assets/images/logo.png"
                height="30"
                width="41"
                alt="Ristorante Con Fusion"
              /> */}
            </NavbarBrand>
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink className="nav-link" to="/home">
                    <span className="fa fa-home fa-lg"></span> Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/find">
                    <span className="fa fa-search"></span> Find Books
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link disabled" to="/recommend">
                    <span className="fa fa-list fa-lg"></span> Get Recommendations
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink className="nav-link disabled" to="/books">
                    <span className="fa fa-book fa-lg"></span> My Books
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link disabled" to="/reviews">
                    <span className="fa fa-star fa-lg"></span> My Reviews
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink className="nav-link" to="/about">
                    <span className="fa fa-info fa-lg"></span> About Us
                  </NavLink>
                </NavItem>


              </Nav>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Button outline onClick={this.toggleModal}><span className="fa fa-sign-in fa-lg"></span> Login</Button>
                </NavItem>
              </Nav>



            </Collapse>
          </div>
        </Navbar>
        <Jumbotron>
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-6">
                <h1>Good Books</h1>
                <p>
                  Read books, review books and get books recommended according to your preferences.
                </p>
              </div>
            </div>
          </div>
        </Jumbotron>
      </div>

    );
  }
}
export default Header;
