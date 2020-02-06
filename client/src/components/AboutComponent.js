import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardBody,
  CardHeader,
  Media
} from "reactstrap";
import { Link } from "react-router-dom";
// function RenderLeader({ leader }) {
//   return (
//     <Media className="mb-5">
//       <Media>
//         <Media object src={leader.image} alt="Generic placeholder image" />
//       </Media>
//       <Media body className="ml-5">
//         <Media heading>{leader.name}</Media>
//         {leader.designation}
//         <br /> <br />
//         {leader.description}
//       </Media>
//     </Media>
//   );
// }

function About() {
  // const leaders = props.leaders.map(leader => {
  //   return <RenderLeader leader={leader} />;


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
            Started in 2020, orem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
            took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages, and more
            recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>

        </div>
        <div className="col-12 col-md-5">
          <Card>
            <CardHeader className="bg-primary text-white">
              Facts At a Glance
            </CardHeader>
            <CardBody>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Praesent nec arcu risus. Quisque maximus nunc in dolor posuere, a aliquet eros ultricies.
              Morbi sed neque at nisl cursus consectetur. Sed ac nisl in tellus pellentesque vestibulum.
              Donec ultrices lacus mollis nisl pretium ullamcorper. Nullam vitae elit libero. Donec a risus at arcu vehicula porta.
              In orci elit, posuere id dui at, imperdiet vulputate neque. In rhoncus leo varius ipsum scelerisque bibendum in quis mauris.
              Curabitur ultricies ullamcorper velit, eget dictum lorem semper quis. Praesent posuere orci ac enim congue egestas.
              In hac habitasse platea dictumst. Quisque ipsum odio, semper nec vulputate quis, egestas at nisi.
              Quisque nisl libero, tristique a ipsum et,
              luctus pellentesque leo. Vestibulum non eros magna.
          </CardBody>
          </Card>

        </div>
        <div className="row row-content">
          <div className="col-12">
            <h2>Corporate Leadership</h2>
            {/* <Media list>{leaders}</Media> */}
          </div>
        </div>
      </div>
      );
      }
</div>);
}

export default About;
