"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cssParser_1 = require("./cssParser");
exports.parseCss = function (text) {
    var parser = new cssParser_1.CssParser();
    return parser.parse(text, '').ast;
};
