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
var SpecColorsProcessor = (function (_super) {
    __extends(SpecColorsProcessor, _super);
    function SpecColorsProcessor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SpecColorsProcessor.prototype.displaySuccessfulSpec = function (spec, log) {
        return log.successful;
    };
    SpecColorsProcessor.prototype.displayFailedSpec = function (spec, log) {
        return log.failed;
    };
    SpecColorsProcessor.prototype.displayPendingSpec = function (spec, log) {
        return log.pending;
    };
    return SpecColorsProcessor;
}(display_processor_1.DisplayProcessor));
exports.SpecColorsProcessor = SpecColorsProcessor;
//# sourceMappingURL=spec-colors-processor.js.map