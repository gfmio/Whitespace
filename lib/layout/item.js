"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
//
// Whitespace Item component module
//

var React = require('react');

var Item = exports.Item = React.createClass({
  displayName: "Item",

  render: function render() {
    var itemClass = "item " + (this.props.width == 1 ? "col" : "col-" + this.props.width);

    return React.createElement(
      "div",
      { className: itemClass },
      this.props.children
    );
  }
});