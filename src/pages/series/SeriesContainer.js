import { connect } from 'react-redux';
import SeriesComponent from './SeriesComponent';
import { fetchEpisodes, fetchDetail } from './seriesActions';

import {
    getSeriesDetail,
    getSeriesEpisodes,
    getFetchingEpisodes,
    getFetchingDetail
} from './seriesSelectors';

const mapStateToProps = state => ({
    detail: getSeriesDetail(state),
    episodes: getSeriesEpisodes(state),
    fetchingEpisodes: getFetchingEpisodes(state),
    fetchingDetail: getFetchingDetail(state)
});

const mapDispatchToProps = { fetchEpisodes, fetchDetail };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SeriesComponent);
