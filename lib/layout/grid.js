"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
//
// Whitespace Grid component module
//

var React = require('react');

var Grid = exports.Grid = React.createClass({
  displayName: "Grid",

  render: function render() {
    var gridClass = "grid-" + this.props.cols + (this.props.cls ? " " + this.props.cls : "");

    return React.createElement(
      "div",
      { className: gridClass },
      this.props.children
    );
  }
});