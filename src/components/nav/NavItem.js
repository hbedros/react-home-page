import React from 'react';

const NavItem = React.createClass({
    render: function() {
        return (
            <li><a style= {this.props.aStyle} href={this.props.href}> {this.props.title} </a></li>
        )
    }
});

export default NavItem;