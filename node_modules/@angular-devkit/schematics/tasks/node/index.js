"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const options_1 = require("../node-package/options");
const options_2 = require("../repo-init/options");
const options_3 = require("../run-schematic/options");
const options_4 = require("../tslint-fix/options");
class BuiltinTaskExecutor {
}
exports.BuiltinTaskExecutor = BuiltinTaskExecutor;
BuiltinTaskExecutor.NodePackage = {
    name: options_1.NodePackageName,
    create: (options) => Promise.resolve().then(() => require('../node-package/executor')).then(mod => mod.default(options)),
};
BuiltinTaskExecutor.RepositoryInitializer = {
    name: options_2.RepositoryInitializerName,
    create: (options) => Promise.resolve().then(() => require('../repo-init/executor')).then(mod => mod.default(options)),
};
BuiltinTaskExecutor.RunSchematic = {
    name: options_3.RunSchematicName,
    create: () => Promise.resolve().then(() => require('../run-schematic/executor')).then(mod => mod.default()),
};
BuiltinTaskExecutor.TslintFix = {
    name: options_4.TslintFixName,
    create: () => Promise.resolve().then(() => require('../tslint-fix/executor')).then(mod => mod.default()),
};
