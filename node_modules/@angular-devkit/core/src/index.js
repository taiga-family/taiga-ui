"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const analytics = require("./analytics");
exports.analytics = analytics;
const experimental = require("./experimental");
exports.experimental = experimental;
const json = require("./json/index");
exports.json = json;
const logging = require("./logger/index");
exports.logging = logging;
const ɵterminal = require("./terminal/index");
const workspaces = require("./workspace");
exports.workspaces = workspaces;
__export(require("./exception/exception"));
__export(require("./json/index"));
__export(require("./utils/index"));
__export(require("./virtual-fs/index"));
/** @deprecated since version 8 - Instead use other 3rd party libraries like `colors` and `chalk`. */
exports.terminal = ɵterminal;
