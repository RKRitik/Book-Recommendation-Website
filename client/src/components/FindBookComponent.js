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

function RenderBook({ book }) {
    return (
        <Card>
            <Link to={`/find/${book.id}`}>
                <CardImg width="100%" src={book.image} alt={book.name} />
                <CardImgOverlay>
                    <CardTitle>{book.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
}

const Find = props => {
    const results = props.books.map(book => {
        return (
            <div className="col-12 col-md-5 m-1">
                <RenderBook book={book} onClick={props.onClick} />
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
            <div className="row">{results}</div>
        </div>
    );
};

export default Find;
