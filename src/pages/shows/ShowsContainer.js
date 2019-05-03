import { connect } from 'react-redux';
import ShowsComponent from './ShowsComponent';
import { getShows } from '../search/selectors';
import { setDetails } from '../series/seriesActions';

const mapStateToProps = state => ({
    shows: getShows(state)
});

const mapDispatchToProps = {
    setDetails
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShowsComponent);
