"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./pointer"));
__export(require("./registry"));
__export(require("./schema"));
__export(require("./visitor"));
__export(require("./utility"));
const transforms = require("./transforms");
exports.transforms = transforms;
