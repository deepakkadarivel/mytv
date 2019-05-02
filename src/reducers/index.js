import { combineReducers } from 'redux';
import { searchReducer } from '../pages/search';

const rootReducer = combineReducers({
    search: searchReducer
});

export default rootReducer;
