import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import history from './history';
import { SearchPage } from '../pages/search';

const Routes = () => {
    return (
        <Router history={history}>
            <Switch basename={window.location.pathname || ''}>
                <Route path="/search" component={SearchPage} />
                <Redirect exact from="/" to="/search" />
            </Switch>
        </Router>
    );
};

export default Routes;
