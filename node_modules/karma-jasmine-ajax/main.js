var path = require('path');

var createPattern = function(path) {
	return {
  		pattern: path, included: true, served: true, watched: false
  	};
};

var framework = function(files) {
	files.unshift(createPattern(path.resolve(require.resolve('jasmine-ajax'))));
};

framework.$inject = ['config.files'];

module.exports = {
	'framework:jasmine-ajax': ['factory', framework]
};