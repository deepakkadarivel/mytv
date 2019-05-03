import { combineReducers } from 'redux';
import { searchReducer } from '../pages/search';
import seriesReducer from '../pages/series/seriesReducer';

const rootReducer = combineReducers({
    search: searchReducer,
    series: seriesReducer
});

export default rootReducer;
