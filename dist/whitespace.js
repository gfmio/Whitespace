(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
//
// Whitespace forms package
//

var Input = exports.Input = require('./input').Input;

},{"./input":2}],2:[function(require,module,exports){
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

React.createElement(
  "div",
  { className: "input-group" },
  React.createElement(
    "label",
    null,
    "Label"
  ),
  React.createElement("textarea", { name: "textarea", placeholder: "Input" }),
  React.createElement("p", { className: "hint" }),
  React.createElement("span", { className: "material-input" })
);

},{"react":"react"}],3:[function(require,module,exports){
//
// Whitespace generic style components package
//
"use strict";

},{}],4:[function(require,module,exports){
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

},{"react":"react"}],5:[function(require,module,exports){
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

},{"react":"react"}],6:[function(require,module,exports){
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

},{"./container":4,"./grid":5,"react":"react"}],7:[function(require,module,exports){
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

},{"react":"react"}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
//
// Whitespace layout package
//

var Container = exports.Container = require('./container').Container;
var GridContainer = exports.GridContainer = require('./gridcontainer').GridContainer;
var Grid = exports.Grid = require('./grid').Grid;
var Item = exports.Item = require('./item').Item;

},{"./container":4,"./grid":5,"./gridcontainer":6,"./item":7}],9:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
//
// Whitespace JS component library
//

// Export as node module

var whitespace = exports.whitespace = {};

// Export as global browser variable

if (window) {
	global.whitespace = whitespace;
}

whitespace.layout = require('./layout/layout');
whitespace.generic = require('./generic/generic');
// whitespace.typography = require('./typography/typography');
whitespace.forms = require('./forms/forms');
// whitespace.buttons = require('./buttons/buttons');
// whitespace.icons = require('./icons/icons');
// whitespace.media = require('./media/media');
// whitespace.animations = require('./animations/animations');

if (window) {
	$().ready(function () {
		// $("input[type=color]").spectrum({});
		$('input[type="range"]').rangeslider({});
		$("form").validate({});
	});
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./forms/forms":1,"./generic/generic":3,"./layout/layout":8}]},{},[9]);
