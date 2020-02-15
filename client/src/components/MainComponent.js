import React, { Component } from "react";
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import About from "./AboutComponent";
import Home from "./HomeComponent";
import Recommend from './GetRecommendations';
import Find from './FindBookComponent';
import Reviews from './MyReviews';
import Books from './MyBooks';
import BookDetail from './BookDetailComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { login, logout, register } from '../actions/authActions';
import { clearErrors } from '../actions/errorActions';
import { getResults } from '../actions/resultActions';
const mapStateToProps = state => {
  return {
    review: state.review,
    auth: state.auth,
    error: state.error,
    result: state.result,
    book: state.book
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
  ////------------GetResults---------------//
  getResults: (searchTerms, filters) => dispatch(getResults(searchTerms, filters)),


  ////------------Auth---------------------//
  login: (user) => dispatch(login(user)),
  logout: () => dispatch(logout()),
  clearErrors: () => dispatch(clearErrors()),
  register: (user) => dispatch(register(user))
  ///-------------------------------------////


});
class Main extends Component {



  render() {
    const BookWithId = ({ match }) => {
      console.log('bookId = ', match.params.bookId);
      return (
        <BookDetail book={this.props.result.results.filter((book) => book.id === match.params.bookId)[0]}
          isLoading={this.props.result.isLoading}
          errMess={this.props.result.errMess}
        // comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
        // commentsErrMess={this.props.comments.errMess}
        // postComment={this.props.postComment}
        />
      );
    };


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
            <Route exact path='/find' component={() => <Find result={this.props.result} getResults={this.props.getResults} />} />
            <Route path='/find/:bookId' component={BookWithId} />
            <Redirect to="/home" />
          </Switch>
        </div>
        <Footer />
      </div >

    );
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));