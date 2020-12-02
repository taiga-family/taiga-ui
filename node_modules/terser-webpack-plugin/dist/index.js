"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _path = _interopRequireDefault(require("path"));

var _os = _interopRequireDefault(require("os"));

var _sourceMap = require("source-map");

var _webpackSources = require("webpack-sources");

var _RequestShortener = _interopRequireDefault(require("webpack/lib/RequestShortener"));

var _webpack = require("webpack");

var _schemaUtils = _interopRequireDefault(require("schema-utils"));

var _serializeJavascript = _interopRequireDefault(require("serialize-javascript"));

var _package = _interopRequireDefault(require("terser/package.json"));

var _pLimit = _interopRequireDefault(require("p-limit"));

var _jestWorker = _interopRequireDefault(require("jest-worker"));

var _options = _interopRequireDefault(require("./options.json"));

var _minify = require("./minify");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const warningRegex = /\[.+:([0-9]+),([0-9]+)\]/;

class TerserPlugin {
  constructor(options = {}) {
    (0, _schemaUtils.default)(_options.default, options, {
      name: 'Terser Plugin',
      baseDataPath: 'options'
    });
    const {
      minify,
      terserOptions = {},
      test = /\.m?js(\?.*)?$/i,
      warningsFilter = () => true,
      extractComments = true,
      sourceMap,
      cache = true,
      cacheKeys = defaultCacheKeys => defaultCacheKeys,
      parallel = true,
      include,
      exclude
    } = options;
    this.options = {
      test,
      warningsFilter,
      extractComments,
      sourceMap,
      cache,
      cacheKeys,
      parallel,
      include,
      exclude,
      minify,
      terserOptions
    };
  }

  static isSourceMap(input) {
    // All required options for `new SourceMapConsumer(...options)`
    // https://github.com/mozilla/source-map#new-sourcemapconsumerrawsourcemap
    return Boolean(input && input.version && input.sources && Array.isArray(input.sources) && typeof input.mappings === 'string');
  }

  static buildSourceMap(inputSourceMap) {
    if (!inputSourceMap || !TerserPlugin.isSourceMap(inputSourceMap)) {
      return null;
    }

    return new _sourceMap.SourceMapConsumer(inputSourceMap);
  }

  static buildError(error, file, sourceMap, requestShortener) {
    if (error.line) {
      const original = sourceMap && sourceMap.originalPositionFor({
        line: error.line,
        column: error.col
      });

      if (original && original.source && requestShortener) {
        return new Error(`${file} from Terser\n${error.message} [${requestShortener.shorten(original.source)}:${original.line},${original.column}][${file}:${error.line},${error.col}]${error.stack ? `\n${error.stack.split('\n').slice(1).join('\n')}` : ''}`);
      }

      return new Error(`${file} from Terser\n${error.message} [${file}:${error.line},${error.col}]${error.stack ? `\n${error.stack.split('\n').slice(1).join('\n')}` : ''}`);
    }

    if (error.stack) {
      return new Error(`${file} from Terser\n${error.stack}`);
    }

    return new Error(`${file} from Terser\n${error.message}`);
  }

  static buildWarning(warning, file, sourceMap, requestShortener, warningsFilter) {
    let warningMessage = warning;
    let locationMessage = '';
    let source;

    if (sourceMap) {
      const match = warningRegex.exec(warning);

      if (match) {
        const line = +match[1];
        const column = +match[2];
        const original = sourceMap.originalPositionFor({
          line,
          column
        });

        if (original && original.source && original.source !== file && requestShortener) {
          ({
            source
          } = original);
          warningMessage = `${warningMessage.replace(warningRegex, '')}`;
          locationMessage = `[${requestShortener.shorten(original.source)}:${original.line},${original.column}]`;
        }
      }
    }

    if (warningsFilter && !warningsFilter(warning, file, source)) {
      return null;
    }

    return `Terser Plugin: ${warningMessage}${locationMessage}`;
  }

  static removeQueryString(filename) {
    let targetFilename = filename;
    const queryStringIdx = targetFilename.indexOf('?');

    if (queryStringIdx >= 0) {
      targetFilename = targetFilename.substr(0, queryStringIdx);
    }

    return targetFilename;
  }

  static hasAsset(commentFilename, compilation) {
    const assetFilenames = Object.keys(compilation.assets).map(assetFilename => TerserPlugin.removeQueryString(assetFilename));
    return assetFilenames.includes(TerserPlugin.removeQueryString(commentFilename));
  }

  static isWebpack4() {
    return _webpack.version[0] === '4';
  }

  static getAvailableNumberOfCores(parallel) {
    // In some cases cpus() returns undefined
    // https://github.com/nodejs/node/issues/19022
    const cpus = _os.default.cpus() || {
      length: 1
    };
    return parallel === true ? cpus.length - 1 : Math.min(Number(parallel) || 0, cpus.length - 1);
  }

  *taskGenerator(compiler, compilation, allExtractedComments, file) {
    const assetSource = compilation.assets[file];
    let input;
    let inputSourceMap; // TODO refactor after drop webpack@4, webpack@5 always has `sourceAndMap` on sources

    if (this.options.sourceMap && assetSource.sourceAndMap) {
      const {
        source,
        map
      } = assetSource.sourceAndMap();
      input = source;

      if (map) {
        if (TerserPlugin.isSourceMap(map)) {
          inputSourceMap = map;
        } else {
          inputSourceMap = map;
          compilation.warnings.push(new Error(`${file} contains invalid source map`));
        }
      }
    } else {
      input = assetSource.source();
      inputSourceMap = null;
    } // Handling comment extraction


    let commentsFilename = false;

    if (this.options.extractComments) {
      commentsFilename = this.options.extractComments.filename || '[file].LICENSE.txt[query]';
      let query = '';
      let filename = file;
      const querySplit = filename.indexOf('?');

      if (querySplit >= 0) {
        query = filename.substr(querySplit);
        filename = filename.substr(0, querySplit);
      }

      const lastSlashIndex = filename.lastIndexOf('/');
      const basename = lastSlashIndex === -1 ? filename : filename.substr(lastSlashIndex + 1);
      const data = {
        filename,
        basename,
        query
      };
      commentsFilename = compilation.getPath(commentsFilename, data);

      if (TerserPlugin.hasAsset(commentsFilename, compilation)) {
        compilation.errors.push(new Error(`The comment file "${TerserPlugin.removeQueryString(commentsFilename)}" conflicts with an existing asset, this may lead to code corruption, please use a different name`));
        yield false;
      }
    }

    const callback = taskResult => {
      let {
        code
      } = taskResult;
      const {
        error,
        map,
        warnings
      } = taskResult;
      const {
        extractedComments
      } = taskResult;
      let sourceMap = null;

      if (error || warnings && warnings.length > 0) {
        sourceMap = TerserPlugin.buildSourceMap(inputSourceMap);
      } // Handling results
      // Error case: add errors, and go to next file


      if (error) {
        compilation.errors.push(TerserPlugin.buildError(error, file, sourceMap, new _RequestShortener.default(compiler.context)));
        return;
      }

      const hasExtractedComments = commentsFilename && extractedComments && extractedComments.length > 0;
      const hasBannerForExtractedComments = hasExtractedComments && this.options.extractComments.banner !== false;
      let outputSource;
      let shebang;

      if (hasExtractedComments && hasBannerForExtractedComments && code.startsWith('#!')) {
        const firstNewlinePosition = code.indexOf('\n');
        shebang = code.substring(0, firstNewlinePosition);
        code = code.substring(firstNewlinePosition + 1);
      }

      if (map) {
        outputSource = new _webpackSources.SourceMapSource(code, file, map, input, inputSourceMap, true);
      } else {
        outputSource = new _webpackSources.RawSource(code);
      } // Write extracted comments to commentsFilename


      if (hasExtractedComments) {
        if (!allExtractedComments[commentsFilename]) {
          // eslint-disable-next-line no-param-reassign
          allExtractedComments[commentsFilename] = [];
        } // eslint-disable-next-line no-param-reassign


        allExtractedComments[commentsFilename] = allExtractedComments[commentsFilename].concat(extractedComments); // Add a banner to the original file

        if (hasBannerForExtractedComments) {
          let banner = this.options.extractComments.banner || `For license information please see ${_path.default.relative(_path.default.dirname(file), commentsFilename).replace(/\\/g, '/')}`;

          if (typeof banner === 'function') {
            banner = banner(commentsFilename);
          }

          if (banner) {
            outputSource = new _webpackSources.ConcatSource(shebang ? `${shebang}\n` : '', `/*! ${banner} */\n`, outputSource);
          }
        }
      } // Updating assets
      // eslint-disable-next-line no-param-reassign


      compilation.assets[file] = outputSource; // Handling warnings

      if (warnings && warnings.length > 0) {
        warnings.forEach(warning => {
          const builtWarning = TerserPlugin.buildWarning(warning, file, sourceMap, new _RequestShortener.default(compiler.context), this.options.warningsFilter);

          if (builtWarning) {
            compilation.warnings.push(builtWarning);
          }
        });
      }
    };

    const task = {
      file,
      input,
      inputSourceMap,
      commentsFilename,
      extractComments: this.options.extractComments,
      terserOptions: this.options.terserOptions,
      minify: this.options.minify,
      callback
    };

    if (TerserPlugin.isWebpack4()) {
      const {
        outputOptions: {
          hashSalt,
          hashDigest,
          hashDigestLength,
          hashFunction
        }
      } = compilation;

      const hash = _webpack.util.createHash(hashFunction);

      if (hashSalt) {
        hash.update(hashSalt);
      }

      hash.update(input);
      const digest = hash.digest(hashDigest);

      if (this.options.cache) {
        const defaultCacheKeys = {
          terser: _package.default.version,
          // eslint-disable-next-line global-require
          'terser-webpack-plugin': require('../package.json').version,
          'terser-webpack-plugin-options': this.options,
          nodeVersion: process.version,
          filename: file,
          contentHash: digest.substr(0, hashDigestLength)
        };
        task.cacheKeys = this.options.cacheKeys(defaultCacheKeys, file);
      }
    } else {
      // For webpack@5 cache
      task.assetSource = assetSource;
      task.cacheKeys = {
        terser: _package.default.version,
        // eslint-disable-next-line global-require
        'terser-webpack-plugin': require('../package.json').version,
        'terser-webpack-plugin-options': this.options
      };
    }

    yield task;
  }

  async runTasks(assetNames) {
    const availableNumberOfCores = TerserPlugin.getAvailableNumberOfCores(this.options.parallel);
    let concurrency = Infinity;
    let worker;

    if (availableNumberOfCores > 0) {
      // Do not create unnecessary workers when the number of files is less than the available cores, it saves memory
      const numWorkers = Math.min(assetNames.length, availableNumberOfCores);
      concurrency = numWorkers;
      worker = new _jestWorker.default(require.resolve('./minify'), {
        numWorkers
      }); // https://github.com/facebook/jest/issues/8872#issuecomment-524822081

      const workerStdout = worker.getStdout();

      if (workerStdout) {
        workerStdout.on('data', chunk => {
          return process.stdout.write(chunk);
        });
      }

      const workerStderr = worker.getStderr();

      if (workerStderr) {
        workerStderr.on('data', chunk => {
          return process.stderr.write(chunk);
        });
      }
    }

    const limit = (0, _pLimit.default)(concurrency);
    const scheduledTasks = [];

    for (const assetName of assetNames) {
      const enqueue = async task => {
        let taskResult;

        try {
          if (worker) {
            taskResult = await worker.transform((0, _serializeJavascript.default)(task));
          } else {
            taskResult = (0, _minify.minify)(task);
          }
        } catch (error) {
          taskResult = {
            error
          };
        }

        if (this.cache.isEnabled() && !taskResult.error) {
          taskResult = await this.cache.store(task, taskResult).then(() => taskResult, () => taskResult);
        }

        task.callback(taskResult);
        return taskResult;
      };

      scheduledTasks.push(limit(() => {
        const task = this.getTaskForAsset(assetName).next().value;

        if (!task) {
          // Something went wrong, for example the `cacheKeys` option throw an error
          return Promise.resolve();
        }

        if (this.cache.isEnabled()) {
          return this.cache.get(task).then(taskResult => task.callback(taskResult), () => enqueue(task));
        }

        return enqueue(task);
      }));
    }

    return Promise.all(scheduledTasks).then(() => {
      if (worker) {
        return worker.end();
      }

      return Promise.resolve();
    });
  }

  apply(compiler) {
    const {
      devtool,
      output,
      plugins
    } = compiler.options;
    this.options.sourceMap = typeof this.options.sourceMap === 'undefined' ? devtool && !devtool.includes('eval') && !devtool.includes('cheap') && (devtool.includes('source-map') || // Todo remove when `webpack@4` support will be dropped
    devtool.includes('sourcemap')) || plugins && plugins.some(plugin => plugin instanceof _webpack.SourceMapDevToolPlugin && plugin.options && plugin.options.columns) : Boolean(this.options.sourceMap);

    if (typeof this.options.terserOptions.module === 'undefined' && typeof output.module !== 'undefined') {
      this.options.terserOptions.module = output.module;
    }

    if (typeof this.options.terserOptions.ecma === 'undefined' && typeof output.ecmaVersion !== 'undefined') {
      this.options.terserOptions.ecma = output.ecmaVersion;
    }

    const optimizeFn = async (compilation, chunksOrAssets) => {
      const matchObject = _webpack.ModuleFilenameHelpers.matchObject.bind( // eslint-disable-next-line no-undefined
      undefined, this.options);

      let assetNames;

      if (TerserPlugin.isWebpack4()) {
        assetNames = [].concat(Array.from(compilation.additionalChunkAssets || [])).concat(Array.from(chunksOrAssets).reduce((acc, chunk) => acc.concat(Array.from(chunk.files || [])), [])).filter(file => matchObject(file));
      } else {
        assetNames = [].concat(Object.keys(chunksOrAssets)).filter(file => matchObject(file));
      }

      if (assetNames.length === 0) {
        return Promise.resolve();
      }

      const CacheEngine = TerserPlugin.isWebpack4() ? // eslint-disable-next-line global-require
      require('./Webpack4Cache').default : // eslint-disable-next-line global-require
      require('./Webpack5Cache').default;
      this.cache = new CacheEngine(compilation, {
        cache: this.options.cache
      });
      const allExtractedComments = {};
      this.getTaskForAsset = this.taskGenerator.bind(this, compiler, compilation, allExtractedComments);
      await this.runTasks(assetNames);
      Object.keys(allExtractedComments).forEach(commentsFilename => {
        const extractedComments = new Set([...allExtractedComments[commentsFilename].sort()]); // eslint-disable-next-line no-param-reassign

        compilation.assets[commentsFilename] = new _webpackSources.RawSource(`${Array.from(extractedComments).join('\n\n')}\n`);
      });
      return Promise.resolve();
    };

    const plugin = {
      name: this.constructor.name
    };
    compiler.hooks.compilation.tap(plugin, compilation => {
      if (this.options.sourceMap) {
        compilation.hooks.buildModule.tap(plugin, moduleArg => {
          // to get detailed location info about errors
          // eslint-disable-next-line no-param-reassign
          moduleArg.useSourceMap = true;
        });
      }

      if (TerserPlugin.isWebpack4()) {
        const {
          mainTemplate,
          chunkTemplate
        } = compilation;
        const data = (0, _serializeJavascript.default)({
          terser: _package.default.version,
          terserOptions: this.options.terserOptions
        }); // Regenerate `contenthash` for minified assets

        for (const template of [mainTemplate, chunkTemplate]) {
          template.hooks.hashForChunk.tap(plugin, hash => {
            hash.update('TerserPlugin');
            hash.update(data);
          });
        }

        compilation.hooks.optimizeChunkAssets.tapPromise(plugin, optimizeFn.bind(this, compilation));
      } else {
        const hooks = _webpack.javascript.JavascriptModulesPlugin.getCompilationHooks(compilation);

        const data = (0, _serializeJavascript.default)({
          terser: _package.default.version,
          terserOptions: this.options.terserOptions
        });
        hooks.chunkHash.tap(plugin, (chunk, hash) => {
          hash.update('TerserPlugin');
          hash.update(data);
        });
        compilation.hooks.optimizeAssets.tapPromise(plugin, optimizeFn.bind(this, compilation));
      }
    });
  }

}

var _default = TerserPlugin;
exports.default = _default;