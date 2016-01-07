"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
//
// Whitespace Grid component module
//

var React = require('react');

var Input = exports.Input = React.createClass({
  displayName: "Input",

  render: function render() {
    if (this.props.type == "textarea") {
      return React.createElement(
        "div",
        { className: "input-group" },
        React.createElement(
          "textarea",
          {
            name: this.props.name,
            placeholder: this.props.placeholder,
            required: this.props.required ? true : false,
            className: this.props.value === "" || this.props.value == undefined ? "empty" : "" },
          this.props.value
        ),
        React.createElement(
          "label",
          null,
          this.props.label
        ),
        React.createElement(
          "p",
          { className: "hint" },
          this.props.hint
        ),
        React.createElement("span", { className: "material-input" })
      );
    } else if (this.props.type == "select") {
      return React.createElement(
        "div",
        { className: "input-group" },
        React.createElement(
          "select",
          {
            multiple: this.props.multiple ? true : false,
            name: this.props.name,
            required: this.props.required ? true : false,
            className: this.props.value === "" || this.props.value == undefined ? "empty" : "" },
          this.props.children
        ),
        React.createElement(
          "label",
          null,
          this.props.label
        ),
        React.createElement(
          "p",
          { className: "hint" },
          this.props.hint
        ),
        React.createElement("span", { className: "material-input" })
      );
    } else {
      return React.createElement(
        "div",
        { className: "input-group" },
        React.createElement("input", {
          type: this.props.type,
          name: this.props.name,
          placeholder: this.props.placeholder,
          value: this.props.value,
          required: this.props.required ? true : false,
          className: this.props.value === "" || this.props.value == undefined ? "empty" : "" }),
        React.createElement(
          "label",
          null,
          this.props.label
        ),
        React.createElement(
          "p",
          { className: "hint" },
          this.props.hint
        ),
        React.createElement("span", { className: "material-input" })
      );
    }
  }
});