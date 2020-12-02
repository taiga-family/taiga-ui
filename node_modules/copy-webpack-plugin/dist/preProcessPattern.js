"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = preProcessPattern;

var _path = _interopRequireDefault(require("path"));

var _isTemplateLike = _interopRequireDefault(require("./utils/isTemplateLike"));

var _promisify = require("./utils/promisify");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-param-reassign */
async function preProcessPattern(globalRef, pattern) {
  const {
    context,
    logger,
    inputFileSystem
  } = globalRef;
  pattern = typeof pattern === 'string' ? {
    from: pattern
  } : { ...pattern
  };
  pattern.fromOrigin = pattern.from;
  pattern.from = _path.default.normalize(pattern.from);
  pattern.to = _path.default.normalize(typeof pattern.to !== 'undefined' ? pattern.to : '');
  pattern.context = _path.default.normalize(typeof pattern.context !== 'undefined' ? !_path.default.isAbsolute(pattern.context) ? _path.default.join(context, pattern.context) : pattern.context : context);
  logger.debug(`processing from: '${pattern.from}' to: '${pattern.to}'`);

  const isToDirectory = _path.default.extname(pattern.to) === '' || pattern.to.slice(-1) === _path.default.sep;

  switch (true) {
    // if toType already exists
    case !!pattern.toType:
      break;

    case (0, _isTemplateLike.default)(pattern.to):
      pattern.toType = 'template';
      break;

    case isToDirectory:
      pattern.toType = 'dir';
      break;

    default:
      pattern.toType = 'file';
  }

  if (_path.default.isAbsolute(pattern.from)) {
    pattern.absoluteFrom = pattern.from;
  } else {
    pattern.absoluteFrom = _path.default.resolve(pattern.context, pattern.from);
  }

  logger.debug(`getting stats for '${pattern.absoluteFrom}' to determinate 'fromType'`);
  let stats;

  try {
    stats = await (0, _promisify.stat)(inputFileSystem, pattern.absoluteFrom);
  } catch (error) {
    return pattern;
  }

  if (stats.isDirectory()) {
    pattern.fromType = 'dir';
  } else if (stats.isFile()) {
    pattern.fromType = 'file';
  }

  return pattern;
}