"use strict";
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Object.defineProperty(exports, "__esModule", { value: true });
// Exports the webpack plugins we use internally.
var any_component_style_budget_checker_1 = require("./any-component-style-budget-checker");
exports.AnyComponentStyleBudgetChecker = any_component_style_budget_checker_1.AnyComponentStyleBudgetChecker;
var optimize_css_webpack_plugin_1 = require("./optimize-css-webpack-plugin");
exports.OptimizeCssWebpackPlugin = optimize_css_webpack_plugin_1.OptimizeCssWebpackPlugin;
var bundle_budget_1 = require("./bundle-budget");
exports.BundleBudgetPlugin = bundle_budget_1.BundleBudgetPlugin;
var scripts_webpack_plugin_1 = require("./scripts-webpack-plugin");
exports.ScriptsWebpackPlugin = scripts_webpack_plugin_1.ScriptsWebpackPlugin;
var suppress_entry_chunks_webpack_plugin_1 = require("./suppress-entry-chunks-webpack-plugin");
exports.SuppressExtractedTextChunksWebpackPlugin = suppress_entry_chunks_webpack_plugin_1.SuppressExtractedTextChunksWebpackPlugin;
var remove_hash_plugin_1 = require("./remove-hash-plugin");
exports.RemoveHashPlugin = remove_hash_plugin_1.RemoveHashPlugin;
var named_chunks_plugin_1 = require("./named-chunks-plugin");
exports.NamedChunksPlugin = named_chunks_plugin_1.NamedLazyChunksPlugin;
var postcss_cli_resources_1 = require("./postcss-cli-resources");
exports.PostcssCliResources = postcss_cli_resources_1.default;
const path_1 = require("path");
exports.WebpackRollupLoader = require.resolve(path_1.join(__dirname, 'webpack-rollup-loader'));
