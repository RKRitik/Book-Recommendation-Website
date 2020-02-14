import * as ActionTypes from '../actions/ActionTypes';
const initialState = {
    errMess: null,
    reviews: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ActionTypes.ADD_REVIEWS:
            return { ...state, errMess: null, reviews: action.payload };

        case ActionTypes.REVIEWS_FAILED:
            return { ...state, errMess: action.payload };

        case ActionTypes.ADD_REVIEW:
            var review = action.payload;
            return { ...state, reviews: state.reviews.concat(review) };

        default:
            return state;
    }
};