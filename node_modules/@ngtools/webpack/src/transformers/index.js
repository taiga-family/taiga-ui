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
__export(require("./interfaces"));
__export(require("./ast_helpers"));
__export(require("./make_transform"));
__export(require("./insert_import"));
__export(require("./elide_imports"));
__export(require("./replace_bootstrap"));
__export(require("./replace_server_bootstrap"));
__export(require("./export_ngfactory"));
__export(require("./export_lazy_module_map"));
__export(require("./register_locale_data"));
__export(require("./replace_resources"));
__export(require("./remove_decorators"));
__export(require("./find_resources"));
__export(require("./import_factory"));
