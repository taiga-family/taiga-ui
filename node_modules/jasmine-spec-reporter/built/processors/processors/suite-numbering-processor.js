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
var SuiteNumberingProcessor = (function (_super) {
    __extends(SuiteNumberingProcessor, _super);
    function SuiteNumberingProcessor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.suiteHierarchy = [];
        return _this;
    }
    SuiteNumberingProcessor.getParentName = function (element) {
        return element.fullName.replace(element.description, "").trim();
    };
    SuiteNumberingProcessor.prototype.displaySuite = function (suite, log) {
        return this.computeNumber(suite) + " " + log;
    };
    SuiteNumberingProcessor.prototype.computeNumber = function (suite) {
        this.computeHierarchy(suite);
        return this.computeHierarchyNumber();
    };
    SuiteNumberingProcessor.prototype.computeHierarchy = function (suite) {
        var parentName = SuiteNumberingProcessor.getParentName(suite);
        var i = 0;
        for (; i < this.suiteHierarchy.length; i++) {
            if (this.suiteHierarchy[i].name === parentName) {
                this.suiteHierarchy[i].number++;
                this.suiteHierarchy.splice(i + 1, this.suiteHierarchy.length - i - 1);
                break;
            }
        }
        if (i === this.suiteHierarchy.length) {
            this.suiteHierarchy.push({ name: parentName, number: 1 });
        }
    };
    SuiteNumberingProcessor.prototype.computeHierarchyNumber = function () {
        var hierarchyNumber = "";
        for (var _i = 0, _a = this.suiteHierarchy; _i < _a.length; _i++) {
            var suite = _a[_i];
            hierarchyNumber += suite.number + ".";
        }
        return hierarchyNumber.substring(0, hierarchyNumber.length - 1);
    };
    return SuiteNumberingProcessor;
}(display_processor_1.DisplayProcessor));
exports.SuiteNumberingProcessor = SuiteNumberingProcessor;
//# sourceMappingURL=suite-numbering-processor.js.map