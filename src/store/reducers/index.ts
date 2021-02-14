import { combineReducers } from 'redux';
import exampleReducer from './example-reducer';

const rootReducer = combineReducers({
    exampleData: exampleReducer,
});

export default rootReducer;
