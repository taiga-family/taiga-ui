"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chars = require("./chars");
var ParseLocation = (function () {
    function ParseLocation(file, offset, line, col) {
        this.file = file;
        this.offset = offset;
        this.line = line;
        this.col = col;
    }
    ParseLocation.prototype.toString = function () {
        return this.offset != null ? this.file.url + "@" + this.line + ":" + this.col : this.file.url;
    };
    ParseLocation.prototype.moveBy = function (delta) {
        var source = this.file.content;
        var len = source.length;
        var offset = this.offset;
        var line = this.line;
        var col = this.col;
        while (offset > 0 && delta < 0) {
            offset--;
            delta++;
            var ch = source.charCodeAt(offset);
            if (ch == chars.$LF) {
                line--;
                var priorLine = source.substr(0, offset - 1).lastIndexOf(String.fromCharCode(chars.$LF));
                col = priorLine > 0 ? offset - priorLine : offset;
            }
            else {
                col--;
            }
        }
        while (offset < len && delta > 0) {
            var ch = source.charCodeAt(offset);
            offset++;
            delta--;
            if (ch == chars.$LF) {
                line++;
                col = 0;
            }
            else {
                col++;
            }
        }
        return new ParseLocation(this.file, offset, line, col);
    };
    ParseLocation.prototype.getContext = function (maxChars, maxLines) {
        var content = this.file.content;
        var startOffset = this.offset;
        if (startOffset != null) {
            if (startOffset > content.length - 1) {
                startOffset = content.length - 1;
            }
            var endOffset = startOffset;
            var ctxChars = 0;
            var ctxLines = 0;
            while (ctxChars < maxChars && startOffset > 0) {
                startOffset--;
                ctxChars++;
                if (content[startOffset] == '\n') {
                    if (++ctxLines == maxLines) {
                        break;
                    }
                }
            }
            ctxChars = 0;
            ctxLines = 0;
            while (ctxChars < maxChars && endOffset < content.length - 1) {
                endOffset++;
                ctxChars++;
                if (content[endOffset] == '\n') {
                    if (++ctxLines == maxLines) {
                        break;
                    }
                }
            }
            return {
                before: content.substring(startOffset, this.offset),
                after: content.substring(this.offset, endOffset + 1)
            };
        }
        return null;
    };
    return ParseLocation;
}());
exports.ParseLocation = ParseLocation;
var ParseSourceFile = (function () {
    function ParseSourceFile(content, url) {
        this.content = content;
        this.url = url;
    }
    return ParseSourceFile;
}());
exports.ParseSourceFile = ParseSourceFile;
var ParseSourceSpan = (function () {
    function ParseSourceSpan(start, end, details) {
        if (details === void 0) { details = null; }
        this.start = start;
        this.end = end;
        this.details = details;
    }
    ParseSourceSpan.prototype.toString = function () {
        return this.start.file.content.substring(this.start.offset, this.end.offset);
    };
    return ParseSourceSpan;
}());
exports.ParseSourceSpan = ParseSourceSpan;
var ParseErrorLevel;
(function (ParseErrorLevel) {
    ParseErrorLevel[ParseErrorLevel["WARNING"] = 0] = "WARNING";
    ParseErrorLevel[ParseErrorLevel["ERROR"] = 1] = "ERROR";
})(ParseErrorLevel = exports.ParseErrorLevel || (exports.ParseErrorLevel = {}));
var ParseError = (function () {
    function ParseError(span, msg, level) {
        if (level === void 0) { level = ParseErrorLevel.ERROR; }
        this.span = span;
        this.msg = msg;
        this.level = level;
    }
    ParseError.prototype.contextualMessage = function () {
        var ctx = this.span.start.getContext(100, 3);
        return ctx ? this.msg + " (\"" + ctx.before + "[" + ParseErrorLevel[this.level] + " ->]" + ctx.after + "\")" : this.msg;
    };
    ParseError.prototype.toString = function () {
        var details = this.span.details ? ", " + this.span.details : '';
        return this.contextualMessage() + ": " + this.span.start + details;
    };
    return ParseError;
}());
exports.ParseError = ParseError;
