"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
//
// Whitespace Grid component module
//

var React = require('react');

var Container = exports.Container = React.createClass({
  displayName: "Container",

  render: function render() {
    var containerClass = "container-" + this.props.cols;

    return React.createElement(
      "div",
      { className: containerClass },
      this.props.children
    );
  }
});