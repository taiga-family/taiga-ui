"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// tslint:disable
// TODO: cleanup this file, it's copied as is from Angular CLI.
const core_1 = require("@angular-devkit/core");
const path = require("path");
const { bold, green, red, reset, white, yellow } = core_1.terminal;
function formatSize(size) {
    if (size <= 0) {
        return '0 bytes';
    }
    const abbreviations = ['bytes', 'kB', 'MB', 'GB'];
    const index = Math.floor(Math.log(size) / Math.log(1024));
    return `${+(size / Math.pow(1024, index)).toPrecision(3)} ${abbreviations[index]}`;
}
exports.formatSize = formatSize;
function generateBundleStats(info, colors) {
    const g = (x) => (colors ? bold(green(x)) : x);
    const y = (x) => (colors ? bold(yellow(x)) : x);
    const id = info.id ? y(info.id.toString()) : '';
    const size = typeof info.size === 'number' ? ` ${formatSize(info.size)}` : '';
    const files = info.files.map(f => path.basename(f)).join(', ');
    const names = info.names ? ` (${info.names.join(', ')})` : '';
    const initial = y(info.entry ? '[entry]' : info.initial ? '[initial]' : '');
    const flags = ['rendered', 'recorded']
        .map(f => (f && info[f] ? g(` [${f}]`) : ''))
        .join('');
    return `chunk {${id}} ${g(files)}${names}${size} ${initial}${flags}`;
}
exports.generateBundleStats = generateBundleStats;
function generateBuildStats(hash, time, colors) {
    const w = (x) => colors ? bold(white(x)) : x;
    return `Date: ${w(new Date().toISOString())} - Hash: ${w(hash)} - Time: ${w('' + time)}ms`;
}
exports.generateBuildStats = generateBuildStats;
function statsToString(json, statsConfig) {
    const colors = statsConfig.colors;
    const rs = (x) => colors ? reset(x) : x;
    const w = (x) => colors ? bold(white(x)) : x;
    const changedChunksStats = json.chunks
        .filter((chunk) => chunk.rendered)
        .map((chunk) => {
        const assets = json.assets.filter((asset) => chunk.files.indexOf(asset.name) != -1);
        const summedSize = assets.filter((asset) => !asset.name.endsWith(".map")).reduce((total, asset) => { return total + asset.size; }, 0);
        return generateBundleStats({ ...chunk, size: summedSize }, colors);
    });
    const unchangedChunkNumber = json.chunks.length - changedChunksStats.length;
    if (unchangedChunkNumber > 0) {
        return '\n' + rs(core_1.tags.stripIndents `
      Date: ${w(new Date().toISOString())} - Hash: ${w(json.hash)}
      ${unchangedChunkNumber} unchanged chunks
      ${changedChunksStats.join('\n')}
      Time: ${w('' + json.time)}ms
      `);
    }
    else {
        return '\n' + rs(core_1.tags.stripIndents `
      ${changedChunksStats.join('\n')}
      Date: ${w(new Date().toISOString())} - Hash: ${w(json.hash)} - Time: ${w('' + json.time)}ms
      `);
    }
}
exports.statsToString = statsToString;
// TODO(#16193): Don't emit this warning in the first place rather than just suppressing it.
const ERRONEOUS_WARNINGS = [
    /multiple assets emit different content.*3rdpartylicenses\.txt/i,
];
function statsWarningsToString(json, statsConfig) {
    const colors = statsConfig.colors;
    const rs = (x) => colors ? reset(x) : x;
    const y = (x) => colors ? bold(yellow(x)) : x;
    return rs('\n' + json.warnings
        .map((warning) => `${warning}`)
        .filter((warning) => !ERRONEOUS_WARNINGS.some((erroneous) => erroneous.test(warning)))
        .map((warning) => y(`WARNING in ${warning}`))
        .join('\n\n'));
}
exports.statsWarningsToString = statsWarningsToString;
function statsErrorsToString(json, statsConfig) {
    const colors = statsConfig.colors;
    const rs = (x) => colors ? reset(x) : x;
    const r = (x) => colors ? bold(red(x)) : x;
    return rs('\n' + json.errors.map((error) => r(`ERROR in ${error}`)).join('\n'));
}
exports.statsErrorsToString = statsErrorsToString;
