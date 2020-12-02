"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var colors_display_1 = require("./display/colors-display");
var default_processor_1 = require("./display/processors/default-processor");
var spec_colors_processor_1 = require("./display/processors/spec-colors-processor");
var spec_durations_processor_1 = require("./display/processors/spec-durations-processor");
var spec_prefixes_processor_1 = require("./display/processors/spec-prefixes-processor");
var suite_numbering_processor_1 = require("./display/processors/suite-numbering-processor");
var ExecutionDisplay = (function () {
    function ExecutionDisplay(configuration) {
        this.configuration = configuration;
        this.indent = "  ";
        this.currentIndent = "";
        this.suiteHierarchy = [];
        this.suiteHierarchyDisplayed = [];
        this.successfulSpecs = [];
        this.failedSpecs = [];
        this.pendingSpecs = [];
        this.lastWasNewLine = false;
        colors_display_1.ColorsDisplay.init(this.configuration);
        this.displayProcessors = ExecutionDisplay.initProcessors(this.configuration);
        this.hasCustomDisplaySpecStarted = ExecutionDisplay.hasCustomDisplaySpecStarted(this.displayProcessors);
    }
    ExecutionDisplay.initProcessors = function (configuration) {
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
    ExecutionDisplay.hasCustomDisplaySpecStarted = function (processors) {
        var isDisplayed = false;
        processors.forEach(function (processor) {
            var log = "foo";
            var result = processor.displaySpecStarted({ id: "bar", description: "bar", fullName: "bar" }, log);
            isDisplayed = isDisplayed || result !== log;
        });
        return isDisplayed;
    };
    ExecutionDisplay.prototype.jasmineStarted = function (suiteInfo) {
        this.process(suiteInfo, function (displayProcessor, object, log) {
            return displayProcessor.displayJasmineStarted(object, log);
        });
    };
    ExecutionDisplay.prototype.summary = function (metrics) {
        var pluralizedSpec = (metrics.totalSpecsDefined === 1 ? " spec" : " specs");
        var execution = "Executed " + metrics.executedSpecs + " of " + metrics.totalSpecsDefined + pluralizedSpec;
        var successful = (metrics.failedSpecs === 0) ? " SUCCESS" : "";
        var failed = (metrics.failedSpecs > 0) ? " (" + metrics.failedSpecs + " FAILED)" : "";
        var pending = (metrics.pendingSpecs > 0) ? " (" + metrics.pendingSpecs + " PENDING)" : "";
        var skipped = (metrics.skippedSpecs > 0) ? " (" + metrics.skippedSpecs + " SKIPPED)" : "";
        var duration = this.configuration.summary.displayDuration ? " in " + metrics.duration : "";
        this.resetIndent();
        this.newLine();
        if (this.configuration.summary.displaySuccessful && metrics.successfulSpecs > 0) {
            this.successesSummary();
        }
        if (this.configuration.summary.displayFailed && metrics.failedSpecs > 0) {
            this.failuresSummary();
        }
        if (this.configuration.summary.displayPending && metrics.pendingSpecs > 0) {
            this.pendingsSummary();
        }
        this.log(execution + successful.successful + failed.failed + pending.pending + skipped + duration + ".");
        if (metrics.random) {
            this.log("Randomized with seed " + metrics.seed + ".");
        }
    };
    ExecutionDisplay.prototype.specStarted = function (result) {
        if (this.hasCustomDisplaySpecStarted) {
            this.ensureSuiteDisplayed();
            this.process(result, function (displayProcessor, object, log) {
                return displayProcessor.displaySpecStarted(object, log);
            });
        }
    };
    ExecutionDisplay.prototype.successful = function (result) {
        this.successfulSpecs.push(result);
        if (this.configuration.spec.displaySuccessful) {
            this.ensureSuiteDisplayed();
            this.process(result, function (displayProcessor, object, log) {
                return displayProcessor.displaySuccessfulSpec(object, log);
            });
        }
    };
    ExecutionDisplay.prototype.failed = function (result) {
        this.failedSpecs.push(result);
        if (this.configuration.spec.displayFailed) {
            this.ensureSuiteDisplayed();
            this.process(result, function (displayProcessor, object, log) {
                return displayProcessor.displayFailedSpec(object, log);
            });
            if (this.configuration.spec.displayErrorMessages) {
                this.increaseIndent();
                this.process(result, function (displayProcessor, object, log) {
                    return displayProcessor.displaySpecErrorMessages(object, log);
                });
                this.decreaseIndent();
            }
        }
    };
    ExecutionDisplay.prototype.pending = function (result) {
        this.pendingSpecs.push(result);
        if (this.configuration.spec.displayPending) {
            this.ensureSuiteDisplayed();
            this.process(result, function (displayProcessor, object, log) {
                return displayProcessor.displayPendingSpec(object, log);
            });
        }
    };
    ExecutionDisplay.prototype.suiteStarted = function (result) {
        this.suiteHierarchy.push(result);
    };
    ExecutionDisplay.prototype.suiteDone = function () {
        var suite = this.suiteHierarchy.pop();
        if (this.suiteHierarchyDisplayed[this.suiteHierarchyDisplayed.length - 1] === suite) {
            this.suiteHierarchyDisplayed.pop();
        }
        this.newLine();
        this.decreaseIndent();
    };
    ExecutionDisplay.prototype.successesSummary = function () {
        this.log("**************************************************");
        this.log("*                   Successes                    *");
        this.log("**************************************************");
        this.newLine();
        for (var i = 0; i < this.successfulSpecs.length; i++) {
            this.successfulSummary(this.successfulSpecs[i], i + 1);
            this.newLine();
        }
        this.newLine();
        this.resetIndent();
    };
    ExecutionDisplay.prototype.successfulSummary = function (spec, index) {
        this.log(index + ") " + spec.fullName);
    };
    ExecutionDisplay.prototype.failuresSummary = function () {
        this.log("**************************************************");
        this.log("*                    Failures                    *");
        this.log("**************************************************");
        this.newLine();
        for (var i = 0; i < this.failedSpecs.length; i++) {
            this.failedSummary(this.failedSpecs[i], i + 1);
            this.newLine();
        }
        this.newLine();
        this.resetIndent();
    };
    ExecutionDisplay.prototype.failedSummary = function (spec, index) {
        this.log(index + ") " + spec.fullName);
        if (this.configuration.summary.displayErrorMessages) {
            this.increaseIndent();
            this.process(spec, function (displayProcessor, object, log) {
                return displayProcessor.displaySummaryErrorMessages(object, log);
            });
            this.decreaseIndent();
        }
    };
    ExecutionDisplay.prototype.pendingsSummary = function () {
        this.log("**************************************************");
        this.log("*                    Pending                     *");
        this.log("**************************************************");
        this.newLine();
        for (var i = 0; i < this.pendingSpecs.length; i++) {
            this.pendingSummary(this.pendingSpecs[i], i + 1);
            this.newLine();
        }
        this.newLine();
        this.resetIndent();
    };
    ExecutionDisplay.prototype.pendingSummary = function (spec, index) {
        this.log(index + ") " + spec.fullName);
        this.increaseIndent();
        var pendingReason = spec.pendingReason ? spec.pendingReason : "No reason given";
        this.log(pendingReason.pending);
        this.resetIndent();
    };
    ExecutionDisplay.prototype.ensureSuiteDisplayed = function () {
        if (this.suiteHierarchy.length !== 0) {
            for (var i = this.suiteHierarchyDisplayed.length; i < this.suiteHierarchy.length; i++) {
                this.suiteHierarchyDisplayed.push(this.suiteHierarchy[i]);
                this.displaySuite(this.suiteHierarchy[i]);
            }
        }
        else {
            var name_1 = "Top level suite";
            var topLevelSuite = {
                description: name_1,
                fullName: name_1,
                id: name_1,
            };
            this.suiteHierarchy.push(topLevelSuite);
            this.suiteHierarchyDisplayed.push(topLevelSuite);
            this.displaySuite(topLevelSuite);
        }
    };
    ExecutionDisplay.prototype.displaySuite = function (suite) {
        this.newLine();
        this.computeSuiteIndent();
        this.process(suite, function (displayProcessor, object, log) {
            return displayProcessor.displaySuite(object, log);
        });
        this.increaseIndent();
    };
    ExecutionDisplay.prototype.process = function (object, processFunction) {
        var log = "";
        this.displayProcessors.forEach(function (displayProcessor) {
            log = processFunction(displayProcessor, object, log);
        });
        this.log(log);
    };
    ExecutionDisplay.prototype.computeSuiteIndent = function () {
        var _this = this;
        this.resetIndent();
        this.suiteHierarchyDisplayed.forEach(function () { return _this.increaseIndent(); });
    };
    ExecutionDisplay.prototype.log = function (stuff) {
        var _this = this;
        stuff.split("\n").forEach(function (line) {
            console.log(line !== "" ? _this.currentIndent + line : line);
        });
        this.lastWasNewLine = false;
    };
    ExecutionDisplay.prototype.newLine = function () {
        if (!this.lastWasNewLine) {
            console.log("");
            this.lastWasNewLine = true;
        }
    };
    ExecutionDisplay.prototype.resetIndent = function () {
        this.currentIndent = "";
    };
    ExecutionDisplay.prototype.increaseIndent = function () {
        this.currentIndent += this.indent;
    };
    ExecutionDisplay.prototype.decreaseIndent = function () {
        this.currentIndent = this.currentIndent.substr(0, this.currentIndent.length - this.indent.length);
    };
    return ExecutionDisplay;
}());
exports.ExecutionDisplay = ExecutionDisplay;
//# sourceMappingURL=execution-display.js.map