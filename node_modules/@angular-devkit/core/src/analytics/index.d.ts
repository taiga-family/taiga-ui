/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
export * from './api';
export * from './forwarder';
export * from './logging';
export * from './multi';
export * from './noop';
/**
 * MAKE SURE TO KEEP THIS IN SYNC WITH THE TABLE AND CONTENT IN `/docs/design/analytics.md`.
 * WE LIST THOSE DIMENSIONS (AND MORE).
 *
 * These cannot be in their respective schema.json file because we either change the type
 * (e.g. --buildEventLog is string, but we want to know the usage of it, not its value), or
 * some validation needs to be done (we cannot record ng add --collection if it's not whitelisted).
 */
export declare enum NgCliAnalyticsDimensions {
    CpuCount = 1,
    CpuSpeed = 2,
    RamInGigabytes = 3,
    NodeVersion = 4,
    NgAddCollection = 6,
    NgBuildBuildEventLog = 7,
    NgIvyEnabled = 8,
    BuildErrors = 20
}
export declare enum NgCliAnalyticsMetrics {
    NgComponentCount = 1,
    UNUSED_2 = 2,
    UNUSED_3 = 3,
    UNUSED_4 = 4,
    BuildTime = 5,
    NgOnInitCount = 6,
    InitialChunkSize = 7,
    TotalChunkCount = 8,
    TotalChunkSize = 9,
    LazyChunkCount = 10,
    LazyChunkSize = 11,
    AssetCount = 12,
    AssetSize = 13,
    PolyfillSize = 14,
    CssSize = 15
}
export declare const NgCliAnalyticsDimensionsFlagInfo: {
    [name: string]: [string, string];
};
export declare const NgCliAnalyticsMetricsFlagInfo: {
    [name: string]: [string, string];
};
