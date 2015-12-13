// 
// Whitespace Grid component module
// 

var React = require('react');

export var Container = React.createClass({
  render: function() {
    var containerClass = "container-" + this.props.cols;

    return (
      <div className={ containerClass }>
        { this.props.children }
      </div>
    );
  }
});

