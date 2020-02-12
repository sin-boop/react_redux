import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
const initState = {

}
let middleware = [thunk, logger]

const composeEnhancers = composeWithDevTools({
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});
/* eslint-disable no-underscore-dangle */
const store = createStore(rootReducer   /* preloadedState, */,
    initState,
    composeEnhancers(
        applyMiddleware(...middleware)),

)
/* eslint-enable */

export default store