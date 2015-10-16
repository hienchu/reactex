var React = require('react'),
	rr = require('react-router');
var Router = rr.Router,
    Route = rr.Route,
    Link = rr.Link,
    IndexRoute = rr.IndexRoute;

var Header = React.createClass({
	render: function() {
		return (
			<div className="page-header">
				<h1>ReactEx</h1>
			</div>
		);
	}
});

var PageNav = React.createClass({
	render: function() {
		return (
			<div className="nav">
				<Link to="/home">Home</Link>
				&nbsp; | &nbsp;
				<Link to="/about">About</Link>
			</div>
		);
	}
});

var App = React.createClass({
	render: function() {
		return (
			<div className="container">
				<Header />
				<PageNav />
        {this.props.children}
			</div>
		);
	}
});

var routes = {
	Home: require('../routes/Home'),
	About: require('../routes/About')
};

React.render((
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={routes.Home}/>
      <Route path="home" component={routes.Home} />
      <Route path="about" component={routes.About}/>
    </Route>
  </Router>
), document.body);
