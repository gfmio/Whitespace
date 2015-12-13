// 
// Whitespace Item component module
// 

var React = require('react');

export var Item = React.createClass({
  render: function() {
    var itemClass = "item " + (this.props.width == 1 ? "col" : "col-" + this.props.width);

    return (
      <div className={itemClass}>
        { this.props.children }
      </div>
    );
  }
});
