const React = require('react');
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;


const BasePage = require('./components/pages/BasePage.js');
const HomePage = require('./components/pages/HomePage.js');
const ProfilePage = require('./components/pages/ProfilePage.js');

const Routes = (
    <Router history={History}>
        <Route path="/" component={BasePage}>
            <IndexRoute component={HomePage} />
            <Route path="/profile/:proflieId" component={ProfilePage} />
        </Route>
    </Router>
);