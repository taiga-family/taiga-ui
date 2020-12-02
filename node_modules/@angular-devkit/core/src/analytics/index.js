"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./forwarder"));
__export(require("./logging"));
__export(require("./multi"));
__export(require("./noop"));
/**
 * MAKE SURE TO KEEP THIS IN SYNC WITH THE TABLE AND CONTENT IN `/docs/design/analytics.md`.
 * WE LIST THOSE DIMENSIONS (AND MORE).
 *
 * These cannot be in their respective schema.json file because we either change the type
 * (e.g. --buildEventLog is string, but we want to know the usage of it, not its value), or
 * some validation needs to be done (we cannot record ng add --collection if it's not whitelisted).
 */
var NgCliAnalyticsDimensions;
(function (NgCliAnalyticsDimensions) {
    NgCliAnalyticsDimensions[NgCliAnalyticsDimensions["CpuCount"] = 1] = "CpuCount";
    NgCliAnalyticsDimensions[NgCliAnalyticsDimensions["CpuSpeed"] = 2] = "CpuSpeed";
    NgCliAnalyticsDimensions[NgCliAnalyticsDimensions["RamInGigabytes"] = 3] = "RamInGigabytes";
    NgCliAnalyticsDimensions[NgCliAnalyticsDimensions["NodeVersion"] = 4] = "NodeVersion";
    NgCliAnalyticsDimensions[NgCliAnalyticsDimensions["NgAddCollection"] = 6] = "NgAddCollection";
    NgCliAnalyticsDimensions[NgCliAnalyticsDimensions["NgBuildBuildEventLog"] = 7] = "NgBuildBuildEventLog";
    NgCliAnalyticsDimensions[NgCliAnalyticsDimensions["NgIvyEnabled"] = 8] = "NgIvyEnabled";
    NgCliAnalyticsDimensions[NgCliAnalyticsDimensions["BuildErrors"] = 20] = "BuildErrors";
})(NgCliAnalyticsDimensions = exports.NgCliAnalyticsDimensions || (exports.NgCliAnalyticsDimensions = {}));
var NgCliAnalyticsMetrics;
(function (NgCliAnalyticsMetrics) {
    NgCliAnalyticsMetrics[NgCliAnalyticsMetrics["NgComponentCount"] = 1] = "NgComponentCount";
    NgCliAnalyticsMetrics[NgCliAnalyticsMetrics["UNUSED_2"] = 2] = "UNUSED_2";
    NgCliAnalyticsMetrics[NgCliAnalyticsMetrics["UNUSED_3"] = 3] = "UNUSED_3";
    NgCliAnalyticsMetrics[NgCliAnalyticsMetrics["UNUSED_4"] = 4] = "UNUSED_4";
    NgCliAnalyticsMetrics[NgCliAnalyticsMetrics["BuildTime"] = 5] = "BuildTime";
    NgCliAnalyticsMetrics[NgCliAnalyticsMetrics["NgOnInitCount"] = 6] = "NgOnInitCount";
    NgCliAnalyticsMetrics[NgCliAnalyticsMetrics["InitialChunkSize"] = 7] = "InitialChunkSize";
    NgCliAnalyticsMetrics[NgCliAnalyticsMetrics["TotalChunkCount"] = 8] = "TotalChunkCount";
    NgCliAnalyticsMetrics[NgCliAnalyticsMetrics["TotalChunkSize"] = 9] = "TotalChunkSize";
    NgCliAnalyticsMetrics[NgCliAnalyticsMetrics["LazyChunkCount"] = 10] = "LazyChunkCount";
    NgCliAnalyticsMetrics[NgCliAnalyticsMetrics["LazyChunkSize"] = 11] = "LazyChunkSize";
    NgCliAnalyticsMetrics[NgCliAnalyticsMetrics["AssetCount"] = 12] = "AssetCount";
    NgCliAnalyticsMetrics[NgCliAnalyticsMetrics["AssetSize"] = 13] = "AssetSize";
    NgCliAnalyticsMetrics[NgCliAnalyticsMetrics["PolyfillSize"] = 14] = "PolyfillSize";
    NgCliAnalyticsMetrics[NgCliAnalyticsMetrics["CssSize"] = 15] = "CssSize";
})(NgCliAnalyticsMetrics = exports.NgCliAnalyticsMetrics || (exports.NgCliAnalyticsMetrics = {}));
// This table is used when generating the analytics.md file. It should match the enum above
// or the validate-user-analytics script will fail.
exports.NgCliAnalyticsDimensionsFlagInfo = {
    CpuCount: ['CPU Count', 'number'],
    CpuSpeed: ['CPU Speed', 'number'],
    RamInGigabytes: ['RAM (In GB)', 'number'],
    NodeVersion: ['Node Version', 'number'],
    NgAddCollection: ['--collection', 'string'],
    NgBuildBuildEventLog: ['--buildEventLog', 'boolean'],
    NgIvyEnabled: ['Ivy Enabled', 'boolean'],
    BuildErrors: ['Build Errors (comma separated)', 'string'],
};
// This table is used when generating the analytics.md file. It should match the enum above
// or the validate-user-analytics script will fail.
exports.NgCliAnalyticsMetricsFlagInfo = {
    NgComponentCount: ['NgComponentCount', 'number'],
    UNUSED_2: ['UNUSED_2', 'none'],
    UNUSED_3: ['UNUSED_3', 'none'],
    UNUSED_4: ['UNUSED_4', 'none'],
    BuildTime: ['Build Time', 'number'],
    NgOnInitCount: ['NgOnInit Count', 'number'],
    InitialChunkSize: ['Initial Chunk Size', 'number'],
    TotalChunkCount: ['Total Chunk Count', 'number'],
    TotalChunkSize: ['Total Chunk Size', 'number'],
    LazyChunkCount: ['Lazy Chunk Count', 'number'],
    LazyChunkSize: ['Lazy Chunk Size', 'number'],
    AssetCount: ['Asset Count', 'number'],
    AssetSize: ['Asset Size', 'number'],
    PolyfillSize: [' Polyfill Size', 'number'],
    CssSize: [' Css Size', 'number'],
};
