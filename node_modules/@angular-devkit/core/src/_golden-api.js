"use strict";
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./exception/exception"));
// Start experimental namespace
__export(require("./experimental/workspace/index"));
// End experimental namespace
// Start json namespace
__export(require("./json/interface"));
__export(require("./json/parser"));
__export(require("./json/schema/pointer"));
__export(require("./json/schema/registry"));
__export(require("./json/schema/visitor"));
__export(require("./json/schema/utility"));
__export(require("./json/schema/transforms"));
// End json namespace
// Start logging namespace
__export(require("./logger/indent"));
__export(require("./logger/level"));
__export(require("./logger/logger"));
__export(require("./logger/null-logger"));
__export(require("./logger/transform-logger"));
// End logging namespace
// Start terminal namespace
__export(require("./terminal/text"));
__export(require("./terminal/colors"));
// End terminal namespace
// Start utils namespace
__export(require("./utils/literals"));
__export(require("./utils/strings"));
__export(require("./utils/array"));
__export(require("./utils/object"));
__export(require("./utils/template"));
__export(require("./utils/partially-ordered-set"));
__export(require("./utils/priority-queue"));
__export(require("./utils/lang"));
// End utils namespace
// Start virtualFs namespace
__export(require("./virtual-fs/path"));
__export(require("./virtual-fs/host/index"));
// End virtualFs namespace
// Start workspace namespace
__export(require("./workspace/index"));
// End workspace namespace
// Start analytics namespace
__export(require("./analytics/index"));
// End analytics namespace
