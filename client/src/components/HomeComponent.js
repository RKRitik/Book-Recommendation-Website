import React from 'react';

import { BOOKS } from '../shared/Books';
import BooksCarousel from './CarouselComponent';

const Home = () => {

        return (
                <div className='container'>
                        <h1>Home Page</h1>
                        <div className='row row-content'>
                                <div className='col-12 col-sm-5 m-1'>
                                        <h2>Top Picks</h2>
                                        <BooksCarousel books={BOOKS} />

                                </div>
                                <div className='col-12 col-sm-5 m-1 '>
                                        <div className='col-12'> <h2>Why choose us?</h2></div>

                                        <div className=' col-12  d-flex align-content-center'>
                                                Maecenas a justo molestie, feugiat lacus a, suscipit purus. Duis nec varius lacus, eu tincidunt odio.
                                                         Proin sollicitudin ipsum eu convallis imperdiet. Donec tempus rutrum metus, id pharetra lorem bibendum non.
                                                         Cras sit amet orci sed leo condimentum rutrum vel non magna. Aliquam lobortis ipsum urna, eget laoreet metus
                                                         gravida elementum. Nulla et venenatis lectus. Cras lacus massa, commodo non accumsan sit amet,
                                                          eleifend quis risus. Donec eget mauris sit amet mauris congue tempus eget sit amet odio.
                                       </div>




                                </div>
                        </div>
                        {/* <RenderTopPicks book={someBook}/> */}

                </div>
        );
}

export default Home;