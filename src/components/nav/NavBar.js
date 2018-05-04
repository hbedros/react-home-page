import React from 'react';
import NavItem from './NavItem.js';

const NavBar = React.createClass({
    render: function() {

        const navStyle = {
            WebkitBoxShadow: "0 0 4px rgba(0,0,0,0.4)",
            MozBoxShadow: "0 0 4px rgba(0,0,0,0.4)",
            boxShadow: "0 0 4px rgba(0,0,0,0.4)",
            borderRadius: 0
        }

        if (this.props.bgColor)
            navStyle.background = this.props.bgColor;
        
        if (this.props.titleColor)
            titleStyle.color= this.props.titleColor;

        const createLinkItem= function(item, index) {
            return <NavItem key= {item.title + index} href= {item.href} title= {item.title} />;
        };

        return (
            <div>
            <nav className= "navbar navbar-default">
                <div className= "navbar-header">
                    <button type= "button" className= "navbar-toggle collapsed" data-toggle= "collapse" data-target="#nav-collapse">
                        <span className= "icon-bar"></span>
                        <span className= "icon-bar"></span>
                        <span className= "icon-bar"></span>
                    </button>
                    <a style= {titleStyle} className= "navbar-brand" href= "#">Product Shop</a>
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