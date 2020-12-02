"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SummaryDisplay = (function () {
    function SummaryDisplay(logger, configuration, specs) {
        this.logger = logger;
        this.configuration = configuration;
        this.specs = specs;
    }
    SummaryDisplay.prototype.display = function (metrics) {
        var pluralizedSpec = (metrics.totalSpecsDefined === 1 ? " spec" : " specs");
        var execution = "Executed " + metrics.executedSpecs + " of " + metrics.totalSpecsDefined + pluralizedSpec;
        var status = "";
        if (metrics.failedSpecs === 0 && metrics.globalErrors.length === 0) {
            status = (metrics.totalSpecsDefined === metrics.executedSpecs) ?
                " SUCCESS".successful : " INCOMPLETE".pending;
        }
        var failed = (metrics.failedSpecs > 0) ? " (" + metrics.failedSpecs + " FAILED)" : "";
        var pending = (metrics.pendingSpecs > 0) ? " (" + metrics.pendingSpecs + " PENDING)" : "";
        var skipped = (metrics.skippedSpecs > 0) ? " (" + metrics.skippedSpecs + " SKIPPED)" : "";
        var errors = (metrics.globalErrors.length > 1) ? " (" + metrics.globalErrors.length + " ERRORS)" : "";
        errors = (metrics.globalErrors.length === 1) ? " (" + metrics.globalErrors.length + " ERROR)" : errors;
        var duration = this.configuration.summary.displayDuration ? " in " + metrics.duration : "";
        this.logger.resetIndent();
        this.logger.newLine();
        if (this.configuration.summary.displaySuccessful && metrics.successfulSpecs > 0) {
            this.successesSummary();
        }
        if (this.configuration.summary.displayFailed && metrics.failedSpecs > 0) {
            this.failuresSummary();
        }
        if (this.configuration.summary.displayFailed && metrics.globalErrors.length > 0) {
            this.errorsSummary(metrics.globalErrors);
        }
        if (this.configuration.summary.displayPending && metrics.pendingSpecs > 0) {
            this.pendingsSummary();
        }
        this.logger.log(execution + status + errors.failed + failed.failed
            + pending.pending + skipped.pending + duration + ".");
        if (metrics.random) {
            this.logger.log("Randomized with seed " + metrics.seed + ".");
        }
    };
    SummaryDisplay.prototype.successesSummary = function () {
        this.logger.log("**************************************************");
        this.logger.log("*                   Successes                    *");
        this.logger.log("**************************************************");
        this.logger.newLine();
        for (var i = 0; i < this.specs.successful.length; i++) {
            this.successfulSummary(this.specs.successful[i], i + 1);
            this.logger.newLine();
        }
        this.logger.newLine();
        this.logger.resetIndent();
    };
    SummaryDisplay.prototype.successfulSummary = function (spec, index) {
        this.logger.log(index + ") " + spec.fullName);
    };
    SummaryDisplay.prototype.failuresSummary = function () {
        this.logger.log("**************************************************");
        this.logger.log("*                    Failures                    *");
        this.logger.log("**************************************************");
        this.logger.newLine();
        for (var i = 0; i < this.specs.failed.length; i++) {
            this.failedSummary(this.specs.failed[i], i + 1);
            this.logger.newLine();
        }
        this.logger.newLine();
        this.logger.resetIndent();
    };
    SummaryDisplay.prototype.failedSummary = function (spec, index) {
        this.logger.log(index + ") " + spec.fullName);
        if (this.configuration.summary.displayErrorMessages) {
            this.logger.increaseIndent();
            this.logger.process(spec, function (displayProcessor, object, log) {
                return displayProcessor.displaySummaryErrorMessages(object, log);
            });
            this.logger.decreaseIndent();
        }
    };
    SummaryDisplay.prototype.pendingsSummary = function () {
        this.logger.log("**************************************************");
        this.logger.log("*                    Pending                     *");
        this.logger.log("**************************************************");
        this.logger.newLine();
        for (var i = 0; i < this.specs.pending.length; i++) {
            this.pendingSummary(this.specs.pending[i], i + 1);
            this.logger.newLine();
        }
        this.logger.newLine();
        this.logger.resetIndent();
    };
    SummaryDisplay.prototype.pendingSummary = function (spec, index) {
        this.logger.log(index + ") " + spec.fullName);
        this.logger.increaseIndent();
        var pendingReason = spec.pendingReason ? spec.pendingReason : "No reason given";
        this.logger.log(pendingReason.pending);
        this.logger.resetIndent();
    };
    SummaryDisplay.prototype.errorsSummary = function (errors) {
        this.logger.log("**************************************************");
        this.logger.log("*                     Errors                     *");
        this.logger.log("**************************************************");
        this.logger.newLine();
        for (var i = 0; i < errors.length; i++) {
            this.errorSummary(errors[i], i + 1);
            this.logger.newLine();
        }
        this.logger.newLine();
        this.logger.resetIndent();
    };
    SummaryDisplay.prototype.errorSummary = function (error, index) {
        this.logger.log(index + ") " + error.fullName);
        this.logger.increaseIndent();
        this.logger.process(error, function (displayProcessor, object, log) {
            return displayProcessor.displaySummaryErrorMessages(object, log);
        });
        this.logger.decreaseIndent();
    };
    return SummaryDisplay;
}());
exports.SummaryDisplay = SummaryDisplay;
//# sourceMappingURL=summary-display.js.map