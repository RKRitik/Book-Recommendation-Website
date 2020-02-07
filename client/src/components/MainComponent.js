import React, { Component } from "react";
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import About from "./AboutComponent";
import Home from "./HomeComponent";
import Recommend from './GetRecommendations';
import Find from './FindBookComponent';
import Reviews from './MyReviews';
import Books from './MyBooks';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';

class Main extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    //   const BookWithId = ({ match }) => {
    //     return (
    //       // <BookDetail book={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
    //       //   comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))} />

    //     );
    // };


    return (

      <div>
        <Header />
        <div>
          <Switch>
            <Route path='/home' component={Home} />
            <Route exact path='/about' component={About} />}
              <Route exact path='/find' component={Find} />
            <Route exact path='/recommend' component={Recommend} />
            <Route exact path='/reviews' component={Reviews} />
            <Route exact path='/books' component={Books} />
            {/* <Route exact path='/find' component={() => <Menu dishes={this.props.dishes} />} /> */}
            <Route path='/find/:dishId' component={BookWithId} />
            <Redirect to="/home" />
          </Switch>
        </div>
        <Footer />
      </div >

    );
  }
}
export default Main;