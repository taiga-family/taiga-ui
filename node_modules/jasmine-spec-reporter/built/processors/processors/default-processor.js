"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var display_processor_1 = require("../display-processor");
var DefaultProcessor = (function (_super) {
    __extends(DefaultProcessor, _super);
    function DefaultProcessor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DefaultProcessor.displaySpecDescription = function (spec) {
        return spec.description;
    };
    DefaultProcessor.prototype.displayJasmineStarted = function () {
        return "Spec started";
    };
    DefaultProcessor.prototype.displaySuite = function (suite) {
        return suite.description;
    };
    DefaultProcessor.prototype.displaySuccessfulSpec = function (spec) {
        return DefaultProcessor.displaySpecDescription(spec);
    };
    DefaultProcessor.prototype.displayFailedSpec = function (spec) {
        return DefaultProcessor.displaySpecDescription(spec);
    };
    DefaultProcessor.prototype.displaySpecErrorMessages = function (spec) {
        return this.displayErrorMessages(spec, this.configuration.spec.displayStacktrace);
    };
    DefaultProcessor.prototype.displaySummaryErrorMessages = function (spec) {
        return this.displayErrorMessages(spec, this.configuration.summary.displayStacktrace);
    };
    DefaultProcessor.prototype.displayPendingSpec = function (spec) {
        return DefaultProcessor.displaySpecDescription(spec);
    };
    DefaultProcessor.prototype.displayErrorMessages = function (spec, withStacktrace) {
        var logs = [];
        for (var _i = 0, _a = spec.failedExpectations; _i < _a.length; _i++) {
            var failedExpectation = _a[_i];
            logs.push("- ".failed + failedExpectation.message.failed);
            if (withStacktrace && failedExpectation.stack) {
                logs.push(this.configuration.stacktrace.filter(failedExpectation.stack));
            }
        }
        return logs.join("\n");
    };
    return DefaultProcessor;
}(display_processor_1.DisplayProcessor));
exports.DefaultProcessor = DefaultProcessor;
//# sourceMappingURL=default-processor.js.map