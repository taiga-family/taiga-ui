"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Logger = (function () {
    function Logger(displayProcessors, print) {
        this.displayProcessors = displayProcessors;
        this.print = print;
        this.indent = "  ";
        this.currentIndent = "";
        this.lastWasNewLine = false;
    }
    Logger.prototype.log = function (stuff) {
        var _this = this;
        stuff.split("\n").forEach(function (line) {
            _this.print(line !== "" ? _this.currentIndent + line : line);
        });
        this.lastWasNewLine = false;
    };
    Logger.prototype.process = function (object, processFunction) {
        var log = "";
        this.displayProcessors.forEach(function (displayProcessor) {
            log = processFunction(displayProcessor, object, log);
        });
        this.log(log);
    };
    Logger.prototype.newLine = function () {
        if (!this.lastWasNewLine) {
            this.log("");
            this.lastWasNewLine = true;
        }
    };
    Logger.prototype.resetIndent = function () {
        this.currentIndent = "";
    };
    Logger.prototype.increaseIndent = function () {
        this.currentIndent += this.indent;
    };
    Logger.prototype.decreaseIndent = function () {
        this.currentIndent = this.currentIndent.substr(0, this.currentIndent.length - this.indent.length);
    };
    return Logger;
}());
exports.Logger = Logger;
//# sourceMappingURL=logger.js.map