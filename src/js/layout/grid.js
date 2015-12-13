// 
// Whitespace Grid component module
// 

var React = require('react');

export var Grid = React.createClass({
  render: function() {
    var gridClass = "grid-" + this.props.cols + (this.props.cls ? " " + this.props.cls : "");

    return (
      <div className={ gridClass }>
        { this.props.children }
      </div>
    );
  }
});
