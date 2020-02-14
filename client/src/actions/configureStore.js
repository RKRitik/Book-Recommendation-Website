import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Comments } from './comments';
import { Leaders } from './leaders';
import { createForms } from 'react-redux-form';
import { Promotions } from './promotions';
import { Dishes } from './dishes';
import { Feedback } from './feedback';
import { InitialFeedback } from './forms';
import thunk from 'redux-thunk';
import logger from 'redux-logger';


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            feedback: Feedback,
            leaders: Leaders,
            ...createForms({
                feedbackForm: InitialFeedback
            })
        }),
        applyMiddleware(thunk, logger)

    );
    return store;
};