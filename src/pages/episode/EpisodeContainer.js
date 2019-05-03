import { connect } from 'react-redux';
import EpisodeComponent from './EpisodeComponent';
import { fetchEpisode } from './episodeActions';

import { getEpisode, getFetchingEpisode } from './episodeSelector';

const mapStateToProps = state => ({
    episode: getEpisode(state),
    fetchingEpisode: getFetchingEpisode(state)
});

const mapDispatchToProps = { fetchEpisode };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EpisodeComponent);
