import React from "react";

import { BOOKS } from "../shared/Books";
import BooksCarousel from "./CarouselComponent";

const Home = () => {
  return (
    <div className="container">
      <h1>Home Page</h1>
      <div className="row row-content">
        <div className="col-12 col-sm-5 m-1">
          <h2>Top Picks</h2>
          <BooksCarousel books={BOOKS} />
        </div>
        <div className="col-12 col-sm-5 m-1 ">
          <div className="col-12">
            {" "}
            <h2>Why choose us?</h2>
          </div>

          <div className=" col-12  d-flex align-content-center">
            What sets us apart from the competition is that we're passionate
            about the products/services we provide and quality of support. We're
            always looking to improve every aspect of our business. From more
            features all the way to more frequent technologies.
          </div>
        </div>
      </div>
      {/* <RenderTopPicks book={someBook}/> */}
    </div>
  );
};

export default Home;
