"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const core_1 = require("@angular-devkit/core");
const schematics_1 = require("@angular-devkit/schematics"); // tslint:disable-line:no-implicit-dependencies
const node_1 = require("../../tasks/node");
const node_module_engine_host_1 = require("../node-module-engine-host");
/**
 * A workflow specifically for Node tools.
 */
class NodeWorkflow extends schematics_1.workflow.BaseWorkflow {
    constructor(host, options) {
        const engineHost = new node_module_engine_host_1.NodeModulesEngineHost(options.resolvePaths);
        super({
            host,
            engineHost,
            force: options.force,
            dryRun: options.dryRun,
            registry: options.registry,
        });
        engineHost.registerTaskExecutor(node_1.BuiltinTaskExecutor.NodePackage, {
            allowPackageManagerOverride: true,
            packageManager: options.packageManager,
            rootDirectory: options.root && core_1.getSystemPath(options.root),
            registry: options.packageRegistry,
        });
        engineHost.registerTaskExecutor(node_1.BuiltinTaskExecutor.RepositoryInitializer, {
            rootDirectory: options.root && core_1.getSystemPath(options.root),
        });
        engineHost.registerTaskExecutor(node_1.BuiltinTaskExecutor.RunSchematic);
        engineHost.registerTaskExecutor(node_1.BuiltinTaskExecutor.TslintFix);
        this._context = [];
    }
    get engine() {
        return this._engine;
    }
    get engineHost() {
        return this._engineHost;
    }
}
exports.NodeWorkflow = NodeWorkflow;
