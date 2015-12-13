// 
// Whitespace GridContainer component module
// 

var React = require('react');

var Container = require('./container').Container;
var Grid = require('./grid').Grid;

export var GridContainer = React.createClass({
  render: function() {
  	return (
  		<Container cols={ this.props.cols }>
  			<Grid cols={ this.props.cols } cls="center">
  				{ this.props.children }
  			</Grid>
   		</Container>
  	);
  }
});
