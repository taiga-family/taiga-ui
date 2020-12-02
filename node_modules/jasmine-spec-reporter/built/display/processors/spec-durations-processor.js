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
var SpecDurationsProcessor = (function (_super) {
    __extends(SpecDurationsProcessor, _super);
    function SpecDurationsProcessor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SpecDurationsProcessor.displayDuration = function (spec, log) {
        return log + " (" + spec.duration + ")";
    };
    SpecDurationsProcessor.prototype.displaySuccessfulSpec = function (spec, log) {
        return SpecDurationsProcessor.displayDuration(spec, log);
    };
    SpecDurationsProcessor.prototype.displayFailedSpec = function (spec, log) {
        return SpecDurationsProcessor.displayDuration(spec, log);
    };
    return SpecDurationsProcessor;
}(display_processor_1.DisplayProcessor));
exports.SpecDurationsProcessor = SpecDurationsProcessor;
//# sourceMappingURL=spec-durations-processor.js.map