import NavBar from '../common/NavBar.js';
const React = require('react');
const createReactClass = require('create-react-class');


const navLinks = [{ title: "Home", href: "/" }];

const BasePage = createReactClass({
    render: function() {
        return (
            <div>
            <NavBar titleColor= "white" linkColor= "white" navData= {navLinks}/>
            {this.props.children}
            </div>
        );
    }
});

export default BasePage;