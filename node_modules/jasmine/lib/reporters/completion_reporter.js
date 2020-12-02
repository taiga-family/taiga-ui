module.exports = function() {
  var results = true;
  var onCompleteCallback = function() {};
  var completed = false;

  this.onComplete = function(callback) {
    onCompleteCallback = callback;
  };

  this.jasmineDone = function(result) {
    completed = true;
    if (result && result.failedExpectations && result.failedExpectations.length > 0) {
      results = false;
    }
    onCompleteCallback(results);
  };

  this.isComplete = function() {
    return completed;
  };

  this.specDone = function(result) {
    if(result.status === 'failed') {
      results = false;
    }
  };

  this.suiteDone = function(result) {
    if (result.failedExpectations && result.failedExpectations.length > 0) {
      results = false;
    }
  };
};
