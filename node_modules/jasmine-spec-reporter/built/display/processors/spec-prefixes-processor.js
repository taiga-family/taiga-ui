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
var SpecPrefixesProcessor = (function (_super) {
    __extends(SpecPrefixesProcessor, _super);
    function SpecPrefixesProcessor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SpecPrefixesProcessor.prototype.displaySuccessfulSpec = function (spec, log) {
        return this.configuration.prefixes.successful + log;
    };
    SpecPrefixesProcessor.prototype.displayFailedSpec = function (spec, log) {
        return this.configuration.prefixes.failed + log;
    };
    SpecPrefixesProcessor.prototype.displayPendingSpec = function (spec, log) {
        return this.configuration.prefixes.pending + log;
    };
    return SpecPrefixesProcessor;
}(display_processor_1.DisplayProcessor));
exports.SpecPrefixesProcessor = SpecPrefixesProcessor;
//# sourceMappingURL=spec-prefixes-processor.js.map