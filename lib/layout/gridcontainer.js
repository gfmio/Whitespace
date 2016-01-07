'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
//
// Whitespace GridContainer component module
//

var React = require('react');

var Container = require('./container').Container;
var Grid = require('./grid').Grid;

var GridContainer = exports.GridContainer = React.createClass({
  displayName: 'GridContainer',

  render: function render() {
    return React.createElement(
      Container,
      { cols: this.props.cols },
      React.createElement(
        Grid,
        { cols: this.props.cols, cls: 'center' },
        this.props.children
      )
    );
  }
});