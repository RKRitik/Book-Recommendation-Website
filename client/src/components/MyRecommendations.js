import React, { Component } from 'react';
import LoadingComponent from './LoadingComponent';
import {
    Card,
    CardImg,
    CardImgOverlay,
    CardTitle,
    Breadcrumb, Alert,
    BreadcrumbItem
} from "reactstrap";
import { Link } from "react-router-dom";
class Recommend extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentDidUpdate() {
        if (this.props.auth.user != null)
            this.props.getRecommendations(this.props.auth.user.id);
    }
    render() {


        // const recommendations = this.props.recommend.recommendations.map(re => {
        //     return (
        //         <div key={re.id} className="col-12 col-md-5 m-1">
        //             {re.id} />
        //         </div>
        //     );
        // });
        const na =
            <div className='col-12 '><Alert color="danger">
                Oops No Content Available
          </Alert>
            </div>

        return (
            <div className='container'>
                <h1> Get Recommendations</h1>
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to="/home">Home</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>My Recommendations</BreadcrumbItem>
                    </Breadcrumb>
                </div>


                <div className="row row-content">
                    {this.props.recommend.isLoading ? <LoadingComponent /> : null}
                    {!this.props.recommend.isLoading && this.props.recommend.recommendations.length === 0 ? na : null}
                </div>
            </div>
        );
    }



}


export default Recommend;