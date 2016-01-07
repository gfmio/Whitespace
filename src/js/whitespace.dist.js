// 
// Whitespace JS browser component library
// 

var whitespace = require('./whitespace.lib').whitespace;

if (typeof window != "undefined") {
  // Export as global browser variable
  window.whitespace = whitespace;

  $().ready(function(){
      // $("input[type=color]").spectrum({});
      $('input[type="range"]').rangeslider({});
      $("form").validate({});
  });
}
