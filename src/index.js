import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/common/Header.js';
import Footer from './components/common/Footer.js';
import NavBar from './components/common/NavBar.js';
import './index.css';

const navLinks = [
    {
        title: "Home",
        href: "#"
    },
    {
        title: "Profile",
        href: "#"
    }
];

const App = () => {
    return (
    <div>
    <Header />
    <NavBar bgColor= "red" titleColor= "white" linkColor= "yellow" navData= {navLinks}/>
    <Footer />
    </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));