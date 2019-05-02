import React from 'react';
import './_style.scss';
import Routes from '../../routes';
import Nav from '../Nav';

function App() {
    return (
        <div className="App">
            <Nav />
            <Routes />
        </div>
    );
}

export default App;
