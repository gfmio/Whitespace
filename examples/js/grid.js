// 
// Grid view elements
// 

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
          children.push(<Item width={solutions[i][n]}>
            {solutions[i][n]} of {totalWidth}
          </Item>);
        }
        
        rows.push(<Grid cols={totalWidth}>
          {children}
        </Grid>);
      }
    }
    
    return (<div>{rows}</div>);
  }
});

// Grid elements

var Grid = React.createClass({
  render: function() {
    var gridClass = "container-" + this.props.cols + " grid-" + this.props.cols;

    return (
      <div className={gridClass}>
        { this.props.children }
      </div>
    );
  }
});

var Item = React.createClass({
  render: function() {
    var itemClass = "item text-center margin-bottom-xsmall margin-top-xsmall " + 
    	(this.props.width == 1 ? "col" : "col-" + this.props.width);
    var innerClass = "bg-red padding-xsmall";

    return (
      <div className={itemClass}>
        <div className={innerClass}>
          { this.props.children }
        </div>
      </div>
    );
  }
});
