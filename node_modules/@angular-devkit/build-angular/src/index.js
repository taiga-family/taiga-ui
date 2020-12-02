"use strict";
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Object.defineProperty(exports, "__esModule", { value: true });
var schema_1 = require("./browser/schema");
exports.OutputHashing = schema_1.OutputHashing;
exports.Type = schema_1.Type;
var browser_1 = require("./browser");
exports.executeBrowserBuilder = browser_1.buildWebpackBrowser;
var dev_server_1 = require("./dev-server");
exports.executeDevServerBuilder = dev_server_1.serveWebpackBrowser;
var extract_i18n_1 = require("./extract-i18n");
exports.executeExtractI18nBuilder = extract_i18n_1.execute;
var karma_1 = require("./karma");
exports.executeKarmaBuilder = karma_1.execute;
var protractor_1 = require("./protractor");
exports.executeProtractorBuilder = protractor_1.execute;
var server_1 = require("./server");
exports.executeServerBuilder = server_1.execute;
