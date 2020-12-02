"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AnalyticsReportKind;
(function (AnalyticsReportKind) {
    AnalyticsReportKind["Event"] = "event";
    AnalyticsReportKind["Screenview"] = "screenview";
    AnalyticsReportKind["Pageview"] = "pageview";
    AnalyticsReportKind["Timing"] = "timing";
})(AnalyticsReportKind = exports.AnalyticsReportKind || (exports.AnalyticsReportKind = {}));
/**
 * A class that follows the Analytics interface and forwards analytic reports (JavaScript objects).
 * AnalyticsReporter is the counterpart which takes analytic reports and report them to another
 * Analytics interface.
 */
class ForwardingAnalytics {
    constructor(_fn) {
        this._fn = _fn;
    }
    event(category, action, options) {
        this._fn({
            kind: AnalyticsReportKind.Event,
            category,
            action,
            options: { ...options },
        });
    }
    screenview(screenName, appName, options) {
        this._fn({
            kind: AnalyticsReportKind.Screenview,
            screenName,
            appName,
            options: { ...options },
        });
    }
    pageview(path, options) {
        this._fn({
            kind: AnalyticsReportKind.Pageview,
            path,
            options: { ...options },
        });
    }
    timing(category, variable, time, options) {
        this._fn({
            kind: AnalyticsReportKind.Timing,
            category,
            variable,
            time,
            options: { ...options },
        });
    }
    // We do not support flushing.
    flush() {
        return Promise.resolve();
    }
}
exports.ForwardingAnalytics = ForwardingAnalytics;
class AnalyticsReporter {
    constructor(_analytics) {
        this._analytics = _analytics;
    }
    report(report) {
        switch (report.kind) {
            case AnalyticsReportKind.Event:
                this._analytics.event(report.category, report.action, report.options);
                break;
            case AnalyticsReportKind.Screenview:
                this._analytics.screenview(report.screenName, report.appName, report.options);
                break;
            case AnalyticsReportKind.Pageview:
                this._analytics.pageview(report.path, report.options);
                break;
            case AnalyticsReportKind.Timing:
                this._analytics.timing(report.category, report.variable, report.time, report.options);
                break;
            default:
                throw new Error('Unexpected analytics report: ' + JSON.stringify(report));
        }
    }
}
exports.AnalyticsReporter = AnalyticsReporter;
