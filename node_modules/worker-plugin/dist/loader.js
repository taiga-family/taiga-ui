function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var loaderUtils = _interopDefault(require('loader-utils'));
var SingleEntryPlugin = _interopDefault(require('webpack/lib/SingleEntryPlugin'));
var WebWorkerTemplatePlugin = _interopDefault(require('webpack/lib/webworker/WebWorkerTemplatePlugin'));
var FetchCompileWasmTemplatePlugin = _interopDefault(require('webpack/lib/web/FetchCompileWasmTemplatePlugin'));
var WORKER_PLUGIN_SYMBOL = _interopDefault(require('./symbol.js'));

/**
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */
var NAME = 'WorkerPluginLoader';
var hasWarned = false;
function pitch(request) {
  this.cacheable(false);
  var cb = this.async();
  var compilerOptions = this._compiler.options || {};
  var plugin = compilerOptions.plugins.find(function (p) { return p[WORKER_PLUGIN_SYMBOL]; }) || {};
  var pluginOptions = plugin && plugin.options || {};

  if (pluginOptions.globalObject == null && !hasWarned && compilerOptions.output && compilerOptions.output.globalObject === 'window') {
    hasWarned = true;
    console.warn('Warning (worker-plugin): output.globalObject is set to "window". It must be set to "self" to support HMR in Workers.');
  }

  var options = loaderUtils.getOptions(this) || {};
  var chunkFilename = compilerOptions.output.chunkFilename.replace(/\.([a-z]+)$/i, '.worker.$1');
  var workerOptions = {
    filename: chunkFilename.replace(/\[(?:chunkhash|contenthash)(:\d+(?::\d+)?)?\]/g, '[hash$1]'),
    chunkFilename: chunkFilename,
    globalObject: pluginOptions.globalObject || 'self'
  };
  var plugins = (pluginOptions.plugins || []).map(function (plugin) {
    if (typeof plugin !== 'string') {
      return plugin;
    }

    var found = compilerOptions.plugins.find(function (p) { return p.constructor.name === plugin; });

    if (!found) {
      console.warn(("Warning (worker-plugin): Plugin \"" + plugin + "\" is not found."));
    }

    return found;
  });

  var workerCompiler = this._compilation.createChildCompiler(NAME, workerOptions, plugins);

  workerCompiler.context = this._compiler.context;
  new WebWorkerTemplatePlugin(workerOptions).apply(workerCompiler);
  new FetchCompileWasmTemplatePlugin({
    mangleImports: compilerOptions.optimization.mangleWasmImports
  }).apply(workerCompiler);
  new SingleEntryPlugin(this.context, request, options.name).apply(workerCompiler);
  var subCache = "subcache " + __dirname + " " + request;
  workerCompiler.hooks.compilation.tap(NAME, function (compilation) {
    if (compilation.cache) {
      if (!compilation.cache[subCache]) { compilation.cache[subCache] = {}; }
      compilation.cache = compilation.cache[subCache];
    }
  });
  workerCompiler.runAsChild(function (err, entries, compilation) {
    if (!err && compilation.errors && compilation.errors.length) {
      err = compilation.errors[0];
    }

    var entry = entries && entries[0] && entries[0].files[0];
    if (!err && !entry) { err = Error(("WorkerPlugin: no entry for " + request)); }
    if (err) { return cb(err); }
    return cb(null, ((options.esModule ? 'export default' : 'module.exports =') + " __webpack_public_path__ + " + (JSON.stringify(entry))));
  });
}
var loader = {
  pitch: pitch
};

exports.pitch = pitch;
exports.default = loader;
//# sourceMappingURL=loader.js.map
