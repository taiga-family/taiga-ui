/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/compiler/src/css_parser/css_lexer", ["require", "exports", "@angular/compiler/src/chars"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var chars = require("@angular/compiler/src/chars");
    var CssTokenType;
    (function (CssTokenType) {
        CssTokenType[CssTokenType["EOF"] = 0] = "EOF";
        CssTokenType[CssTokenType["String"] = 1] = "String";
        CssTokenType[CssTokenType["Comment"] = 2] = "Comment";
        CssTokenType[CssTokenType["Identifier"] = 3] = "Identifier";
        CssTokenType[CssTokenType["Number"] = 4] = "Number";
        CssTokenType[CssTokenType["IdentifierOrNumber"] = 5] = "IdentifierOrNumber";
        CssTokenType[CssTokenType["AtKeyword"] = 6] = "AtKeyword";
        CssTokenType[CssTokenType["Character"] = 7] = "Character";
        CssTokenType[CssTokenType["Whitespace"] = 8] = "Whitespace";
        CssTokenType[CssTokenType["Invalid"] = 9] = "Invalid";
    })(CssTokenType = exports.CssTokenType || (exports.CssTokenType = {}));
    var CssLexerMode;
    (function (CssLexerMode) {
        CssLexerMode[CssLexerMode["ALL"] = 0] = "ALL";
        CssLexerMode[CssLexerMode["ALL_TRACK_WS"] = 1] = "ALL_TRACK_WS";
        CssLexerMode[CssLexerMode["SELECTOR"] = 2] = "SELECTOR";
        CssLexerMode[CssLexerMode["PSEUDO_SELECTOR"] = 3] = "PSEUDO_SELECTOR";
        CssLexerMode[CssLexerMode["PSEUDO_SELECTOR_WITH_ARGUMENTS"] = 4] = "PSEUDO_SELECTOR_WITH_ARGUMENTS";
        CssLexerMode[CssLexerMode["ATTRIBUTE_SELECTOR"] = 5] = "ATTRIBUTE_SELECTOR";
        CssLexerMode[CssLexerMode["AT_RULE_QUERY"] = 6] = "AT_RULE_QUERY";
        CssLexerMode[CssLexerMode["MEDIA_QUERY"] = 7] = "MEDIA_QUERY";
        CssLexerMode[CssLexerMode["BLOCK"] = 8] = "BLOCK";
        CssLexerMode[CssLexerMode["KEYFRAME_BLOCK"] = 9] = "KEYFRAME_BLOCK";
        CssLexerMode[CssLexerMode["STYLE_BLOCK"] = 10] = "STYLE_BLOCK";
        CssLexerMode[CssLexerMode["STYLE_VALUE"] = 11] = "STYLE_VALUE";
        CssLexerMode[CssLexerMode["STYLE_VALUE_FUNCTION"] = 12] = "STYLE_VALUE_FUNCTION";
        CssLexerMode[CssLexerMode["STYLE_CALC_FUNCTION"] = 13] = "STYLE_CALC_FUNCTION";
    })(CssLexerMode = exports.CssLexerMode || (exports.CssLexerMode = {}));
    var LexedCssResult = /** @class */ (function () {
        function LexedCssResult(error, token) {
            this.error = error;
            this.token = token;
        }
        return LexedCssResult;
    }());
    exports.LexedCssResult = LexedCssResult;
    function generateErrorMessage(input, message, errorValue, index, row, column) {
        return message + " at column " + row + ":" + column + " in expression [" +
            findProblemCode(input, errorValue, index, column) + ']';
    }
    exports.generateErrorMessage = generateErrorMessage;
    function findProblemCode(input, errorValue, index, column) {
        var endOfProblemLine = index;
        var current = charCode(input, index);
        while (current > 0 && !isNewline(current)) {
            current = charCode(input, ++endOfProblemLine);
        }
        var choppedString = input.substring(0, endOfProblemLine);
        var pointerPadding = '';
        for (var i = 0; i < column; i++) {
            pointerPadding += ' ';
        }
        var pointerString = '';
        for (var i = 0; i < errorValue.length; i++) {
            pointerString += '^';
        }
        return choppedString + '\n' + pointerPadding + pointerString + '\n';
    }
    exports.findProblemCode = findProblemCode;
    var CssToken = /** @class */ (function () {
        function CssToken(index, column, line, type, strValue) {
            this.index = index;
            this.column = column;
            this.line = line;
            this.type = type;
            this.strValue = strValue;
            this.numValue = charCode(strValue, 0);
        }
        return CssToken;
    }());
    exports.CssToken = CssToken;
    var CssLexer = /** @class */ (function () {
        function CssLexer() {
        }
        CssLexer.prototype.scan = function (text, trackComments) {
            if (trackComments === void 0) { trackComments = false; }
            return new CssScanner(text, trackComments);
        };
        return CssLexer;
    }());
    exports.CssLexer = CssLexer;
    function cssScannerError(token, message) {
        var error = Error('CssParseError: ' + message);
        error[ERROR_RAW_MESSAGE] = message;
        error[ERROR_TOKEN] = token;
        return error;
    }
    exports.cssScannerError = cssScannerError;
    var ERROR_TOKEN = 'ngToken';
    var ERROR_RAW_MESSAGE = 'ngRawMessage';
    function getRawMessage(error) {
        return error[ERROR_RAW_MESSAGE];
    }
    exports.getRawMessage = getRawMessage;
    function getToken(error) {
        return error[ERROR_TOKEN];
    }
    exports.getToken = getToken;
    function _trackWhitespace(mode) {
        switch (mode) {
            case CssLexerMode.SELECTOR:
            case CssLexerMode.PSEUDO_SELECTOR:
            case CssLexerMode.ALL_TRACK_WS:
            case CssLexerMode.STYLE_VALUE:
                return true;
            default:
                return false;
        }
    }
    var CssScanner = /** @class */ (function () {
        function CssScanner(input, _trackComments) {
            if (_trackComments === void 0) { _trackComments = false; }
            this.input = input;
            this._trackComments = _trackComments;
            this.length = 0;
            this.index = -1;
            this.column = -1;
            this.line = 0;
            /** @internal */
            this._currentMode = CssLexerMode.BLOCK;
            /** @internal */
            this._currentError = null;
            this.length = this.input.length;
            this.peekPeek = this.peekAt(0);
            this.advance();
        }
        CssScanner.prototype.getMode = function () {
            return this._currentMode;
        };
        CssScanner.prototype.setMode = function (mode) {
            if (this._currentMode != mode) {
                if (_trackWhitespace(this._currentMode) && !_trackWhitespace(mode)) {
                    this.consumeWhitespace();
                }
                this._currentMode = mode;
            }
        };
        CssScanner.prototype.advance = function () {
            if (isNewline(this.peek)) {
                this.column = 0;
                this.line++;
            }
            else {
                this.column++;
            }
            this.index++;
            this.peek = this.peekPeek;
            this.peekPeek = this.peekAt(this.index + 1);
        };
        CssScanner.prototype.peekAt = function (index) {
            return index >= this.length ? chars.$EOF : this.input.charCodeAt(index);
        };
        CssScanner.prototype.consumeEmptyStatements = function () {
            this.consumeWhitespace();
            while (this.peek == chars.$SEMICOLON) {
                this.advance();
                this.consumeWhitespace();
            }
        };
        CssScanner.prototype.consumeWhitespace = function () {
            while (chars.isWhitespace(this.peek) || isNewline(this.peek)) {
                this.advance();
                if (!this._trackComments && isCommentStart(this.peek, this.peekPeek)) {
                    this.advance(); // /
                    this.advance(); // *
                    while (!isCommentEnd(this.peek, this.peekPeek)) {
                        if (this.peek == chars.$EOF) {
                            this.error('Unterminated comment');
                        }
                        this.advance();
                    }
                    this.advance(); // *
                    this.advance(); // /
                }
            }
        };
        CssScanner.prototype.consume = function (type, value) {
            if (value === void 0) { value = null; }
            var mode = this._currentMode;
            this.setMode(_trackWhitespace(mode) ? CssLexerMode.ALL_TRACK_WS : CssLexerMode.ALL);
            var previousIndex = this.index;
            var previousLine = this.line;
            var previousColumn = this.column;
            var next = undefined;
            var output = this.scan();
            if (output != null) {
                // just incase the inner scan method returned an error
                if (output.error != null) {
                    this.setMode(mode);
                    return output;
                }
                next = output.token;
            }
            if (next == null) {
                next = new CssToken(this.index, this.column, this.line, CssTokenType.EOF, 'end of file');
            }
            var isMatchingType = false;
            if (type == CssTokenType.IdentifierOrNumber) {
                // TODO (matsko): implement array traversal for lookup here
                isMatchingType = next.type == CssTokenType.Number || next.type == CssTokenType.Identifier;
            }
            else {
                isMatchingType = next.type == type;
            }
            // before throwing the error we need to bring back the former
            // mode so that the parser can recover...
            this.setMode(mode);
            var error = null;
            if (!isMatchingType || (value != null && value != next.strValue)) {
                var errorMessage = CssTokenType[next.type] + ' does not match expected ' + CssTokenType[type] + ' value';
                if (value != null) {
                    errorMessage += ' ("' + next.strValue + '" should match "' + value + '")';
                }
                error = cssScannerError(next, generateErrorMessage(this.input, errorMessage, next.strValue, previousIndex, previousLine, previousColumn));
            }
            return new LexedCssResult(error, next);
        };
        CssScanner.prototype.scan = function () {
            var trackWS = _trackWhitespace(this._currentMode);
            if (this.index == 0 && !trackWS) { // first scan
                this.consumeWhitespace();
            }
            var token = this._scan();
            if (token == null)
                return null;
            var error = this._currentError;
            this._currentError = null;
            if (!trackWS) {
                this.consumeWhitespace();
            }
            return new LexedCssResult(error, token);
        };
        /** @internal */
        CssScanner.prototype._scan = function () {
            var peek = this.peek;
            var peekPeek = this.peekPeek;
            if (peek == chars.$EOF)
                return null;
            if (isCommentStart(peek, peekPeek)) {
                // even if comments are not tracked we still lex the
                // comment so we can move the pointer forward
                var commentToken = this.scanComment();
                if (this._trackComments) {
                    return commentToken;
                }
            }
            if (_trackWhitespace(this._currentMode) && (chars.isWhitespace(peek) || isNewline(peek))) {
                return this.scanWhitespace();
            }
            peek = this.peek;
            peekPeek = this.peekPeek;
            if (peek == chars.$EOF)
                return null;
            if (isStringStart(peek, peekPeek)) {
                return this.scanString();
            }
            // something like url(cool)
            if (this._currentMode == CssLexerMode.STYLE_VALUE_FUNCTION) {
                return this.scanCssValueFunction();
            }
            var isModifier = peek == chars.$PLUS || peek == chars.$MINUS;
            var digitA = isModifier ? false : chars.isDigit(peek);
            var digitB = chars.isDigit(peekPeek);
            if (digitA || (isModifier && (peekPeek == chars.$PERIOD || digitB)) ||
                (peek == chars.$PERIOD && digitB)) {
                return this.scanNumber();
            }
            if (peek == chars.$AT) {
                return this.scanAtExpression();
            }
            if (isIdentifierStart(peek, peekPeek)) {
                return this.scanIdentifier();
            }
            if (isValidCssCharacter(peek, this._currentMode)) {
                return this.scanCharacter();
            }
            return this.error("Unexpected character [" + String.fromCharCode(peek) + "]");
        };
        CssScanner.prototype.scanComment = function () {
            if (this.assertCondition(isCommentStart(this.peek, this.peekPeek), 'Expected comment start value')) {
                return null;
            }
            var start = this.index;
            var startingColumn = this.column;
            var startingLine = this.line;
            this.advance(); // /
            this.advance(); // *
            while (!isCommentEnd(this.peek, this.peekPeek)) {
                if (this.peek == chars.$EOF) {
                    this.error('Unterminated comment');
                }
                this.advance();
            }
            this.advance(); // *
            this.advance(); // /
            var str = this.input.substring(start, this.index);
            return new CssToken(start, startingColumn, startingLine, CssTokenType.Comment, str);
        };
        CssScanner.prototype.scanWhitespace = function () {
            var start = this.index;
            var startingColumn = this.column;
            var startingLine = this.line;
            while (chars.isWhitespace(this.peek) && this.peek != chars.$EOF) {
                this.advance();
            }
            var str = this.input.substring(start, this.index);
            return new CssToken(start, startingColumn, startingLine, CssTokenType.Whitespace, str);
        };
        CssScanner.prototype.scanString = function () {
            if (this.assertCondition(isStringStart(this.peek, this.peekPeek), 'Unexpected non-string starting value')) {
                return null;
            }
            var target = this.peek;
            var start = this.index;
            var startingColumn = this.column;
            var startingLine = this.line;
            var previous = target;
            this.advance();
            while (!isCharMatch(target, previous, this.peek)) {
                if (this.peek == chars.$EOF || isNewline(this.peek)) {
                    this.error('Unterminated quote');
                }
                previous = this.peek;
                this.advance();
            }
            if (this.assertCondition(this.peek == target, 'Unterminated quote')) {
                return null;
            }
            this.advance();
            var str = this.input.substring(start, this.index);
            return new CssToken(start, startingColumn, startingLine, CssTokenType.String, str);
        };
        CssScanner.prototype.scanNumber = function () {
            var start = this.index;
            var startingColumn = this.column;
            if (this.peek == chars.$PLUS || this.peek == chars.$MINUS) {
                this.advance();
            }
            var periodUsed = false;
            while (chars.isDigit(this.peek) || this.peek == chars.$PERIOD) {
                if (this.peek == chars.$PERIOD) {
                    if (periodUsed) {
                        this.error('Unexpected use of a second period value');
                    }
                    periodUsed = true;
                }
                this.advance();
            }
            var strValue = this.input.substring(start, this.index);
            return new CssToken(start, startingColumn, this.line, CssTokenType.Number, strValue);
        };
        CssScanner.prototype.scanIdentifier = function () {
            if (this.assertCondition(isIdentifierStart(this.peek, this.peekPeek), 'Expected identifier starting value')) {
                return null;
            }
            var start = this.index;
            var startingColumn = this.column;
            while (isIdentifierPart(this.peek)) {
                this.advance();
            }
            var strValue = this.input.substring(start, this.index);
            return new CssToken(start, startingColumn, this.line, CssTokenType.Identifier, strValue);
        };
        CssScanner.prototype.scanCssValueFunction = function () {
            var start = this.index;
            var startingColumn = this.column;
            var parenBalance = 1;
            while (this.peek != chars.$EOF && parenBalance > 0) {
                this.advance();
                if (this.peek == chars.$LPAREN) {
                    parenBalance++;
                }
                else if (this.peek == chars.$RPAREN) {
                    parenBalance--;
                }
            }
            var strValue = this.input.substring(start, this.index);
            return new CssToken(start, startingColumn, this.line, CssTokenType.Identifier, strValue);
        };
        CssScanner.prototype.scanCharacter = function () {
            var start = this.index;
            var startingColumn = this.column;
            if (this.assertCondition(isValidCssCharacter(this.peek, this._currentMode), charStr(this.peek) + ' is not a valid CSS character')) {
                return null;
            }
            var c = this.input.substring(start, start + 1);
            this.advance();
            return new CssToken(start, startingColumn, this.line, CssTokenType.Character, c);
        };
        CssScanner.prototype.scanAtExpression = function () {
            if (this.assertCondition(this.peek == chars.$AT, 'Expected @ value')) {
                return null;
            }
            var start = this.index;
            var startingColumn = this.column;
            this.advance();
            if (isIdentifierStart(this.peek, this.peekPeek)) {
                var ident = this.scanIdentifier();
                var strValue = '@' + ident.strValue;
                return new CssToken(start, startingColumn, this.line, CssTokenType.AtKeyword, strValue);
            }
            else {
                return this.scanCharacter();
            }
        };
        CssScanner.prototype.assertCondition = function (status, errorMessage) {
            if (!status) {
                this.error(errorMessage);
                return true;
            }
            return false;
        };
        CssScanner.prototype.error = function (message, errorTokenValue, doNotAdvance) {
            if (errorTokenValue === void 0) { errorTokenValue = null; }
            if (doNotAdvance === void 0) { doNotAdvance = false; }
            var index = this.index;
            var column = this.column;
            var line = this.line;
            errorTokenValue = errorTokenValue || String.fromCharCode(this.peek);
            var invalidToken = new CssToken(index, column, line, CssTokenType.Invalid, errorTokenValue);
            var errorMessage = generateErrorMessage(this.input, message, errorTokenValue, index, line, column);
            if (!doNotAdvance) {
                this.advance();
            }
            this._currentError = cssScannerError(invalidToken, errorMessage);
            return invalidToken;
        };
        return CssScanner;
    }());
    exports.CssScanner = CssScanner;
    function isCharMatch(target, previous, code) {
        return code == target && previous != chars.$BACKSLASH;
    }
    function isCommentStart(code, next) {
        return code == chars.$SLASH && next == chars.$STAR;
    }
    function isCommentEnd(code, next) {
        return code == chars.$STAR && next == chars.$SLASH;
    }
    function isStringStart(code, next) {
        var target = code;
        if (target == chars.$BACKSLASH) {
            target = next;
        }
        return target == chars.$DQ || target == chars.$SQ;
    }
    function isIdentifierStart(code, next) {
        var target = code;
        if (target == chars.$MINUS) {
            target = next;
        }
        return chars.isAsciiLetter(target) || target == chars.$BACKSLASH || target == chars.$MINUS ||
            target == chars.$_;
    }
    function isIdentifierPart(target) {
        return chars.isAsciiLetter(target) || target == chars.$BACKSLASH || target == chars.$MINUS ||
            target == chars.$_ || chars.isDigit(target);
    }
    function isValidPseudoSelectorCharacter(code) {
        switch (code) {
            case chars.$LPAREN:
            case chars.$RPAREN:
                return true;
            default:
                return false;
        }
    }
    function isValidKeyframeBlockCharacter(code) {
        return code == chars.$PERCENT;
    }
    function isValidAttributeSelectorCharacter(code) {
        // value^*|$~=something
        switch (code) {
            case chars.$$:
            case chars.$PIPE:
            case chars.$CARET:
            case chars.$TILDA:
            case chars.$STAR:
            case chars.$EQ:
                return true;
            default:
                return false;
        }
    }
    function isValidSelectorCharacter(code) {
        // selector [ key   = value ]
        // IDENT    C IDENT C IDENT C
        // #id, .class, *+~>
        // tag:PSEUDO
        switch (code) {
            case chars.$HASH:
            case chars.$PERIOD:
            case chars.$TILDA:
            case chars.$STAR:
            case chars.$PLUS:
            case chars.$GT:
            case chars.$COLON:
            case chars.$PIPE:
            case chars.$COMMA:
            case chars.$LBRACKET:
            case chars.$RBRACKET:
                return true;
            default:
                return false;
        }
    }
    function isValidStyleBlockCharacter(code) {
        // key:value;
        // key:calc(something ... )
        switch (code) {
            case chars.$HASH:
            case chars.$SEMICOLON:
            case chars.$COLON:
            case chars.$PERCENT:
            case chars.$SLASH:
            case chars.$BACKSLASH:
            case chars.$BANG:
            case chars.$PERIOD:
            case chars.$LPAREN:
            case chars.$RPAREN:
                return true;
            default:
                return false;
        }
    }
    function isValidMediaQueryRuleCharacter(code) {
        // (min-width: 7.5em) and (orientation: landscape)
        switch (code) {
            case chars.$LPAREN:
            case chars.$RPAREN:
            case chars.$COLON:
            case chars.$PERCENT:
            case chars.$PERIOD:
                return true;
            default:
                return false;
        }
    }
    function isValidAtRuleCharacter(code) {
        // @document url(http://www.w3.org/page?something=on#hash),
        switch (code) {
            case chars.$LPAREN:
            case chars.$RPAREN:
            case chars.$COLON:
            case chars.$PERCENT:
            case chars.$PERIOD:
            case chars.$SLASH:
            case chars.$BACKSLASH:
            case chars.$HASH:
            case chars.$EQ:
            case chars.$QUESTION:
            case chars.$AMPERSAND:
            case chars.$STAR:
            case chars.$COMMA:
            case chars.$MINUS:
            case chars.$PLUS:
                return true;
            default:
                return false;
        }
    }
    function isValidStyleFunctionCharacter(code) {
        switch (code) {
            case chars.$PERIOD:
            case chars.$MINUS:
            case chars.$PLUS:
            case chars.$STAR:
            case chars.$SLASH:
            case chars.$LPAREN:
            case chars.$RPAREN:
            case chars.$COMMA:
                return true;
            default:
                return false;
        }
    }
    function isValidBlockCharacter(code) {
        // @something { }
        // IDENT
        return code == chars.$AT;
    }
    function isValidCssCharacter(code, mode) {
        switch (mode) {
            case CssLexerMode.ALL:
            case CssLexerMode.ALL_TRACK_WS:
                return true;
            case CssLexerMode.SELECTOR:
                return isValidSelectorCharacter(code);
            case CssLexerMode.PSEUDO_SELECTOR_WITH_ARGUMENTS:
                return isValidPseudoSelectorCharacter(code);
            case CssLexerMode.ATTRIBUTE_SELECTOR:
                return isValidAttributeSelectorCharacter(code);
            case CssLexerMode.MEDIA_QUERY:
                return isValidMediaQueryRuleCharacter(code);
            case CssLexerMode.AT_RULE_QUERY:
                return isValidAtRuleCharacter(code);
            case CssLexerMode.KEYFRAME_BLOCK:
                return isValidKeyframeBlockCharacter(code);
            case CssLexerMode.STYLE_BLOCK:
            case CssLexerMode.STYLE_VALUE:
                return isValidStyleBlockCharacter(code);
            case CssLexerMode.STYLE_CALC_FUNCTION:
                return isValidStyleFunctionCharacter(code);
            case CssLexerMode.BLOCK:
                return isValidBlockCharacter(code);
            default:
                return false;
        }
    }
    function charCode(input, index) {
        return index >= input.length ? chars.$EOF : input.charCodeAt(index);
    }
    function charStr(code) {
        return String.fromCharCode(code);
    }
    function isNewline(code) {
        switch (code) {
            case chars.$FF:
            case chars.$CR:
            case chars.$LF:
            case chars.$VTAB:
                return true;
            default:
                return false;
        }
    }
    exports.isNewline = isNewline;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3NzX2xleGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tcGlsZXIvc3JjL2Nzc19wYXJzZXIvY3NzX2xleGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7Ozs7Ozs7Ozs7O0lBR0gsbURBQWtDO0lBRWxDLElBQVksWUFXWDtJQVhELFdBQVksWUFBWTtRQUN0Qiw2Q0FBRyxDQUFBO1FBQ0gsbURBQU0sQ0FBQTtRQUNOLHFEQUFPLENBQUE7UUFDUCwyREFBVSxDQUFBO1FBQ1YsbURBQU0sQ0FBQTtRQUNOLDJFQUFrQixDQUFBO1FBQ2xCLHlEQUFTLENBQUE7UUFDVCx5REFBUyxDQUFBO1FBQ1QsMkRBQVUsQ0FBQTtRQUNWLHFEQUFPLENBQUE7SUFDVCxDQUFDLEVBWFcsWUFBWSxHQUFaLG9CQUFZLEtBQVosb0JBQVksUUFXdkI7SUFFRCxJQUFZLFlBZVg7SUFmRCxXQUFZLFlBQVk7UUFDdEIsNkNBQUcsQ0FBQTtRQUNILCtEQUFZLENBQUE7UUFDWix1REFBUSxDQUFBO1FBQ1IscUVBQWUsQ0FBQTtRQUNmLG1HQUE4QixDQUFBO1FBQzlCLDJFQUFrQixDQUFBO1FBQ2xCLGlFQUFhLENBQUE7UUFDYiw2REFBVyxDQUFBO1FBQ1gsaURBQUssQ0FBQTtRQUNMLG1FQUFjLENBQUE7UUFDZCw4REFBVyxDQUFBO1FBQ1gsOERBQVcsQ0FBQTtRQUNYLGdGQUFvQixDQUFBO1FBQ3BCLDhFQUFtQixDQUFBO0lBQ3JCLENBQUMsRUFmVyxZQUFZLEdBQVosb0JBQVksS0FBWixvQkFBWSxRQWV2QjtJQUVEO1FBQ0Usd0JBQW1CLEtBQWlCLEVBQVMsS0FBZTtZQUF6QyxVQUFLLEdBQUwsS0FBSyxDQUFZO1lBQVMsVUFBSyxHQUFMLEtBQUssQ0FBVTtRQUFHLENBQUM7UUFDbEUscUJBQUM7SUFBRCxDQUFDLEFBRkQsSUFFQztJQUZZLHdDQUFjO0lBSTNCLFNBQWdCLG9CQUFv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LFFBQVEsSUFBSSxFQUFFO1lBQ1osS0FBSyxLQUFLLENBQUMsR0FBRyxDQUFDO1lBQ2YsS0FBSyxLQUFLLENBQUMsR0FBRyxDQUFDO1lBQ2YsS0FBSyxLQUFLLENBQUMsR0FBRyxDQUFDO1lBQ2YsS0FBSyxLQUFLLENBQUMsS0FBSztnQkFDZCxPQUFPLElBQUksQ0FBQztZQUVkO2dCQUNFLE9BQU8sS0FBSyxDQUFDO1NBQ2hCO0lBQ0gsQ0FBQztJQVhELDhCQVdDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5cbmltcG9ydCAqIGFzIGNoYXJzIGZyb20gJy4uL2NoYXJzJztcblxuZXhwb3J0IGVudW0gQ3NzVG9rZW5UeXBlIHtcbiAgRU9GLFxuICBTdHJpbmcsXG4gIENvbW1lbnQsXG4gIElkZW50aWZpZXIsXG4gIE51bWJlcixcbiAgSWRlbnRpZmllck9yTnVtYmVyLFxuICBBdEtleXdvcmQsXG4gIENoYXJhY3RlcixcbiAgV2hpdGVzcGFjZSxcbiAgSW52YWxpZFxufVxuXG5leHBvcnQgZW51bSBDc3NMZXhlck1vZGUge1xuICBBTEwsXG4gIEFMTF9UUkFDS19XUyxcbiAgU0VMRUNUT1IsXG4gIFBTRVVET19TRUxFQ1RPUixcbiAgUFNFVURPX1NFTEVDVE9SX1dJVEhfQVJHVU1FTlRTLFxuICBBVFRSSUJVVEVfU0VMRUNUT1IsXG4gIEFUX1JVTEVfUVVFUlksXG4gIE1FRElBX1FVRVJZLFxuICBCTE9DSyxcbiAgS0VZRlJBTUVfQkxPQ0ssXG4gIFNUWUxFX0JMT0NLLFxuICBTVFlMRV9WQUxVRSxcbiAgU1RZTEVfVkFMVUVfRlVOQ1RJT04sXG4gIFNUWUxFX0NBTENfRlVOQ1RJT05cbn1cblxuZXhwb3J0IGNsYXNzIExleGVkQ3NzUmVzdWx0IHtcbiAgY29uc3RydWN0b3IocHVibGljIGVycm9yOiBFcnJvcnxudWxsLCBwdWJsaWMgdG9rZW46IENzc1Rva2VuKSB7fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVFcnJvck1lc3NhZ2UoXG4gICAgaW5wdXQ6IHN0cmluZywgbWVzc2FnZTogc3RyaW5nLCBlcnJvclZhbHVlOiBzdHJpbmcsIGluZGV4OiBudW1iZXIsIHJvdzogbnVtYmVyLFxuICAgIGNvbHVtbjogbnVtYmVyKTogc3RyaW5nIHtcbiAgcmV0dXJuIGAke21lc3NhZ2V9IGF0IGNvbHVtbiAke3Jvd306JHtjb2x1bW59IGluIGV4cHJlc3Npb24gW2AgK1xuICAgICAgZmluZFByb2JsZW1Db2RlKGlucHV0LCBlcnJvclZhbHVlLCBpbmRleCwgY29sdW1uKSArICddJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRQcm9ibGVtQ29kZShcbiAgICBpbnB1dDogc3RyaW5nLCBlcnJvclZhbHVlOiBzdHJpbmcsIGluZGV4OiBudW1iZXIsIGNvbHVtbjogbnVtYmVyKTogc3RyaW5nIHtcbiAgbGV0IGVuZE9mUHJvYmxlbUxpbmUgPSBpbmRleDtcbiAgbGV0IGN1cnJlbnQgPSBjaGFyQ29kZShpbnB1dCwgaW5kZXgpO1xuICB3aGlsZSAoY3VycmVudCA+IDAgJiYgIWlzTmV3bGluZShjdXJyZW50KSkge1xuICAgIGN1cnJlbnQgPSBjaGFyQ29kZShpbnB1dCwgKytlbmRPZlByb2JsZW1MaW5lKTtcbiAgfVxuICBjb25zdCBjaG9wcGVkU3RyaW5nID0gaW5wdXQuc3Vic3RyaW5nKDAsIGVuZE9mUHJvYmxlbUxpbmUpO1xuICBsZXQgcG9pbnRlclBhZGRpbmcgPSAnJztcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2x1bW47IGkrKykge1xuICAgIHBvaW50ZXJQYWRkaW5nICs9ICcgJztcbiAgfVxuICBsZXQgcG9pbnRlclN0cmluZyA9ICcnO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGVycm9yVmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICBwb2ludGVyU3RyaW5nICs9ICdeJztcbiAgfVxuICByZXR1cm4gY2hvcHBlZFN0cmluZyArICdcXG4nICsgcG9pbnRlclBhZGRpbmcgKyBwb2ludGVyU3RyaW5nICsgJ1xcbic7XG59XG5cbmV4cG9ydCBjbGFzcyBDc3NUb2tlbiB7XG4gIG51bVZhbHVlOiBudW1iZXI7XG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcHVibGljIGluZGV4OiBudW1iZXIsIHB1YmxpYyBjb2x1bW46IG51bWJlciwgcHVibGljIGxpbmU6IG51bWJlciwgcHVibGljIHR5cGU6IENzc1Rva2VuVHlwZSxcbiAgICAgIHB1YmxpYyBzdHJWYWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5udW1WYWx1ZSA9IGNoYXJDb2RlKHN0clZhbHVlLCAwKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ3NzTGV4ZXIge1xuICBzY2FuKHRleHQ6IHN0cmluZywgdHJhY2tDb21tZW50czogYm9vbGVhbiA9IGZhbHNlKTogQ3NzU2Nhbm5lciB7XG4gICAgcmV0dXJuIG5ldyBDc3NTY2FubmVyKHRleHQsIHRyYWNrQ29tbWVudHMpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjc3NTY2FubmVyRXJyb3IodG9rZW46IENzc1Rva2VuLCBtZXNzYWdlOiBzdHJpbmcpOiBFcnJvciB7XG4gIGNvbnN0IGVycm9yID0gRXJyb3IoJ0Nzc1BhcnNlRXJyb3I6ICcgKyBtZXNzYWdlKTtcbiAgKGVycm9yIGFzIGFueSlbRVJST1JfUkFXX01FU1NBR0VdID0gbWVzc2FnZTtcbiAgKGVycm9yIGFzIGFueSlbRVJST1JfVE9LRU5dID0gdG9rZW47XG4gIHJldHVybiBlcnJvcjtcbn1cblxuY29uc3QgRVJST1JfVE9LRU4gPSAnbmdUb2tlbic7XG5jb25zdCBFUlJPUl9SQVdfTUVTU0FHRSA9ICduZ1Jhd01lc3NhZ2UnO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmF3TWVzc2FnZShlcnJvcjogRXJyb3IpOiBzdHJpbmcge1xuICByZXR1cm4gKGVycm9yIGFzIGFueSlbRVJST1JfUkFXX01FU1NBR0VdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VG9rZW4oZXJyb3I6IEVycm9yKTogQ3NzVG9rZW4ge1xuICByZXR1cm4gKGVycm9yIGFzIGFueSlbRVJST1JfVE9LRU5dO1xufVxuXG5mdW5jdGlvbiBfdHJhY2tXaGl0ZXNwYWNlKG1vZGU6IENzc0xleGVyTW9kZSkge1xuICBzd2l0Y2ggKG1vZGUpIHtcbiAgICBjYXNlIENzc0xleGVyTW9kZS5TRUxFQ1RPUjpcbiAgICBjYXNlIENzc0xleGVyTW9kZS5QU0VVRE9fU0VMRUNUT1I6XG4gICAgY2FzZSBDc3NMZXhlck1vZGUuQUxMX1RSQUNLX1dTOlxuICAgIGNhc2UgQ3NzTGV4ZXJNb2RlLlNUWUxFX1ZBTFVFOlxuICAgICAgcmV0dXJuIHRydWU7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDc3NTY2FubmVyIHtcbiAgLy8gVE9ETyhpc3N1ZS8yNDU3MSk6IHJlbW92ZSAnIScuXG4gIHBlZWshOiBudW1iZXI7XG4gIHBlZWtQZWVrOiBudW1iZXI7XG4gIGxlbmd0aDogbnVtYmVyID0gMDtcbiAgaW5kZXg6IG51bWJlciA9IC0xO1xuICBjb2x1bW46IG51bWJlciA9IC0xO1xuICBsaW5lOiBudW1iZXIgPSAwO1xuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX2N1cnJlbnRNb2RlOiBDc3NMZXhlck1vZGUgPSBDc3NMZXhlck1vZGUuQkxPQ0s7XG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX2N1cnJlbnRFcnJvcjogRXJyb3J8bnVsbCA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGlucHV0OiBzdHJpbmcsIHByaXZhdGUgX3RyYWNrQ29tbWVudHM6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgIHRoaXMubGVuZ3RoID0gdGhpcy5pbnB1dC5sZW5ndGg7XG4gICAgdGhpcy5wZWVrUGVlayA9IHRoaXMucGVla0F0KDApO1xuICAgIHRoaXMuYWR2YW5jZSgpO1xuICB9XG5cbiAgZ2V0TW9kZSgpOiBDc3NMZXhlck1vZGUge1xuICAgIHJldHVybiB0aGlzLl9jdXJyZW50TW9kZTtcbiAgfVxuXG4gIHNldE1vZGUobW9kZTogQ3NzTGV4ZXJNb2RlKSB7XG4gICAgaWYgKHRoaXMuX2N1cnJlbnRNb2RlICE9IG1vZGUpIHtcbiAgICAgIGlmIChfdHJhY2tXaGl0ZXNwYWNlKHRoaXMuX2N1cnJlbnRNb2RlKSAmJiAhX3RyYWNrV2hpdGVzcGFjZShtb2RlKSkge1xuICAgICAgICB0aGlzLmNvbnN1bWVXaGl0ZXNwYWNlKCk7XG4gICAgICB9XG4gICAgICB0aGlzLl9jdXJyZW50TW9kZSA9IG1vZGU7XG4gICAgfVxuICB9XG5cbiAgYWR2YW5jZSgpOiB2b2lkIHtcbiAgICBpZiAoaXNOZXdsaW5lKHRoaXMucGVlaykpIHtcbiAgICAgIHRoaXMuY29sdW1uID0gMDtcbiAgICAgIHRoaXMubGluZSsrO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvbHVtbisrO1xuICAgIH1cblxuICAgIHRoaXMuaW5kZXgrKztcbiAgICB0aGlzLnBlZWsgPSB0aGlzLnBlZWtQZWVrO1xuICAgIHRoaXMucGVla1BlZWsgPSB0aGlzLnBlZWtBdCh0aGlzLmluZGV4ICsgMSk7XG4gIH1cblxuICBwZWVrQXQoaW5kZXg6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIGluZGV4ID49IHRoaXMubGVuZ3RoID8gY2hhcnMuJEVPRiA6IHRoaXMuaW5wdXQuY2hhckNvZGVBdChpbmRleCk7XG4gIH1cblxuICBjb25zdW1lRW1wdHlTdGF0ZW1lbnRzKCk6IHZvaWQge1xuICAgIHRoaXMuY29uc3VtZVdoaXRlc3BhY2UoKTtcbiAgICB3aGlsZSAodGhpcy5wZWVrID09IGNoYXJzLiRTRU1JQ09MT04pIHtcbiAgICAgIHRoaXMuYWR2YW5jZSgpO1xuICAgICAgdGhpcy5jb25zdW1lV2hpdGVzcGFjZSgpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN1bWVXaGl0ZXNwYWNlKCk6IHZvaWQge1xuICAgIHdoaWxlIChjaGFycy5pc1doaXRlc3BhY2UodGhpcy5wZWVrKSB8fCBpc05ld2xpbmUodGhpcy5wZWVrKSkge1xuICAgICAgdGhpcy5hZHZhbmNlKCk7XG4gICAgICBpZiAoIXRoaXMuX3RyYWNrQ29tbWVudHMgJiYgaXNDb21tZW50U3RhcnQodGhpcy5wZWVrLCB0aGlzLnBlZWtQZWVrKSkge1xuICAgICAgICB0aGlzLmFkdmFuY2UoKTsgIC8vIC9cbiAgICAgICAgdGhpcy5hZHZhbmNlKCk7ICAvLyAqXG4gICAgICAgIHdoaWxlICghaXNDb21tZW50RW5kKHRoaXMucGVlaywgdGhpcy5wZWVrUGVlaykpIHtcbiAgICAgICAgICBpZiAodGhpcy5wZWVrID09IGNoYXJzLiRFT0YpIHtcbiAgICAgICAgICAgIHRoaXMuZXJyb3IoJ1VudGVybWluYXRlZCBjb21tZW50Jyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuYWR2YW5jZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWR2YW5jZSgpOyAgLy8gKlxuICAgICAgICB0aGlzLmFkdmFuY2UoKTsgIC8vIC9cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdW1lKHR5cGU6IENzc1Rva2VuVHlwZSwgdmFsdWU6IHN0cmluZ3xudWxsID0gbnVsbCk6IExleGVkQ3NzUmVzdWx0IHtcbiAgICBjb25zdCBtb2RlID0gdGhpcy5fY3VycmVudE1vZGU7XG5cbiAgICB0aGlzLnNldE1vZGUoX3RyYWNrV2hpdGVzcGFjZShtb2RlKSA/IENzc0xleGVyTW9kZS5BTExfVFJBQ0tfV1MgOiBDc3NMZXhlck1vZGUuQUxMKTtcblxuICAgIGNvbnN0IHByZXZpb3VzSW5kZXggPSB0aGlzLmluZGV4O1xuICAgIGNvbnN0IHByZXZpb3VzTGluZSA9IHRoaXMubGluZTtcbiAgICBjb25zdCBwcmV2aW91c0NvbHVtbiA9IHRoaXMuY29sdW1uO1xuXG4gICAgbGV0IG5leHQ6IENzc1Rva2VuID0gdW5kZWZpbmVkITtcbiAgICBjb25zdCBvdXRwdXQgPSB0aGlzLnNjYW4oKTtcbiAgICBpZiAob3V0cHV0ICE9IG51bGwpIHtcbiAgICAgIC8vIGp1c3QgaW5jYXNlIHRoZSBpbm5lciBzY2FuIG1ldGhvZCByZXR1cm5lZCBhbiBlcnJvclxuICAgICAgaWYgKG91dHB1dC5lcnJvciAhPSBudWxsKSB7XG4gICAgICAgIHRoaXMuc2V0TW9kZShtb2RlKTtcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICAgIH1cblxuICAgICAgbmV4dCA9IG91dHB1dC50b2tlbjtcbiAgICB9XG5cbiAgICBpZiAobmV4dCA9PSBudWxsKSB7XG4gICAgICBuZXh0ID0gbmV3IENzc1Rva2VuKHRoaXMuaW5kZXgsIHRoaXMuY29sdW1uLCB0aGlzLmxpbmUsIENzc1Rva2VuVHlwZS5FT0YsICdlbmQgb2YgZmlsZScpO1xuICAgIH1cblxuICAgIGxldCBpc01hdGNoaW5nVHlwZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGlmICh0eXBlID09IENzc1Rva2VuVHlwZS5JZGVudGlmaWVyT3JOdW1iZXIpIHtcbiAgICAgIC8vIFRPRE8gKG1hdHNrbyk6IGltcGxlbWVudCBhcnJheSB0cmF2ZXJzYWwgZm9yIGxvb2t1cCBoZXJlXG4gICAgICBpc01hdGNoaW5nVHlwZSA9IG5leHQudHlwZSA9PSBDc3NUb2tlblR5cGUuTnVtYmVyIHx8IG5leHQudHlwZSA9PSBDc3NUb2tlblR5cGUuSWRlbnRpZmllcjtcbiAgICB9IGVsc2Uge1xuICAgICAgaXNNYXRjaGluZ1R5cGUgPSBuZXh0LnR5cGUgPT0gdHlwZTtcbiAgICB9XG5cbiAgICAvLyBiZWZvcmUgdGhyb3dpbmcgdGhlIGVycm9yIHdlIG5lZWQgdG8gYnJpbmcgYmFjayB0aGUgZm9ybWVyXG4gICAgLy8gbW9kZSBzbyB0aGF0IHRoZSBwYXJzZXIgY2FuIHJlY292ZXIuLi5cbiAgICB0aGlzLnNldE1vZGUobW9kZSk7XG5cbiAgICBsZXQgZXJyb3I6IEVycm9yfG51bGwgPSBudWxsO1xuICAgIGlmICghaXNNYXRjaGluZ1R5cGUgfHwgKHZhbHVlICE9IG51bGwgJiYgdmFsdWUgIT0gbmV4dC5zdHJWYWx1ZSkpIHtcbiAgICAgIGxldCBlcnJvck1lc3NhZ2UgPVxuICAgICAgICAgIENzc1Rva2VuVHlwZVtuZXh0LnR5cGVdICsgJyBkb2VzIG5vdCBtYXRjaCBleHBlY3RlZCAnICsgQ3NzVG9rZW5UeXBlW3R5cGVdICsgJyB2YWx1ZSc7XG5cbiAgICAgIGlmICh2YWx1ZSAhPSBudWxsKSB7XG4gICAgICAgIGVycm9yTWVzc2FnZSArPSAnIChcIicgKyBuZXh0LnN0clZhbHVlICsgJ1wiIHNob3VsZCBtYXRjaCBcIicgKyB2YWx1ZSArICdcIiknO1xuICAgICAgfVxuXG4gICAgICBlcnJvciA9IGNzc1NjYW5uZXJFcnJvcihcbiAgICAgICAgICBuZXh0LFxuICAgICAgICAgIGdlbmVyYXRlRXJyb3JNZXNzYWdlKFxuICAgICAgICAgICAgICB0aGlzLmlucHV0LCBlcnJvck1lc3NhZ2UsIG5leHQuc3RyVmFsdWUsIHByZXZpb3VzSW5kZXgsIHByZXZpb3VzTGluZSxcbiAgICAgICAgICAgICAgcHJldmlvdXNDb2x1bW4pKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IExleGVkQ3NzUmVzdWx0KGVycm9yLCBuZXh0KTtcbiAgfVxuXG5cbiAgc2NhbigpOiBMZXhlZENzc1Jlc3VsdHxudWxsIHtcbiAgICBjb25zdCB0cmFja1dTID0gX3RyYWNrV2hpdGVzcGFjZSh0aGlzLl9jdXJyZW50TW9kZSk7XG4gICAgaWYgKHRoaXMuaW5kZXggPT0gMCAmJiAhdHJhY2tXUykgeyAgLy8gZmlyc3Qgc2NhblxuICAgICAgdGhpcy5jb25zdW1lV2hpdGVzcGFjZSgpO1xuICAgIH1cblxuICAgIGNvbnN0IHRva2VuID0gdGhpcy5fc2NhbigpO1xuICAgIGlmICh0b2tlbiA9PSBudWxsKSByZXR1cm4gbnVsbDtcblxuICAgIGNvbnN0IGVycm9yID0gdGhpcy5fY3VycmVudEVycm9yITtcbiAgICB0aGlzLl9jdXJyZW50RXJyb3IgPSBudWxsO1xuXG4gICAgaWYgKCF0cmFja1dTKSB7XG4gICAgICB0aGlzLmNvbnN1bWVXaGl0ZXNwYWNlKCk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgTGV4ZWRDc3NSZXN1bHQoZXJyb3IsIHRva2VuKTtcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX3NjYW4oKTogQ3NzVG9rZW58bnVsbCB7XG4gICAgbGV0IHBlZWsgPSB0aGlzLnBlZWs7XG4gICAgbGV0IHBlZWtQZWVrID0gdGhpcy5wZWVrUGVlaztcbiAgICBpZiAocGVlayA9PSBjaGFycy4kRU9GKSByZXR1cm4gbnVsbDtcblxuICAgIGlmIChpc0NvbW1lbnRTdGFydChwZWVrLCBwZWVrUGVlaykpIHtcbiAgICAgIC8vIGV2ZW4gaWYgY29tbWVudHMgYXJlIG5vdCB0cmFja2VkIHdlIHN0aWxsIGxleCB0aGVcbiAgICAgIC8vIGNvbW1lbnQgc28gd2UgY2FuIG1vdmUgdGhlIHBvaW50ZXIgZm9yd2FyZFxuICAgICAgY29uc3QgY29tbWVudFRva2VuID0gdGhpcy5zY2FuQ29tbWVudCgpO1xuICAgICAgaWYgKHRoaXMuX3RyYWNrQ29tbWVudHMpIHtcbiAgICAgICAgcmV0dXJuIGNvbW1lbnRUb2tlbjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoX3RyYWNrV2hpdGVzcGFjZSh0aGlzLl9jdXJyZW50TW9kZSkgJiYgKGNoYXJzLmlzV2hpdGVzcGFjZShwZWVrKSB8fCBpc05ld2xpbmUocGVlaykpKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2FuV2hpdGVzcGFjZSgpO1xuICAgIH1cblxuICAgIHBlZWsgPSB0aGlzLnBlZWs7XG4gICAgcGVla1BlZWsgPSB0aGlzLnBlZWtQZWVrO1xuICAgIGlmIChwZWVrID09IGNoYXJzLiRFT0YpIHJldHVybiBudWxsO1xuXG4gICAgaWYgKGlzU3RyaW5nU3RhcnQocGVlaywgcGVla1BlZWspKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2FuU3RyaW5nKCk7XG4gICAgfVxuXG4gICAgLy8gc29tZXRoaW5nIGxpa2UgdXJsKGNvb2wpXG4gICAgaWYgKHRoaXMuX2N1cnJlbnRNb2RlID09IENzc0xleGVyTW9kZS5TVFlMRV9WQUxVRV9GVU5DVElPTikge1xuICAgICAgcmV0dXJuIHRoaXMuc2NhbkNzc1ZhbHVlRnVuY3Rpb24oKTtcbiAgICB9XG5cbiAgICBjb25zdCBpc01vZGlmaWVyID0gcGVlayA9PSBjaGFycy4kUExVUyB8fCBwZWVrID09IGNoYXJzLiRNSU5VUztcbiAgICBjb25zdCBkaWdpdEEgPSBpc01vZGlmaWVyID8gZmFsc2UgOiBjaGFycy5pc0RpZ2l0KHBlZWspO1xuICAgIGNvbnN0IGRpZ2l0QiA9IGNoYXJzLmlzRGlnaXQocGVla1BlZWspO1xuICAgIGlmIChkaWdpdEEgfHwgKGlzTW9kaWZpZXIgJiYgKHBlZWtQZWVrID09IGNoYXJzLiRQRVJJT0QgfHwgZGlnaXRCKSkgfHxcbiAgICAgICAgKHBlZWsgPT0gY2hhcnMuJFBFUklPRCAmJiBkaWdpdEIpKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2FuTnVtYmVyKCk7XG4gICAgfVxuXG4gICAgaWYgKHBlZWsgPT0gY2hhcnMuJEFUKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2FuQXRFeHByZXNzaW9uKCk7XG4gICAgfVxuXG4gICAgaWYgKGlzSWRlbnRpZmllclN0YXJ0KHBlZWssIHBlZWtQZWVrKSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NhbklkZW50aWZpZXIoKTtcbiAgICB9XG5cbiAgICBpZiAoaXNWYWxpZENzc0NoYXJhY3RlcihwZWVrLCB0aGlzLl9jdXJyZW50TW9kZSkpIHtcbiAgICAgIHJldHVybiB0aGlzLnNjYW5DaGFyYWN0ZXIoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5lcnJvcihgVW5leHBlY3RlZCBjaGFyYWN0ZXIgWyR7U3RyaW5nLmZyb21DaGFyQ29kZShwZWVrKX1dYCk7XG4gIH1cblxuICBzY2FuQ29tbWVudCgpOiBDc3NUb2tlbnxudWxsIHtcbiAgICBpZiAodGhpcy5hc3NlcnRDb25kaXRpb24oXG4gICAgICAgICAgICBpc0NvbW1lbnRTdGFydCh0aGlzLnBlZWssIHRoaXMucGVla1BlZWspLCAnRXhwZWN0ZWQgY29tbWVudCBzdGFydCB2YWx1ZScpKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBzdGFydCA9IHRoaXMuaW5kZXg7XG4gICAgY29uc3Qgc3RhcnRpbmdDb2x1bW4gPSB0aGlzLmNvbHVtbjtcbiAgICBjb25zdCBzdGFydGluZ0xpbmUgPSB0aGlzLmxpbmU7XG5cbiAgICB0aGlzLmFkdmFuY2UoKTsgIC8vIC9cbiAgICB0aGlzLmFkdmFuY2UoKTsgIC8vICpcblxuICAgIHdoaWxlICghaXNDb21tZW50RW5kKHRoaXMucGVlaywgdGhpcy5wZWVrUGVlaykpIHtcbiAgICAgIGlmICh0aGlzLnBlZWsgPT0gY2hhcnMuJEVPRikge1xuICAgICAgICB0aGlzLmVycm9yKCdVbnRlcm1pbmF0ZWQgY29tbWVudCcpO1xuICAgICAgfVxuICAgICAgdGhpcy5hZHZhbmNlKCk7XG4gICAgfVxuXG4gICAgdGhpcy5hZHZhbmNlKCk7ICAvLyAqXG4gICAgdGhpcy5hZHZhbmNlKCk7ICAvLyAvXG5cbiAgICBjb25zdCBzdHIgPSB0aGlzLmlucHV0LnN1YnN0cmluZyhzdGFydCwgdGhpcy5pbmRleCk7XG4gICAgcmV0dXJuIG5ldyBDc3NUb2tlbihzdGFydCwgc3RhcnRpbmdDb2x1bW4sIHN0YXJ0aW5nTGluZSwgQ3NzVG9rZW5UeXBlLkNvbW1lbnQsIHN0cik7XG4gIH1cblxuICBzY2FuV2hpdGVzcGFjZSgpOiBDc3NUb2tlbiB7XG4gICAgY29uc3Qgc3RhcnQgPSB0aGlzLmluZGV4O1xuICAgIGNvbnN0IHN0YXJ0aW5nQ29sdW1uID0gdGhpcy5jb2x1bW47XG4gICAgY29uc3Qgc3RhcnRpbmdMaW5lID0gdGhpcy5saW5lO1xuICAgIHdoaWxlIChjaGFycy5pc1doaXRlc3BhY2UodGhpcy5wZWVrKSAmJiB0aGlzLnBlZWsgIT0gY2hhcnMuJEVPRikge1xuICAgICAgdGhpcy5hZHZhbmNlKCk7XG4gICAgfVxuICAgIGNvbnN0IHN0ciA9IHRoaXMuaW5wdXQuc3Vic3RyaW5nKHN0YXJ0LCB0aGlzLmluZGV4KTtcbiAgICByZXR1cm4gbmV3IENzc1Rva2VuKHN0YXJ0LCBzdGFydGluZ0NvbHVtbiwgc3RhcnRpbmdMaW5lLCBDc3NUb2tlblR5cGUuV2hpdGVzcGFjZSwgc3RyKTtcbiAgfVxuXG4gIHNjYW5TdHJpbmcoKTogQ3NzVG9rZW58bnVsbCB7XG4gICAgaWYgKHRoaXMuYXNzZXJ0Q29uZGl0aW9uKFxuICAgICAgICAgICAgaXNTdHJpbmdTdGFydCh0aGlzLnBlZWssIHRoaXMucGVla1BlZWspLCAnVW5leHBlY3RlZCBub24tc3RyaW5nIHN0YXJ0aW5nIHZhbHVlJykpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHRhcmdldCA9IHRoaXMucGVlaztcbiAgICBjb25zdCBzdGFydCA9IHRoaXMuaW5kZXg7XG4gICAgY29uc3Qgc3RhcnRpbmdDb2x1bW4gPSB0aGlzLmNvbHVtbjtcbiAgICBjb25zdCBzdGFydGluZ0xpbmUgPSB0aGlzLmxpbmU7XG4gICAgbGV0IHByZXZpb3VzID0gdGFyZ2V0O1xuICAgIHRoaXMuYWR2YW5jZSgpO1xuXG4gICAgd2hpbGUgKCFpc0NoYXJNYXRjaCh0YXJnZXQsIHByZXZpb3VzLCB0aGlzLnBlZWspKSB7XG4gICAgICBpZiAodGhpcy5wZWVrID09IGNoYXJzLiRFT0YgfHwgaXNOZXdsaW5lKHRoaXMucGVlaykpIHtcbiAgICAgICAgdGhpcy5lcnJvcignVW50ZXJtaW5hdGVkIHF1b3RlJyk7XG4gICAgICB9XG4gICAgICBwcmV2aW91cyA9IHRoaXMucGVlaztcbiAgICAgIHRoaXMuYWR2YW5jZSgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmFzc2VydENvbmRpdGlvbih0aGlzLnBlZWsgPT0gdGFyZ2V0LCAnVW50ZXJtaW5hdGVkIHF1b3RlJykpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICB0aGlzLmFkdmFuY2UoKTtcblxuICAgIGNvbnN0IHN0ciA9IHRoaXMuaW5wdXQuc3Vic3RyaW5nKHN0YXJ0LCB0aGlzLmluZGV4KTtcbiAgICByZXR1cm4gbmV3IENzc1Rva2VuKHN0YXJ0LCBzdGFydGluZ0NvbHVtbiwgc3RhcnRpbmdMaW5lLCBDc3NUb2tlblR5cGUuU3RyaW5nLCBzdHIpO1xuICB9XG5cbiAgc2Nhbk51bWJlcigpOiBDc3NUb2tlbiB7XG4gICAgY29uc3Qgc3RhcnQgPSB0aGlzLmluZGV4O1xuICAgIGNvbnN0IHN0YXJ0aW5nQ29sdW1uID0gdGhpcy5jb2x1bW47XG4gICAgaWYgKHRoaXMucGVlayA9PSBjaGFycy4kUExVUyB8fCB0aGlzLnBlZWsgPT0gY2hhcnMuJE1JTlVTKSB7XG4gICAgICB0aGlzLmFkdmFuY2UoKTtcbiAgICB9XG4gICAgbGV0IHBlcmlvZFVzZWQgPSBmYWxzZTtcbiAgICB3aGlsZSAoY2hhcnMuaXNEaWdpdCh0aGlzLnBlZWspIHx8IHRoaXMucGVlayA9PSBjaGFycy4kUEVSSU9EKSB7XG4gICAgICBpZiAodGhpcy5wZWVrID09IGNoYXJzLiRQRVJJT0QpIHtcbiAgICAgICAgaWYgKHBlcmlvZFVzZWQpIHtcbiAgICAgICAgICB0aGlzLmVycm9yKCdVbmV4cGVjdGVkIHVzZSBvZiBhIHNlY29uZCBwZXJpb2QgdmFsdWUnKTtcbiAgICAgICAgfVxuICAgICAgICBwZXJpb2RVc2VkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHRoaXMuYWR2YW5jZSgpO1xuICAgIH1cbiAgICBjb25zdCBzdHJWYWx1ZSA9IHRoaXMuaW5wdXQuc3Vic3RyaW5nKHN0YXJ0LCB0aGlzLmluZGV4KTtcbiAgICByZXR1cm4gbmV3IENzc1Rva2VuKHN0YXJ0LCBzdGFydGluZ0NvbHVtbiwgdGhpcy5saW5lLCBDc3NUb2tlblR5cGUuTnVtYmVyLCBzdHJWYWx1ZSk7XG4gIH1cblxuICBzY2FuSWRlbnRpZmllcigpOiBDc3NUb2tlbnxudWxsIHtcbiAgICBpZiAodGhpcy5hc3NlcnRDb25kaXRpb24oXG4gICAgICAgICAgICBpc0lkZW50aWZpZXJTdGFydCh0aGlzLnBlZWssIHRoaXMucGVla1BlZWspLCAnRXhwZWN0ZWQgaWRlbnRpZmllciBzdGFydGluZyB2YWx1ZScpKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBzdGFydCA9IHRoaXMuaW5kZXg7XG4gICAgY29uc3Qgc3RhcnRpbmdDb2x1bW4gPSB0aGlzLmNvbHVtbjtcbiAgICB3aGlsZSAoaXNJZGVudGlmaWVyUGFydCh0aGlzLnBlZWspKSB7XG4gICAgICB0aGlzLmFkdmFuY2UoKTtcbiAgICB9XG4gICAgY29uc3Qgc3RyVmFsdWUgPSB0aGlzLmlucHV0LnN1YnN0cmluZyhzdGFydCwgdGhpcy5pbmRleCk7XG4gICAgcmV0dXJuIG5ldyBDc3NUb2tlbihzdGFydCwgc3RhcnRpbmdDb2x1bW4sIHRoaXMubGluZSwgQ3NzVG9rZW5UeXBlLklkZW50aWZpZXIsIHN0clZhbHVlKTtcbiAgfVxuXG4gIHNjYW5Dc3NWYWx1ZUZ1bmN0aW9uKCk6IENzc1Rva2VuIHtcbiAgICBjb25zdCBzdGFydCA9IHRoaXMuaW5kZXg7XG4gICAgY29uc3Qgc3RhcnRpbmdDb2x1bW4gPSB0aGlzLmNvbHVtbjtcbiAgICBsZXQgcGFyZW5CYWxhbmNlID0gMTtcbiAgICB3aGlsZSAodGhpcy5wZWVrICE9IGNoYXJzLiRFT0YgJiYgcGFyZW5CYWxhbmNlID4gMCkge1xuICAgICAgdGhpcy5hZHZhbmNlKCk7XG4gICAgICBpZiAodGhpcy5wZWVrID09IGNoYXJzLiRMUEFSRU4pIHtcbiAgICAgICAgcGFyZW5CYWxhbmNlKys7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMucGVlayA9PSBjaGFycy4kUlBBUkVOKSB7XG4gICAgICAgIHBhcmVuQmFsYW5jZS0tO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBzdHJWYWx1ZSA9IHRoaXMuaW5wdXQuc3Vic3RyaW5nKHN0YXJ0LCB0aGlzLmluZGV4KTtcbiAgICByZXR1cm4gbmV3IENzc1Rva2VuKHN0YXJ0LCBzdGFydGluZ0NvbHVtbiwgdGhpcy5saW5lLCBDc3NUb2tlblR5cGUuSWRlbnRpZmllciwgc3RyVmFsdWUpO1xuICB9XG5cbiAgc2NhbkNoYXJhY3RlcigpOiBDc3NUb2tlbnxudWxsIHtcbiAgICBjb25zdCBzdGFydCA9IHRoaXMuaW5kZXg7XG4gICAgY29uc3Qgc3RhcnRpbmdDb2x1bW4gPSB0aGlzLmNvbHVtbjtcbiAgICBpZiAodGhpcy5hc3NlcnRDb25kaXRpb24oXG4gICAgICAgICAgICBpc1ZhbGlkQ3NzQ2hhcmFjdGVyKHRoaXMucGVlaywgdGhpcy5fY3VycmVudE1vZGUpLFxuICAgICAgICAgICAgY2hhclN0cih0aGlzLnBlZWspICsgJyBpcyBub3QgYSB2YWxpZCBDU1MgY2hhcmFjdGVyJykpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IGMgPSB0aGlzLmlucHV0LnN1YnN0cmluZyhzdGFydCwgc3RhcnQgKyAxKTtcbiAgICB0aGlzLmFkdmFuY2UoKTtcblxuICAgIHJldHVybiBuZXcgQ3NzVG9rZW4oc3RhcnQsIHN0YXJ0aW5nQ29sdW1uLCB0aGlzLmxpbmUsIENzc1Rva2VuVHlwZS5DaGFyYWN0ZXIsIGMpO1xuICB9XG5cbiAgc2NhbkF0RXhwcmVzc2lvbigpOiBDc3NUb2tlbnxudWxsIHtcbiAgICBpZiAodGhpcy5hc3NlcnRDb25kaXRpb24odGhpcy5wZWVrID09IGNoYXJzLiRBVCwgJ0V4cGVjdGVkIEAgdmFsdWUnKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3Qgc3RhcnQgPSB0aGlzLmluZGV4O1xuICAgIGNvbnN0IHN0YXJ0aW5nQ29sdW1uID0gdGhpcy5jb2x1bW47XG4gICAgdGhpcy5hZHZhbmNlKCk7XG4gICAgaWYgKGlzSWRlbnRpZmllclN0YXJ0KHRoaXMucGVlaywgdGhpcy5wZWVrUGVlaykpIHtcbiAgICAgIGNvbnN0IGlkZW50ID0gdGhpcy5zY2FuSWRlbnRpZmllcigpITtcbiAgICAgIGNvbnN0IHN0clZhbHVlID0gJ0AnICsgaWRlbnQuc3RyVmFsdWU7XG4gICAgICByZXR1cm4gbmV3IENzc1Rva2VuKHN0YXJ0LCBzdGFydGluZ0NvbHVtbiwgdGhpcy5saW5lLCBDc3NUb2tlblR5cGUuQXRLZXl3b3JkLCBzdHJWYWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLnNjYW5DaGFyYWN0ZXIoKTtcbiAgICB9XG4gIH1cblxuICBhc3NlcnRDb25kaXRpb24oc3RhdHVzOiBib29sZWFuLCBlcnJvck1lc3NhZ2U6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghc3RhdHVzKSB7XG4gICAgICB0aGlzLmVycm9yKGVycm9yTWVzc2FnZSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZXJyb3IobWVzc2FnZTogc3RyaW5nLCBlcnJvclRva2VuVmFsdWU6IHN0cmluZ3xudWxsID0gbnVsbCwgZG9Ob3RBZHZhbmNlOiBib29sZWFuID0gZmFsc2UpOlxuICAgICAgQ3NzVG9rZW4ge1xuICAgIGNvbnN0IGluZGV4OiBudW1iZXIgPSB0aGlzLmluZGV4O1xuICAgIGNvbnN0IGNvbHVtbjogbnVtYmVyID0gdGhpcy5jb2x1bW47XG4gICAgY29uc3QgbGluZTogbnVtYmVyID0gdGhpcy5saW5lO1xuICAgIGVycm9yVG9rZW5WYWx1ZSA9IGVycm9yVG9rZW5WYWx1ZSB8fCBTdHJpbmcuZnJvbUNoYXJDb2RlKHRoaXMucGVlayk7XG4gICAgY29uc3QgaW52YWxpZFRva2VuID0gbmV3IENzc1Rva2VuKGluZGV4LCBjb2x1bW4sIGxpbmUsIENzc1Rva2VuVHlwZS5JbnZhbGlkLCBlcnJvclRva2VuVmFsdWUpO1xuICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9XG4gICAgICAgIGdlbmVyYXRlRXJyb3JNZXNzYWdlKHRoaXMuaW5wdXQsIG1lc3NhZ2UsIGVycm9yVG9rZW5WYWx1ZSwgaW5kZXgsIGxpbmUsIGNvbHVtbik7XG4gICAgaWYgKCFkb05vdEFkdmFuY2UpIHtcbiAgICAgIHRoaXMuYWR2YW5jZSgpO1xuICAgIH1cbiAgICB0aGlzLl9jdXJyZW50RXJyb3IgPSBjc3NTY2FubmVyRXJyb3IoaW52YWxpZFRva2VuLCBlcnJvck1lc3NhZ2UpO1xuICAgIHJldHVybiBpbnZhbGlkVG9rZW47XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNDaGFyTWF0Y2godGFyZ2V0OiBudW1iZXIsIHByZXZpb3VzOiBudW1iZXIsIGNvZGU6IG51bWJlcik6IGJvb2xlYW4ge1xuICByZXR1cm4gY29kZSA9PSB0YXJnZXQgJiYgcHJldmlvdXMgIT0gY2hhcnMuJEJBQ0tTTEFTSDtcbn1cblxuZnVuY3Rpb24gaXNDb21tZW50U3RhcnQoY29kZTogbnVtYmVyLCBuZXh0OiBudW1iZXIpOiBib29sZWFuIHtcbiAgcmV0dXJuIGNvZGUgPT0gY2hhcnMuJFNMQVNIICYmIG5leHQgPT0gY2hhcnMuJFNUQVI7XG59XG5cbmZ1bmN0aW9uIGlzQ29tbWVudEVuZChjb2RlOiBudW1iZXIsIG5leHQ6IG51bWJlcik6IGJvb2xlYW4ge1xuICByZXR1cm4gY29kZSA9PSBjaGFycy4kU1RBUiAmJiBuZXh0ID09IGNoYXJzLiRTTEFTSDtcbn1cblxuZnVuY3Rpb24gaXNTdHJpbmdTdGFydChjb2RlOiBudW1iZXIsIG5leHQ6IG51bWJlcik6IGJvb2xlYW4ge1xuICBsZXQgdGFyZ2V0ID0gY29kZTtcbiAgaWYgKHRhcmdldCA9PSBjaGFycy4kQkFDS1NMQVNIKSB7XG4gICAgdGFyZ2V0ID0gbmV4dDtcbiAgfVxuICByZXR1cm4gdGFyZ2V0ID09IGNoYXJzLiREUSB8fCB0YXJnZXQgPT0gY2hhcnMuJFNRO1xufVxuXG5mdW5jdGlvbiBpc0lkZW50aWZpZXJTdGFydChjb2RlOiBudW1iZXIsIG5leHQ6IG51bWJlcik6IGJvb2xlYW4ge1xuICBsZXQgdGFyZ2V0ID0gY29kZTtcbiAgaWYgKHRhcmdldCA9PSBjaGFycy4kTUlOVVMpIHtcbiAgICB0YXJnZXQgPSBuZXh0O1xuICB9XG5cbiAgcmV0dXJuIGNoYXJzLmlzQXNjaWlMZXR0ZXIodGFyZ2V0KSB8fCB0YXJnZXQgPT0gY2hhcnMuJEJBQ0tTTEFTSCB8fCB0YXJnZXQgPT0gY2hhcnMuJE1JTlVTIHx8XG4gICAgICB0YXJnZXQgPT0gY2hhcnMuJF87XG59XG5cbmZ1bmN0aW9uIGlzSWRlbnRpZmllclBhcnQodGFyZ2V0OiBudW1iZXIpOiBib29sZWFuIHtcbiAgcmV0dXJuIGNoYXJzLmlzQXNjaWlMZXR0ZXIodGFyZ2V0KSB8fCB0YXJnZXQgPT0gY2hhcnMuJEJBQ0tTTEFTSCB8fCB0YXJnZXQgPT0gY2hhcnMuJE1JTlVTIHx8XG4gICAgICB0YXJnZXQgPT0gY2hhcnMuJF8gfHwgY2hhcnMuaXNEaWdpdCh0YXJnZXQpO1xufVxuXG5mdW5jdGlvbiBpc1ZhbGlkUHNldWRvU2VsZWN0b3JDaGFyYWN0ZXIoY29kZTogbnVtYmVyKTogYm9vbGVhbiB7XG4gIHN3aXRjaCAoY29kZSkge1xuICAgIGNhc2UgY2hhcnMuJExQQVJFTjpcbiAgICBjYXNlIGNoYXJzLiRSUEFSRU46XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzVmFsaWRLZXlmcmFtZUJsb2NrQ2hhcmFjdGVyKGNvZGU6IG51bWJlcik6IGJvb2xlYW4ge1xuICByZXR1cm4gY29kZSA9PSBjaGFycy4kUEVSQ0VOVDtcbn1cblxuZnVuY3Rpb24gaXNWYWxpZEF0dHJpYnV0ZVNlbGVjdG9yQ2hhcmFjdGVyKGNvZGU6IG51bWJlcik6IGJvb2xlYW4ge1xuICAvLyB2YWx1ZV4qfCR+PXNvbWV0aGluZ1xuICBzd2l0Y2ggKGNvZGUpIHtcbiAgICBjYXNlIGNoYXJzLiQkOlxuICAgIGNhc2UgY2hhcnMuJFBJUEU6XG4gICAgY2FzZSBjaGFycy4kQ0FSRVQ6XG4gICAgY2FzZSBjaGFycy4kVElMREE6XG4gICAgY2FzZSBjaGFycy4kU1RBUjpcbiAgICBjYXNlIGNoYXJzLiRFUTpcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNWYWxpZFNlbGVjdG9yQ2hhcmFjdGVyKGNvZGU6IG51bWJlcik6IGJvb2xlYW4ge1xuICAvLyBzZWxlY3RvciBbIGtleSAgID0gdmFsdWUgXVxuICAvLyBJREVOVCAgICBDIElERU5UIEMgSURFTlQgQ1xuICAvLyAjaWQsIC5jbGFzcywgKit+PlxuICAvLyB0YWc6UFNFVURPXG4gIHN3aXRjaCAoY29kZSkge1xuICAgIGNhc2UgY2hhcnMuJEhBU0g6XG4gICAgY2FzZSBjaGFycy4kUEVSSU9EOlxuICAgIGNhc2UgY2hhcnMuJFRJTERBOlxuICAgIGNhc2UgY2hhcnMuJFNUQVI6XG4gICAgY2FzZSBjaGFycy4kUExVUzpcbiAgICBjYXNlIGNoYXJzLiRHVDpcbiAgICBjYXNlIGNoYXJzLiRDT0xPTjpcbiAgICBjYXNlIGNoYXJzLiRQSVBFOlxuICAgIGNhc2UgY2hhcnMuJENPTU1BOlxuICAgIGNhc2UgY2hhcnMuJExCUkFDS0VUOlxuICAgIGNhc2UgY2hhcnMuJFJCUkFDS0VUOlxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc1ZhbGlkU3R5bGVCbG9ja0NoYXJhY3Rlcihjb2RlOiBudW1iZXIpOiBib29sZWFuIHtcbiAgLy8ga2V5OnZhbHVlO1xuICAvLyBrZXk6Y2FsYyhzb21ldGhpbmcgLi4uIClcbiAgc3dpdGNoIChjb2RlKSB7XG4gICAgY2FzZSBjaGFycy4kSEFTSDpcbiAgICBjYXNlIGNoYXJzLiRTRU1JQ09MT046XG4gICAgY2FzZSBjaGFycy4kQ09MT046XG4gICAgY2FzZSBjaGFycy4kUEVSQ0VOVDpcbiAgICBjYXNlIGNoYXJzLiRTTEFTSDpcbiAgICBjYXNlIGNoYXJzLiRCQUNLU0xBU0g6XG4gICAgY2FzZSBjaGFycy4kQkFORzpcbiAgICBjYXNlIGNoYXJzLiRQRVJJT0Q6XG4gICAgY2FzZSBjaGFycy4kTFBBUkVOOlxuICAgIGNhc2UgY2hhcnMuJFJQQVJFTjpcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNWYWxpZE1lZGlhUXVlcnlSdWxlQ2hhcmFjdGVyKGNvZGU6IG51bWJlcik6IGJvb2xlYW4ge1xuICAvLyAobWluLXdpZHRoOiA3LjVlbSkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKVxuICBzd2l0Y2ggKGNvZGUpIHtcbiAgICBjYXNlIGNoYXJzLiRMUEFSRU46XG4gICAgY2FzZSBjaGFycy4kUlBBUkVOOlxuICAgIGNhc2UgY2hhcnMuJENPTE9OOlxuICAgIGNhc2UgY2hhcnMuJFBFUkNFTlQ6XG4gICAgY2FzZSBjaGFycy4kUEVSSU9EOlxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc1ZhbGlkQXRSdWxlQ2hhcmFjdGVyKGNvZGU6IG51bWJlcik6IGJvb2xlYW4ge1xuICAvLyBAZG9jdW1lbnQgdXJsKGh0dHA6Ly93d3cudzMub3JnL3BhZ2U/c29tZXRoaW5nPW9uI2hhc2gpLFxuICBzd2l0Y2ggKGNvZGUpIHtcbiAgICBjYXNlIGNoYXJzLiRMUEFSRU46XG4gICAgY2FzZSBjaGFycy4kUlBBUkVOOlxuICAgIGNhc2UgY2hhcnMuJENPTE9OOlxuICAgIGNhc2UgY2hhcnMuJFBFUkNFTlQ6XG4gICAgY2FzZSBjaGFycy4kUEVSSU9EOlxuICAgIGNhc2UgY2hhcnMuJFNMQVNIOlxuICAgIGNhc2UgY2hhcnMuJEJBQ0tTTEFTSDpcbiAgICBjYXNlIGNoYXJzLiRIQVNIOlxuICAgIGNhc2UgY2hhcnMuJEVROlxuICAgIGNhc2UgY2hhcnMuJFFVRVNUSU9OOlxuICAgIGNhc2UgY2hhcnMuJEFNUEVSU0FORDpcbiAgICBjYXNlIGNoYXJzLiRTVEFSOlxuICAgIGNhc2UgY2hhcnMuJENPTU1BOlxuICAgIGNhc2UgY2hhcnMuJE1JTlVTOlxuICAgIGNhc2UgY2hhcnMuJFBMVVM6XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzVmFsaWRTdHlsZUZ1bmN0aW9uQ2hhcmFjdGVyKGNvZGU6IG51bWJlcik6IGJvb2xlYW4ge1xuICBzd2l0Y2ggKGNvZGUpIHtcbiAgICBjYXNlIGNoYXJzLiRQRVJJT0Q6XG4gICAgY2FzZSBjaGFycy4kTUlOVVM6XG4gICAgY2FzZSBjaGFycy4kUExVUzpcbiAgICBjYXNlIGNoYXJzLiRTVEFSOlxuICAgIGNhc2UgY2hhcnMuJFNMQVNIOlxuICAgIGNhc2UgY2hhcnMuJExQQVJFTjpcbiAgICBjYXNlIGNoYXJzLiRSUEFSRU46XG4gICAgY2FzZSBjaGFycy4kQ09NTUE6XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzVmFsaWRCbG9ja0NoYXJhY3Rlcihjb2RlOiBudW1iZXIpOiBib29sZWFuIHtcbiAgLy8gQHNvbWV0aGluZyB7IH1cbiAgLy8gSURFTlRcbiAgcmV0dXJuIGNvZGUgPT0gY2hhcnMuJEFUO1xufVxuXG5mdW5jdGlvbiBpc1ZhbGlkQ3NzQ2hhcmFjdGVyKGNvZGU6IG51bWJlciwgbW9kZTogQ3NzTGV4ZXJNb2RlKTogYm9vbGVhbiB7XG4gIHN3aXRjaCAobW9kZSkge1xuICAgIGNhc2UgQ3NzTGV4ZXJNb2RlLkFMTDpcbiAgICBjYXNlIENzc0xleGVyTW9kZS5BTExfVFJBQ0tfV1M6XG4gICAgICByZXR1cm4gdHJ1ZTtcblxuICAgIGNhc2UgQ3NzTGV4ZXJNb2RlLlNFTEVDVE9SOlxuICAgICAgcmV0dXJuIGlzVmFsaWRTZWxlY3RvckNoYXJhY3Rlcihjb2RlKTtcblxuICAgIGNhc2UgQ3NzTGV4ZXJNb2RlLlBTRVVET19TRUxFQ1RPUl9XSVRIX0FSR1VNRU5UUzpcbiAgICAgIHJldHVybiBpc1ZhbGlkUHNldWRvU2VsZWN0b3JDaGFyYWN0ZXIoY29kZSk7XG5cbiAgICBjYXNlIENzc0xleGVyTW9kZS5BVFRSSUJVVEVfU0VMRUNUT1I6XG4gICAgICByZXR1cm4gaXNWYWxpZEF0dHJpYnV0ZVNlbGVjdG9yQ2hhcmFjdGVyKGNvZGUpO1xuXG4gICAgY2FzZSBDc3NMZXhlck1vZGUuTUVESUFfUVVFUlk6XG4gICAgICByZXR1cm4gaXNWYWxpZE1lZGlhUXVlcnlSdWxlQ2hhcmFjdGVyKGNvZGUpO1xuXG4gICAgY2FzZSBDc3NMZXhlck1vZGUuQVRfUlVMRV9RVUVSWTpcbiAgICAgIHJldHVybiBpc1ZhbGlkQXRSdWxlQ2hhcmFjdGVyKGNvZGUpO1xuXG4gICAgY2FzZSBDc3NMZXhlck1vZGUuS0VZRlJBTUVfQkxPQ0s6XG4gICAgICByZXR1cm4gaXNWYWxpZEtleWZyYW1lQmxvY2tDaGFyYWN0ZXIoY29kZSk7XG5cbiAgICBjYXNlIENzc0xleGVyTW9kZS5TVFlMRV9CTE9DSzpcbiAgICBjYXNlIENzc0xleGVyTW9kZS5TVFlMRV9WQUxVRTpcbiAgICAgIHJldHVybiBpc1ZhbGlkU3R5bGVCbG9ja0NoYXJhY3Rlcihjb2RlKTtcblxuICAgIGNhc2UgQ3NzTGV4ZXJNb2RlLlNUWUxFX0NBTENfRlVOQ1RJT046XG4gICAgICByZXR1cm4gaXNWYWxpZFN0eWxlRnVuY3Rpb25DaGFyYWN0ZXIoY29kZSk7XG5cbiAgICBjYXNlIENzc0xleGVyTW9kZS5CTE9DSzpcbiAgICAgIHJldHVybiBpc1ZhbGlkQmxvY2tDaGFyYWN0ZXIoY29kZSk7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNoYXJDb2RlKGlucHV0OiBzdHJpbmcsIGluZGV4OiBudW1iZXIpOiBudW1iZXIge1xuICByZXR1cm4gaW5kZXggPj0gaW5wdXQubGVuZ3RoID8gY2hhcnMuJEVPRiA6IGlucHV0LmNoYXJDb2RlQXQoaW5kZXgpO1xufVxuXG5mdW5jdGlvbiBjaGFyU3RyKGNvZGU6IG51bWJlcik6IHN0cmluZyB7XG4gIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKGNvZGUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNOZXdsaW5lKGNvZGU6IG51bWJlcik6IGJvb2xlYW4ge1xuICBzd2l0Y2ggKGNvZGUpIHtcbiAgICBjYXNlIGNoYXJzLiRGRjpcbiAgICBjYXNlIGNoYXJzLiRDUjpcbiAgICBjYXNlIGNoYXJzLiRMRjpcbiAgICBjYXNlIGNoYXJzLiRWVEFCOlxuICAgICAgcmV0dXJuIHRydWU7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4iXX0=