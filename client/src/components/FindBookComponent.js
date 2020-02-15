import React from "react";
import {
    Card,
    CardImg,
    CardImgOverlay,
    CardTitle,
    Breadcrumb,
    BreadcrumbItem
} from "reactstrap";
import { Link } from "react-router-dom";
import SearchBarComponent from './SearchBarComponent';
import LoadingComponent from './LoadingComponent';
function RenderBook({ book }) {
    const image = ((book.volumeInfo.imageLinks) ? book.volumeInfo.imageLinks.smallThumbnail : undefined);


    return (
        <Card>
            <Link to={`/find/${book.id}`}>
                <CardImg width="100%" src={image} alt={book.volumeInfo.title} />
                <CardImgOverlay>
                    <CardTitle>{book.volumeInfo.title}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
}

const Find = props => {
    const results = props.result.results.map(book => {
        return (
            <div key={book.id} className="col-12 col-md-5 m-1">
                <RenderBook book={book} />
            </div>
        );
    });
    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to="/home">Home</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>Find</BreadcrumbItem>
                </Breadcrumb>
            </div>
            <div className='row'>
                <SearchBarComponent getResults={props.getResults} />
            </div>

            <div className="row">
                {props.result.isLoading ? <LoadingComponent /> : results}
            </div>
        </div>
    );
};

export default Find;
