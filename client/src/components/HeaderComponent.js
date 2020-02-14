import React, { Component, Fragment } from 'react';
import RegisterModal from './auth/RegisterModal';
import LoginModal from './auth/LoginModal';
import Logout from './auth/Logout';
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  Jumbotron
} from "reactstrap";
import { NavLink } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.toggleNav = this.toggleNav.bind(this);
    this.state = {
      isNavOpen: false
    };
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }



  render() {
    const { isAuthenticated, user } = this.props.auth;
    console.log(this.props);
    const authLinks = (
      <Fragment>
        <NavItem>
          <span className='navbar-text mr-3'>
            <strong>{user ? `Welcome ${user.name}` : ''}</strong>
          </span>
        </NavItem>
        <NavItem>
          <Logout logout={this.props.logout} />
        </NavItem>
      </Fragment>
    );
    const webLinks = (
      <Fragment>
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
      </Fragment>
    );
    const authWebLinks = (
      <Fragment>
        <NavItem>
          <NavLink className="nav-link " to="/recommend">
            <span className="fa fa-list fa-lg"></span> Get Recommendations
                  </NavLink>
        </NavItem>

        <NavItem>
          <NavLink className="nav-link " to="/books">
            <span className="fa fa-book fa-lg"></span> My Books
                  </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="nav-link " to="/reviews">
            <span className="fa fa-star fa-lg"></span> My Reviews
                  </NavLink>
        </NavItem>
      </Fragment>
    );
    const guestLinks = (
      <Fragment>
        <NavItem>
          <RegisterModal error={this.props.error} auth={this.props.auth} register={this.props.register} clearErrors={this.props.clearErrors} />
        </NavItem>
        <NavItem>
          <LoginModal error={this.props.error} auth={this.props.auth} login={this.props.login} clearErrors={this.props.clearErrors} />
        </NavItem>
      </Fragment>
    );
    return (
      <div>

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

                {isAuthenticated ? authWebLinks : webLinks}

                <NavItem>
                  <NavLink className="nav-link" to="/about">
                    <span className="fa fa-info fa-lg"></span> About Us
                  </NavLink>
                </NavItem>


              </Nav>


              <Nav className='ml-auto' navbar>
                {isAuthenticated ? authLinks : guestLinks}
              </Nav>
              {/* <Nav className="ml-auto" navbar>
                <NavItem>
                  <Button outline onClick={this.toggleModal}><span className="fa fa-sign-in fa-lg"></span> Login</Button>
                </NavItem>
              </Nav> */}



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
