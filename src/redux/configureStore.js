// Combined Reducers

import { createStore, combineReducers, applyMiddleware } from 'redux'; // Redux
import thunk from 'redux-thunk'; // Redux Thunk
import logger from 'redux-logger'; // Redux Logger
import { Campsites } from './campsites';
import { Comments } from './comments';
import { Partners } from './partners';
import { Promotions } from './promotions';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            campsites: Campsites,
            comments: Comments,
            partners: Partners,
            promotions: Promotions
        }),
        applyMiddleware(thunk, logger) // Middleware
    );

    return store;
}