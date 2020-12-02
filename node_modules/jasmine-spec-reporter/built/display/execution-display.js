"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var colors_display_1 = require("./colors-display");
var ExecutionDisplay = (function () {
    function ExecutionDisplay(configuration, logger, specs, displayProcessors) {
        this.configuration = configuration;
        this.logger = logger;
        this.specs = specs;
        this.suiteHierarchy = [];
        this.suiteHierarchyDisplayed = [];
        colors_display_1.ColorsDisplay.init(this.configuration);
        this.hasCustomDisplaySpecStarted = ExecutionDisplay.hasCustomDisplaySpecStarted(displayProcessors);
    }
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
        this.logger.process(suiteInfo, function (displayProcessor, object, log) {
            return displayProcessor.displayJasmineStarted(object, log);
        });
    };
    ExecutionDisplay.prototype.specStarted = function (result) {
        if (this.hasCustomDisplaySpecStarted) {
            this.ensureSuiteDisplayed();
            this.logger.process(result, function (displayProcessor, object, log) {
                return displayProcessor.displaySpecStarted(object, log);
            });
        }
    };
    ExecutionDisplay.prototype.successful = function (result) {
        this.specs.successful.push(result);
        if (this.configuration.spec.displaySuccessful) {
            this.ensureSuiteDisplayed();
            this.logger.process(result, function (displayProcessor, object, log) {
                return displayProcessor.displaySuccessfulSpec(object, log);
            });
        }
    };
    ExecutionDisplay.prototype.failed = function (result) {
        this.specs.failed.push(result);
        if (this.configuration.spec.displayFailed) {
            this.ensureSuiteDisplayed();
            this.logger.process(result, function (displayProcessor, object, log) {
                return displayProcessor.displayFailedSpec(object, log);
            });
            if (this.configuration.spec.displayErrorMessages) {
                this.logger.increaseIndent();
                this.logger.process(result, function (displayProcessor, object, log) {
                    return displayProcessor.displaySpecErrorMessages(object, log);
                });
                this.logger.decreaseIndent();
            }
        }
    };
    ExecutionDisplay.prototype.pending = function (result) {
        this.specs.pending.push(result);
        if (this.configuration.spec.displayPending) {
            this.ensureSuiteDisplayed();
            this.logger.process(result, function (displayProcessor, object, log) {
                return displayProcessor.displayPendingSpec(object, log);
            });
        }
    };
    ExecutionDisplay.prototype.suiteStarted = function (result) {
        this.suiteHierarchy.push(result);
    };
    ExecutionDisplay.prototype.suiteDone = function (result) {
        if (result && result.failedExpectations && result.failedExpectations.length) {
            this.failed(result);
        }
        var suite = this.suiteHierarchy.pop();
        if (this.suiteHierarchyDisplayed[this.suiteHierarchyDisplayed.length - 1] === suite) {
            this.suiteHierarchyDisplayed.pop();
        }
        this.logger.newLine();
        this.logger.decreaseIndent();
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
        this.logger.newLine();
        this.computeSuiteIndent();
        this.logger.process(suite, function (displayProcessor, object, log) {
            return displayProcessor.displaySuite(object, log);
        });
        this.logger.increaseIndent();
    };
    ExecutionDisplay.prototype.computeSuiteIndent = function () {
        var _this = this;
        this.logger.resetIndent();
        this.suiteHierarchyDisplayed.forEach(function () { return _this.logger.increaseIndent(); });
    };
    return ExecutionDisplay;
}());
exports.ExecutionDisplay = ExecutionDisplay;
//# sourceMappingURL=execution-display.js.map