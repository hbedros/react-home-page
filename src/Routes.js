const React = require('react');
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Routes = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;

const CreateHistory = require('history/lib/createHistory');

const History = new CreateHistory({
    queryKey: false
});

const BasePage = require('./components/BasePage.js');
const HomePage = require('./components/HomePage.js');
const ProfilePage = require('./components/ProfilePage.js');

const Routes = (
    <Router history={History}>
        <Route path="/" component={BasePage}>
            <IndexRoute component={HomePage} />
            <Route path="/profile/:proflieId" component={Profile} />
        </Route>
    </Router>
);