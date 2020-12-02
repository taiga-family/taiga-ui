const path = require('path');

const smsPath = path.dirname(require.resolve('source-map-support'));

const createPattern = function(pattern) {
  return {pattern: pattern, included: true, served: true, watched: false};
};

const init = function(files) {
  files.unshift(createPattern(path.join(__dirname, 'client.js')));
  files.unshift(
    createPattern(path.join(smsPath, 'browser-source-map-support.js'))
  );
};

init.$inject = ['config.files'];

module.exports = {
  'framework:source-map-support': ['factory', init]
};
