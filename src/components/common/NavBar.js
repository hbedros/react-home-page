import React from 'react';
import NavItem from './NavItem.js';
import logo from './logo.png';
import avatar from './avatar-haig.png';
import ReactRouter from 'react-router';
import './NavBar.css';

const ReactRouter = require('react-router');
const Link = ReactRouter.Link;
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

        class NameForm extends React.Component {
            constructor(props) {
                super(props);
                this.state = {value: ''};
            }

            handleChange(event) {
            this.setState({value: event.target.value});
            } 
        }

        return (
            <div>
            <nav className= "navbar navbar-default">
                <Link to= "/"><img src={logo} alt="logo" className="Header-logo" /></Link>
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

                <div className ="right-nav"> 
                <form onSubmit={this.handleSubmit} className="">
                <input type="text" placeholder="Search" onChange={this.handleChange} />
                </form>
                <button className="right login-btn btn-default .btn-transparent dropdown-toggle navbar-btn navbar-btn-avatar" type="button" data-toggle="dropdown">
                <img src={avatar} alt="user_pic" className="rounded-circle img-responsive" />
                </button>
                </div>
            </nav>    
            </div>
        )
    }
});

export default NavBar;