import axios from 'axios';
import * as ActionTypes from './ActionTypes';
import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions';

export const getRecommendations = (userId) => dispatch => {
    dispatch(setRecommendationsLoading());
    axios
        .get(`/api/recommend/${userId}`)
        .then(res =>
            dispatch({
                type: ActionTypes.GET_RECOMMENDATIONS,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status))
        );
};

// export const addBook = book => (dispatch, getState) => {
//     axios
//         .post('/api/book', book, tokenConfig(getState))
//         .then(res =>
//             dispatch({
//                 type: ActionTypes.ADD_BOOK,
//                 payload: res.data
//             })
//         )
//         .catch(err =>
//             dispatch(returnErrors(err.response.data, err.response.status))
//         );
// };



export const setRecommendationsLoading = () => {
    return {
        type: ActionTypes.RECOMMENDATIONS_LOADING
    };
};
