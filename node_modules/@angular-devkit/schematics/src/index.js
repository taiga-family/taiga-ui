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
const interface_1 = require("./tree/interface");
const static_1 = require("./tree/static");
var exception_1 = require("./exception/exception");
exports.SchematicsException = exception_1.SchematicsException;
__export(require("./tree/action"));
__export(require("./engine/index"));
__export(require("./exception/exception"));
__export(require("./tree/interface"));
__export(require("./rules/base"));
__export(require("./rules/call"));
__export(require("./rules/move"));
__export(require("./rules/random"));
__export(require("./rules/schematic"));
__export(require("./rules/template"));
__export(require("./rules/url"));
__export(require("./tree/delegate"));
__export(require("./tree/empty"));
__export(require("./tree/host-tree"));
__export(require("./engine/schematic"));
__export(require("./sink/dryrun"));
__export(require("./sink/host"));
__export(require("./sink/sink"));
const formats = require("./formats/index");
exports.formats = formats;
const workflow = require("./workflow/index");
exports.workflow = workflow;
exports.Tree = {
    empty() { return static_1.empty(); },
    branch(tree) { return static_1.branch(tree); },
    merge(tree, other, strategy = interface_1.MergeStrategy.Default) {
        return static_1.merge(tree, other, strategy);
    },
    partition(tree, predicate) {
        return static_1.partition(tree, predicate);
    },
    optimize(tree) { return tree; },
};
