import * as ActionTypes from './ActionTypes';

export const Feedback = (state = {
    success: null,
    errMess: null
}, action) => {
    switch (action.type) {
        case ActionTypes.FEEDBACK_FAILED:
            return { ...state, success: false, errMess: action.payload };
        case ActionTypes.FEEDBACK_SUCCESS:
            return { ...state, success: true, errMess: null };
        default:
            return state;
    }
};