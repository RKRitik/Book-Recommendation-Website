import React, { Component } from "react";
import LoadingComponent from "./LoadingComponent";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  Breadcrumb,
  Alert,
  BreadcrumbItem
} from "reactstrap";
import { Link } from "react-router-dom";
class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidUpdate() {
    // if (this.props.auth.user != null)
    //     this.props.getBooks(this.props.auth.user.id);
  }
  render() {
    const books = this.props.book.books.map(book => {
      return (
        <div key={book.id} className="col-12 col-md-5 m-1">
          {book.id}
        </div>
      );
    });
    const na = (
      <div className="col-12 ">
        <Alert color="danger">Oops No Content Available</Alert>
      </div>
    );
    return (
      <div className="container">
        <h1> My Books</h1>
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>My Books</BreadcrumbItem>
          </Breadcrumb>
        </div>

        <div className="row row-content">
          {this.props.book.isLoading ? <LoadingComponent /> : books}
          {!this.props.book.isLoading && this.props.book.books.length === 0
            ? na
            : null}
        </div>
      </div>
    );
  }
}

export default Books;
