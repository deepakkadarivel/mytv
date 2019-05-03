import { connect } from 'react-redux';
import component from './component';
import { getShows, getFetchingShows, getSearchText } from './selectors';
import { fetchShows, setSearchText } from './actions';

const mapStateToProps = state => ({
    shows: getShows(state),
    fetchingShows: getFetchingShows(state),
    searchText: getSearchText(state)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchShows,
    setSearchText: searchText =>
        dispatch(setSearchText(searchText, ownProps.history))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(component);
