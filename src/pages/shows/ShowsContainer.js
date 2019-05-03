import { connect } from 'react-redux';
import ShowsComponent from './ShowsComponent';
import { getShows, getFetchingShows } from './showsSelectors';
import { fetchShows } from './showsActions';

const mapStateToProps = state => ({
    shows: getShows(state),
    fetchingShows: getFetchingShows(state)
});

const mapDispatchToProps = {
    fetchShows
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShowsComponent);
