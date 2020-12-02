"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _path = _interopRequireDefault(require("path"));

var _normalizePath = _interopRequireDefault(require("normalize-path"));

var _globParent = _interopRequireDefault(require("glob-parent"));

var _fastGlob = _interopRequireDefault(require("fast-glob"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getAbsoluteContext(context) {
  return _fastGlob.default.escapePath((0, _normalizePath.default)(_path.default.resolve(context)));
}

function createPatternGlob(pattern, globalRef) {
  const {
    logger,
    compilation
  } = globalRef; // eslint-disable-next-line no-param-reassign

  pattern.globOptions = { ...{
      followSymbolicLinks: true
    },
    ...(pattern.globOptions || {}),
    ...{
      cwd: pattern.context,
      objectMode: true
    }
  };

  switch (pattern.fromType) {
    case 'dir':
      logger.debug(`determined '${pattern.absoluteFrom}' is a directory`);
      logger.debug(`add ${pattern.absoluteFrom} as contextDependencies`);
      compilation.contextDependencies.add(pattern.absoluteFrom);
      /* eslint-disable no-param-reassign */

      pattern.context = pattern.absoluteFrom;
      pattern.glob = _path.default.posix.join(getAbsoluteContext(pattern.absoluteFrom), '**/*');
      pattern.absoluteFrom = _path.default.join(pattern.absoluteFrom, '**/*');

      if (typeof pattern.globOptions.dot === 'undefined') {
        pattern.globOptions.dot = true;
      }
      /* eslint-enable no-param-reassign */


      break;

    case 'file':
      logger.debug(`determined '${pattern.absoluteFrom}' is a file`);
      logger.debug(`add ${pattern.absoluteFrom} as fileDependencies`);
      compilation.fileDependencies.add(pattern.absoluteFrom);
      /* eslint-disable no-param-reassign */

      pattern.context = _path.default.dirname(pattern.absoluteFrom);
      pattern.glob = getAbsoluteContext(pattern.absoluteFrom);

      if (typeof pattern.globOptions.dot === 'undefined') {
        pattern.globOptions.dot = true;
      }
      /* eslint-enable no-param-reassign */


      break;

    default:
      {
        logger.debug(`determined '${pattern.absoluteFrom}' is a glob`);

        const contextDependencies = _path.default.normalize((0, _globParent.default)(pattern.absoluteFrom));

        logger.debug(`add ${contextDependencies} as contextDependencies`);
        compilation.contextDependencies.add(contextDependencies);
        /* eslint-disable no-param-reassign */

        pattern.fromType = 'glob';
        pattern.glob = _path.default.isAbsolute(pattern.fromOrigin) ? pattern.fromOrigin : _path.default.posix.join(getAbsoluteContext(pattern.context), pattern.fromOrigin);
        /* eslint-enable no-param-reassign */
      }
  }

  return pattern;
}

var _default = createPatternGlob;
exports.default = _default;