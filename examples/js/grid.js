// 
// Grid view elements
// 

var React = require('react');
var ReactDOM = require('react-dom');

// Example Item

var ExampleItem = React.createClass({
  render: function() {
    var Item = whitespace.layout.Item;

    var x = Math.floor((Math.random() * 4));
    var colors = ["red", "green", "blue", "yellow"]
    var innerClass = "bg-" + colors[x] + " text-center padding-xsmall margin-bottom-xsmall margin-top-xsmall";
    
    return (
      <Item width={ this.props.width }>
        <div className={ innerClass }>
          { this.props.children }
        </div>
      </Item>
    );
  }
});

// Main View

var MainView = React.createClass({
  findPermutations: function(n) {
    var solutions = [];
    for (var k = 1; k <= n; k++) {
      var currentSolution = [k];
      var subSolutions = this.findPermutations(n-k);
      if (subSolutions.length == 0) {
        solutions.push(currentSolution)
      } else {
        for (var i = 0; i < subSolutions.length; i++) {
          solutions.push([k].concat(subSolutions[i]));
        }
      }
    }
    return solutions;
  },

  render: function() {
    var GridContainer = whitespace.layout.GridContainer;

    var rows = [];
    for (var colCount = 1; colCount <= 6; colCount++) {
      var solutions = this.findPermutations(colCount);
      for (var i = 0; i < solutions.length; i++) {
        var children = [];
        var totalWidth = 0;
        for (var n = 0; n < solutions[i].length; n++) {
          totalWidth += solutions[i][n];
        }

        for (n = 0; n < solutions[i].length; n++) {
          children.push(<ExampleItem key={ "item-"  + i + "-" + n } width={ solutions[i][n] }>
            { solutions[i][n] } of { totalWidth }
          </ExampleItem>);
        }
        
        rows.push(<GridContainer cols={totalWidth}>
          {children}
        </GridContainer>);
      }
    }
    
    return (<div className="bg-black">{rows}</div>);
  }
});
