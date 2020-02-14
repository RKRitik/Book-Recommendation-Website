import React, { Component } from "react";
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import About from "./AboutComponent";
import Home from "./HomeComponent";
import Recommend from './GetRecommendations';
import Find from './FindBookComponent';
import Reviews from './MyReviews';
import Books from './MyBooks';
import { BOOKS } from '../shared/Books';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { login, logout, register } from '../actions/authActions';
import { clearErrors } from '../actions/errorActions';
const mapStateToProps = state => {
  return {
    review: state.review,
    auth: state.auth,
    error: state.error
    //leaders: state.leaders
  }
}

const mapDispatchToProps = (dispatch) => ({

  // postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment)),
  // fetchDishes: () => { dispatch(fetchDishes()) },
  // resetFeedbackForm: () => { dispatch(actions.reset('feedbackForm')) },
  // fetchComments: () => dispatch(fetchComments()),
  // fetchPromos: () => dispatch(fetchPromos()),
  // fetchLeaders: () => dispatch(fetchLeaders()),
  // postFeedback: (Feedback) => dispatch(postFeedback(Feedback))
  ////------------Auth---------------------//
  login: (user) => dispatch(login(user)),
  logout: () => dispatch(logout()),
  clearErrors: () => dispatch(clearErrors()),
  register: (user) => dispatch(register(user))
});
class Main extends Component {
  constructor(props) {
    super(props);

  }


  render() {

    // const BookWithId = ({ match }) => {
    //   return (
    //     <BookDetail book={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
    //       //   comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))} />

    //     );
    // };


    return (

      <div>
        <Header auth={this.props.auth} error={this.props.error} login={this.props.login} logout={this.props.logout} register={this.props.register} clearErrors={this.props.clearErrors} />
        <div>
          <Switch>
            <Route path='/home' component={Home} />
            <Route exact path='/about' component={About} />}

            <Route exact path='/recommend' component={Recommend} />
            <Route exact path='/reviews' component={Reviews} />
            <Route exact path='/books' component={Books} />
            <Route exact path='/find' component={() => <Find books={BOOKS} />} />
            {/* <Route path='/find/:bookId' component={BookWithId} /> */}
            <Redirect to="/home" />
          </Switch>
        </div>
        <Footer />
      </div >

    );
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));