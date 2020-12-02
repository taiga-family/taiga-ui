"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Analytics implementation that does nothing.
 */
class NoopAnalytics {
    event() { }
    screenview() { }
    pageview() { }
    timing() { }
    flush() { return Promise.resolve(); }
}
exports.NoopAnalytics = NoopAnalytics;
