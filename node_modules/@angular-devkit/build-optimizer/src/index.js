"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var webpack_loader_1 = require("./build-optimizer/webpack-loader");
exports.buildOptimizerLoader = webpack_loader_1.default;
exports.buildOptimizerLoaderPath = webpack_loader_1.buildOptimizerLoaderPath;
var webpack_plugin_1 = require("./build-optimizer/webpack-plugin");
exports.BuildOptimizerWebpackPlugin = webpack_plugin_1.BuildOptimizerWebpackPlugin;
var build_optimizer_1 = require("./build-optimizer/build-optimizer");
exports.buildOptimizer = build_optimizer_1.buildOptimizer;
var transform_javascript_1 = require("./helpers/transform-javascript");
exports.transformJavascript = transform_javascript_1.transformJavascript;
var class_fold_1 = require("./transforms/class-fold");
exports.getFoldFileTransformer = class_fold_1.getFoldFileTransformer;
var import_tslib_1 = require("./transforms/import-tslib");
exports.getImportTslibTransformer = import_tslib_1.getImportTslibTransformer;
var prefix_classes_1 = require("./transforms/prefix-classes");
exports.getPrefixClassesTransformer = prefix_classes_1.getPrefixClassesTransformer;
var prefix_functions_1 = require("./transforms/prefix-functions");
exports.getPrefixFunctionsTransformer = prefix_functions_1.getPrefixFunctionsTransformer;
var scrub_file_1 = require("./transforms/scrub-file");
exports.getScrubFileTransformer = scrub_file_1.getScrubFileTransformer;
exports.getScrubFileTransformerForCore = scrub_file_1.getScrubFileTransformerForCore;
var wrap_enums_1 = require("./transforms/wrap-enums");
exports.getWrapEnumsTransformer = wrap_enums_1.getWrapEnumsTransformer;
