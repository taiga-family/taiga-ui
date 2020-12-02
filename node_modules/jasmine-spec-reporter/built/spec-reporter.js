"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var configuration_parser_1 = require("./configuration-parser");
var execution_display_1 = require("./display/execution-display");
var logger_1 = require("./display/logger");
var summary_display_1 = require("./display/summary-display");
var execution_metrics_1 = require("./execution-metrics");
var default_processor_1 = require("./processors/default-processor");
var spec_colors_processor_1 = require("./processors/spec-colors-processor");
var spec_durations_processor_1 = require("./processors/spec-durations-processor");
var spec_prefixes_processor_1 = require("./processors/spec-prefixes-processor");
var suite_numbering_processor_1 = require("./processors/suite-numbering-processor");
var SpecReporter = (function () {
    function SpecReporter(configuration) {
        this.specs = {
            failed: [],
            pending: [],
            successful: []
        };
        this.configuration = configuration_parser_1.ConfigurationParser.parse(configuration);
        var displayProcessors = SpecReporter.initProcessors(this.configuration);
        var print = this.configuration.print;
        this.logger = new logger_1.Logger(displayProcessors, print);
        this.display = new execution_display_1.ExecutionDisplay(this.configuration, this.logger, this.specs, displayProcessors);
        this.summary = new summary_display_1.SummaryDisplay(this.logger, this.configuration, this.specs);
        this.metrics = new execution_metrics_1.ExecutionMetrics();
    }
    SpecReporter.initProcessors = function (configuration) {
        var displayProcessors = [
            new default_processor_1.DefaultProcessor(configuration),
            new spec_prefixes_processor_1.SpecPrefixesProcessor(configuration),
            new spec_colors_processor_1.SpecColorsProcessor(configuration),
        ];
        if (configuration.spec.displayDuration) {
            displayProcessors.push(new spec_durations_processor_1.SpecDurationsProcessor(configuration));
        }
        if (configuration.suite.displayNumber) {
            displayProcessors.push(new suite_numbering_processor_1.SuiteNumberingProcessor(configuration));
        }
        if (configuration.customProcessors) {
            configuration.customProcessors.forEach(function (Processor) {
                displayProcessors.push(new Processor(configuration));
            });
        }
        return displayProcessors;
    };
    SpecReporter.prototype.jasmineStarted = function (suiteInfo) {
        this.metrics.start(suiteInfo);
        this.display.jasmineStarted(suiteInfo);
    };
    SpecReporter.prototype.jasmineDone = function (runDetails) {
        this.metrics.stop(runDetails);
        if (runDetails.failedExpectations && runDetails.failedExpectations.length) {
            var error = this.runDetailsToResult(runDetails);
            this.metrics.globalErrors.push(error);
            this.display.failed(error);
        }
        this.summary.display(this.metrics);
    };
    SpecReporter.prototype.suiteStarted = function (result) {
        this.display.suiteStarted(result);
    };
    SpecReporter.prototype.suiteDone = function (result) {
        this.display.suiteDone(result);
        if (result.failedExpectations.length) {
            this.metrics.globalErrors.push(result);
        }
    };
    SpecReporter.prototype.specStarted = function (result) {
        this.metrics.startSpec();
        this.display.specStarted(result);
    };
    SpecReporter.prototype.specDone = function (result) {
        this.metrics.stopSpec(result);
        if (result.status === "pending") {
            this.metrics.pendingSpecs++;
            this.display.pending(result);
        }
        else if (result.status === "passed") {
            this.metrics.successfulSpecs++;
            this.display.successful(result);
        }
        else if (result.status === "failed") {
            this.metrics.failedSpecs++;
            this.display.failed(result);
        }
    };
    SpecReporter.prototype.runDetailsToResult = function (runDetails) {
        return {
            description: "Non-spec failure",
            failedExpectations: runDetails.failedExpectations.map(function (expectation) {
                return {
                    actual: "",
                    expected: "",
                    matcherName: "",
                    message: expectation.message,
                    passed: false,
                    stack: expectation.stack,
                };
            }),
            fullName: "Non-spec failure",
            id: "Non-spec failure",
        };
    };
    return SpecReporter;
}());
exports.SpecReporter = SpecReporter;
//# sourceMappingURL=spec-reporter.js.map