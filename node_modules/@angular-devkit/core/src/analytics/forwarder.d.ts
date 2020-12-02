/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { JsonObject } from '../json';
import { Analytics, EventOptions, PageviewOptions, ScreenviewOptions, TimingOptions } from './api';
export declare enum AnalyticsReportKind {
    Event = "event",
    Screenview = "screenview",
    Pageview = "pageview",
    Timing = "timing"
}
export interface AnalyticsReportBase extends JsonObject {
    kind: AnalyticsReportKind;
}
export interface AnalyticsReportEvent extends AnalyticsReportBase {
    kind: AnalyticsReportKind.Event;
    options: JsonObject & EventOptions;
    category: string;
    action: string;
}
export interface AnalyticsReportScreenview extends AnalyticsReportBase {
    kind: AnalyticsReportKind.Screenview;
    options: JsonObject & ScreenviewOptions;
    screenName: string;
    appName: string;
}
export interface AnalyticsReportPageview extends AnalyticsReportBase {
    kind: AnalyticsReportKind.Pageview;
    options: JsonObject & PageviewOptions;
    path: string;
}
export interface AnalyticsReportTiming extends AnalyticsReportBase {
    kind: AnalyticsReportKind.Timing;
    options: JsonObject & TimingOptions;
    category: string;
    variable: string;
    time: string | number;
}
export declare type AnalyticsReport = AnalyticsReportEvent | AnalyticsReportScreenview | AnalyticsReportPageview | AnalyticsReportTiming;
/**
 * A function that can forward analytics along some stream. AnalyticsReport is already a
 * JsonObject descendant, but we force it here so the user knows it's safe to serialize.
 */
export declare type AnalyticsForwarderFn = (report: JsonObject & AnalyticsReport) => void;
/**
 * A class that follows the Analytics interface and forwards analytic reports (JavaScript objects).
 * AnalyticsReporter is the counterpart which takes analytic reports and report them to another
 * Analytics interface.
 */
export declare class ForwardingAnalytics implements Analytics {
    protected _fn: AnalyticsForwarderFn;
    constructor(_fn: AnalyticsForwarderFn);
    event(category: string, action: string, options?: EventOptions): void;
    screenview(screenName: string, appName: string, options?: ScreenviewOptions): void;
    pageview(path: string, options?: PageviewOptions): void;
    timing(category: string, variable: string, time: string | number, options?: TimingOptions): void;
    flush(): Promise<void>;
}
export declare class AnalyticsReporter {
    protected _analytics: Analytics;
    constructor(_analytics: Analytics);
    report(report: AnalyticsReport): void;
}
