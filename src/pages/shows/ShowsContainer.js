import { connect } from 'react-redux';
import ShowsComponent from './ShowsComponent';
import { getShows } from '../search/selectors';

const mapStateToProps = state => ({
    shows: getShows(state),
});

const mapDispatchToProps = {};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShowsComponent);
