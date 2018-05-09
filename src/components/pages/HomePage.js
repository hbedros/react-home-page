const React = require('react');
const ReactRouter = require('react-router');
const Link = ReactRouter.Link;

const createReactClass = require('create-react-class');
const HomePage = createReactClass({
    render: function() {
        return (
            <div>
                <h1>Home</h1>
                <ul>
                    <li><Link to= "/prodcut/55"> iOS Course</Link></li>
                    <li><Link to= "/prodcut/65"> React Course</Link></li>
                </ul>
            </ div>
        );
    }
});

export default HomePage;