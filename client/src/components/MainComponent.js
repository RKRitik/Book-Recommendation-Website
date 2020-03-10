import React, { Component } from "react";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import About from "./AboutComponent";
import Home from "./HomeComponent";
import Recommend from "./MyRecommendations";
import Find from "./FindBookComponent";
import Reviews from "./MyReviews";
import Books from "./MyBooks";
import BookDetail from "./BookDetailComponent";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { addBook, deleteBook, getBooks } from "../actions/bookActions";
import { addReview, deleteReview, getReviews } from "../actions/reviewActions";
import { login, logout, register } from "../actions/authActions";
import { clearErrors } from "../actions/errorActions";
import { getRecommendations } from "../actions/recommendActions";
import { getResults } from "../actions/resultActions";
const mapStateToProps = state => {
  return {
    review: state.review,
    auth: state.auth,
    error: state.error,
    result: state.result,
    book: state.book,
    recommend: state.recommend
    //leaders: state.leaders
  };
};

const mapDispatchToProps = dispatch => ({
  ////------------Recommendation---------------------//
  getRecommendations: userId => dispatch(getRecommendations(userId)),

  ////------------Review---------------------//
  addReview: review => dispatch(addReview(review)),
  deleteReview: id => dispatch(deleteReview(id)),
  getReviews: userId => dispatch(getReviews(userId)), /////

  ////------------Books---------------------//
  addBook: book => dispatch(addBook(book)),
  deleteBook: id => dispatch(deleteBook(id)),
  getBooks: userId => dispatch(getBooks(userId)),
  ////------------GetResults---------------//
  getResults: (searchTerms, filters, filterTerm) =>
    dispatch(getResults(searchTerms, filters, filterTerm)),

  ////------------Auth---------------------//
  login: user => dispatch(login(user)),
  logout: () => dispatch(logout()),
  clearErrors: () => dispatch(clearErrors()),
  register: user => dispatch(register(user))
  ///-------------------------------------////
});
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: this.props.auth
    };
  }
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.getBooks(this.props.auth.user._id);
      this.props.getReviews(this.props.auth.user._id);
      this.props.getRecommendations(this.props.auth.user._id);
    }
  }
  componentDidUpdate(prevProps, prevState) {
    const { auth } = this.props;
    if (prevProps.auth !== auth) {
      if (this.props.auth.isAuthenticated) {
        // console.log("component did update..");
        this.props.getBooks(this.props.auth.user._id);

        this.props.getReviews(this.props.auth.user._id);

        // console.log("outside getreviews");
        this.props.getRecommendations(this.props.auth.user._id);
      }
    }
  }

  render() {
    const BookWithId = ({ match }) => {
      return (
        <BookDetail
          book={
            this.props.result.results.filter(
              book => book.id === match.params.bookId
            )[0]
          }
          isLoading={this.props.result.isLoading}
          errMess={this.props.result.errMess}
          addBook={this.props.addBook}
          reviews={this.props.review.reviews.filter(
            review => review.bookId === match.params.bookId
          )}
          // commentsErrMess={this.props.comments.errMess}
          getReviews={this.props.getReviews}
          addReview={this.props.addReview}
          isLoading={this.props.auth.isLoading}
          isAuthenticated={this.props.auth.isAuthenticated}
          user={this.props.auth.user ? this.props.auth.user : null}
        />
      );
    };

    return (
      <div>
        <Header
          auth={this.props.auth}
          error={this.props.error}
          login={this.props.login}
          logout={this.props.logout}
          register={this.props.register}
          clearErrors={this.props.clearErrors}
        />
        <div>
          <Switch>
            <Route path="/home" component={Home} />
            <Route exact path="/about" component={About} />}
            <Route
              exact
              path="/recommend"
              component={() => (
                <Recommend
                  auth={this.props.auth}
                  recommend={this.props.recommend}
                  getRecommendations={this.props.getRecommendations}
                />
              )}
            />
            <Route
              exact
              path="/reviews"
              component={() => (
                <Reviews
                  auth={this.props.auth}
                  deleteReview={this.props.deleteReview}
                  getReviews={this.props.getReviews}
                  review={this.props.review}
                />
              )}
            />
            <Route
              exact
              path="/books"
              component={() => (
                <Books
                  auth={this.props.auth}
                  deleteBook={this.props.deleteBook}
                  book={this.props.book}
                  getBooks={this.props.getBooks}
                />
              )}
            />
            <Route
              exact
              path="/find"
              component={() => (
                <Find
                  error={this.props.error}
                  result={this.props.result}
                  getResults={this.props.getResults}
                />
              )}
            />
            <Route path="/find/:bookId" component={BookWithId} />
            <Redirect to="/home" />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
