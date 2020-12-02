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

import path from 'path';
import WORKER_PLUGIN_SYMBOL from './symbol';
import ParserHelpers from 'webpack/lib/ParserHelpers';
let HarmonyImportSpecifierDependency;
try {
  HarmonyImportSpecifierDependency = require('webpack/lib/dependencies/HarmonyImportSpecifierDependency');
} catch (e) {}

const NAME = 'WorkerPlugin';
const workerLoader = path.resolve(__dirname, 'loader.js');

export default class WorkerPlugin {
  constructor (options) {
    this.options = options || {};
    this[WORKER_PLUGIN_SYMBOL] = true;
  }

  apply (compiler) {
    compiler.hooks.normalModuleFactory.tap(NAME, factory => {
      let workerId = 0;
      factory.hooks.parser.for('javascript/auto').tap(NAME, parser => parse(parser, false));
      factory.hooks.parser.for('javascript/dynamic').tap(NAME, parser => parse(parser, false));
      factory.hooks.parser.for('javascript/esm').tap(NAME, parser => parse(parser, true));

      const parse = (parser, esModule) => {
        const handleWorker = workerTypeString => expr => {
          const dep = parser.evaluateExpression(expr.arguments[0]);

          if (!dep.isString()) {
            parser.state.module.warnings.push({
              message: `new ${workerTypeString}() will only be bundled if passed a String.`
            });
            return false;
          }

          const optsExpr = expr.arguments[1];
          let hasInitOptions = false;
          let typeModuleExpr;
          let opts;
          if (optsExpr) {
            opts = {};
            for (let i = optsExpr.properties.length; i--;) {
              const prop = optsExpr.properties[i];
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
              message: `new ${workerTypeString}() will only be bundled if passed options that include { type: 'module' }.${opts ? `\n  Received: new ${workerTypeString}()(${JSON.stringify(dep.string)}, ${JSON.stringify(opts)})` : ''}`
            });
            return false;
          }

          const isStrictModule = esModule || (parser.state.buildMeta && parser.state.buildMeta.strictHarmonyModule);

          // Querystring-encoded loader prefix (faster/cleaner than JSON parameters):
          const loaderRequest = `${workerLoader}?name=${encodeURIComponent(opts.name || workerId)}${isStrictModule ? '&esModule' : ''}!${dep.string}`;

          // Unique ID for the worker URL variable:
          const id = `__webpack__worker__${workerId++}`;

          // .mjs / strict harmony mode
          if (isStrictModule) {
            const module = parser.state.current;

            if (!HarmonyImportSpecifierDependency) {
              throw Error(`${NAME}: Failed to import HarmonyImportSpecifierDependency. This plugin requires Webpack version 4.`);
            }

            // This is essentially the internals of "prepend an import to the module":
            const dependency = new HarmonyImportSpecifierDependency(
              loaderRequest,
              module,
              workerId, // no idea if this actually needs to be unique. 0 seemed to work. safety first?
              parser.scope,
              'default',
              id, // this never gets used
              expr.arguments[0].range, // replace the usage/callsite with the generated reference: X_IMPORT_0["default"]
              true
            );
            // avoid serializing the full loader filepath: (this gets prepended to unique suffix)
            dependency.userRequest = dep.string;

            module.addDependency(dependency);
          } else {
            // For CommonJS/Auto
            const req = `require(${JSON.stringify(loaderRequest)})`;
            ParserHelpers.toConstantDependency(parser, id)(expr.arguments[0]);
            ParserHelpers.addParsedVariableToModule(parser, id, req);
          }

          // update/remove the WorkerInitOptions argument
          if (this.options.workerType) {
            ParserHelpers.toConstantDependency(parser, JSON.stringify(this.options.workerType))(typeModuleExpr.value);
          } else if (this.options.preserveTypeModule !== true) {
            if (hasInitOptions) {
              // there might be other options - to avoid trailing comma issues, replace the type value with undefined but *leave the key*:
              ParserHelpers.toConstantDependency(parser, 'type:undefined')(typeModuleExpr);
            } else {
              // there was only a `{type}` option, we replace the opts argument with undefined to avoid trailing comma issues:
              ParserHelpers.toConstantDependency(parser, 'undefined')(optsExpr);
            }
          }

          return true;
        };

        if (this.options.worker !== false) {
          parser.hooks.new.for('Worker').tap(NAME, handleWorker('Worker'));
        }
        if (this.options.sharedWorker) {
          parser.hooks.new.for('SharedWorker').tap(NAME, handleWorker('SharedWorker'));
        }
      };
    });
  }
}
