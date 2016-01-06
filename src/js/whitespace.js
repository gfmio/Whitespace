// 
// Whitespace JS component library
// 

// Export as node module

export var whitespace = {}

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
	$().ready(function(){
		// $("input[type=color]").spectrum({});
		$('input[type="range"]').rangeslider({});
		$("form").validate({});
	});
}