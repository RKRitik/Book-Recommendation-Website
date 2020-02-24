import * as ActionTypes from '../actions/ActionTypes';

export default function (state = {
    isLoading: false,
    errMess: null,
    recommendations: []
    //resultTerms:[],

}, action) {
    switch (action.type) {
        case ActionTypes.GET_RECOMMENDATIONS:
            return { ...state, isLoading: false, errMess: null, recommendations: action.payload };
        case ActionTypes.RECOMMENDATIONS_LOADING:
            return { ...state, isLoading: true, errMess: null, recommendations: [] };
        case ActionTypes.RECOMMENDATIONS_FAILED:
            return { ...state, isLoading: false, errMess: action.payload, recommendations: [] };
        default:
            return state;
    }
};