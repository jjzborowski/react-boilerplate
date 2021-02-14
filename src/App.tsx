import AppOutline from 'components/AppOutline/AppOutline';
import React from 'react';
import {
    Router,
    Route,
    Switch,
} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { APP_URLS } from 'constants/urls';
import './styles/styles.scss';

const history = createBrowserHistory();

const App = (): JSX.Element => {
    return (
        <Router history={ history }>
            <Switch>
                <Route
                    exact
                    path={ APP_URLS.Root }
                    component={ AppOutline }
                />
            </Switch>
        </Router>
    );
};

export default App;
