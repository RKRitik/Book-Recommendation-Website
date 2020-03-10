import React from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  Alert,
  Breadcrumb,
  BreadcrumbItem
} from "reactstrap";
import { Link } from "react-router-dom";

import LoadingComponent from "./LoadingComponent";

const Reviews = props => {
  const ListComponent = () => {
    if (props.review.reviews.length > 0) {
      return review;
    } else {
      return na;
    }
  };
  const review = props.review.reviews.map(review => {
    return (
      <div key={review._id} className="col-12 col-md-5 m-1">
        <div className="font-weight-bold">{review.bookTitle}</div>
        {review.review}
        <br /> {review.rating}/5
      </div>
    );
  });
  const na = (
    <div className="col-12 ">
      <Alert color="danger">Oops No Review Yet</Alert>
    </div>
  );

  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>My Reviews</BreadcrumbItem>
        </Breadcrumb>
      </div>

      <div className="row row-content">
        {props.review.isLoading ? <LoadingComponent /> : <ListComponent />}
      </div>
    </div>
  );
};

export default Reviews;
