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
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const src_1 = require("../src");
const call_1 = require("../src/rules/call");
const node_1 = require("../tasks/node");
const tools_1 = require("../tools");
class UnitTestTree extends src_1.DelegateTree {
    get files() {
        const result = [];
        this.visit(path => result.push(path));
        return result;
    }
    readContent(path) {
        const buffer = this.read(path);
        if (buffer === null) {
            return '';
        }
        return buffer.toString();
    }
}
exports.UnitTestTree = UnitTestTree;
class SchematicTestRunner {
    constructor(_collectionName, collectionPath) {
        this._collectionName = _collectionName;
        this._engineHost = new tools_1.NodeModulesTestEngineHost();
        this._engine = new src_1.SchematicEngine(this._engineHost);
        this._engineHost.registerCollection(_collectionName, collectionPath);
        this._logger = new core_1.logging.Logger('test');
        const registry = new core_1.schema.CoreSchemaRegistry(src_1.formats.standardFormats);
        registry.addPostTransform(core_1.schema.transforms.addUndefinedDefaults);
        this._engineHost.registerOptionsTransform(tools_1.validateOptionsWithSchema(registry));
        this._engineHost.registerTaskExecutor(node_1.BuiltinTaskExecutor.NodePackage);
        this._engineHost.registerTaskExecutor(node_1.BuiltinTaskExecutor.RepositoryInitializer);
        this._engineHost.registerTaskExecutor(node_1.BuiltinTaskExecutor.RunSchematic);
        this._engineHost.registerTaskExecutor(node_1.BuiltinTaskExecutor.TslintFix);
        this._collection = this._engine.createCollection(this._collectionName);
    }
    get engine() { return this._engine; }
    get logger() { return this._logger; }
    get tasks() { return [...this._engineHost.tasks]; }
    registerCollection(collectionName, collectionPath) {
        this._engineHost.registerCollection(collectionName, collectionPath);
    }
    runSchematicAsync(schematicName, opts, tree) {
        const schematic = this._collection.createSchematic(schematicName, true);
        const host = rxjs_1.of(tree || new src_1.HostTree);
        this._engineHost.clearTasks();
        return schematic.call(opts || {}, host, { logger: this._logger })
            .pipe(operators_1.map(tree => new UnitTestTree(tree)));
    }
    /**
     * @deprecated Since v8.0.0 - Use {@link SchematicTestRunner.runSchematicAsync} instead.
     * All schematics can potentially be async.
     * This synchronous variant will fail if the schematic, any of its rules, or any schematics
     * it calls are async.
     */
    runSchematic(schematicName, opts, tree) {
        const schematic = this._collection.createSchematic(schematicName, true);
        let result = null;
        let error;
        const host = rxjs_1.of(tree || new src_1.HostTree);
        this._engineHost.clearTasks();
        schematic.call(opts || {}, host, { logger: this._logger })
            .subscribe(t => result = new UnitTestTree(t), e => error = e);
        if (error) {
            throw error;
        }
        if (result === null) {
            throw new Error('Schematic is async, please use runSchematicAsync');
        }
        return result;
    }
    runExternalSchematicAsync(collectionName, schematicName, opts, tree) {
        const externalCollection = this._engine.createCollection(collectionName);
        const schematic = externalCollection.createSchematic(schematicName, true);
        const host = rxjs_1.of(tree || new src_1.HostTree);
        this._engineHost.clearTasks();
        return schematic.call(opts || {}, host, { logger: this._logger })
            .pipe(operators_1.map(tree => new UnitTestTree(tree)));
    }
    /**
     * @deprecated Since v8.0.0 - Use {@link SchematicTestRunner.runExternalSchematicAsync} instead.
     * All schematics can potentially be async.
     * This synchronous variant will fail if the schematic, any of its rules, or any schematics
     * it calls are async.
     */
    runExternalSchematic(collectionName, schematicName, opts, tree) {
        const externalCollection = this._engine.createCollection(collectionName);
        const schematic = externalCollection.createSchematic(schematicName, true);
        let result = null;
        const host = rxjs_1.of(tree || new src_1.HostTree);
        this._engineHost.clearTasks();
        schematic.call(opts || {}, host, { logger: this._logger })
            .subscribe(t => result = new UnitTestTree(t));
        if (result === null) {
            throw new Error('Schematic is async, please use runSchematicAsync');
        }
        return result;
    }
    callRule(rule, tree, parentContext) {
        const context = this._engine.createContext({}, parentContext);
        return call_1.callRule(rule, rxjs_1.of(tree), context);
    }
}
exports.SchematicTestRunner = SchematicTestRunner;
