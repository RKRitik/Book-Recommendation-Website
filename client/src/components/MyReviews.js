
import React from "react";
import {
    Card,
    CardImg,
    CardImgOverlay,
    CardTitle, Alert,
    Breadcrumb,
    BreadcrumbItem
} from "reactstrap";
import { Link } from "react-router-dom";

import LoadingComponent from './LoadingComponent';


const Reviews = props => {
    const review = props.review.reviews.map(review => {
        return (
            <div key={review.id} className="col-12 col-md-5 m-1">
                {review.id}
            </div>
        );
    });
    const na =
        <div className='col-12 '><Alert color="danger">
            Oops No Content Available
  </Alert>
        </div>

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
                {props.review.isLoading ? <LoadingComponent /> : review}
                {!props.review.isLoading && props.review.reviews.length === 0 ? na : null}
            </div>
        </div>
    );
};

export default Reviews;
