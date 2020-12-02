"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DisplayProcessor = (function () {
    function DisplayProcessor(configuration) {
        this.configuration = configuration;
    }
    DisplayProcessor.prototype.displayJasmineStarted = function (info, log) {
        return log;
    };
    DisplayProcessor.prototype.displaySuite = function (suite, log) {
        return log;
    };
    DisplayProcessor.prototype.displaySpecStarted = function (spec, log) {
        return log;
    };
    DisplayProcessor.prototype.displaySuccessfulSpec = function (spec, log) {
        return log;
    };
    DisplayProcessor.prototype.displayFailedSpec = function (spec, log) {
        return log;
    };
    DisplayProcessor.prototype.displaySpecErrorMessages = function (spec, log) {
        return log;
    };
    DisplayProcessor.prototype.displaySummaryErrorMessages = function (spec, log) {
        return log;
    };
    DisplayProcessor.prototype.displayPendingSpec = function (spec, log) {
        return log;
    };
    return DisplayProcessor;
}());
exports.DisplayProcessor = DisplayProcessor;
//# sourceMappingURL=display-processor.js.map