"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ExecutionMetrics = (function () {
    function ExecutionMetrics() {
        this.successfulSpecs = 0;
        this.failedSpecs = 0;
        this.pendingSpecs = 0;
        this.skippedSpecs = 0;
        this.totalSpecsDefined = 0;
        this.executedSpecs = 0;
        this.globalErrors = [];
        this.random = false;
    }
    ExecutionMetrics.pluralize = function (count) {
        return count > 1 ? "s" : "";
    };
    ExecutionMetrics.prototype.start = function (suiteInfo) {
        this.startTime = (new Date()).getTime();
        this.totalSpecsDefined = suiteInfo && suiteInfo.totalSpecsDefined ? suiteInfo.totalSpecsDefined : 0;
    };
    ExecutionMetrics.prototype.stop = function (runDetails) {
        var totalSpecs = this.failedSpecs + this.successfulSpecs + this.pendingSpecs;
        this.duration = this.formatDuration((new Date()).getTime() - this.startTime);
        this.executedSpecs = this.failedSpecs + this.successfulSpecs;
        this.totalSpecsDefined = this.totalSpecsDefined ? this.totalSpecsDefined : totalSpecs;
        this.skippedSpecs = this.totalSpecsDefined - totalSpecs;
        this.random = runDetails.order.random;
        this.seed = runDetails.order.seed;
    };
    ExecutionMetrics.prototype.startSpec = function () {
        this.specStartTime = (new Date()).getTime();
    };
    ExecutionMetrics.prototype.stopSpec = function (result) {
        result.duration = this.formatDuration((new Date()).getTime() - this.specStartTime);
    };
    ExecutionMetrics.prototype.formatDuration = function (durationInMs) {
        var duration = "";
        var durationInSecs = durationInMs / 1000;
        var durationInMins;
        var durationInHrs;
        if (durationInSecs < 1) {
            return durationInSecs + " sec" + ExecutionMetrics.pluralize(durationInSecs);
        }
        durationInSecs = Math.round(durationInSecs);
        if (durationInSecs < 60) {
            return durationInSecs + " sec" + ExecutionMetrics.pluralize(durationInSecs);
        }
        durationInMins = Math.floor(durationInSecs / 60);
        durationInSecs = durationInSecs % 60;
        if (durationInSecs) {
            duration = " " + durationInSecs + " sec" + ExecutionMetrics.pluralize(durationInSecs);
        }
        if (durationInMins < 60) {
            return durationInMins + " min" + ExecutionMetrics.pluralize(durationInMins) + duration;
        }
        durationInHrs = Math.floor(durationInMins / 60);
        durationInMins = durationInMins % 60;
        if (durationInMins) {
            duration = " " + durationInMins + " min" + ExecutionMetrics.pluralize(durationInMins) + duration;
        }
        return durationInHrs + " hour" + ExecutionMetrics.pluralize(durationInHrs) + duration;
    };
    return ExecutionMetrics;
}());
exports.ExecutionMetrics = ExecutionMetrics;
//# sourceMappingURL=execution-metrics.js.map