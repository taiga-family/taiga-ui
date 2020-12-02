'use strict';
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var BaseFormatter_1 = require("./utils/BaseFormatter");
var warnedForDeprecation = false;
var Formatter = (function (_super) {
    __extends(Formatter, _super);
    function Formatter() {
        var _this = this;
        if (!warnedForDeprecation) {
            console.warn('The fix-no-var-keyword formatter is deprecated. Use --fix instead.');
            warnedForDeprecation = true;
        }
        _this = _super.call(this, 'no-var-keyword', function (failure) {
            var fileName = failure.getFileName();
            var fileContents = this.readFile(fileName);
            var end = failure.getEndPosition().getPosition();
            var leftSide = fileContents.substring(0, end);
            leftSide = leftSide.replace(/var$/, 'let');
            var rightSide = fileContents.substring(end);
            var newContent = leftSide + rightSide;
            this.writeFile(fileName, newContent);
            console.log('Automatically converting var to let. Please re-compile and re-lint: ' + fileName);
        }) || this;
        return _this;
    }
    return Formatter;
}(BaseFormatter_1.BaseFormatter));
exports.Formatter = Formatter;
//# sourceMappingURL=fixNoVarKeywordFormatter.js.map