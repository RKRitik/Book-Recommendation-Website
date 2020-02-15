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
// import CommentForm from './CommentForm'

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
  const image = ((book.volumeInfo.imageLinks) ? book.volumeInfo.imageLinks.smallThumbnail : undefined);

  if (book != null) {
    return (

      <Card key={book.id}>
        <CardImg width="100%" src={image} alt={book.volumeInfo.title} />
        <CardBody>
          <CardTitle>{book.volumeInfo.title}</CardTitle>
          <CardText>{book.volumeInfo.description}</CardText>
        </CardBody>
      </Card>
    );
  } else {
    return <div></div>;
  }
}

const BookDetail = (props) => {
  console.log(props);
  return (

    <div className="container">

      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/find">Find</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>{props.book.volumeInfo.title}</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>{props.book.volumeInfo.title}</h3>
          <hr />
        </div>
      </div>
      <div className="row row-content ">
        <div className="col-12 col-sm-5 m-1">
          <RenderBook book={props.book} />
        </div>
        {/* <div className="col-12 col-sm-5 m-1">
          <RenderReviews Reviews={props.Reviews} />
          <CommentForm />
        </div> */}

      </div>
    </div>
  );
};

export default BookDetail;


