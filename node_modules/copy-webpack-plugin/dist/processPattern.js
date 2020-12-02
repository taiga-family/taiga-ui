"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = processPattern;

var _path = _interopRequireDefault(require("path"));

var _globby = _interopRequireDefault(require("globby"));

var _createPatternGlob = _interopRequireDefault(require("./utils/createPatternGlob"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function processPattern(globalRef, pattern) {
  const {
    logger,
    output,
    compilation
  } = globalRef;
  (0, _createPatternGlob.default)(pattern, globalRef);
  logger.log(`begin globbing '${pattern.glob}' with a context of '${pattern.context}'`);
  const paths = await (0, _globby.default)(pattern.glob, pattern.globOptions);

  if (paths.length === 0) {
    if (pattern.noErrorOnMissing) {
      return Promise.resolve();
    }

    const missingError = new Error(`unable to locate '${pattern.from}' at '${pattern.absoluteFrom}'`);
    logger.error(missingError.message);
    compilation.errors.push(missingError);
    return Promise.resolve();
  }

  return paths // Exclude directories
  .filter(item => item.dirent.isFile()).map(item => {
    const from = item.path;
    logger.debug(`found ${from}`); // `globby`/`fast-glob` return the relative path when the path contains special characters on windows

    const absoluteFrom = _path.default.resolve(pattern.context, from);

    const relativeFrom = pattern.flatten ? _path.default.basename(absoluteFrom) : _path.default.relative(pattern.context, absoluteFrom);
    let webpackTo = pattern.toType === 'dir' ? _path.default.join(pattern.to, relativeFrom) : pattern.to;

    if (_path.default.isAbsolute(webpackTo)) {
      webpackTo = _path.default.relative(output, webpackTo);
    }

    logger.log(`determined that '${from}' should write to '${webpackTo}'`);
    return {
      absoluteFrom,
      relativeFrom,
      webpackTo
    };
  });
}