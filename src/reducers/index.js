import { combineReducers } from 'redux';
import seriesReducer from '../pages/series/seriesReducer';
import episodeReducer from '../pages/episode/episodeReducer';
import showsReducer from '../pages/shows/showsReducer';

const rootReducer = combineReducers({
    shows: showsReducer,
    series: seriesReducer,
    episode: episodeReducer
});

export default rootReducer;
