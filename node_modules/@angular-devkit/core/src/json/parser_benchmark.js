"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// tslint:disable:no-implicit-dependencies
const benchmark_1 = require("@_/benchmark");
const parser_1 = require("./parser");
const testCase = {
    'hello': [0, 1, 'world', 2],
    'world': {
        'great': 123E-12,
    },
};
const testCaseJson = JSON.stringify(testCase);
describe('parserJson', () => {
    benchmark_1.benchmark('parseJsonAst', () => parser_1.parseJsonAst(testCaseJson), () => JSON.parse(testCaseJson));
    benchmark_1.benchmark('parseJson', () => parser_1.parseJson(testCaseJson));
});
