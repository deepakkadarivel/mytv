import { combineReducers } from 'redux';
import { searchReducer } from '../pages/search';
import seriesReducer from '../pages/series/seriesReducer';
import episodeReducer from '../pages/episode/episodeReducer';

const rootReducer = combineReducers({
    search: searchReducer,
    series: seriesReducer,
    episode: episodeReducer
});

export default rootReducer;
