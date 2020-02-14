import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardText,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import CommentForm from './CommentForm'

const RenderReviews = ({ reviews }) => {
  if (reviews != null) {
    let content = reviews.map(review => {
      return (
        <ul className="list-unstyled" key={review.id}>
          <li>{review.review} </li>
          <p></p>
          {review.rating}
          <li>
            {" "}
            --{review.author} , {review.date}{" "}
          </li>
        </ul>

      );
    });

    return (
      <div>
        <h4>Reviews</h4>
        {content}

      </div>
    );
  } else {
    return <div></div>;
  }
}
const RenderBook = ({ book }) => {
  if (book != null) {
    return (
      <Card key={book.id}>
        <CardImg width="100%" src={book.image} alt={book.name} />
        <CardBody>
          <CardTitle>{book.name}</CardTitle>
          <CardText>{book.description}</CardText>
        </CardBody>
      </Card>
    );
  } else {
    return <div></div>;
  }
}

const BookDetail = (props) => {
  return (

    <div className="container">

      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/menu">Find</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>{props.book.name}</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>{props.book.name}</h3>
          <hr />
        </div>
      </div>
      <div className="row row-content ">
        <div className="col-12 col-sm-5 m-1">
          <RenderBook book={props.book} />
        </div>
        <div className="col-12 col-sm-5 m-1">
          <RenderReviews Reviews={props.Reviews} />
          <CommentForm />
        </div>

      </div>
    </div>
  );
};

export default BookDetail;


