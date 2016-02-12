// 
// Whitespace Input component module
// 

var React = require('react');
var ReactDOM = require('react-dom');

export var Input = React.createClass({
  getInitialState: function() {
    return {isInvalid: false, empty: true, value: this.props.value};
  },
  
  handleChange: function(event) {
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

  render: function() {
    var {type, name, className, value, label, multiple, onChange, ...other } = this.props;

    var className = (this.props.className ? this.props.className + " " : "") + 
                    (this.state.empty && !this.state.isInvalid ? "empty" : "");

    if (this.props.type == "textarea") {
      return (
        <div className="input-group">
          <textarea { ...other }
            onChange={ this.handleChange }
            name={ this.props.name }
            placeholder={ this.props.placeholder }
            required={ this.props.required ? true : false }
            className={ className } >
            { this.props.value }
          </textarea>
          <label>{ this.props.label }</label>
          <p className="hint">{ this.props.hint }</p>
          <span className="material-input"></span>
        </div>        
      );
    } else if (this.props.type == "select") {
      return (
        <div className="input-group">
          <select { ...other }
            onChange={ this.handleChange }
            multiple={ this.props.multiple ? true : false }
            name={ this.props.name }
            required={ this.props.required ? true : false }
            className={ className }>
            { this.props.children }
          </select>
          <label>{ this.props.label }</label>
          <p className="hint">{ this.props.hint }</p>
          <span className="material-input"></span>
        </div>        
      );
    } else {
      return (
        <div className="input-group">
          <input { ...other }
            onChange={ this.handleChange }
            type={ this.props.type }
            name={ this.props.name }
            placeholder={ this.props.placeholder }
            value={ this.props.value }
            required={ this.props.required ? true : false }
            className={ className } />
          <label>{ this.props.label }</label>
          <p className="hint">{ this.props.hint }</p>
          <span className="material-input"></span>
        </div>        
      );
    }
  }
});
