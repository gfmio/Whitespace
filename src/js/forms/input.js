// 
// Whitespace Grid component module
// 

var React = require('react');

export var Input = React.createClass({
  render: function() {
    var {type, name, className, value, label, multiple, ...other } = this.props;

    if (this.props.type == "textarea") {
      return (
        <div className="input-group">
          <textarea { ...other }
            name={ this.props.name }
            placeholder={ this.props.placeholder }
            required={ this.props.required ? true : false }
            className={ (this.props.className ? this.props.className + " " : "") + ((this.props.value === "") || (this.props.value == undefined) ? "empty" : "") } >
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
            multiple={ this.props.multiple ? true : false }
            name={ this.props.name }
            required={ this.props.required ? true : false }
            className={ (this.props.className ? this.props.className + " " : "") + ((this.props.value === "") || (this.props.value == undefined) ? "empty" : "") }>
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
            type={ this.props.type }
            name={ this.props.name }
            placeholder={ this.props.placeholder }
            value={ this.props.value }
            required={ this.props.required ? true : false }
            className={ (this.props.className ? this.props.className + " " : "") + ((this.props.value === "") || (this.props.value == undefined) ? "empty" : "") } />
          <label>{ this.props.label }</label>
          <p className="hint">{ this.props.hint }</p>
          <span className="material-input"></span>
        </div>        
      );
    }
  }
});
