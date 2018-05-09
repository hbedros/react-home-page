const React = require('react');

const createReactClass = require('create-react-class');
const ProfilePage = createReactClass({

    getInitialState: function() {
        return {pid: ""}
    },

    componentDidMount: function () {
        this.setState({pid: this.propTypes.params.productId});
    },

    render: function() {
        return (
            <h1>hi im profile page {this.state.pid}</h1>
        );
    }
});

export default ProfilePage;