function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var path = _interopDefault(require('path'));
var WORKER_PLUGIN_SYMBOL = _interopDefault(require('./symbol.js'));
var ParserHelpers = _interopDefault(require('webpack/lib/ParserHelpers'));

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
var HarmonyImportSpecifierDependency;

try {
  HarmonyImportSpecifierDependency = require('webpack/lib/dependencies/HarmonyImportSpecifierDependency');
} catch (e) {}

var NAME = 'WorkerPlugin';
var workerLoader = path.resolve(__dirname, 'loader.js');
var WorkerPlugin = function WorkerPlugin(options) {
  this.options = options || {};
  this[WORKER_PLUGIN_SYMBOL] = true;
};

WorkerPlugin.prototype.apply = function apply (compiler) {
    var this$1 = this;

  compiler.hooks.normalModuleFactory.tap(NAME, function (factory) {
    var workerId = 0;
    factory.hooks.parser.for('javascript/auto').tap(NAME, function (parser) { return parse(parser, false); });
    factory.hooks.parser.for('javascript/dynamic').tap(NAME, function (parser) { return parse(parser, false); });
    factory.hooks.parser.for('javascript/esm').tap(NAME, function (parser) { return parse(parser, true); });

    var parse = function (parser, esModule) {
      var handleWorker = function (workerTypeString) { return function (expr) {
        var dep = parser.evaluateExpression(expr.arguments[0]);

        if (!dep.isString()) {
          parser.state.module.warnings.push({
            message: ("new " + workerTypeString + "() will only be bundled if passed a String.")
          });
          return false;
        }

        var optsExpr = expr.arguments[1];
        var hasInitOptions = false;
        var typeModuleExpr;
        var opts;

        if (optsExpr) {
          opts = {};

          for (var i = optsExpr.properties.length; i--;) {
            var prop = optsExpr.properties[i];

            if (prop.type === 'Property' && !prop.computed && !prop.shorthand && !prop.method) {
              opts[prop.key.name] = parser.evaluateExpression(prop.value).string;

              if (prop.key.name === 'type') {
                typeModuleExpr = prop;
              } else {
                hasInitOptions = true;
              }
            }
          }
        }

        if (!opts || opts.type !== 'module') {
          parser.state.module.warnings.push({
            message: ("new " + workerTypeString + "() will only be bundled if passed options that include { type: 'module' }." + (opts ? ("\n  Received: new " + workerTypeString + "()(" + (JSON.stringify(dep.string)) + ", " + (JSON.stringify(opts)) + ")") : ''))
          });
          return false;
        }

        var isStrictModule = esModule || parser.state.buildMeta && parser.state.buildMeta.strictHarmonyModule; // Querystring-encoded loader prefix (faster/cleaner than JSON parameters):

        var loaderRequest = workerLoader + "?name=" + (encodeURIComponent(opts.name || workerId)) + (isStrictModule ? '&esModule' : '') + "!" + (dep.string); // Unique ID for the worker URL variable:

        var id = "__webpack__worker__" + (workerId++); // .mjs / strict harmony mode

        if (isStrictModule) {
          var module = parser.state.current;

          if (!HarmonyImportSpecifierDependency) {
            throw Error((NAME + ": Failed to import HarmonyImportSpecifierDependency. This plugin requires Webpack version 4."));
          } // This is essentially the internals of "prepend an import to the module":


          var dependency = new HarmonyImportSpecifierDependency(loaderRequest, module, workerId, // no idea if this actually needs to be unique. 0 seemed to work. safety first?
          parser.scope, 'default', id, // this never gets used
          expr.arguments[0].range, // replace the usage/callsite with the generated reference: X_IMPORT_0["default"]
          true); // avoid serializing the full loader filepath: (this gets prepended to unique suffix)

          dependency.userRequest = dep.string;
          module.addDependency(dependency);
        } else {
          // For CommonJS/Auto
          var req = "require(" + (JSON.stringify(loaderRequest)) + ")";
          ParserHelpers.toConstantDependency(parser, id)(expr.arguments[0]);
          ParserHelpers.addParsedVariableToModule(parser, id, req);
        } // update/remove the WorkerInitOptions argument


        if (this$1.options.workerType) {
          ParserHelpers.toConstantDependency(parser, JSON.stringify(this$1.options.workerType))(typeModuleExpr.value);
        } else if (this$1.options.preserveTypeModule !== true) {
          if (hasInitOptions) {
            // there might be other options - to avoid trailing comma issues, replace the type value with undefined but *leave the key*:
            ParserHelpers.toConstantDependency(parser, 'type:undefined')(typeModuleExpr);
          } else {
            // there was only a `{type}` option, we replace the opts argument with undefined to avoid trailing comma issues:
            ParserHelpers.toConstantDependency(parser, 'undefined')(optsExpr);
          }
        }

        return true;
      }; };

      if (this$1.options.worker !== false) {
        parser.hooks.new.for('Worker').tap(NAME, handleWorker('Worker'));
      }

      if (this$1.options.sharedWorker) {
        parser.hooks.new.for('SharedWorker').tap(NAME, handleWorker('SharedWorker'));
      }
    };
  });
};

module.exports = WorkerPlugin;
//# sourceMappingURL=worker-plugin.js.map
