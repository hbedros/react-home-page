import React from 'react';
import ReactDOM from 'react-dom';
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
    {/* <Header /> */}
    <NavBar titleColor= "white" linkColor= "white" navData= {navLinks}/>
    <Footer />
    </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));