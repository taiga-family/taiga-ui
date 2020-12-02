"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const caps = require("./caps");
const colors_1 = require("./colors");
const stdout = typeof process == 'object'
    ? caps.getCapabilities(process.stdout) : { colors: false };
exports.reset = stdout.colors ? colors_1.colors.reset : (x) => x;
exports.bold = stdout.colors ? colors_1.colors.bold : (x) => x;
exports.dim = stdout.colors ? colors_1.colors.dim : (x) => x;
exports.italic = stdout.colors ? colors_1.colors.italic : (x) => x;
exports.underline = stdout.colors ? colors_1.colors.underline : (x) => x;
exports.inverse = stdout.colors ? colors_1.colors.inverse : (x) => x;
exports.hidden = stdout.colors ? colors_1.colors.hidden : (x) => x;
exports.strikethrough = stdout.colors ? colors_1.colors.strikethrough : (x) => x;
exports.black = stdout.colors ? colors_1.colors.black : (x) => x;
exports.red = stdout.colors ? colors_1.colors.red : (x) => x;
exports.green = stdout.colors ? colors_1.colors.green : (x) => x;
exports.yellow = stdout.colors ? colors_1.colors.yellow : (x) => x;
exports.blue = stdout.colors ? colors_1.colors.blue : (x) => x;
exports.magenta = stdout.colors ? colors_1.colors.magenta : (x) => x;
exports.cyan = stdout.colors ? colors_1.colors.cyan : (x) => x;
exports.white = stdout.colors ? colors_1.colors.white : (x) => x;
exports.grey = stdout.colors ? colors_1.colors.gray : (x) => x;
exports.gray = stdout.colors ? colors_1.colors.gray : (x) => x;
exports.bgBlack = stdout.colors ? colors_1.colors.bgBlack : (x) => x;
exports.bgRed = stdout.colors ? colors_1.colors.bgRed : (x) => x;
exports.bgGreen = stdout.colors ? colors_1.colors.bgGreen : (x) => x;
exports.bgYellow = stdout.colors ? colors_1.colors.bgYellow : (x) => x;
exports.bgBlue = stdout.colors ? colors_1.colors.bgBlue : (x) => x;
exports.bgMagenta = stdout.colors ? colors_1.colors.bgMagenta : (x) => x;
exports.bgCyan = stdout.colors ? colors_1.colors.bgCyan : (x) => x;
exports.bgWhite = stdout.colors ? colors_1.colors.bgWhite : (x) => x;
