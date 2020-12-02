"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _schemaUtils = _interopRequireDefault(require("schema-utils"));

var _pLimit = _interopRequireDefault(require("p-limit"));

var _options = _interopRequireDefault(require("./options.json"));

var _preProcessPattern = _interopRequireDefault(require("./preProcessPattern"));

var _processPattern = _interopRequireDefault(require("./processPattern"));

var _postProcessPattern = _interopRequireDefault(require("./postProcessPattern"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class CopyPlugin {
  constructor(options = {}) {
    (0, _schemaUtils.default)(_options.default, options, {
      name: 'Copy Plugin',
      baseDataPath: 'options'
    });
    this.patterns = options.patterns;
    this.options = options.options || {};
  }

  apply(compiler) {
    const plugin = {
      name: 'CopyPlugin'
    };
    const limit = (0, _pLimit.default)(this.options.concurrency || 100);
    compiler.hooks.thisCompilation.tap(plugin, compilation => {
      const logger = compilation.getLogger('copy-webpack-plugin');
      compilation.hooks.additionalAssets.tapAsync('copy-webpack-plugin', async callback => {
        logger.debug('start to adding additional assets');
        const globalRef = {
          context: compiler.options.context,
          logger,
          compilation,
          inputFileSystem: compiler.inputFileSystem,
          output: compiler.options.output.path
        };
        let assets;

        try {
          assets = await Promise.all(this.patterns.map(pattern => limit(async () => {
            const patternAfterPreProcess = await (0, _preProcessPattern.default)(globalRef, pattern);
            const files = await (0, _processPattern.default)(globalRef, patternAfterPreProcess);

            if (!files) {
              return Promise.resolve();
            }

            return Promise.all(files.filter(Boolean).map(file => (0, _postProcessPattern.default)(globalRef, patternAfterPreProcess, file)));
          })));
        } catch (error) {
          compilation.errors.push(error);
          callback();
          return;
        } // Avoid writing assets inside `p-limit`, because it creates concurrency.
        // It could potentially lead to an error - "Multiple assets emit different content to the same filename"


        assets.reduce((acc, val) => acc.concat(val), []).filter(Boolean).forEach(asset => {
          const {
            absoluteFrom,
            targetPath,
            webpackTo,
            source,
            force
          } = asset; // For old version webpack 4

          /* istanbul ignore if */

          if (typeof compilation.emitAsset !== 'function') {
            // eslint-disable-next-line no-param-reassign
            compilation.assets[targetPath] = source;
            return;
          }

          if (compilation.getAsset(targetPath)) {
            if (force) {
              logger.log(`force updating '${webpackTo}' to compilation assets from '${absoluteFrom}'`);
              compilation.updateAsset(targetPath, source);
              return;
            }

            logger.log(`skipping '${webpackTo}', because it already exists`);
            return;
          }

          logger.log(`writing '${webpackTo}' to compilation assets from '${absoluteFrom}'`);
          compilation.emitAsset(targetPath, source);
        });
        logger.debug('end to adding additional assets');
        callback();
      });
    });
  }

}

var _default = CopyPlugin;
exports.default = _default;