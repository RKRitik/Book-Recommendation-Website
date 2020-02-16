import React, { useState } from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
  CardSubtitle, Button, Popover, PopoverHeader, PopoverBody
} from "reactstrap";
import { Link } from "react-router-dom";
import AddReviewForm from './AddReviewFormButton';
const RenderReviews = ({ reviews }) => {
  if (reviews != null) {
    let content = reviews.map(review => {
      return (
        <ul className="list-unstyled" key={review._id}>
          <li>{review.review} </li>
          <p></p>
          {review.rating}
          <li>
            {" "}
            --{review.userName} , {review.reviewDate}{" "}
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
    return <div>
      <h4>Reviews</h4>
      No Reviews Yet
    </div>;
  }
}
const RenderBook = ({ book }) => {
  const image = ((book.volumeInfo.imageLinks) ? book.volumeInfo.imageLinks.smallThumbnail : undefined);
  const [popoverOpen, setPopoverOpen] = useState(false);

  const toggle = () => setPopoverOpen(!popoverOpen);

  if (book != null) {
    let str = book.volumeInfo.description ? book.volumeInfo.description : 'No description available';

    if (str.length > 350) {
      str = str.substring(0, 350);
      str = str + '...';
    }




    return (

      <Card key={book.id}>
        <CardImg top src={image} alt={book.volumeInfo.title} />
        <CardBody>
          <CardTitle>{book.volumeInfo.title}</CardTitle>

          <CardSubtitle><div className="font-weight-bold mt-2">Publisher :</div>{book.volumeInfo.publisher ? book.volumeInfo.publisher : 'No publisher Found'}</CardSubtitle>
          <CardSubtitle><div className="font-weight-bold mt-2">Categories :</div>{book.volumeInfo.categories ? book.volumeInfo.categories : 'No category found'}</CardSubtitle>
          <CardSubtitle><div className="font-weight-bold mt-2">Authors :</div>{book.volumeInfo.authors ? book.volumeInfo.authors : 'No author found'}</CardSubtitle>
          <CardSubtitle><div className="font-weight-bold mt-2">ISBN :{!book.volumeInfo.industryIdentifiers ? 'ISBN Not available ' :

            !book.volumeInfo.industryIdentifiers[1].identifier ? book.volumeInfo.industryIdentifiers[0].identifier : book.volumeInfo.industryIdentifiers[1].identifier}
          </div></CardSubtitle>
          <div>
            <Button id="Popover1" type="button">
              Description
              </Button>
            <Popover placement="bottom" isOpen={popoverOpen} target="Popover1" toggle={toggle}>
              <PopoverHeader>{book.volumeInfo.title}</PopoverHeader>
              <PopoverBody>{str}</PopoverBody>
            </Popover>
          </div>

          {/* <Button id="link" type="button" onClick={() => { window.open('book.accessInfo.webReaderLink', "_blank") }}>
            Link to Google Books
              </Button> */}


        </CardBody>





      </Card>
    );
  } else {
    return <div></div>;
  }
}

class BookDetail extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getReviews();
  }
  render() {
    return (

      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/find">Find</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{this.props.book.volumeInfo.title}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>{this.props.book.volumeInfo.title}</h3>
            <hr />
          </div>
        </div>
        <div className="row row-content ">
          <div className="col-12 col-sm-5 m-1">
            <RenderBook book={this.props.book} />
          </div>

          <div className="col-12 col-sm-5 m-1">
            <RenderReviews reviews={this.props.reviews} />
            {this.props.isAuthenticated ?
              <AddReviewForm addReview={this.props.addReview}
                bookId={this.props.book.id}
                userId={this.props.user._id} /> : null}


          </div>

        </div>
      </div>
    )
  }

}

export default BookDetail;


