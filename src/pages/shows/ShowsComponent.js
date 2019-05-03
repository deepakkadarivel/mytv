import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ShowCard from '../../components/ShowCard';
import './_style.scss';
import t from '../../translation';

class ShowsComponent extends Component {
    componentDidMount() {
        const { fetchShows } = this.props;
        fetchShows();
    }

    render() {
        const { shows, history, fetchingShows } = this.props;
        if (fetchingShows.isPending) {
            return <p>{t('loading')}</p>;
        }
        if (fetchingShows.isRejected) {
            return <p>{t('tryAgain')}</p>;
        }
        return (
            <div className="Shows container">
                {shows.length ? (
                    <div className="Shows-grid">
                        {shows.map(show => (
                            <div key={show.id}>
                                <ShowCard
                                    {...show}
                                    onClick={() => {
                                        // setDetails(show);
                                        history.push('/series');
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="Shows-empty">{t('empty')}</p>
                )}
            </div>
        );
    }
}

ShowsComponent.propTypes = {
    shows: PropTypes.array.isRequired,
    fetchingShows: PropTypes.object.isRequired,
    fetchShows: PropTypes.func.isRequired,
    history: PropTypes.any.isRequired
};

export default ShowsComponent;
