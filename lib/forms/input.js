'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

//
// Whitespace Input component module
//

var React = require('react');
var ReactDOM = require('react-dom');

var Input = exports.Input = React.createClass({
  displayName: 'Input',

  getInitialState: function getInitialState() {
    return { isInvalid: false, empty: true, value: this.props.value };
  },

  handleChange: function handleChange(event) {
    var onChangeHandler = this.props.onChange;

    this.setState({
      isInvalid: jQuery(ReactDOM.findDOMNode(event.target)).is(':invalid'),
      empty: jQuery(ReactDOM.findDOMNode(event.target)).val() == "",
      value: jQuery(ReactDOM.findDOMNode(event.target)).val()
    });

    if (onChangeHandler) {
      onChangeHandler(event);
    }
  },

  render: function render() {
    var _props = this.props;
    var type = _props.type;
    var name = _props.name;
    var className = _props.className;
    var value = _props.value;
    var label = _props.label;
    var multiple = _props.multiple;
    var onChange = _props.onChange;

    var other = _objectWithoutProperties(_props, ['type', 'name', 'className', 'value', 'label', 'multiple', 'onChange']);

    var className = (this.props.className ? this.props.className + " " : "") + (this.state.empty && !this.state.isInvalid ? "empty" : "");

    if (this.props.type == "textarea") {
      return React.createElement(
        'div',
        { className: 'input-group' },
        React.createElement(
          'textarea',
          _extends({}, other, {
            onChange: this.handleChange,
            name: this.props.name,
            placeholder: this.props.placeholder,
            required: this.props.required ? true : false,
            className: className }),
          this.props.value
        ),
        React.createElement(
          'label',
          null,
          this.props.label
        ),
        React.createElement(
          'p',
          { className: 'hint' },
          this.props.hint
        ),
        React.createElement('span', { className: 'material-input' })
      );
    } else if (this.props.type == "select") {
      return React.createElement(
        'div',
        { className: 'input-group' },
        React.createElement(
          'select',
          _extends({}, other, {
            onChange: this.handleChange,
            multiple: this.props.multiple ? true : false,
            name: this.props.name,
            required: this.props.required ? true : false,
            className: className }),
          this.props.children
        ),
        React.createElement(
          'label',
          null,
          this.props.label
        ),
        React.createElement(
          'p',
          { className: 'hint' },
          this.props.hint
        ),
        React.createElement('span', { className: 'material-input' })
      );
    } else {
      return React.createElement(
        'div',
        { className: 'input-group' },
        React.createElement('input', _extends({}, other, {
          onChange: this.handleChange,
          type: this.props.type,
          name: this.props.name,
          placeholder: this.props.placeholder,
          value: this.props.value,
          required: this.props.required ? true : false,
          className: className })),
        React.createElement(
          'label',
          null,
          this.props.label
        ),
        React.createElement(
          'p',
          { className: 'hint' },
          this.props.hint
        ),
        React.createElement('span', { className: 'material-input' })
      );
    }
  }
});