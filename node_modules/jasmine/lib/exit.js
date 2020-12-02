module.exports = function(exitCode, platform, nodeVersion, exit, nodeExit) {
  if(isWindows(platform) && olderThan12(nodeVersion)) {
    nodeExit(exitCode);
  }
  else {
    exit(exitCode);
  }
};

function isWindows(platform) {
  return /^win/.test(platform);
}

function olderThan12(nodeVersion) {
  var version = nodeVersion.split('.');
  return parseInt(version[0].substr(1), 10) <= 0 && parseInt(version[1], 10) < 12;
}