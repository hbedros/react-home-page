import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './components/common/Footer.js';
import Routes from './Routes.js';
import './index.css';


const App = () => {
    return (
    <div>
    <Routes />
    <Footer />
    </div>
    );
}

ReactDOM.render(<App />, document.getElementById('index'));