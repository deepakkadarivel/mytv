import { connect } from 'react-redux';
import SeriesComponent from './SeriesComponent';
import { fetchEpisodes, setDetails } from './seriesActions';

import {
    getSeriesDetails,
    getSeriesEpisodes,
    getFetchingEpisodes
} from './seriesSelectors';

const mapStateToProps = state => ({
    details: getSeriesDetails(state),
    episodes: getSeriesEpisodes(state),
    fetchingEpisodes: getFetchingEpisodes(state)
});

const mapDispatchToProps = { fetchEpisodes, setDetails };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SeriesComponent);
