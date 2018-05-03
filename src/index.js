import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/common/Header.js';
import Footer from './components/common/Footer.js';
import List from './components/list/List.js'
import './index.css';

const App = () => {
    return (
    <div>
    <Header />
    
    <Footer />
    </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);