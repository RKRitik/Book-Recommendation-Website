import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardBody,
  CardHeader
} from "reactstrap";
import { Link } from "react-router-dom";

function About() {


  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>About Us</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>About Us</h3>
          <hr />
        </div>
      </div>
      <div className="row row-content">
        <div className="col-12 col-md-6">
          <h2>Our History</h2>
          <p>
            Welcome to Good Books, your number one source for all things for books. We're dedicated to providing you the very best of books, with an emphasis on your fine tuned , similar and , beneficial books.


  Founded in 2020 by  Ritik Khatri, Good Books has come a long way from its beginnings in our hostel rooms. When Ritik first started out, his passion for good books for all drove them to start their own business.


  We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.

<p>Sincerely,
<br></br>
              Ritik Khatri <br></br>
              Antony Clement P <br></br>
              Vrishabh</p>


          </p>

        </div>
        <div className="col-12 col-md-5">
          <Card>
            <CardHeader className="bg-primary text-white">
              Facts At a Glance
            </CardHeader>
            <CardBody>
              <p className="card-text">Established: 2020 </p>

              <p className="card-text">   Employees: 3</p>

              <p className="card-text">    Co-Founder & CEO
           <strong> Ritik Khatri</strong></p>

              <p className="card-text">    Co-Founder & COO
            <strong> Antony Clement P</strong></p>

              <p className="card-text">  Co-Founder &  CFO
            <strong> Vrishabh</strong></p>


            </CardBody>
          </Card>

        </div>

      </div>

    </div>);
}

export default About;
