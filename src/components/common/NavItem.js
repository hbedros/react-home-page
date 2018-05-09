import React from 'react';
import ReactRouter from 'react-router';
import './NavBar.css'

const Link = ReactRouter.Link;
const createReactClass = require('create-react-class');

const NavItem = createReactClass({
    getInitialState: function (){
        return {hover: false};
    },
    mouseOver: function(e){
        this.setState({hover:true});
    },
    mouseOut: function(e){
        this.setState({hover:false});
    },

    render: function() {
        return (
            <li className={this.state.hover ? "active": ""} onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
            <Link style= {this.props.aStyle} href={this.props.href}> {this.props.title} </Link>
            </li>
        )
    }
});

export default NavItem;