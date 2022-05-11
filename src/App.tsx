import AppOutline from 'components/AppOutline/AppOutline';
import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom';
import { APP_URLS } from 'constants/urls';
import './styles/styles.scss';

const App = (): JSX.Element => (
    <BrowserRouter>
        <Routes>
            <Route
                path={ APP_URLS.Root }
                element={ <AppOutline /> }
            />
        </Routes>
    </BrowserRouter>
);

export default App;
