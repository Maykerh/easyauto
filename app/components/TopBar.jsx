var React = require('react');

var TopBar = React.createClass({

	componentDidMount: function() {
	  var element = ReactDOM.findDOMNode(this.refs.test);
	  element.setAttribute('data-dropdown-menu');
	},

	render: function () {
		return (
			<div className="top-bar">
			  <div className="top-bar-left">
			    <ul className="vertical dropdown menu" ref={"test"} data-dropdown-menu style={{maxWidth: "250px^"}}>
			      <li>
			        <a href="#">Item 1</a>
			        <ul className="vertical menu nested">
			          <li><a >Item 1A</a></li>
			        </ul>
			      </li>
			      <li><a >Item 2</a></li>
			      <li><a >Item 3</a></li>
			    </ul>
			  </div>
			  <div className="top-bar-right">
			    <ul className="menu">
			      <li><input type="search" placeholder="Search"/></li>
			      <li><button type="button" className="button">Search</button></li>
			    </ul>
			  </div>
			</div>
		);
	}
});

module.exports = TopBar;