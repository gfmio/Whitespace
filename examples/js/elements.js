//
// Grid view elements
// 

var React = require('react');
var ReactDOM = require('react-dom');

// Main View

var MainView = React.createClass({
	render: function() {
    	var Container = whitespace.layout.Container;

		return (
			<Container cols="1">
				<h1>Whitespace components</h1>
				<p>
					This is a collection of all Whitespace components. For an overview of the grid layout, check out <a href="grid.html">grid.html</a>.
				</p>

				<h2>Generic styles</h2>
				<p>tbi</p>
				
				<h2>Typography</h2>
				<p>tbi</p>
				
				<h2>Forms</h2>
				<p>tbi</p>
				
				<h2>Buttons</h2>
				<p>tbi</p>
				
				<h2>Icons</h2>
				<p>tbi</p>
				
				<h2>Media elements</h2>
				<p>tbi</p>
			</Container>
		);
	}
});
