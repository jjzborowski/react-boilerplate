import {
    applyMiddleware,
    createStore,
} from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import rootReducer from 'store/reducers';
import thunk from 'redux-thunk';

const createStoreWithMiddleware = composeWithDevTools(
    applyMiddleware(
        thunk,
    ),
)(createStore);

const store = createStoreWithMiddleware(
    rootReducer,
);
export default store;
