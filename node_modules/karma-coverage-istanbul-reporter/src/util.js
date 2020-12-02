const path = require('path');
const minimatch = require('minimatch');

function fixWebpackFilePath(filePath) {
  if (filePath.indexOf('!') !== -1) {
    filePath = filePath.split('!').pop();
  }

  if (filePath.indexOf('?') !== -1) {
    filePath = filePath.split('?')[0];
  }

  return filePath;
}

function fixPathSeparators(filePath) {
  const isWin = process.platform.startsWith('win');
  // Workaround for https://github.com/mattlewis92/karma-coverage-istanbul-reporter/issues/9
  if (isWin && filePath) {
    return filePath.replace(/\//g, '\\');
  }

  return filePath;
}

function fixWebpackSourcePaths(sourceMap, webpackConfig) {
  let { sourceRoot } = sourceMap;
  // As per https://webpack.js.org/configuration/entry-context/#context, if no context is specified, the current
  // directory that the process is running from should be assumed instead
  const context = (webpackConfig && webpackConfig.context) || process.cwd();
  // Fix for https://github.com/mattlewis92/karma-coverage-istanbul-reporter/issues/32
  // The sourceRoot is relative to the project directory and not an absolute path, so add the webpack context to it if set
  if (
    context &&
    sourceRoot &&
    !sourceRoot.startsWith(context) &&
    !path.isAbsolute(sourceRoot)
  ) {
    sourceRoot = path.join(context, sourceRoot);
  }

  sourceRoot = fixPathSeparators(sourceRoot);

  const result = Object.assign({}, sourceMap, {
    file: fixPathSeparators(sourceMap.file),
    sources: (sourceMap.sources || []).map(source => {
      source = fixWebpackFilePath(source);
      if (sourceRoot && source.startsWith(sourceRoot)) {
        source = source.replace(sourceRoot, '');
      }

      return source;
    })
  });

  if (sourceRoot) {
    result.sourceRoot = sourceRoot;
  }

  return result;
}

function isAbsolute(file) {
  if (path.isAbsolute) {
    return path.isAbsolute(file);
  }

  return path.resolve(file) === path.normalize(file);
}

function normalize(key, basePath) {
  // Exclude keys will always be relative, but covObj keys can be absolute or relative
  let excludeKey = isAbsolute(key) ? path.relative(basePath, key) : key;
  // Also normalize for files that start with `./`, etc.
  excludeKey = path.normalize(excludeKey);

  return excludeKey;
}

function overrideThresholds(key, overrides, basePath) {
  let thresholds = {};

  // First match wins
  Object.keys(overrides).some(pattern => {
    if (minimatch(normalize(key, basePath), pattern, { dot: true })) {
      thresholds = overrides[pattern];
      return true;
    }

    return false;
  });

  return thresholds;
}

module.exports.fixPathSeparators = fixPathSeparators;
module.exports.fixWebpackSourcePaths = fixWebpackSourcePaths;
module.exports.fixWebpackFilePath = fixWebpackFilePath;
module.exports.overrideThresholds = overrideThresholds;
