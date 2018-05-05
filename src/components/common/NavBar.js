import React from 'react';
import NavItem from './NavItem.js';
import logo from './logo.png';
import './NavBar.css'
const createReactClass = require('create-react-class');


const NavBar = createReactClass({
    render: function() {

        const titleStyle= {};
        const linkStyle= {};

        const navStyle = {
            WebkitBoxShadow: "0 0 4px rgba(0,0,0,0.4)",
            MozBoxShadow: "0 0 4px rgba(0,0,0,0.4)",
            boxShadow: "0 0 4px rgba(0,0,0,0.4)",   
        }

        if (this.props.bgColor)
            navStyle.background = this.props.bgColor;
        
        if (this.props.titleColor)
            titleStyle.color= this.props.titleColor;

        if (this.props.titleColor)
            linkStyle.color= this.props.linkColor;

        const createLinkItem= function(item, index) {
            return <NavItem aStyle= {linkStyle} key= {item.title + index} href= {item.href} title= {item.title} />;
        };

        return (
            <div>
            <nav className= "navbar navbar-default">
                <a href= "#"><img src={logo} alt="logo" className="Header-logo" /></a>
                <div className= "navbar-header">
                    <button type= "button" className= "navbar-toggle collapsed" data-toggle= "collapse" data-target="#nav-collapse">
                        <span className= "icon-bar"></span>
                        <span className= "icon-bar"></span>
                        <span className= "icon-bar"></span>
                    </button>
                </div>
                <div className= "collapse navbar-collapse" id= "nav-collapse">
                    <ul className= "nav navbar-nav">{this.props.navData.map(createLinkItem)}</ul>
                </div>
            </nav>    
            </div> 
        )
    }
});

export default NavBar;