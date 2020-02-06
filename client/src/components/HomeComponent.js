import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

const RenderTopPicks = ({ book }) => {
        return (
                <Card>
                        <CardImg src={book.image} />
                        <CardBody>
                                <CardTitle>{book.name}</CardTitle>
                                {book.genre ? <CardSubtitle>{book.genre}</CardSubtitle> : null}
                                <CardText>{book.description}</CardText>
                        </CardBody>

                </Card>
        );

}

const Home = () => {

        return (
                <div className='container'>
                        <h1>Home Page</h1>
                        {/* <RenderTopPicks book={someBook}/> */}
                        <div class='row row-content'>
                                Maecenas a justo molestie, feugiat lacus a, suscipit purus. Duis nec varius lacus, eu tincidunt odio.
                                Proin sollicitudin ipsum eu convallis imperdiet. Donec tempus rutrum metus, id pharetra lorem bibendum non.
                                Cras sit amet orci sed leo condimentum rutrum vel non magna. Aliquam lobortis ipsum urna, eget laoreet metus
                                gravida elementum. Nulla et venenatis lectus. Cras lacus massa, commodo non accumsan sit amet,
                                 eleifend quis risus. Donec eget mauris sit amet mauris congue tempus eget sit amet odio.
              </div>
                </div>
        );
}

export default Home;