"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const object_1 = require("../utils/object");
const kColors = {
    modifiers: {
        reset: [0, 0],
        bold: [1, 22],
        dim: [2, 22],
        italic: [3, 23],
        underline: [4, 24],
        inverse: [7, 27],
        hidden: [8, 28],
        strikethrough: [9, 29],
    },
    colors: {
        black: [30, 39],
        red: [31, 39],
        green: [32, 39],
        yellow: [33, 39],
        blue: [34, 39],
        magenta: [35, 39],
        cyan: [36, 39],
        white: [37, 39],
        gray: [90, 39],
    },
    bgColors: {
        bgBlack: [40, 49],
        bgRed: [41, 49],
        bgGreen: [42, 49],
        bgYellow: [43, 49],
        bgBlue: [44, 49],
        bgMagenta: [45, 49],
        bgCyan: [46, 49],
        bgWhite: [47, 49],
    },
};
const kColorFunctions = object_1.mapObject(kColors, (_, v) => {
    return object_1.mapObject(v, (_, vv) => (x) => `\u001b[${vv[0]}m${x}\u001b[${vv[1]}m`);
});
var colors;
(function (colors) {
    colors.reset = kColorFunctions.modifiers.reset;
    colors.bold = kColorFunctions.modifiers.bold;
    colors.dim = kColorFunctions.modifiers.dim;
    colors.italic = kColorFunctions.modifiers.italic;
    colors.underline = kColorFunctions.modifiers.underline;
    colors.inverse = kColorFunctions.modifiers.inverse;
    colors.hidden = kColorFunctions.modifiers.hidden;
    colors.strikethrough = kColorFunctions.modifiers.strikethrough;
    colors.black = kColorFunctions.colors.black;
    colors.red = kColorFunctions.colors.red;
    colors.green = kColorFunctions.colors.green;
    colors.yellow = kColorFunctions.colors.yellow;
    colors.blue = kColorFunctions.colors.blue;
    colors.magenta = kColorFunctions.colors.magenta;
    colors.cyan = kColorFunctions.colors.cyan;
    colors.white = kColorFunctions.colors.white;
    colors.grey = kColorFunctions.colors.gray;
    colors.gray = kColorFunctions.colors.gray;
    colors.bgBlack = kColorFunctions.bgColors.bgBlack;
    colors.bgRed = kColorFunctions.bgColors.bgRed;
    colors.bgGreen = kColorFunctions.bgColors.bgGreen;
    colors.bgYellow = kColorFunctions.bgColors.bgYellow;
    colors.bgBlue = kColorFunctions.bgColors.bgBlue;
    colors.bgMagenta = kColorFunctions.bgColors.bgMagenta;
    colors.bgCyan = kColorFunctions.bgColors.bgCyan;
    colors.bgWhite = kColorFunctions.bgColors.bgWhite;
})(colors = exports.colors || (exports.colors = {}));
