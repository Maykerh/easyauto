var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory}
 = require('react-router');

$(document).foundation();

require('style!css!sass!applicationStyles');

ReactDOM.render(
	<p>React boiler plate 3</p>,
	document.getElementById('app')
);

/*ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={''}>
			<IndexRoute component={''}>React boiler plate 3</IndexRoute>
			<Route path="" component={''}/>
		</Route>
	</Router>,
	document.getElementById('app')
);*/
