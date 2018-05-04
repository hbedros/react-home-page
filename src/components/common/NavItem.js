import React from 'react';
import createReactClass from 'create-react-class';

const NavItem = createReactClass({
    render: function() {
        return (
            <li><a style= {this.props.aStyle} href={this.props.href}> {this.props.title} </a></li>
        )
    }
});

export default NavItem;