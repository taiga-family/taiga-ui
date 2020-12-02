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
var fs = require("fs");
var tslint_1 = require("tslint");
var BaseFormatter = (function (_super) {
    __extends(BaseFormatter, _super);
    function BaseFormatter(ruleName, applyFix) {
        var _this = _super.call(this) || this;
        _this.ruleName = ruleName;
        _this.applyFix = applyFix.bind(_this);
        return _this;
    }
    BaseFormatter.prototype.format = function (allFailures) {
        for (var index = allFailures.length - 1; index >= 0; index--) {
            var failure = allFailures[index];
            if (failure.getRuleName() === this.ruleName) {
                this.applyFix(failure);
            }
        }
        var outputLines = allFailures.map(this.formatFailure);
        return outputLines.join('\n') + '\n';
    };
    BaseFormatter.prototype.readFile = function (fileName) {
        return fs.readFileSync(fileName, { encoding: 'UTF-8' });
    };
    BaseFormatter.prototype.writeFile = function (fileName, fileContents) {
        fs.writeFileSync(fileName, fileContents, { encoding: 'UTF-8' });
    };
    BaseFormatter.prototype.formatFailure = function (failure) {
        var fileName = failure.getFileName();
        var failureString = failure.getFailure();
        var ruleName = failure.getRuleName();
        var lineAndCharacter = failure.getStartPosition().getLineAndCharacter();
        var positionTuple = '[' + (lineAndCharacter.line + 1) + ', ' + (lineAndCharacter.character + 1) + ']';
        return '(' + ruleName + ') ' + fileName + positionTuple + ': ' + failureString;
    };
    return BaseFormatter;
}(tslint_1.Formatters.AbstractFormatter));
exports.BaseFormatter = BaseFormatter;
//# sourceMappingURL=BaseFormatter.js.map