import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import history from './history';
import { SearchPage } from '../pages/search';
import ShowsContainer from '../pages/shows/ShowsContainer';
import SeriesContainer from '../pages/series/SeriesContainer';

const Routes = () => {
    return (
        <Router history={history}>
            <Switch basename={window.location.pathname || ''}>
                <Route path="/shows" component={ShowsContainer} />
                <Route path="/series" component={SeriesContainer} />
                <Route path="/search" component={SearchPage} />
                <Redirect exact from="/" to="/search" />
            </Switch>
        </Router>
    );
};

export default Routes;
