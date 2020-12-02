#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const fs_1 = require("fs");
const path_1 = require("path");
const build_optimizer_1 = require("./build-optimizer");
// tslint:disable: no-console
if (process.argv.length < 3 || process.argv.length > 4) {
    throw new Error(`
    build-optimizer should be called with either one or two arguments:

      build-optimizer input.js
      build-optimizer input.js output.js
  `);
}
const currentDir = process.cwd();
const inputFile = process.argv[2];
const tsOrJsRegExp = /\.(j|t)s$/;
if (!inputFile.match(tsOrJsRegExp)) {
    throw new Error(`Input file must be .js or .ts.`);
}
// Use provided output file, or add the .bo suffix before the extension.
const outputFile = process.argv[3] || inputFile.replace(tsOrJsRegExp, subStr => `.bo${subStr}`);
const boOutput = build_optimizer_1.buildOptimizer({
    inputFilePath: path_1.join(currentDir, inputFile),
    outputFilePath: path_1.join(currentDir, outputFile),
    emitSourceMap: true,
});
if (boOutput.emitSkipped) {
    console.log('Nothing to emit.');
}
else {
    fs_1.writeFileSync(path_1.join(currentDir, outputFile), boOutput.content);
    fs_1.writeFileSync(path_1.join(currentDir, `${outputFile}.map`), JSON.stringify(boOutput.sourceMap));
    console.log('Emitted:');
    console.log(`  ${outputFile}`);
    console.log(`  ${outputFile}.map`);
}
